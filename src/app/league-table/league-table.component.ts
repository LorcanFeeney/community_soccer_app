import {Component, Input, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {League, LeagueData} from "../LeagueData";
import {TeamsService} from "../Service/teams.service";
import {LeagueDataService} from "../Service/league-data.service";

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {
  @Input() teams: LeagueData[] = [];
  @Input() leagues: League[] = [];

  constructor(private teamsService: TeamsService, private leagueDataService: LeagueDataService){
    this.teams = [];
    this.leagues = [
      {id: 1, leagueName: 'Premier League', activeTeams: []},
      {id: 2, leagueName: 'Premier A', activeTeams: []},
    ];
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
        console.log('1');
        console.log(this.teams);
        console.log(this.leagues);
        this.teams.forEach(team => {
          this.leagues.forEach(league => {
            if (team.leagueId === league.id) {
              league.activeTeams.push(team);
              console.log('2')
              console.log(this.leagues);
            }
          });
        });
        console.log('3')
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
