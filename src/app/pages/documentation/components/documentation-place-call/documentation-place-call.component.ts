import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-place-call',
  templateUrl: './documentation-place-call.component.html',
  styleUrls: ['./documentation-place-call.component.scss']
})
export class DocumentationPlaceCallComponent implements OnInit {

  public json = `"events" :
[
        {"action": "speak", "text" : "You are the best", "loop" : 2, "language" : "en-US"},
        {"action": "play", "url" : "http://www.tonycuffe.com/mp3/tailtoddle_lo.mp3"},
        {"action": "send_dtmf", "digits" : "1W2", "async" : false},
        {"action": "wait", "length" : 4},
        {"action": "speak", "text" : "We are done"},
        {"action": "hangup"}
]`;

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        -X POST -d '{"from": "+source number", "to":"+destination number", "events" : [ {"action": "speak", "text" : "Hello World!"}]}'
        https://api.checkmobi.com/v1/call`;

  public json2 = `{
        "id":"CAL-ED26AC71-807B-49B1-A81E-3956224A0CDC",
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
