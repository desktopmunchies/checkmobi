import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.scss']
})
export class GdprComponent implements OnInit {

  constructor(private $seoService: SeoService) { }

  ngOnInit(): void {
    this.$seoService.setBaseSeo('gdpr');
  }

}
