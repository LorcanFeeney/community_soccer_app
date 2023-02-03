import {Component, Input, OnInit} from '@angular/core';
import { TeamsService } from './Service/teams.service';
import { HttpErrorResponse } from '@angular/common/http';
import {League, LeagueData} from "./LeagueData";
import {LeagueDataService} from "./Service/league-data.service";
import {AuthService} from "./Service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  isLoggedIn = false;
  @Input() links: Array<{ name: string; path: string; }> | undefined;
  teams: LeagueData[];
  leagues: League[];

  constructor(private teamsService: TeamsService, private leagueDataService: LeagueDataService, private authService: AuthService){
    this.authService.isLoggedIn.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });

    this.teams = [];
    this.leagues = [];
    this.links = [
      {name: 'League Tables', path: 'leagueTable'},
      {name: 'Fixtures', path: 'fixtures'},
      {name: 'Results', path: 'results'},
      {name: 'Live Fixtures', path: 'liveFixtures'}
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
      },
      (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
  }

}

