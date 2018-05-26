import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageInfoService {

  constructor() { }

  /** Log a HeroService message with the MessageService */
  public log(message: string) {
    console.log('HeroService: ' + message);
  }

}
