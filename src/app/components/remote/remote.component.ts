import { PostService } from './../../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  constructor(private service: PostService) { }
  posts:any = [];
  input = '';

  ngOnInit(): void {
    this.service.getPosts().subscribe(res => {
      console.log('RES : ', res);
      this.posts = res;
    });
  }




  // obs = Observable.interval(1000).take(5).map(a => {
  //   return a * 2
  // }).subscribe(a => {

  //   console.log(a);
  // })

}
