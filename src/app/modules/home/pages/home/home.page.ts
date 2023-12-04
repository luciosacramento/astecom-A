import { Component } from '@angular/core';
import { HomeService } from '../../home.service';
import { toArray } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
Number(arg0: string) {
throw new Error('Method not implemented.');
}
  
    public selectedValue: string | null = null;
    public selectedCar: string | null = null;
    public paginasFilho: any | null = null;
    public diretorias: any | null = null;
    public pagina: any | null = null;


    constructor(private restHome:HomeService) { }

    ngOnInit(): void {
      this.getPaginasFilho(63);
      this.getDiretorias();
      this.getPagina(71);
    }

    public getPaginasFilho(id: number) {
      const data$ = this.restHome.getPaginasFilho(id);
      data$
      .pipe(toArray())
      .subscribe((array) => {
        this.paginasFilho = array[0];
      });
    }

    public getPagina(id: number) {
      const data$ = this.restHome.getPagina(id);
      data$
      .pipe(toArray())
      .subscribe((array) => {
        this.pagina = array[0];
      });
    }

    public postEmail(data: Array<any>) {
      const data$ = this.restHome.postEmail(data);
      data$
      .pipe(toArray())
      .subscribe((array) => {
        this.paginasFilho = array[0];
      });
    }

    public getDiretorias() {
      const data$ = this.restHome.getDiretorias();
      data$
      .pipe(toArray())
      .subscribe((array) => {
        this.diretorias = array[0];
      });
    } 

    public getDemonstrativoFinanceiro() {
      const data$ = this.restHome.getDemonstrativoFinanceiro();
      data$
      .pipe(toArray())
      .subscribe((array) => {
        this.paginasFilho = array[0];
      });
    }

    public getConselhoFiscal() {
      const data$ = this.restHome.getConselhoFiscal();
      data$
      .pipe(toArray())
      .subscribe((array) => {
        this.paginasFilho = array[0];
      });
    }

    public ConvertStringToNumber(value: string) {
      var numeric = Number(value);
      return numeric;
  }



}
