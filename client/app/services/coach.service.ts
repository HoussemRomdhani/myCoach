import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Coach} from "../models/coach";

@Injectable()
export class CoachService {

    private coachsUrl = 'api/coachs';  // URL to web api

    constructor(private http: Http) { }

    getCoachs(): Promise<Coach[]> {
        return this.http.get(this.coachsUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getCoach(id: string) {
        return this.http.get(this.coachsUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(coach: Coach): Promise<Coach>  {
        if (coach._id) {
            return this.put(coach);
        }
        return this.post(coach);
    }

    private post(coach: Coach): Promise<Coach> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.coachsUrl, JSON.stringify(coach), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(coach: Coach) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.coachsUrl}/${coach._id}`;

        return this.http
            .put(url, JSON.stringify(coach), {headers: headers})
            .toPromise()
            .then(() => coach)
            .catch(this.handleError);
    }

    delete(coach: Coach) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.coachsUrl}/${coach._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}