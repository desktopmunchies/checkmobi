import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-hangup-call',
  templateUrl: './documentation-hangup-call.component.html',
  styleUrls: ['./documentation-hangup-call.component.scss']
})
export class DocumentationHangupCallComponent implements OnInit {

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        -X DELETE
        https://api.checkmobi.com/v1/call/{CALL_ID_HERE}`;

  constructor() { }

  ngOnInit(): void {
  }

}
