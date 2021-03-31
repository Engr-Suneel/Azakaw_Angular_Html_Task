import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class LoaderService {

  constructor(
    
  ) { }

  showLoading(title: string) {
    Swal.fire({
      title: title,
      text: 'Please Wait for a while...',
      allowOutsideClick: false,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      showLoaderOnConfirm: true,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
  }

  hideLeading() {
    Swal.close();
  }

  success(message: string) {
    Swal.fire('Succes!', message, 'success');
  }

  error(message: string) {
    Swal.fire('Error!', message, 'error');
  }

  warning(message: string) {
    Swal.fire('Warning!', message, 'warning');
  }

  info(message: string) {
    Swal.fire('Info!', message, 'info');
  }

  async showDailog(title, message, type): Promise<any> {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title: title,
        text: message,
        icon: type,
        showCancelButton: false,
        confirmButtonColor: '#34c38f',
        confirmButtonText: 'Okay!',
        allowOutsideClick: false
      }).then(result => {
        if (result.value) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }
}