import {AfterContentInit, Component, OnInit} from '@angular/core';
import {HelpersService} from '../../components/helpers.service';
import {Title} from '@angular/platform-browser';
import {CM_CONSTANTS} from '../../constants';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

  constructor(
      private helpersService: HelpersService,
      private $seoService: SeoService
      ) { }

  ngOnInit(): void {
    this.$seoService.setBaseSeo('home');
  }

  ngAfterContentInit(): any {
    this.helpersService.initCssAnimations();
  }
}
