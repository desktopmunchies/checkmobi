export const CM_CONSTANTS = {
    LOCAL_STORAGE_PREFIX: 'CheckmobiLS',
    JWT_TOKEN: 'jwt_token',
    LANDING_MAIN_LOGO_ID: 'MainLogo',
    APP_CURRENCY: {
        USD: {
            SYMBOL: '$',
            POZITION: 'before'
        }
    },
    CARRIERS: {
        0: {
            name: 'Cheapest Provider in route',
            shortName: 'Cheapest',
            id: 0
        },
        1: {
            shortName: 'Standard',
            description: 'Better Pricing. SMS go first through this Provider.'
        },
        2: {
            shortName: 'Premium',
            description: 'Can be used as backup in round robin fashion when SMS do not complete through Standard SMS provider.'
        }
    },
    SEO: {
        HOME: {
            TITLE: 'CheckMobi - Affordable SMS and Voice API for 2FA, OTP, SMS Marketing',
            DESCRIPTION: `SMS API, iOS, and Android SDKs with global connectivity to build OTP, mobile number verification, two-factor authentication, and SMS marketing.`
        },
        TERMS: {
            TITLE: 'Terms and Conditions | CheckMobi',
            DESCRIPTION: 'CheckMobi terms of service. Contact us for any further questions.'
        },
        PRIVACY: {
            TITLE: 'Privacy Policy | CheckMobi',
            DESCRIPTION: 'CheckMobi privacy policy for our SMS and Voice services. Contact us for any further questions.'
        },
        PRICING: {
            TITLE: 'Competitive pay as you go pricing for SMS, Missed Call, IVR, and Voice API | CheckMobi',
            DESCRIPTION: 'Get started with our competitive pay as you go pricing for SMS, IVR, Missed call, and Voice API.'
        },
        MISSED_CALL: {
            TITLE: 'Missed call (flash call) phone number verification | CheckMobi',
            DESCRIPTION: `Missed call (flash call) phone number verification solution which helps companies to cut their SMS and IVR cost for phone number verification.`
        },
        GDPR: {
            TITLE: 'GDPR (General Data Protection Regulation) | CheckMobi',
            DESCRIPTION: `GDPR: How CheckMobi is preparing to protect your data.`
        },
        FAQ: {
            TITLE: 'Frequently Asked Questions (FAQ) | CheckMobi',
            DESCRIPTION: `Frequently Asked Questions regarding our SMS, IVR, Missed Call, and Voice API services.`
        },
        DOCUMENTATION: {
            TITLE: 'Docs and guides to get started with Authentication API, SMS API, Missed Call API, Voice API and more | CheckMobi',
            DESCRIPTION: `Add Phone Validation via Missed Call, SMS or Voice Calls within your app in minutes using our getting started guides and detailed API reference.`
        },
        CONTACT: {
            TITLE: 'Submit a request | CheckMobi',
            DESCRIPTION: `Contact support for sales information or in case you need any assistance for our SMS and Voice products.`
        },
        ANTIFRAUD: {
            TITLE: 'SMS and Voice API Antifraud system | CheckMobi',
            DESCRIPTION: `Complete solution to mitigate the SMS and Voice API fraud and save your budget.`
        },
        ABOUT: {
            TITLE: 'CheckMobi - What are you looking for?',
            DESCRIPTION: `CheckMobi is an online platform that provides phone number validation services based on Missed Call, IVR, SMS, and Voice API.`
        },
        404: {
            TITLE: 'Oops.. Page Not Found | CheckMobi',
            DESCRIPTION: 'Most probably not the page you are looking for.'
        }
    }
};
