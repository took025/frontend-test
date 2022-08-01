import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'groups',
    pathMatch: 'full',
},
{
    path: 'groups',
    loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule),
},
{
    path: 'roles',
    loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
