import { Injectable } from '@angular/core';
import { RestService } from './core/rest.service';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private server: RestService) { }

  public sendMail(value:Array<any>){
    return this.server.post(environment.api,`enviar-email`,value);
  }

}
