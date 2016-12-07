import {ChangeDetectionStrategy, Component, OnInit, Input} from "@angular/core";
//import { Router } from '@angular/router';

//import {Hero} from "../../models/hero";
//import {HeroService} from "../../services/hero.service";

import {Coach} from "../../models/coach";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent implements OnInit {
  //  heroes: Hero[] = [];

    // constructor(
    //  private router: Router,
    //    private heroService: HeroService) {
    // }
public roles = [
    { value: 'admin', display: 'Administrator' },
    { value: 'guest', display: 'Guest' },
    { value: 'custom', display: 'Custom' }
  ];
coachs: Coach[];
// = [
//     {
//       name: "Jonathan Smith 1",
//       profession:"Graphics Designer 1",
//       description:"Certifié praticien de la relation d’aide par l’approche centrée sur la personne -"
//       +" Certifié Relations efficaces par la méthode Gordon - Membre titulaire de l’association européenne de coaching depuis 2007 - "
//       +" Hervé a plus de 20 ans d'expérience professionnelle. Il était d’abord opérationnel et manager, et depuis plus de 10 ans il est conseil, coach et formateur. Ses spécialités : management, "
//       +" organisation, conduite de projet, accompagnement du changement et efficacité relationnelle. 1",
//       adress:"8 rue Ebelmen 75012, Paris, France 1",
//       telephone:"06.13.28.98.65 1"
//     },
//      {
//       name: "Jonathan Smith 2",
//       profession:"Graphics Designer 2",
//       description:"Certifié praticien de la relation d’aide par l’approche centrée sur la personne -"
//       +" Certifié Relations efficaces par la méthode Gordon - Membre titulaire de l’association européenne de coaching depuis 2007 - "
//       +" Hervé a plus de 20 ans d'expérience professionnelle. Il était d’abord opérationnel et manager, et depuis plus de 10 ans il est conseil, coach et formateur. Ses spécialités : management, "
//       +" organisation, conduite de projet, accompagnement du changement et efficacité relationnelle. 2",
//       adress:"8 rue Ebelmen 75012, Paris, France 2",
//       telephone:"06.13.28.98.65 2"
//     },
//      {
//       name: "Jonathan Smith 3",
//       profession:"Graphics Designer 3",
//       description:"Certifié praticien de la relation d’aide par l’approche centrée sur la personne -"
//       +" Certifié Relations efficaces par la méthode Gordon - Membre titulaire de l’association européenne de coaching depuis 2007 - "
//       +" Hervé a plus de 20 ans d'expérience professionnelle. Il était d’abord opérationnel et manager, et depuis plus de 10 ans il est conseil, coach et formateur. Ses spécialités : management, "
//       +" organisation, conduite de projet, accompagnement du changement et efficacité relationnelle. 3",
//       adress:"8 rue Ebelmen 75012, Paris, France 3",
//       telephone:"06.13.28.98.65 3"
//     },
//     {
//       name: "Jonathan Smith 4",
//       profession:"Graphics Designer 4",
//       description:"Certifié praticien de la relation d’aide par l’approche centrée sur la personne -"
//       +" Certifié Relations efficaces par la méthode Gordon - Membre titulaire de l’association européenne de coaching depuis 2007 - "
//       +" Hervé a plus de 20 ans d'expérience professionnelle. Il était d’abord opérationnel et manager, et depuis plus de 10 ans il est conseil, coach et formateur. Ses spécialités : management, "
//       +" organisation, conduite de projet, accompagnement du changement et efficacité relationnelle. 4",
//       adress:"8 rue Ebelmen 75012, Paris, France 4",
//       telephone:"06.13.28.98.65 4"
//     },
//      {
//       name: "Jonathan Smith 5",
//       profession:"Graphics Designer 5",
//       description:"Certifié praticien de la relation d’aide par l’approche centrée sur la personne -"
//       +" Certifié Relations efficaces par la méthode Gordon - Membre titulaire de l’association européenne de coaching depuis 2007 - "
//       +" Hervé a plus de 20 ans d'expérience professionnelle. Il était d’abord opérationnel et manager, et depuis plus de 10 ans il est conseil, coach et formateur. Ses spécialités : management, "
//       +" organisation, conduite de projet, accompagnement du changement et efficacité relationnelle. 4",
//       adress:"8 rue Ebelmen 75012, Paris, France 5",
//       telephone:"06.13.28.98.65 5"
//     }
//       ];
       page: number = 1;
     constructor() {
    }

    ngOnInit() {
        // this.heroService.getHeroes()
        //     .then(heroes => this.heroes = heroes);
    }

    // gotoDetail(hero: Hero) {
    //     let link = ['/detail', hero._id];
    //     this.router.navigate(link);
    // }



}