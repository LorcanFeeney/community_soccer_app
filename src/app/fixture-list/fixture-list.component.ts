import {Component, OnInit} from '@angular/core';
import {AuthService} from "../Service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fixture-list',
  templateUrl: './fixture-list.component.html',
  styleUrls: ['./fixture-list.component.scss']
})
export class FixtureListComponent implements OnInit {

  fixtures: any[];

  constructor(private authService: AuthService) {
    this.authService.showNavBar();
    this.fixtures = [
      {homeTeam: 'Athlunkard ', awayTeam: 'Geraldines', date: '10/01/2022'},
      {homeTeam: 'Newport', awayTeam: 'Murroe', date: '17/01/2022'},
      {homeTeam: 'Moyross', awayTeam: 'Athlunkard', date: '24/01/2022'}
    ];
  }
  ngOnInit(): void {
  }


}
