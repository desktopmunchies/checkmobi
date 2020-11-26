import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-request-validation',
  templateUrl: './documentation-request-validation.component.html',
  styleUrls: ['./documentation-request-validation.component.scss']
})
export class DocumentationRequestValidationComponent implements OnInit {

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        -X POST -d '{"number":"+your_number_here", "type":"reverse_ci", "platform":"ios"}'
        https://api.checkmobi.com/v1/validation/request`;

  public json = `{
        "id": "RCL-B772A954-7E63-4114-8087-BAF415B5003F",
        "type": "reverse_cli",
        "pin_hash": "6f8246002c1c5967ffc5e0ec80f2d7b59a60b1e3",
        "validation_info": {
            "country_code": 40,
            "country_iso_code": "RO",
            "carrier": "Orange",
            "is_mobile": true,
            "e164_format": "+40743XXXXXX",
            "formatting": "+40 743 XXX XXX"
        }
    }`;

  constructor() { }

  ngOnInit(): void {
  }

}
