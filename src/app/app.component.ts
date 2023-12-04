import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './modules/home/home.service';
import { toArray } from 'rxjs';

interface Parceiro {
  value: {
    link: string;
    imagem: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title:string = 'ASTECOM Bahia';
  public configuracoes: any | null = null;
  public parceiroList: Parceiro | null = null;

  constructor(private router: Router,private restHome:HomeService) {
    
  }

  ngOnInit(): void {
    this.getConfiguracoes();
  }

  public getConfiguracoes() {
    const data$ = this.restHome.getConfiguracoes();
    data$
    .pipe(toArray())
    .subscribe((array) => {
      this.configuracoes = array[0];
      this.parceiroList = this.configuracoes.parceiros;
      console.log(this.parceiroList);
    });
  }

  public actualPage():string{
    const currentUrl = this.router.url; // Obtém a URL atual
    const segments = currentUrl.split('/'); // Divide a URL em segmentos
    const pageName = segments[1]; // Obtém o último segmento, que é o nome da página
    console.log('Nome da página atual:', pageName);
    return pageName;
  }
  
}
