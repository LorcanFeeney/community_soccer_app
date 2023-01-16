import { Component, OnInit } from '@angular/core';
import { Team } from './TeamModel';
import { TeamsService } from './Service/teams.service';
import { HttpErrorResponse } from '@angular/common/http';
import {LeagueData} from "./LeagueData";
import {LeagueDataService} from "./Service/league-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  teams:LeagueData[] = [];
  leagueData: LeagueData[] = [];

  constructor(private teamsService: TeamsService, private leagueDataService: LeagueDataService){}


  ngOnInit(): void {
    this.getInitData();
  }

  getInitData (): void {
    this.getLeagueData();
  }

  public getLeagueData(): void {
    this.leagueDataService.getLeagueData().subscribe(
      (response: LeagueData[]) => {
        response.forEach((e) => {
          this.teams.push({
            goalsAgainst: e.goalsAgainst,
            goalsFor: e.goalsFor,
            leagueId: e.leagueId,
            matchesDraw: e.matchesDraw,
            matchesLoss: e.matchesLoss,
            matchesPlayed: e.matchesPlayed,
            matchesWon: e.matchesWon,
            teamId: e.teamId,
            teamName: e.teamName,
            id: e.id,
            points: e.points,
          })

        })
      },
      (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
  }

  // public dataSourceBuilder(data: any): Array<any> {
  //   const leagueData = new Array<LeagueData>();
  //   leagueData.forEach((e) => {
  //     this.teams.push({
  //       name: e.teamName,
  //       played: e.matchesPlayed,
  //       wins: e.matchesWon,
  //       draws: e.matchesDraw,
  //       losses: e.matchesLoss,
  //       gf: e.goalsFor,
  //       ga: e.goalsAgainst,
  //       points: e.points
  //     })
  //   })
  //   return(leagueData);
  // }

}

