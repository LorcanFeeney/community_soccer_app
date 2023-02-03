import { Component, OnInit } from '@angular/core';
import { FixturesService } from 'src/app/Service/fixture.service';
import { Fixture } from 'src/app/FixtureModel';
import {HttpErrorResponse} from "@angular/common/http";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-live-fixtures',
  templateUrl: './live-fixtures.component.html',
  styleUrls: ['./live-fixtures.component.scss']
})
export class LiveFixturesComponent implements OnInit {

  pipe = new DatePipe('en-US');
  fixtures: Fixture[] | undefined;
  today = new Date().toDateString();

  constructor(private fixturesService: FixturesService) { }

  ngOnInit() {
    console.log(this.today);
    this.getFixtureData()
    console.log(this.fixtures);
  }

  public getFixtureData(): void {
    this.fixturesService.getFixtures().subscribe(f => {
      f.forEach(e => {
        this.fixtures?.push(<any>{
          homeTeam: e.homeTeam,
          awayTeam: e.awayTeam,
          date: this.pipe.transform(e.date, 'dd/MM/yyyy')
        })
      })
    })
  }

}
