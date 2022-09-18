import { Component } from '@angular/core';
import { Contact } from './components/models';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private contactSvc: ContactService) {}
  title = 'miniprojclient';
  viewReg: boolean = true;
  viewRegister() {
    this.viewReg = true;
  }
  viewList() {
    this.viewReg = false;
    this.contactSvc
      .getContacts()
      .then((result) => {
        console.log('>>>> ' + result.length + ' contacts retrieved');
        this.contactSvc.onGetContacts.next(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  processForm($event: Contact) {
    console.log($event);
    this.contactSvc
      .addContact($event)
      .then((result) => {
        console.log(result.code);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
