import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-prefixes',
  templateUrl: './documentation-prefixes.component.html',
  styleUrls: ['./documentation-prefixes.component.scss']
})
export class DocumentationPrefixesComponent implements OnInit {

  public curl = `curl -i -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorization: YOUR_SECRET_KEY_HERE"
        https://api.checkmobi.com/v1/prefixes`;

  public json = `[
    {
      "iso":"AD",
      "prefix":376,
      "name":"Andorra"
    },
    ...
]`;

  constructor() { }

  ngOnInit(): void {
  }

}
