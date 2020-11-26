import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-verify-pin',
  templateUrl: './documentation-verify-pin.component.html',
  styleUrls: ['./documentation-verify-pin.component.scss']
})
export class DocumentationVerifyPinComponent implements OnInit {

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        -X POST -d '{"id": "SMS-FF9137C1-4D39-42B0-BE86-4B5A96CE13BD", "pin":"9711"}'
        https://api.checkmobi.com/v1/validation/verify`;

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
