import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-get-call-details',
  templateUrl: './documentation-get-call-details.component.html',
  styleUrls: ['./documentation-get-call-details.component.scss']
})
export class DocumentationGetCallDetailsComponent implements OnInit {

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        https://api.checkmobi.com/v1/call/{YOUR_ID_HERE}`;

  public json = `{
        "request_date": 1433451354,
        "to": "+XXXXXXX",
        "description": "MX - Orange",
        "duration_billed": 0,
        "charged_amount": 0,
        "charged_rate": 0.0371
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
