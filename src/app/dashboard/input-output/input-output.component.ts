import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  public statusLED_write: FirebaseListObservable<any>;
  statusLED = 'apagado.';
  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
   // this.verificaLED();
  }
  onClickBotao() {
  //  this.statusLED_write.push(true);
  }
    verificaLED() {
       this.db.database.ref('LED').on('child_changed', (child) => {
         console.log(child.val());
           if (child.val() === 'true') {
             this.statusLED = ' aceso.';
         }
       });
    }
}
