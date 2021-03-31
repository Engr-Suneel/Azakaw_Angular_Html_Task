import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ApiService } from 'src/app/core/services/api.service';
import { Constants } from 'src/app/helper/constants';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postList: Array<Post> = [];

  constructor(
    private apiService: ApiService,
    private loaderService: LoaderService,
    private authService: AuthenticationService,
  ) { }

  async ngOnInit() {
    await this.fetchPosts();
  }

  async fetchPosts() {
    try {
      this.loaderService.showLoading(Constants.LOADING_PLZ_WAIT);
      let response = await this.apiService.posts.all(Constants.API_POSTS);
      if(response.length>0) {
        this.postList = response?.map(x => new Post(x));
      }
      this.loaderService.hideLeading();
    } catch (error) {
      this.loaderService.error(error?.message);
    }
  }

}
