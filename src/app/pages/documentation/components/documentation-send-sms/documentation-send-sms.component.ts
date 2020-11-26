import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-send-sms',
  templateUrl: './documentation-send-sms.component.html',
  styleUrls: ['./documentation-send-sms.component.scss']
})
export class DocumentationSendSmsComponent implements OnInit {

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        -X POST -d '{"to":"+your_number_here", "text":"Hello world !", "platform":"web"}'
        https://api.checkmobi.com/v1/sms/send`;

  public json = `{
        "id":"MSG-ED26AC71-807B-49B1-A81E-3956224A0CDC",
        "number_info":
    {
        "country_code":40,
        "country_iso_code":"RO",
        "carrier":"Orange",
        "is_mobile":true,
        "e164_format":"+40XXXXXXXXX",
        "formatting":"+40 XXX XXX XXX"
    }
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
