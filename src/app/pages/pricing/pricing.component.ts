import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private $seoService: SeoService) { }

  ngOnInit(): void {
    this.$seoService.setBaseSeo('pricing');
  }

}
