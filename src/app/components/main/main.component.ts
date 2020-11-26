import {Component, OnDestroy, OnInit} from '@angular/core';
import {BeService} from '../../be.service';
import {Location} from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';
import {takeUntil} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {ReplaySubject} from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
    private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

    constructor(
        private $router: Router,
        private $beService: BeService
    ) {
    }

    ngOnInit(): void {

        this.$beService.checkUser().subscribe();

        this.$router.events.pipe(
            takeUntil(this.destroyed$)
        )
            .subscribe(val => {
                if (val instanceof NavigationEnd) {
                    this.setScrollTop(val.url);
                }
            });
    }

    setScrollTop(url: string): void {
        if (url.search('/faq/') === 0) {
            return;
        }

        window.scroll(0, 0);
    }

    ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
