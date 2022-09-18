import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Contact } from './models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.email, Validators.required]),
      mobile: this.fb.control('', [Validators.minLength(8)]),
    });
  }

  @Output()
  onSubmitForm = new Subject<Contact>();
  submitForm() {
    const contact = this.form.value as Contact;
    console.log('>>>>> Contact submitted: ' + contact);
    this.onSubmitForm.next(contact);
    this.createForm();
  }
}
