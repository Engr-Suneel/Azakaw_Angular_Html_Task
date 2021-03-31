import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Users } from 'src/app/core/models/users';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Constants } from 'src/app/helper/constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: Array<Users> = [];
  userDetails: Users = null;

  constructor(
    private apiService: ApiService,
    private loaderService: LoaderService,
    private authService: AuthenticationService,
    private modalService: NgbModal,
  ) { }

  async ngOnInit() {
    this.fetchUsers();
  }

  async fetchUsers() {
    try {
      this.loaderService.showLoading(Constants.LOADING_PLZ_WAIT);
      let response = await this.apiService.users.all(Constants.API_USERS);
      if(response.length>0) {
        this.usersList = response?.map(x => new Users(x));
        console.log(this.usersList);  
      }
      this.loaderService.hideLeading();
    } catch (error) {
      this.loaderService.error(error?.message);
    }
  }

  onUserClicked(event, content) {
    if(event) {
      this.userDetails = event;
      console.log(this.userDetails);
      this.openModal(content)
    }
  }

  openModal(content) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      centered: true,
      ariaLabelledBy: 'modal-basic-title',
    };
    this.modalService.open(content, ngbModalOptions).result.then((result) => {
      console.log("Closed with", result);
    }, (reason) => {
      console.log(reason);
      this.getDismissReason(reason);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
