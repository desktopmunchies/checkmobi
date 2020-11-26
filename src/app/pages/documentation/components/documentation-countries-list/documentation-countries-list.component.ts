import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-documentation-countries-list',
    templateUrl: './documentation-countries-list.component.html',
    styleUrls: ['./documentation-countries-list.component.scss']
})
export class DocumentationCountriesListComponent implements OnInit {

    public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        https://api.checkmobi.com/v1/countries`;

    public json = `[
        {
        "iso2": "AF",
        "name": "Afghanistan",
        "prefix": "93",
        "flag_32": "https://checkmobi.com/static/images/flags/AF-32.png",
        "flag_128": "https://checkmobi.com/static/images/flags/AF-128.png"
    },
    ...
]`;

    constructor() {
    }

    ngOnInit(): void {
    }

}
