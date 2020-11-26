import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BeService} from '../../be.service';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public showSuccessText: boolean = false;
  public showErrorText: boolean = false;
  public submitted: boolean = false;
  public form: FormGroup;

  constructor(private $fb: FormBuilder, private $beService: BeService, private $seoService: SeoService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.$seoService.setBaseSeo('about');
  }

  initForm(): void {
    this.submitted = false;
    this.form = this.$fb.group({
      subject: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required]
    });
  }

  sendQuestion(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.$beService.sendFooterQuestion(this.form.value).subscribe(response => {
        this.initForm();
        this.showErrorText = false;
        this.showSuccessText = true;
        setTimeout(() => {
          this.showSuccessText = false;
        }, 10000);
      }, error => {
        this.showErrorText = true;
      });
    }
  }

}
