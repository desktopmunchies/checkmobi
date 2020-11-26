import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BeService} from '../../../../be.service';
import {ICountry} from '../../../../interfaces';
import {FormControl} from '@angular/forms';
import {AppHelperService} from '../../../../app-helper.service';

declare var $: any;

@Component({
    selector: 'app-pricing-rates',
    templateUrl: './pricing-rates.component.html',
    styleUrls: ['./pricing-rates.component.scss']
})
export class PricingRatesComponent implements OnInit {
    private countries: ICountry[];

    public userExists: boolean;
    public billingProfile: any;
    public searchedCountries: ICountry[];
    public country: ICountry;

    public rates: any;
    private _carriers: any;
    public carriers: any;

    public searchField: FormControl;
    public countryFilter: string;
    @ViewChild('search') searchElement: ElementRef;

    public permissions = {
        canSignup: () => {
            return (this.billingProfile !== undefined && !this.billingProfile);
        },
        smsServiceAvailable: (carrier) => {
            return carrier && carrier.rates && carrier.rates.sms_max_rate && carrier.rates.sms_min_rate;
        },
        callServiceAvailable: (carrier) => {
            return carrier && carrier.rates && carrier.rates.call_max_rate && carrier.rates.call_min_rate;
        },
        callRates: (carrier) => {
            return carrier && carrier.rates && carrier.rates.call_rates;
        }
    };

    constructor(private $beService: BeService, private $appHelperService: AppHelperService) {
    }

    ngOnInit(): void {

        // check user logged in
        this.$beService.checkUser().subscribe(response => {
            this.userExists = response;
        });

        // get app settings
        this.$beService.getAppSettings().subscribe(settings => {
            this._carriers = this.$appHelperService.getCarriers();
        });

        // get billing profile
        this.$beService.getBillingProfile().subscribe(result => {
            this.billingProfile = result;
        }, () => {
            this.billingProfile = null;
        });

        // get countries
        this.$beService.getCountries().subscribe(results => {
            this.countries = results;
            this.searchCountries();

            this.country = this.countries.filter(item => item.iso2 === 'US')[0];
            this.getCountryRates();
        });

        // init search field
        this.searchField = new FormControl(this.countryFilter);
        this.searchField.valueChanges.subscribe(value => {
            this.searchCountries(value);
        });
    }

    searchCountries(search?: any): any {
        this.searchedCountries = (search) ? this.countries.filter(item => item.name.toLowerCase().search(search.toLowerCase()) >= 0)
            : this.countries;
    }

    selectCountry(_county: ICountry): void {
        this.country = _county;
        this.getCountryRates();
    }

    getCountryRates(): void {
        this.$beService.getCountryRates(this.country.iso2).subscribe(results => {
            this.rates = results;
            this.carriers = {...this._carriers};
            Object.keys(this._carriers).forEach(key => {
                this.carriers[key].rates = null;
            });

            results.rates.forEach(rate => {
                this.carriers[rate.provider_id].rates = rate;
            });

            this.carriers = Object.values(this.carriers);
        });
    }

    downloadRatesUrl(type: string, carrier: number): string {
        return `${this.$beService.getApiUrl()}rates/${type}/${carrier}`;
    }
}
