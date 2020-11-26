import {AfterContentInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {SeoService} from '../../seo.service';
declare var $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaqComponent implements AfterContentInit, OnInit {
  constructor(private $router: Router, private $seoService: SeoService) { }

  ngOnInit(): void {
    this.$seoService.setBaseSeo('faq');
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.checkQuestionUrl();
    });
  }

  checkQuestionUrl(): void {
    const id = document.location.pathname.replace('/faq/', '');
    const elm = $(document.getElementById(id));
    if (!elm[0]) {
      return;
    }
    elm.find('.collapse').addClass('show').scroll();
    elm[0].scrollIntoView();
  }
}
