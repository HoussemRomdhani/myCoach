import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { CoachsComponent }  from './components/coachs/coachs.component';
import { CoachFormComponent }  from './components/coach-form/coach-form.component';
//import { TestComponent }  from './components/test/test.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
   {
    path: 'coachs',
    component: CoachsComponent
  },
   {
    path: 'coach/:id',
    component: CoachFormComponent
  }
  // ,
  //   {
  //   path: 'test',
  //   component: TestComponent
  // }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
