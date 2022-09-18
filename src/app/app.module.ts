import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register.component';
import { ListComponent } from './components/list.component';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [AppComponent, RegisterComponent, ListComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
