import { Component, OnDestroy, OnInit, } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post, PostCategory } from '../models/blog';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];

  constructor(public postService: PostsService) {

  }

  ngOnDestroy(): void {
    //
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(dati => {
      this.posts = dati;
    });
  }

  filter(cat?: PostCategory) {
    if (cat) {
      // filtra per categoria
      this.posts = this.postService.getPostsByCategory(cat);
    } else {
      this.getPosts();
    }
  }
}
