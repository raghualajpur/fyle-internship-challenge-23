import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReposCardComponent } from './repos-card/repos-card.component';
import { LanguageCardComponent } from './language-card/language-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ReposCardComponent,
    LanguageCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
