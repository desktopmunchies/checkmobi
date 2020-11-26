import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-get-details',
  templateUrl: './documentation-get-details.component.html',
  styleUrls: ['./documentation-get-details.component.scss']
})
export class DocumentationGetDetailsComponent implements OnInit {

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        https://api.checkmobi.com/v1/my-account`;

  public json = `{
  "email": "johndoe@example.com",
  "subscription": {
    "id": 1,
    "name": "Startup",
    "limit": 10000
  },
  "cli_validations": 0,
  "sms_validations": 0,
  "ivr_validations": 0,
  "sms_api": 0,
  "voice_api": 0,
  "expiration_date": 1506891600,
  "credit_balance": 410,
  "call_per_minute": 5,
  "sms_per_minute": 5,
  "max_concurrent_calls": 5
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
