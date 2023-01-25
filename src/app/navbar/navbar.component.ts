import {Component, Input, OnInit} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})


export class NavbarComponent implements OnInit {
  @Input() links: Array<{ name: string; path: string; }> | undefined;

  constructor(){
    this.links = [
      {name: 'League Tables', path: 'leagueTable'},
      {name: 'Fixtures', path: 'login'},
      {name: 'Results', path: 'leagueTable'}
    ];
  }

  ngOnInit(): void {
  }




}
