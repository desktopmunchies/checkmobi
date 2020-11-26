import {Component, OnInit} from '@angular/core';
import {BeService} from '../../../../be.service';

@Component({
    selector: 'app-highlight',
    templateUrl: './highlight.component.html',
    styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {

    public userExists: boolean;

    constructor(private $beService: BeService) {
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.$beService.checkUser().subscribe(response => {
                this.userExists = response;
            });
        }, 500);
    }

}
