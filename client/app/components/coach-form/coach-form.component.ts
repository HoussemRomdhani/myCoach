import {Component, Input, OnInit} from '@angular/core';
import {Coach} from "../../models/coach";
import { ActivatedRoute, Params } from '@angular/router';
import {CoachService} from "../../services/coach.service";

@Component({
    selector: 'coach-form',
    templateUrl: './app/components/coach-form/coach-form.component.html'
})

export class CoachFormComponent implements OnInit {
    @Input() coach: Coach;
    newCoach = false;
    error: any;
    navigated = false; // true if navigated here
    constructor(
        private coachService: CoachService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newCoach = true;
                this.coach = new Coach();
            } else {
                this.newCoach = false;
                this.coachService.getCoach(id)
                    .then(hero => this.coach = hero);
            }
        });
    }

    save() {
        this.coachService
            .save(this.coach)
            .then(hero => {
                this.coach = hero; // saved hero, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}