import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private $seoService: SeoService) { }

  ngOnInit(): void {
    this.$seoService.setBaseSeo('terms');
  }

}
