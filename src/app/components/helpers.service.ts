import {Injectable} from '@angular/core';

declare var Modernizr: any;
declare var $: any;

@Injectable()
export class HelpersService {
    constructor() {
    }

    initCssAnimations(): any {
        $(document).ready(() => {
            // text animations
            if (($('[data-animation-effect]').length > 0) && !Modernizr.touch) {
                const effects = $('[data-animation-effect]');
                effects.each((index) => {
                    const $this = $(effects[index]);
                    const animationEffect = $this.attr('data-animation-effect');
                    if (Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
                        $this.appear(() => {
                            setTimeout(() => {
                                $this.addClass('animated object-visible ' + animationEffect);
                            }, 50);
                        }, {accX: 0, accY: -130});
                    } else {
                        $this.addClass('object-visible');
                    }
                });
            }

            // scrollspy
            // $('body').scrollspy({target: '#navbar', offset: 100});
        });
    }
}
