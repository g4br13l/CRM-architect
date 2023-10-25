import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NavCrmComponent} from "./shared/components/nav-crm/nav-crm.component";

@Component({
  standalone: true,
  imports: [RouterModule, NavCrmComponent],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crm-users';
}
