import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BeService} from '../../be.service';
import {catchError, map} from 'rxjs/operators';

@Component({
    selector: 'app-footer-contact',
    templateUrl: './footer-contact.component.html',
    styleUrls: ['./footer-contact.component.scss']
})
export class FooterContactComponent implements OnInit {

    public showSuccessText: boolean = false;
    public showErrorText: boolean = false;
    public submitted: boolean = false;
    public form: FormGroup;

    constructor(private $fb: FormBuilder, private $beService: BeService) {
    }

    ngOnInit(): void {
        this.initForm();
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
