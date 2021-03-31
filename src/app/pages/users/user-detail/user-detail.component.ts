import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Users } from 'src/app/core/models/users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() users: Users = null;
  @Output() userData = new EventEmitter<Users>();

  constructor() { }

  ngOnInit(): void {
  }

  userClick(user: Users) {
    this.userData.emit(user);
  }

}
