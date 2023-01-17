import { Component, OnInit } from '@angular/core';
import { Team } from './TeamModel';
import { TeamsService } from './Service/teams.service';
import { HttpErrorResponse } from '@angular/common/http';
import {League, LeagueData} from "./LeagueData";
import {LeagueDataService} from "./Service/league-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  teams: LeagueData[];
  leagues: League[];


  constructor(private teamsService: TeamsService, private leagueDataService: LeagueDataService){
    this.teams = [];
    this.leagues = [];
  }

  ngOnInit(): void {
    this.getInitData();
  }

  getInitData (): void {
    this.getLeagueData();
  }

  public getLeagueData(): void {
    this.leagueDataService.getLeagueData().subscribe(
      (response: Array<any>) => {
        this.teams = response.sort((a,b) => (a.points < b.points) ? 1 : -1);
      },
      (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
  }

}

