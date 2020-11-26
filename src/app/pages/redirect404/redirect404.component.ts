import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'app-redirect404',
  templateUrl: './redirect404.component.html',
  styleUrls: ['./redirect404.component.scss']
})
export class Redirect404Component implements OnInit {

  constructor(private $seoService: SeoService) { }

  ngOnInit(): void {
    this.$seoService.setBaseSeo('404');
  }

}
