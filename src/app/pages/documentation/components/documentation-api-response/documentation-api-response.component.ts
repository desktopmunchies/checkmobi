import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-documentation-api-response',
    templateUrl: './documentation-api-response.component.html',
    styleUrls: ['./documentation-api-response.component.scss'],
})
export class DocumentationApiResponseComponent implements OnInit {

    public errorCode = `{
        "code":1,
        "error":"Invalid or expired API secret key"
}`;

    public successCode = `{
        "country_code":40,
        "country_iso_code":"RO",
        "carrier":"Orange",
        "is_mobile":true,
        "e164_format":"+40XXXXXXXXX",
        "formatting":"+40 XXX XXX XXX"
}`;

    constructor() {
    }

    ngOnInit(): void {
    }

}
