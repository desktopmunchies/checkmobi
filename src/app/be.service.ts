import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {AppHelperService} from './app-helper.service';

@Injectable({
    providedIn: 'root'
})
export class BeService {

    private apiUrl = `${environment.apiHost}api/v1/`;

    public userExists: boolean;
    public appSettings: any;
    public countries: any;
    public billingProfile: any;

    constructor(private $http: HttpClient, private $appHelperService: AppHelperService) {
    }

    getApiUrl(): string {
        return this.apiUrl;
    }

    checkUser(): Observable<any> {
        if (this.userExists !== undefined) {
            return of(this.userExists);
        }

        return this.$http
            .get(`${this.apiUrl}account`).pipe(
                map(response => {
                    this.userExists = true;
                    return this.userExists;
                }),
                catchError((err) => {
                    this.userExists = false;
                    return of(this.userExists);
                })
            );
    }

    sendFooterQuestion(question: any): Observable<any> {
        return this.$http
            .post(`${this.apiUrl}contactus`, question);
    }

    getBillingProfile(): Observable<any> {
        if (this.billingProfile !== undefined) {
            return of(this.billingProfile);
        }

        return this.$http
            .get(`${this.apiUrl}transactions/billingprofile`).pipe(
                map(response => {
                    this.billingProfile = response;
                    return this.billingProfile;
                }),
                catchError((err) => {
                    this.billingProfile = null;
                    return of(this.billingProfile);
                })
            );
    }

    getAppSettings(): Observable<any> {
        if (this.appSettings !== undefined) {
            return of(this.appSettings);
        }

        return this.$http
            .get(`${this.apiUrl}server/settings`).pipe(
                map(response => {
                    this.appSettings = response;
                    this.$appHelperService.initAppSettings(response);
                    return this.appSettings;
                }),
                catchError((err) => {
                    this.appSettings = null;
                    return of(this.appSettings);
                })
            );
    }

    getCountries(): Observable<any> {
        if (this.countries !== undefined) {
            return of(this.countries);
        }

        return this.$http
            .get(`${this.apiUrl}countries`).pipe(
                map(response => {
                    this.countries = response;
                    return this.countries;
                }),
                catchError((err) => {
                    this.countries = null;
                    return of(this.countries);
                })
            );
    }

    getCountryRates(iso2: string): Observable<any> {
        return this.$http
            .get(`${this.apiUrl}rates2/${iso2}`);
    }
}
