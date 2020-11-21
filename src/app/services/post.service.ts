import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  posts: any[] = [];

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any>(this.url);
  }

  // createPost() {
  //   const post = {
  //     title: this.input,
  //     id: ''
  //   };
  //   console.log('IP:', this.input);

  //   this.http.post(this.url, JSON.stringify(post))
  //     .subscribe(res => {
  //       post.id = res?.id;
  //       console.log('post REes: ', post);
  //       this.posts.unshift(post);
  //       this.input = '';
  //     });
  // }


}
