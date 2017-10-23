import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  statusLED = 'apagado.';
  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this.verificaLED();
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
