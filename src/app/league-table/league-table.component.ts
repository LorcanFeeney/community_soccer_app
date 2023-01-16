import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {
  @Input() teams: {
    id: number;
    teamId: number;
    teamName: string;
    leagueId: number;
    matchesPlayed: number;
    matchesWon: number;
    matchesDraw: number;
    matchesLoss: number;
    goalsFor: number;
    goalsAgainst: number;
    points: number;
  }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
