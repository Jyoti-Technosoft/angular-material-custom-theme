import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { MyFavComponent } from './my-fav/my-fav.component';

const routes: Routes = [
  {
    path: 'myfav', component : MyFavComponent
  },
  {
    path: 'myapps', component : MyAppsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
