import { Injectable } from '@angular/core';
import { Constants } from 'src/app/helper/constants';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  
	user: User;
  
	constructor(
    public storageService: StorageService
  ) {
  }

  /**
   * Returns the current user
   */
  public currentUser(): User {
    let user = this.storageService.getInStorage(Constants.LS_USER_DATA);
		this.user = user ? user as User : null;
		return this.user;
  }

  /**
   * Logout the user
   */
  logout() {
    this.user = null;
		this.storageService.clearStorage();
  }
}

