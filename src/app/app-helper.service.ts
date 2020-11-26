import {Injectable} from '@angular/core';
import {CM_CONSTANTS} from './constants';

@Injectable()
export class AppHelperService {

    public appCurrency: string;
    public carriers: any;
    public callCarriers: any;

    constructor() {
    }

    initAppSettings(beSettings: any): void {
        if (beSettings.currency) {
            this.appCurrency = beSettings.currency;
        }

        this.initCarriers(beSettings.providers);
    }

    getAppCurrency(): string {
        return this.appCurrency;
    }

    initCarriers(providers: any): void {
        if (!providers) {
            return;
        }

        const carriers = {...CM_CONSTANTS.CARRIERS};

        Object.keys(providers).map(key => {
            carriers[key] = {
                ...carriers[key],
                name: providers[key],
                id: parseInt(key, 10)
            };
        });

        this.callCarriers = carriers;
        this.carriers = {
            1: carriers[1],
            2: carriers[2]
        };
    }

    getCarriers(): void {
        return this.carriers;
    }
}
