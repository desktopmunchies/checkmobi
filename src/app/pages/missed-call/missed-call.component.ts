import {AfterContentInit, Component, OnInit} from '@angular/core';
import {HelpersService} from '../../components/helpers.service';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'app-missed-call',
  templateUrl: './missed-call.component.html',
  styleUrls: ['./missed-call.component.scss']
})
export class MissedCallComponent implements OnInit, AfterContentInit {

  constructor(private helpersService: HelpersService, private $seoService: SeoService) { }

  ngOnInit(): void {
    this.$seoService.setBaseSeo('missed_call');
  }

  ngAfterContentInit(): any {
    this.helpersService.initCssAnimations();
  }
}
