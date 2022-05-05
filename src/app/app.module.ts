import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from "@angular/forms"
import {HttpClientModule} from '@angular/common/http'
 
import { AppComponent } from './app.component';

import { ContentFormComponent } from './content-form/content-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
