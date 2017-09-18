import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class PostService {

  constructor(private httpService: HttpClient) { }

  getPosts() {
    let header = new HttpHeaders().set('token', 'testtoken');
    return this.httpService.get<Post[]>('http://jsonplaceholder.typicode.com/posts', { headers: header });
  }


  addPost(post: Post) {
    return this.httpService.post('http://jsonplaceholder.typicode.com/posts', post);

  }

}
