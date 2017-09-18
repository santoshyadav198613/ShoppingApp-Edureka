import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post/post.service';
import { Post } from '../service/post/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  post = new Post();
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => this.posts = data);
  }

  addPost() {
    this.postService.addPost(this.post).subscribe((data) => console.log(data));
  }

}
