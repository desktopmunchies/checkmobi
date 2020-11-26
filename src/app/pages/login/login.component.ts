import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private $seoService: SeoService) { }

  myForm:FormGroup;
  
  ngOnInit(): void {
    this.$seoService.setBaseSeo('login');
    this.myForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }

}