import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination';


import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { CoachsComponent }  from './components/coachs/coachs.component';
import { CoachFormComponent }  from './components/coach-form/coach-form.component';
// import { TestComponent }  from './components/test/test.component';
import { HeroService }  from './services/hero.service';
import { CoachService }  from './services/coach.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2PaginationModule,
    ReactiveFormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    CoachsComponent,
    CoachFormComponent
    // ,
    // TestComponent
  ],
  providers: [
    HeroService,
    CoachService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
