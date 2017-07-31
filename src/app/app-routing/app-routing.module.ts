import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {GearComponent} from '../gear/gear.component';
import {ContactComponent} from '../contact/contact.component';
import {GearListComponent} from '../gear/gear-list/gear-list.component';
import {GearSelectComponent} from '../gear/gear-select/gear-select.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gear', component: GearComponent, children: [
    {path: '', component: GearSelectComponent},
    {path: ':id', component: GearListComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
