import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {CM_CONSTANTS} from './constants';

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    constructor(private $title: Title, private $meta: Meta) {
    }

    setBaseSeo(component: string): void {
        if (CM_CONSTANTS.SEO[component.toLocaleUpperCase()]) {
            this.$title.setTitle(CM_CONSTANTS.SEO[component.toLocaleUpperCase()].TITLE);
            this.$meta.updateTag({name: 'description', content: CM_CONSTANTS.SEO[component.toLocaleUpperCase()].DESCRIPTION});
        }
    }
}
