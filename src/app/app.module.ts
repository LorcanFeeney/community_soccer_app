import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsService } from './Service/teams.service';
import { LeagueTableComponent } from './league-table/league-table.component';
@NgModule({
  declarations: [
  
    LeagueTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
