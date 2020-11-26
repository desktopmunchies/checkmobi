import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private $seoService: SeoService) { }

  ngOnInit(): void {
    this.$seoService.setBaseSeo('privacy');
  }

}
