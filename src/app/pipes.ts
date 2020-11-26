import { Pipe, PipeTransform } from '@angular/core';
import {CM_CONSTANTS} from './constants';
import {DecimalPipe} from '@angular/common';
import {AppHelperService} from './app-helper.service';

@Pipe({
    name: 'cmCurrency'
})
export class CmCurrencyPipe implements PipeTransform {

    constructor(private $decimalPipe: DecimalPipe, private $appHelperService: AppHelperService) {
    }

    private removeDigits(nr: number, decimalNr: number): number {
        if (nr && decimalNr > 0) {
            const _nr = this.$decimalPipe.transform(nr, `0.0-${decimalNr}`);
            if (_nr.toString()[_nr.toString().length - 1] === '0') {
                return this.removeDigits(nr, (decimalNr - 1));
            }
        }
        return decimalNr;
    }

    transform(input: number, decimalNr: number = 2, position: 'before' | 'after' = 'before') {
        if (input === undefined) {
            return '';
        }

        const currencySymbol = CM_CONSTANTS.APP_CURRENCY[this.$appHelperService.getAppCurrency()].SYMBOL;

        if (input === 0) {
            decimalNr = 0;
        }

        decimalNr = this.removeDigits(input, decimalNr);

        switch (position) {
            case 'after':
                return this.$decimalPipe.transform(input, `0.0-${decimalNr}`) + currencySymbol;
            case 'before':
                return currencySymbol + this.$decimalPipe.transform(input, `0.0-${decimalNr}`);
            default:
                return currencySymbol + this.$decimalPipe.transform(input, `0.0-${decimalNr}`);
        }
    }
}
