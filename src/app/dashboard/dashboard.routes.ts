import { Route } from '@angular/router';

import { HomeRoutes } from './home/home.routes';

import { DashboardComponent } from './index';
import { SobreRoutes } from './sobre';
import { InputOutputRoutes } from './input-output';

export const DashboardRoutes: Route[] = [
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        ...HomeRoutes,
        ...InputOutputRoutes,
        ...SobreRoutes
      ]
    }
];
