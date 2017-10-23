import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { HomeModule } from './home/home.module';

import { DashboardComponent } from './dashboard.component';

import {TopNavComponent} from '../shared/index';
import {SidebarComponent} from '../shared/index';

import { SobreModule } from './sobre/sobre.module';
import { InputOutputModule } from './input-output/input-output.module';


@NgModule({
    imports: [
        CommonModule,
      RouterModule,
      Ng2BootstrapModule.forRoot(),
      HomeModule,
        SobreModule,
        InputOutputModule
    ],
    declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent]
})

export class DashboardModule { }
