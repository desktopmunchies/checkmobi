import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-validation-status',
  templateUrl: './documentation-validation-status.component.html',
  styleUrls: ['./documentation-validation-status.component.scss']
})
export class DocumentationValidationStatusComponent implements OnInit {

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        https://api.checkmobi.com/v1/validation/status/{YOUR_ID_HERE}`;

  public json = `{
        "number":"+40XXXXXXXXX",
        "validated":true,
        "validation_date":1416946931,
        "charged_amount": 0.1
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
