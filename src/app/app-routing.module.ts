import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PreferitiComponent } from './preferiti/preferiti.component';

const routes: Routes = [
  {
    path: "", component: PostsListComponent
  },
  {
    path: "preferiti", component: PreferitiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
