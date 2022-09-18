import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Subject } from 'rxjs';
import { Contact, Response } from '../components/models';

@Injectable()
export class ContactService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8080/api/';
  onGetContacts = new Subject<Contact[]>();

  addContact(contact: Contact): Promise<Response> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return lastValueFrom(
      this.http.post<Response>(this.url + 'addcontact', contact, { headers })
    );
  }

  getContacts(): Promise<Contact[]> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return lastValueFrom(this.http.get<Contact[]>(this.url + 'contacts'));
  }
}
