import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post = null;
  
  constructor() { }

  ngOnInit() {
    
  }

}
