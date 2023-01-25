import {Component, OnInit} from '@angular/core';
import {AuthService} from "../Service/auth.service";

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']

})
export class ResultsListComponent implements OnInit{

  results: any[];

  constructor(private authService: AuthService) {
    this.authService.showNavBar();
    this.results = [
      { homeTeam: 'Athlunkard', homeScore: 2, awayScore: 1, awayTeam: 'Murroe', date: '01/01/2022' },
      { homeTeam: 'Moyross', homeScore: 0, awayScore: 0, awayTeam: 'Geraldines', date: '01/02/2022' },
      { homeTeam: 'Newport', homeScore: 3, awayScore: 2, awayTeam: 'Moyross', date: '01/03/2022' }
    ];
  }
  ngOnInit(): void {
  }
}
