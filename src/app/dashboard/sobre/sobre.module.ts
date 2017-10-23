import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SobreComponent } from './sobre.component';

@NgModule({
    imports: [RouterModule],
    declarations: [SobreComponent],
    exports: [SobreComponent]
})

export class SobreModule { }
