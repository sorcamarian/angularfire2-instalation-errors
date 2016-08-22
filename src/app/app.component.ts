import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: '<my-app>-app',
  templateUrl: '<my-app>.component.html',
  styleUrls: ['<my-app>.component.css']
})
export class <MyApp>Component {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('items');
  }
}