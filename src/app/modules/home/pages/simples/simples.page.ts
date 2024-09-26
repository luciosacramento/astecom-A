import { Component } from '@angular/core';
import { HomeService } from '../../home.service';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-simples',
  templateUrl: './simples.page.html',
  styleUrls: ['./simples.page.scss']
})
export class SimplesPage {

  public demonstrativo: any | null = null;
  public selectedValue: string | null = null;
  public pagina: any | null = null;

  constructor(private restHome:HomeService) { }

  ngOnInit(): void {
   this.getPagina(127);
  }

  public getPagina(id: number) {

    this.restHome.getPagina(id).subscribe((data:any) => {
      console.log(data);
      this.pagina = data;
    });

  }

}
