import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { MyFavComponent } from './my-fav/my-fav.component';

const routes: Routes = [
  {
    path: 'myfav', component : MyFavComponent
  },
  {
    path: 'myapps', component : MyAppsComponent
  },
  {
    path: 'adminpanel', component : AdminPanelComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
