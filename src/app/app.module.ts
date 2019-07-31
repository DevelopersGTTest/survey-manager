import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './core/components/auth/auth.component';
import { ResultsComponent } from './core/components/results/results.component';
import { SurveyComponent } from './core/components/survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ResultsComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
