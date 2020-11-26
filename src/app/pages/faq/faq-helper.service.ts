import {Injectable} from '@angular/core';

@Injectable()

export class FaqQuestion {
    public id: string;
    public open: boolean = false;
    public title: string;
    public text: string;

    public template: any;


    constructor(title: string, text: string, template?) {
        this.title = title;
        this.text = text;
        this.template = template;
        this.id = encodeURIComponent(this.title);
    }

    toggle(value): void {
        this.open = (value !== undefined) ? value : !this.open;
    }
}

const sections = [
    {
        title: 'Calling & Voice API',
        questions: [
            new FaqQuestion(`What is your Call IVR coverage?`,
                `Our Call IVR service works world-wide. For more info on coverage and rates check our
                <a target="_blank" [routerLink]="['/pricing']" class="link">pricing section</a>.`),
            new FaqQuestion('Do you support "per second" charging?',
                `We don't support "per second" charging. We only support per minute charging.`)
        ]
    },
    {
        title: 'Missed Call',
        questions: [
            new FaqQuestion('Can I implement just reverse CLI using your sdk?', null, `<app-faq-implement-cli></app-faq-implement-cli>`),
            // new FaqQuestion('What is the correct way to implement Missed Call verification?', null, ``),
            new FaqQuestion('How does Missed Call verification work?', null, `<app-faq-missed-call></app-faq-missed-call>`),
            new FaqQuestion('Why do I get "Insufficient funds" when trying "Missed Call" if verification is free?', null, `<app-faq-insuficient-funds></app-faq-insuficient-funds>`),
            new FaqQuestion('Does the call come from the same number or random numbers?', 'Call comes from random numbers. We have many numbers that we change periodically.'),
            new FaqQuestion('What is your Missed Call coverage?',
                `Missed Call coverage is global. We can use missed call in all countries where we have ability to send a call. 
   To check if we support a certain country, see this link <a [routerLink]="['/pricing']" class="link" target="_blank">here</a>.`),
            new FaqQuestion('Missed Calls do not arrive on the device, what can be the problem?',
                'Make sure your user entered correctly his number. If this is the case, then it could be a problem ' +
                'of delay on the network side from us sending the call to reaching your user. This delay can have a ' +
                'few seconds.<br>There is a setting in "General Settings" section within your application called: ' +
                '"Missed Call ring time". This is the time it passes before we hangup the call, so your users ' +
                'don\'t have time to answer it. Try increasing it and see if calls reach your desired destination.'),
            new FaqQuestion('What are the situations when a Missed Call can be charged?', null, '<app-faq-missed-call-charging></app-faq-missed-call-charging>'),
            new FaqQuestion('Calls arrive with a wrong ID ? How can I fix this?', null, '<app-faq-missed-call-wrong-id></app-faq-missed-call-wrong-id>')
        ]
    },
    {
        title: 'Pricing',
        questions: [
            new FaqQuestion('Why do I need to pay subscription if I only need SMS verification?', null, '<app-faq-pricing-subscription></app-faq-pricing-subscription>'),
            new FaqQuestion('What payment methods do you support ?', 'We currently support credit card payments and prepaid wire transfer.'),
            new FaqQuestion('What does it mean you charge only for successful SMS ?', '' +
                'A successful message is an SMS that CheckMobi successfully delivers across to our carrier and ' +
                'they mange to send it forward. It can be a case where a message is successful in sending but ' +
                'undelivered because phone is closed or destination number is unreachable. If SMS is failing ' +
                'because of CheckMobi then you won\’t get charged.')
        ]
    },
    {
        title: 'Product',
        questions: [
            new FaqQuestion('Who is using CheckMobi?', null, '<app-faq-product-who></app-faq-product-who>'),
            new FaqQuestion('How can I try your service for free ?', 'Simple, just create an account and request trial ' +
                'credit to unlock all our product services. We will give you <strong>1$</strong> and <strong>200 Missed Call verifications</strong> ' +
                'to use.')
        ]
    },
    {
        title: 'SMS',
        questions: [
            new FaqQuestion('What is your SMS coverage?',
                'We have global coverage on SMS. To search if we support a certain country check ' +
                `<a target="_blank" class="link" [routerLink]="['/pricing']">here</a>.`),
            new FaqQuestion('Can I customize Sender ID?', 'We don\'t offer this option and with a good reason: ' +
                'Our SMS carriers put the best Sender ID to make sure it will pass all SMS blacklists and increase ' +
                'deliverability. By customizing it you risk of getting it blacklisted and decrease your chances of ' +
                'successful delivery'),
            new FaqQuestion('What is a successful SMS message?', 'A successful message is an SMS that CheckMobi ' +
                'successfully delivers across to our carrier and they manage to send it forward. It can be a case ' +
                'where a message is successful in sending but undelivered because phone is closed or destination ' +
                'number is unreachable. If SMS is failing because of CheckMobi then you won’t get charged.'),
            new FaqQuestion('Multiple Carrier Support', 'Multiple Carrier Support is a feature CheckMobi offers ' +
                'as part of SMS verification. What it basically means is that CheckMobi has multiple SMS ' +
                'providers, each with their own uptime and good SMS routes and own rates, that you can choose ' +
                'to set in round robin fashion or set as primary the best SMS provider in terms of cost and success ' +
                'rate on each country. It’s basically like integrating two companies such as CheckMobi to use as ' +
                'SMS verification. This feature highly increases chances of success and grants you full control on ' +
                'a country by country level.')
        ]
    },
    {
        title: 'Monitoring',
        questions: [
            new FaqQuestion('Does CheckMobi trigger monitor emails in case of errors? How does it work?',
                'You may receive alert emails from CheckMobi when there’s an error generated by an application ' +
                'that you are running.<br><br>' +
                'These alerts provide a way for you to get notifications on any potential issues with your ' +
                'application. By default CheckMobi has three triggers in place when an account is initially ' +
                'created: emails will be sent to the account owner when the 1st, 10th and 100th application ' +
                'error occurs each day.<br><br>' +
                'When you receive an email like this, check out the <a target="_blank" class="link" ' +
                'href="https://checkmobi.com/account.html#/logs">Logs</a> ' +
                'for detailed error codes and descriptions, or you may want to reach out to ' +
                'whoever developed your CheckMobi application if you do not maintain it yourself.<br><br>' +
                'If you do not need these default triggers, you can delete them right from the "Alerts" tab ' +
                'that can be found on your application in the <a target="_blank" class="link" ' +
                'href="https://checkmobi.com/account.html#/settings/account-info/">Settings</a> tab.'
            )
        ]
    }
];

export class FaqHelperService {
    constructor() {
    }

    getSections() {
        return [...sections];
    }
}
