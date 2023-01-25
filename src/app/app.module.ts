import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsService } from './Service/teams.service';
import { LeagueTableComponent } from './league-table/league-table.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from "@angular/material/radio";
import { BrowserAnimationsModule }  from "@angular/platform-browser/animations";
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { FixtureListComponent } from './fixture-list/fixture-list.component';
import { ResultsListComponent } from './results-list/results-list.component';

@NgModule({
  declarations: [
    LeagueTableComponent,
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FixtureListComponent,
    ResultsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/login', pathMatch: 'full'},
    ]),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
