import {Component, OnInit} from '@angular/core';
import {BeService} from '../../../../be.service';
import {PricingHelperService} from '../../pricing-helper.service';

@Component({
    selector: 'app-pricing-subscription-plans',
    templateUrl: './pricing-subscription-plans.component.html',
    styleUrls: ['./pricing-subscription-plans.component.scss']
})
export class PricingSubscriptionPlansComponent implements OnInit {

    public billingProfile: any;
    public selectedPlan: any;
    public subscriptionPlans: any;
    public mainUser: any;

    public permissions = {
        canSignup: () => {
            return (this.billingProfile !== undefined && !this.billingProfile);
        }
    };

    constructor(private $beService: BeService, private $pricingHelperService: PricingHelperService) {
    }

    getSubscriptionPlans(): void {
        this.$beService.getAppSettings().subscribe(settings => {
            this.subscriptionPlans = settings.subscriptions;
            this.subscriptionPlans.forEach(plan => {
                plan.details = this.$pricingHelperService.getPlanDetails(plan);

                if (this.billingProfile) {
                    if (Math.floor(this.billingProfile.last_subscription_product / 2) === plan.id) {
                        plan.selected = true;
                        this.selectedPlan = plan;
                        plan.buttonText = 'Extend ' + plan.name.replace('Business', '');
                    }

                    if (Math.floor(this.billingProfile.last_subscription_product / 2) < plan.id) {
                        plan.buttonText = 'Upgrade to ' + plan.name.replace('Business', '');
                    }

                    if (Math.floor(this.billingProfile.last_subscription_product / 2) > plan.id) {
                        plan.buttonText = 'Downgrade to ' + plan.name.replace('Business', '');
                    }

                }
            });
        });
    }

    selectPlan(plan: any): void {
        document.location.href = '/account.html#/upgrade/subscription/?type=' + plan.id;
    }

    ngOnInit(): void {
        this.$beService.getBillingProfile().subscribe(result => {
            this.billingProfile = result;
        }, () => {
            this.billingProfile = null;
        });

        this.getSubscriptionPlans();
    }
}
