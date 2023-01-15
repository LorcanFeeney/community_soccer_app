import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/app/TeamModel'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  constructor(private http: HttpClient) { }
  public getTeams(): Observable<Team[]>{
    return this.http.get<Team[]>('http://localhost:8080/api/v1/teams/all');
  }
}
