import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

 export const firebaseConfig = {
    apiKey: 'AIzaSyAWoskjC51bLkmIecNSFRHNZ0Kdxp5gjCQ',
    authDomain: 'iot-esp8266-3f6bf.firebaseapp.com',
    databaseURL: 'https://iot-esp8266-3f6bf.firebaseio.com',
    projectId: 'iot-esp8266-3f6bf',
    storageBucket: '',
    messagingSenderId: '826418050043'
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    LoginModule,
    SignupModule,
    DashboardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
