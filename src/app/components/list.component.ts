import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';
import { Contact } from './models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  contactSub$!: Subscription;
  constructor(private contactSvc: ContactService) {}

  ngOnInit(): void {
    this.contactSub$ = this.contactSvc.onGetContacts.subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  ngOnDestroy(): void {
    this.contactSub$.unsubscribe();
  }
}
