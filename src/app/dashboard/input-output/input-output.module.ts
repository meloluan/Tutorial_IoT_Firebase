import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InputOutputComponent } from './input-output.component';

@NgModule({
    imports: [RouterModule],
    declarations: [InputOutputComponent],
    exports: [InputOutputComponent]
})

export class InputOutputModule { }
