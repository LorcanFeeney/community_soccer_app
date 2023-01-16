import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeagueData } from 'src/app/LeagueData'
import {Team} from "../TeamModel";

@Injectable({
  providedIn: 'root'
})
export class LeagueDataService {

  constructor(private http: HttpClient) { }
  public getLeagueData(): Observable<LeagueData[]>{
    return this.http.get<LeagueData[]>('http://localhost:8080/api/v1/leagues/data');
  }
}
