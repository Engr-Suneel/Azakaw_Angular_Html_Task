import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Constants } from 'src/app/helper/constants';
import { IUser } from 'src/app/core/interfaces/response';
import { Utils } from 'src/app/helper/utils';
import { User } from 'src/app/core/models/user';
import { StorageService } from 'src/app/core/services/storage.service';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router, 
    private authenticationService: AuthenticationService,
    private loader: LoaderService,
    private storageService: StorageService,
    private eventService: EventService
  ) { 

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    });

    // reset login status
    this.authenticationService.logout();
  }

  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loader.showLoading(Constants.LOADING_PLZ_WAIT);
    setTimeout(()=> {
      let username = this.f.username.value;
      let password = this.f.password.value;
      if(username == Constants.USERNAME && password == Constants.PASSWORD) {
        this.loader.hideLeading();
        let user = new User(Utils.getDefaultUser());
        console.log(user);
        this.storageService.setInStorage(Constants.LS_USER_DATA, user);
        this.eventService.broadcast(Constants.EVENT_UPDATE_USERNAME, user.username);
        this.router.navigate(['/']);
      } else {
        this.loader.error(Constants.INVALID_MSG);
      }
    }, 1000);
  }
}
