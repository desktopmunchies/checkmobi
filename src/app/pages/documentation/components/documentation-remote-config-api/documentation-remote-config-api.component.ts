import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-remote-config-api',
  templateUrl: './documentation-remote-config-api.component.html',
  styleUrls: ['./documentation-remote-config-api.component.scss']
})
export class DocumentationRemoteConfigApiComponent implements OnInit {

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        -X POST -d '{"number": "+your_number_here","platform": "android", "language": "ro"}'
        https://api.checkmobi.com/v1/validation/remote-config`;

  public json = `{
    "settings": [
      {
          "type": "reverse_cli",
          "max_attempts": 5,
          "delay": 30
      },
      {
          "sms_template": "Your validation code is: %code%",
          "android_app_hash": "AKJHE12",
          "type": "sms",
          "max_attempts": 2,
          "delay": 40
      }
    ],
    "country_code": 40,
    "country_iso_code": "RO",
    "carrier": "Orange",
    "is_mobile": true,
    "e164_format": "+40743XXXXXX",
    "formatting": "+40 743 XXX XXX"
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
