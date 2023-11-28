import { Injectable } from '@angular/core';
import { RestService } from 'src/app/core/rest.service';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private  rest: RestService) { }

  public getPagina(id: number) {
    return this.rest.get(environment.api,`pagina?id=${id}`);
  }

  public getPaginasFilho(id: number) {
    return this.rest.get(environment.api,`paginas-filha?id=${id}`);
  }

  public getConfiguracoes() {
    return this.rest.get(environment.api,`configuracoes-personalizadas`);
  }

  public postEmail(data: Array<any>) {
    return this.rest.post(environment.api,`enviar-email`,data);
  }

  public getDiretorias() {
    return this.rest.get(environment.api,`diretorias`);
  }

  public getDemonstrativoFinanceiro() {
    return this.rest.get(environment.api,`demonstrativos_financeiro`);
  }

  public getConselhoFiscal() {
    return this.rest.get(environment.api,`conselho_fiscal`);
  }



}
