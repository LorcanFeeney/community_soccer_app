import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LeagueTableComponent} from "./league-table/league-table.component";
import {FixtureListComponent} from "./fixture-list/fixture-list.component";
import {ResultsListComponent} from "./results-list/results-list.component";
import {LiveFixturesComponent} from "./live-fixtures/live-fixtures.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'leagueTable', component: LeagueTableComponent },
  { path: 'fixtures', component: FixtureListComponent},
  { path: 'results', component: ResultsListComponent },
  { path: 'liveFixtures', component: LiveFixturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
