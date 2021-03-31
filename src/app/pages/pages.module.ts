import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { PagesRoutingModule } from './pages-routing.module';

import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3
};

@NgModule({
  declarations: [PostsComponent, UsersComponent, PostDetailComponent, UserDetailComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PerfectScrollbarModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PagesModule { }
