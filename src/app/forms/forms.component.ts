import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { 
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    FormsModule, 
    Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider'; 

interface IForm {
    notes: FormControl<string | null>;
    fullName: FormControl<string | null>;
    phoneNumber: FormControl<string | null>;
    emailAddress: FormControl<string | null>;
}

@Component({
    selector: 'app-forms',
    standalone: true,
    imports: [
        MatFormFieldModule, 
        MatInputModule,
        MatDividerModule,
        ReactiveFormsModule,
        FormsModule,
        NgIf,
    ],
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.scss'
})
export class FormsComponent {
    form = new FormGroup<IForm>({
        notes: new FormControl(null, [Validators.required, Validators.maxLength(500)]),
        fullName: new FormControl(null, [Validators.required]),
        phoneNumber: new FormControl(null, [Validators.pattern(/^[1-9]\d{2}-\d{3}-\d{4}/)]),
        emailAddress: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    });

    get fullName(): FormControl<string | null> {
        return this.form.controls.fullName;
    }

    get emailAddress(): FormControl<string | null> {
        return this.form.controls.emailAddress;
    }

    get phoneNumber(): FormControl<string | null> {
        return this.form.controls.phoneNumber;
    }

    get notes(): FormControl<string | null> {
        return this.form.controls.notes;
    }

    getErrorMessage(formControlName: string): string {
        switch (formControlName) {
            case 'notes':
                return 'Notes are required. Max length is 500 characters.';
            case 'fullName':
                return 'Full Name is required.';
            case 'phoneNumber':
                return 'Phone number must match the pattern xxx-xxx-xxxx to be valid.';
            case 'emailAddress':
                return 'Email address is required. Email address must match the pattern xxx@xxx.xxx to be valid.';
            default:
                return '';
        }
    }
}
