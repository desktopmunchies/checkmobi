import {AfterContentInit, Component, OnInit} from '@angular/core';
import {HelpersService} from '../../components/helpers.service';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'app-antifraud',
  templateUrl: './antifraud.component.html',
  styleUrls: ['./antifraud.component.scss']
})
export class AntifraudComponent implements OnInit, AfterContentInit {

  constructor(private helpersService: HelpersService, private $seoService: SeoService) { }

  ngOnInit(): void {
    this.$seoService.setBaseSeo('antifraud');
  }

  ngAfterContentInit(): any {
    this.helpersService.initCssAnimations();
  }
}
