import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PreferitiComponent } from './preferiti/preferiti.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostDetailComponent,
    PreferitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
