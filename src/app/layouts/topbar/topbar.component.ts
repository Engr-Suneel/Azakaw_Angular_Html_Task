import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from '../../core/services/auth.service';
import { EventService } from 'src/app/core/services/event.service';
import { Constants } from 'src/app/helper/constants';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

/**
 * Topbar component
 */
export class TopbarComponent implements OnInit {

  element;
  configData;
  title: string = "Loading....";

  openMobileMenu: boolean;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  constructor(
    @Inject(DOCUMENT) private document: any, 
    private router: Router, 
    private authService: AuthenticationService,
    private eventService: EventService
  ) {
    let user = this.authService.currentUser();
    if(user) {
      this.title = user.username;
    }
    this.eventService.subscribe(Constants.EVENT_UPDATE_USERNAME_TOP_BAR, (userName: string) => {
      this.title = userName;
    });
  }

  ngOnInit() {
    this.openMobileMenu = false;
    this.element = document.documentElement;
    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3
    };
  }

  /**
   * Logout the user
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/account/login']);
  }

  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

}
