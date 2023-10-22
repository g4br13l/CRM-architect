import { Route } from '@angular/router';
import {ArchitectComponent} from "./architect/architect.component";
import {NxWelcomeComponent} from "./nx-welcome.component";

export const appRoutes: Route[] = [

  { path: '', component: NxWelcomeComponent, pathMatch: 'full' },
  { path: 'architect', component: ArchitectComponent },

];
