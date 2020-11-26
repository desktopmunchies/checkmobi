import {Injectable} from '@angular/core';

const PLAN_DETAILS = {
    1: (subscription) => {
        return [
            {
                text: ((subscription && subscription.limit === 0) ? '<strong>Unlimited&nbsp;</strong>' : (subscription && subscription.limit))
                    + ' successful Missed Call verifications <strong>per month</strong>'
            },
            {
                text: '$' + (subscription && subscription.prices && subscription.prices.month) + ' Bonus credit (one-time only on your 1st purchase)'
            },
            {
                text: 'Technical support on weekdays',
                default: true
            },
            {
                text: 'Real-time analytics',
                default: true
            },
            {
                text: 'Access to CheckMobi platform features: Voice API, Messaging API &amp; Multiple Carrier Support',
                default: true
            },
            {
                text: 'Access to SMS, Voice, Missed Call verifications',
                default: true
            },
            {
                text: 'CheckMobi AntiFraud to prevent SMS and calling fraud',
                default: true
            }
        ];
    },
    2: (subscription) => {
        return [
            {
                text: ((subscription && subscription.limit === 0) ? '<strong>Unlimited&nbsp;</strong>' : (subscription && subscription.limit))
                    + ' successful Missed Call verifications <strong>per month</strong>'
            },
            {
                text: '$' + (subscription && subscription.prices && subscription.prices.month) + ' Bonus credit (one-time only on your 1st purchase)'
            },
            {
                text: '24/7 Support',
                default: true
            },
            {
                text: '<strong>Plus everything else from Startup subscription</strong>',
                remove_when_all: true
            },
        ];
    },
    3: (subscription) => {
        return [
            {
                text: ((subscription && subscription.limit === 0) ? '<strong>Unlimited&nbsp;</strong>' : (subscription && subscription.limit))
                    + `Missed Call verifications <i data-toggle="tooltip" data-placement="top" title="Unlimited subscription is subject ' +
                    to a fair usage policy and can be restricted to a number of calls per minute based on our
                    traffic and platform status. High volume traffic should be announced in advance. For more
                    info on our fair usage policy, kindly contact sales[@]checkmobi.com" class="fas fa-info-circle"></i>`,
            },
            {
                text: '$' + (subscription && subscription.prices && subscription.prices.month) + ' Bonus credit (one-time only on your 1st purchase)'
            },
            {
                text: '<strong>Plus everything else from Growing subscription</strong>',
                remove_when_all: true
            },
        ];
    }
};

@Injectable()
export class PricingHelperService {

    constructor() {
    }

    getPlanDetails(plan: any, getAll: boolean = false): void {
        if (!getAll) {
            return PLAN_DETAILS[plan.id](plan);
        }

        const details = PLAN_DETAILS[plan.id](plan);
        if (details[details.length - 1].remove_when_all) {
            details.pop();
        }

        for (let i in PLAN_DETAILS) {
            if (i !== plan.id) {
                const _det = PLAN_DETAILS[i]();
                for (let j = 0; j < _det.length; j++) {
                    if (_det[j].default) {
                        details.push(_det[j]);
                    }
                }
            }
        }

        return details;
    }
}
