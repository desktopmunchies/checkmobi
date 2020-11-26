import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Location} from '@angular/common';
import {CM_CONSTANTS} from '../../constants';
import {BeService} from '../../be.service';
import {takeUntil} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {ReplaySubject} from 'rxjs';

declare var $: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

    private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    private listener: any;
    private aboutListener: any;
    private logoPosition: number;
    public showLogo: boolean = false;
    public userExists: boolean;
    public transparentNavbar: boolean = false;

    public permissions = {
        userChecked: () => this.userExists !== undefined
    };

    constructor(private $renderer: Renderer2, private $location: Location, private $beService: BeService, private $router: Router) {
    }

    getYPosition(e: Event): number {
        const elm: any = e.target;
        return (elm.scrollingElement && elm.scrollingElement.scrollTop) || elm.scrollTop;
    }

    ngOnInit(): void {
        this.checkAboutNavbar();
        this.checkLogo();

        this.$router.events.pipe(
            takeUntil(this.destroyed$)
        )
            .subscribe(val => {
                if (val instanceof NavigationEnd) {
                    this.checkLogo();
                    this.checkAboutNavbar();
                }
            });

        this.$beService.checkUser().subscribe(response => {
            setTimeout(() => {
                this.userExists = response;
            }, 100);
        });
    }

    private checkLogo(): void {
        setTimeout(() => {
            if (document.getElementById(CM_CONSTANTS.LANDING_MAIN_LOGO_ID)) {
                this.showLogo = false;
                if (this.listener) {
                    this.listener && this.listener();
                }

                this.logoPosition = $(document.getElementById(CM_CONSTANTS.LANDING_MAIN_LOGO_ID))[0].offsetTop;
                this.showLogo = document.scrollingElement.scrollTop > this.logoPosition;
                this.initScrollListener();
            } else {
                this.showLogo = true;
                this.listener && this.listener();
            }
        }, 500);
    }

    private checkAboutNavbar(): void {
        this.transparentNavbar = (window.location.pathname === '/about');
        if (this.transparentNavbar) {
            setTimeout(() => this.initAboutScrollListener(), 500);
        } else {
            this.aboutListener && this.aboutListener();
        }
    }

    private initAboutScrollListener(): void {
        this.aboutListener = this.$renderer.listen('window', 'scroll', (e) => {
            if (this.getYPosition(e) > (window.innerHeight - 60)) {
                this.transparentNavbar = false;
            } else {
                this.transparentNavbar = true;
            }
        });
    }

    private initScrollListener(): void {
        this.listener = this.$renderer.listen('window', 'scroll', (e) => {
            this.showLogo = this.getYPosition(e) > this.logoPosition;
        });
    }

    ngOnDestroy(): void {
        this.listener && this.listener();
        this.aboutListener && this.aboutListener();

        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
