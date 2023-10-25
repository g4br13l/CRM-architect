import { Route } from '@angular/router';
import {NxWelcomeComponent} from "./nx-welcome.component";
import {AddCustomerComponent} from "./customer/add-customer/add-customer.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";

export const appRoutes: Route[] = [

  { path: '', component: NxWelcomeComponent, pathMatch: 'full' },
  { path: 'customer/add', component: AddCustomerComponent },
  { path: 'customers', component: ListCustomerComponent },

];
