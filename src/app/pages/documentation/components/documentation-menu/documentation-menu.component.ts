import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-documentation-menu',
    templateUrl: './documentation-menu.component.html',
    styleUrls: ['./documentation-menu.component.scss']
})
export class DocumentationMenuComponent implements OnInit, OnDestroy {

    private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

    constructor(private $activeRoute: ActivatedRoute,
                private $location: Location,
                private $router: Router
    ) {
    }

    public menuItems = [
        {
            title: 'Overview',
            url: 'overview'
        },
        {
            title: 'Missed call guideline',
            url: 'missed-call-guideline'
        },
        {
            title: 'Request',
            is_expanded: (this.$location.path() === '/documentation/overview'),
            submenu: [
                {
                    title: 'API Request',
                    url: 'api-request',
                },
                {
                    title: 'API Response',
                    url: 'api-response',
                }
            ]
        },
        {
            title: 'Resources',
            is_expanded: false,
            submenu: [
                {
                    title: 'Account',
                    is_expanded: false,
                    submenu: [
                        {
                            title: 'Get Details',
                            url: 'get-details'
                        }
                    ]
                },
                {
                    title: 'Get countries list',
                    url: 'countries-list'
                },
                {
                    title: 'Get prefixes',
                    url: 'prefixes',
                },
                {
                    title: 'Check Number',
                    url: 'check-number',
                },
                {
                    title: 'Phone validation',
                    is_expanded: false,
                    submenu: [
                        {
                            title: 'Request Validation',
                            url: 'request-validation'
                        },
                        {
                            title: 'Verify PIN',
                            url: 'verify-pin'
                        },
                        {
                            title: 'Validation Status',
                            url: 'validation-status'
                        }
                    ]
                },
                {
                    title: 'SMS service',
                    is_expanded: false,
                    submenu: [
                        {
                            title: 'Send SMS',
                            url: 'send-sms'
                        },
                        {
                            title: 'Get SMS Details',
                            url: 'get-sms-details'
                        }
                    ]
                },
                {
                    title: 'Voice API Service',
                    is_expanded: false,
                    submenu: [
                        {
                            title: 'Place Call',
                            url: 'place-call'
                        },
                        {
                            title: 'Get Call Details',
                            url: 'get-call-details'
                        },
                        {
                            title: 'Hangup Call',
                            url: 'hangup-call'
                        }
                    ]
                },
                {
                    title: 'Remote config SDK',
                    is_expanded: false,
                    submenu: [
                        {
                            title: 'Get Remote Config Profile API',
                            url: 'remote-config-profile-api'
                        }
                    ]
                }
            ]
        },
        {
            title: 'SDK',
            url: 'sdk-overview'
        }
    ];

    openMenu(menuItem: any, menuItems: any[]): void {
        if (menuItem.is_open) {
            menuItem.is_open = false;
        }

        if (menuItem.submenu) {
            menuItem.is_expanded = !menuItem.is_expanded;

            menuItems.forEach(item => {
                if (menuItem.title !== item.title) {
                    item.is_expanded = false;
                }
            });
        }
    }

    checkMenuState(menuItems: any, parentItem: any[] = []): void {
        menuItems.forEach(item => {
            if (item.url && this.$location.isCurrentPathEqualTo(`/documentation/${item.url}`)) {
                item.is_open = true;
                if (parentItem) {
                    parentItem.forEach(_item => {
                        _item.is_open = true;
                    });
                }
            } else {
                if (item.submenu) {
                    parentItem.push(item);
                    this.checkMenuState(item.submenu, parentItem);
                }
            }
        });
        parentItem.pop();
    }

    ngOnInit(): void {
        this.checkMenuState(this.menuItems);

        this.$router.events.pipe(
            takeUntil(this.destroyed$)
        )
            .subscribe(val => {
                if (val instanceof NavigationEnd) {
                    this.checkMenuState(this.menuItems);
                }
            });
    }

    ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
