import { Component } from '@angular/core';
import { HomeService } from '../../home.service';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-demonstrativo-financeiro',
  templateUrl: './demonstrativo-financeiro.page.html',
  styleUrls: ['./demonstrativo-financeiro.page.scss']
})
export class DemonstrativoFinanceiroPage {

  public demonstrativo: any | null = null;
  public selectedValue: string | null = null;

  constructor(private restHome:HomeService) { }

  ngOnInit(): void {
    this.getDemonstrativo();
  }

  public getDemonstrativo() {
    const data$ = this.restHome.getDemonstrativoFinanceiro();
    data$
    .pipe(toArray())
    .subscribe((array) => {
      console.log(array);
      this.demonstrativo = array[0];
    });
  } 

  public ConvertStringToNumber(value: string) {
    var numeric = Number(value);
    return numeric;
}


}
