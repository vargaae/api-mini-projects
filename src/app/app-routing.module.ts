import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { ImageListComponent } from './image-list/image-list.component';
import { PostsComponent } from './posts/posts.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'followers/:id/:login',
    component: GithubProfileComponent
  },
  {
    path: 'followers',
    component: GithubFollowersComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'imagelist',
    component: ImageListComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'todo/:status',
    component: TodoComponent
  },
  // { path: ':status', component: TodoComponent },
  // { path: '**', redirectTo: '/all' },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
