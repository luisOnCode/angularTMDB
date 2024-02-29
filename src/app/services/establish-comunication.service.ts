import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstablishComunicationService {

  data: any;

  constructor() { }

  private actionSource = new Subject<void>();
  establish = this.actionSource.asObservable();

  sendAction() {
    setTimeout(() => {
      this.actionSource.next();
    }, 100)
  }
}
