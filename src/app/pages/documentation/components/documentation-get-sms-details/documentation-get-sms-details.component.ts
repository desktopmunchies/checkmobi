import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-get-sms-details',
  templateUrl: './documentation-get-sms-details.component.html',
  styleUrls: ['./documentation-get-sms-details.component.scss']
})
export class DocumentationGetSmsDetailsComponent implements OnInit {

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        https://api.checkmobi.com/v1/sms/{YOUR_ID_HERE}`;

  public json = `{
        "request_date": 1433451511,
        "to": "+XXXXXXXXX",
        "description": "MX - Orange",
        "status": "sent",
        "charged_amount": 0.12,
        "charged_rate": 0.12,
        "units": 1
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
