import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full',
},
{
    path: 'home-page',
    loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule),
},
{
    path: 'admin',
    loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
