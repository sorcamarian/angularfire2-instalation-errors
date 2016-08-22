import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';
import { <MyApp>, environment } from './app/';
import { AngularFireModule } from '/angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyBofqdUZR8WLKdPsqryQtF1lFxNAdk6JEI",
  authDomain: "vital-contact-116013.firebaseapp.com",
  databaseURL: "https://vital-contact-116013.firebaseio.com",
  storageBucket: "<your-storage-bucket>"
}

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ MyComponent ],
  Bootstrap: [ MyComponent ]
})
export class MyAppModule {}