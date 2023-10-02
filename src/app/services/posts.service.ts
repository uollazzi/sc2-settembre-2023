import { Injectable } from '@angular/core';
import { BLOG } from '../data/blog';
import { Blog, Post, PostCategory } from '../models/blog';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  blog: Blog = BLOG;

  preferiti: Post[] = [];

  selectedCategory?: PostCategory;

  constructor() { }

  getPosts(): Post[] {
    this.selectedCategory = undefined;
    return this.blog.posts;

  }

  getPostsByCategory(category: PostCategory): Post[] {
    this.selectedCategory = category;
    return this.blog.posts.filter(x => x.category == category.id);
  }

  getCategories(): PostCategory[] {
    return this.blog.postCategories;
  }

  aggiungiAPreferiti(post: Post) {
    let p = this.preferiti.find(x => x.id == post.id);

    if (p == undefined) {
      this.preferiti.push(post);
    }
  }

  rimuoviDaPreferiti(post: Post) {
    // let p = this.preferiti.find(x => x.id == post.id);

    // if (p != undefined) {
    //   this.preferiti.splice(this.preferiti.indexOf(p), 1);
    // }

    _.remove(this.preferiti, x => x.id == post.id);
  }

  svuotaPreferiti() {
    this.preferiti = [];
  }
}
