import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PricingComponent} from './pages/pricing/pricing.component';
import {VideoModalComponent} from './components/video-modal/video-modal.component';
import {HighlightComponent} from './pages/home/components/highlight/highlight.component';
import {ClientsComponent} from './pages/home/components/clients/clients.component';
import {VerificationComponent} from './pages/home/components/verification/verification.component';
import {CarrierComponent} from './pages/home/components/carrier/carrier.component';
import {MultipleCarrierComponent} from './pages/home/components/multiple-carrier/multiple-carrier.component';
import {RemoteConfigComponent} from './pages/home/components/remote-config/remote-config.component';
import {ComplementaryProductsComponent} from './pages/home/components/complementary-products/complementary-products.component';
import {DevelopersComponent} from './pages/home/components/developers/developers.component';
import {SecureComponent} from './pages/home/components/secure/secure.component';
import {MediaComponent} from './pages/home/components/media/media.component';
import {HelpersService} from './components/helpers.service';
import {FooterComponent} from './components/footer/footer.component';
import {MissedCallComponent} from './pages/missed-call/missed-call.component';
import {HomeAntifraudComponent} from './pages/home/components/home-antifraud/home-antifraud.component';
import {DocumentationComponent} from './pages/documentation/documentation.component';
import {DocumentationMenuComponent} from './pages/documentation/components/documentation-menu/documentation-menu.component';
import {DocumentationOverviewComponent} from './pages/documentation/components/documentation-overview/documentation-overview.component';
import {DocumentationMissedCallGuidelineComponent} from './pages/documentation/components/documentation-missed-call-guideline/documentation-missed-call-guideline.component';
import {DocumentationApiRequestComponent} from './pages/documentation/components/documentation-api-request/documentation-api-request.component';
import {DocumentationApiResponseComponent} from './pages/documentation/components/documentation-api-response/documentation-api-response.component';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
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
import {FaqComponent} from './pages/faq/faq.component';
import {FooterContactComponent} from './components/footer-contact/footer-contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BeService} from './be.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Redirect404Component} from './pages/redirect404/redirect404.component';
import {FaqCallingVoiceComponent} from './pages/faq/components/faq-calling-voice/faq-calling-voice.component';
import {FaqMissedCallComponent} from './pages/faq/components/faq-missed-call/faq-missed-call.component';
import {FaqPricingComponent} from './pages/faq/components/faq-pricing/faq-pricing.component';
import {FaqProductComponent} from './pages/faq/components/faq-product/faq-product.component';
import {FaqSmsComponent} from './pages/faq/components/faq-sms/faq-sms.component';
import {FaqMonitoringComponent} from './pages/faq/components/faq-monitoring/faq-monitoring.component';
import {PricingSubscriptionPlansComponent} from './pages/pricing/components/pricing-subscription-plans/pricing-subscription-plans.component';
import {PricingRatesComponent} from './pages/pricing/components/pricing-rates/pricing-rates.component';
import {CmCurrencyPipe} from './pipes';
import {DecimalPipe} from '@angular/common';
import {PricingHelperService} from './pages/pricing/pricing-helper.service';
import {AppHelperService} from './app-helper.service';
import {SeoService} from './seo.service';
import {TokenInterceptor} from './auth.intereceptor';
import {LoginComponent} from './pages/login/login.component'

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        NavbarComponent,
        HomeComponent,
        PricingComponent,
        VideoModalComponent,
        HighlightComponent,
        ClientsComponent,
        VerificationComponent,
        CarrierComponent,
        MultipleCarrierComponent,
        RemoteConfigComponent,
        ComplementaryProductsComponent,
        DevelopersComponent,
        SecureComponent,
        MediaComponent,
        FooterComponent,
        MissedCallComponent,
        HomeAntifraudComponent,
        DocumentationComponent,
        DocumentationMenuComponent,
        DocumentationOverviewComponent,
        DocumentationMissedCallGuidelineComponent,
        DocumentationApiRequestComponent,
        DocumentationApiResponseComponent,
        DocumentationGetDetailsComponent,
        DocumentationCountriesListComponent,
        DocumentationPrefixesComponent,
        DocumentationCheckNumberComponent,
        DocumentationRequestValidationComponent,
        DocumentationVerifyPinComponent,
        DocumentationValidationStatusComponent,
        DocumentationSendSmsComponent,
        DocumentationGetSmsDetailsComponent,
        DocumentationPlaceCallComponent,
        DocumentationGetCallDetailsComponent,
        DocumentationHangupCallComponent,
        DocumentationRemoteConfigApiComponent,
        DocumentationSddkComponent,
        TermsComponent,
        PrivacyComponent,
        GdprComponent,
        AboutComponent,
        FaqComponent,
        FooterContactComponent,
        Redirect404Component,
        FaqCallingVoiceComponent,
        FaqMissedCallComponent,
        FaqPricingComponent,
        FaqProductComponent,
        FaqSmsComponent,
        FaqMonitoringComponent,
        PricingSubscriptionPlansComponent,
        PricingRatesComponent,
        LoginComponent,

        // pipes
        CmCurrencyPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HighlightModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        AppHelperService,
        HelpersService,
        PricingHelperService,
        BeService,
        SeoService,
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    json: () => import('highlight.js/lib/languages/json'),
                    bash: () => import('highlight.js/lib/languages/bash')
                }
            }
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        // pipes
        CmCurrencyPipe,
        DecimalPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
