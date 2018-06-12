import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToasterService {

  constructor(private toastr: ToastrService) {
  }

  public showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }

  public showError(message: string, title: string) {
    this.toastr.error(message, title);
  }
}
