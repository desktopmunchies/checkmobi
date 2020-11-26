import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-check-number',
  templateUrl: './documentation-check-number.component.html',
  styleUrls: ['./documentation-check-number.component.scss']
})
export class DocumentationCheckNumberComponent implements OnInit {

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        -X POST -d '{"number":"+your_number_here"}'
        https://api.checkmobi.com/v1/checknumber`;

  public json = `{
        "country_code":40,
        "country_iso_code":"RO",
        "carrier":"Orange",
        "is_mobile":true,
        "e164_format":"+40743XXXXXX",
        "formatting":"+40 743 XXX XXX",
        "validation_methods":
    {
        "cli":
        {
        "available": true,
        "local_number": true
        },

        "sms":
        {
        "available": true,
        "min_rate": 0.06,
        "max_rate": 0.12
        },

        "ivr":
        {
        "available": true,
        "min_rate": 0.0184,
        "max_rate": 0.8087,
        "estimation_cost": 0.0371
        },

        "reverse_cli":
        {
        "available": true,
        "min_rate": 0.0184,
        "max_rate": 0.8087,
        "estimation_cost": 0.0371
        }
    }
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
