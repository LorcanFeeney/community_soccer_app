import { Component, OnInit } from '@angular/core';
import { Team } from './TeamModel';
import { TeamsService } from './Service/teams.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public teams: Team[] = [];

  
  constructor(private teamsService: TeamsService){}


  ngOnInit(): void {
    this.getTeams();
  }


  public getTeams(): void {
    this.teamsService.getTeams().subscribe(
      (response: Team[]) => {
        this.teams = response;
        console.log(this.teams);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}

