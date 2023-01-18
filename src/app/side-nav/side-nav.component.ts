import { Component } from '@angular/core';
import {MatDrawerMode} from '@angular/material/sidenav';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  mode = new FormControl('over' as MatDrawerMode);

}
