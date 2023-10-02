import { Component, Input } from '@angular/core';
import { Post } from '../models/blog';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  @Input()
  post?: Post;

  constructor(public ps: PostsService) {

  }
}
