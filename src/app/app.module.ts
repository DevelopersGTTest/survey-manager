import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './core/components/auth/auth.component';
import { ResultsComponent } from './core/components/results/results.component';
import { SurveyComponent } from './core/components/survey/survey.component';
//Routing
import { APP_ROUTING } from './app.routes';
//others modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

//firemodule
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from '../environments/environment';

//graphic
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ResultsComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING,
    AngularFireModule.initializeApp( firebaseConfig ),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
