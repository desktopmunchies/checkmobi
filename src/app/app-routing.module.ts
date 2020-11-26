import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './components/main/main.component';
import {HomeComponent} from './pages/home/home.component';
import {PricingComponent} from './pages/pricing/pricing.component';
import {AntifraudComponent} from './pages/antifraud/antifraud.component';
import {MissedCallComponent} from './pages/missed-call/missed-call.component';
import {DocumentationComponent} from './pages/documentation/documentation.component';
import {DocumentationOverviewComponent} from './pages/documentation/components/documentation-overview/documentation-overview.component';
import {DocumentationMissedCallGuidelineComponent} from './pages/documentation/components/documentation-missed-call-guideline/documentation-missed-call-guideline.component';
import {DocumentationApiRequestComponent} from './pages/documentation/components/documentation-api-request/documentation-api-request.component';
import {DocumentationApiResponseComponent} from './pages/documentation/components/documentation-api-response/documentation-api-response.component';
import {DocumentationGetDetailsComponent} from './pages/documentation/components/documentation-get-details/documentation-get-details.component';
import {DocumentationCountriesListComponent} from './pages/documentation/components/documentation-countries-list/documentation-countries-list.component';
import {DocumentationPrefixesComponent} from './pages/documentation/components/documentation-prefixes/documentation-prefixes.component';
import {DocumentationCheckNumberComponent} from './pages/documentation/components/documentation-check-number/documentation-check-number.component';
import {DocumentationRequestValidationComponent} from './pages/documentation/components/documentation-request-validation/documentation-request-validation.component';
import {DocumentationVerifyPinComponent} from './pages/documentation/components/documentation-verify-pin/documentation-verify-pin.component';
import {DocumentationValidationStatusComponent} from './pages/documentation/components/documentation-validation-status/documentation-validation-status.component';
import {DocumentationSendSmsComponent} from './pages/documentation/components/documentation-send-sms/documentation-send-sms.component';
import {DocumentationGetSmsDetailsComponent} from './pages/documentation/components/documentation-get-sms-details/documentation-get-sms-details.component';
import {DocumentationPlaceCallComponent} from './pages/documentation/components/documentation-place-call/documentation-place-call.component';
import {DocumentationGetCallDetailsComponent} from './pages/documentation/components/documentation-get-call-details/documentation-get-call-details.component';
import {DocumentationHangupCallComponent} from './pages/documentation/components/documentation-hangup-call/documentation-hangup-call.component';
import {DocumentationRemoteConfigApiComponent} from './pages/documentation/components/documentation-remote-config-api/documentation-remote-config-api.component';
import {DocumentationSddkComponent} from './pages/documentation/components/documentation-sddk/documentation-sddk.component';
import {TermsComponent} from './pages/terms/terms.component';
import {PrivacyComponent} from './pages/privacy/privacy.component';
import {GdprComponent} from './pages/gdpr/gdpr.component';
import {AboutComponent} from './pages/about/about.component';
import {Redirect404Component} from './pages/redirect404/redirect404.component';
import {FaqComponent} from './pages/faq/faq.component';
import {PricingSubscriptionPlansComponent} from './pages/pricing/components/pricing-subscription-plans/pricing-subscription-plans.component';
import {PricingRatesComponent} from './pages/pricing/components/pricing-rates/pricing-rates.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                data: {
                    seo: 'home'
                }
            },
            {
                path: 'anti-fraud',
                component: AntifraudComponent
            },
            {
                path: 'missed-call',
                component: MissedCallComponent
            },
            {
                path: 'documentation',
                component: DocumentationComponent,
                children: [
                    {path: '', redirectTo: 'overview', pathMatch: 'full'},
                    {path: 'overview', component: DocumentationOverviewComponent},
                    {path: 'missed-call-guideline', component: DocumentationMissedCallGuidelineComponent},
                    {path: 'api-request', component: DocumentationApiRequestComponent},
                    {path: 'api-response', component: DocumentationApiResponseComponent},
                    {path: 'get-details', component: DocumentationGetDetailsComponent},
                    {path: 'countries-list', component: DocumentationCountriesListComponent},
                    {path: 'prefixes', component: DocumentationPrefixesComponent},
                    {path: 'check-number', component: DocumentationCheckNumberComponent},
                    {path: 'request-validation', component: DocumentationRequestValidationComponent},
                    {path: 'verify-pin', component: DocumentationVerifyPinComponent},
                    {path: 'validation-status', component: DocumentationValidationStatusComponent},
                    {path: 'send-sms', component: DocumentationSendSmsComponent},
                    {path: 'get-sms-details', component: DocumentationGetSmsDetailsComponent},
                    {path: 'place-call', component: DocumentationPlaceCallComponent},
                    {path: 'get-call-details', component: DocumentationGetCallDetailsComponent},
                    {path: 'hangup-call', component: DocumentationHangupCallComponent},
                    {path: 'remote-config-profile-api', component: DocumentationRemoteConfigApiComponent},
                    {path: 'sdk-overview', component: DocumentationSddkComponent},
                ],
            },
            {
                path: 'pricing',
                component: PricingComponent,
                children: [
                    {path: '', redirectTo: 'subscription-plans', pathMatch: 'full'},
                    {path: 'subscription-plans', component: PricingSubscriptionPlansComponent},
                    {path: 'rates', component: PricingRatesComponent}
                ]
            },
            {
                path: 'terms-of-service',
                component: TermsComponent
            },
            {
                path: 'privacy-policy',
                component: PrivacyComponent
            },
            {
                path: 'gdpr',
                component: GdprComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'faq',
                component: FaqComponent,
                children: [
                    {path: ':question_id', component: FaqComponent}
                ]
            },
            {
                path: 'not-found',
                component: Redirect404Component
            },

            {
                path: 'login.html',
                component: LoginComponent
            },

            // 404
            {
                path: '**',
                redirectTo: '/not-found'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: false, anchorScrolling: 'enabled'})],
})
export class AppRoutingModule {
}

