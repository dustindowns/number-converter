import { Routes } from '@angular/router';

import { HomePageComponent } from '@/app/home/home-page.component';
import { ResultPageComponent } from '@/app/result/result-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'result',
    component: ResultPageComponent,
  },
];
