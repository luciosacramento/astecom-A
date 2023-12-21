import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './modules/home/home.service';
import { toArray } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utils } from './core/utils';
import { AppService } from './app.service';

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
  private formBuilder: FormBuilder = new FormBuilder();
  public formGroup:FormGroup = new FormGroup({});

  constructor(private router: Router,private restHome:HomeService, private util:Utils, private appService:AppService) {
    
  }

  ngOnInit(): void {
    this.getConfiguracoes();

    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
    
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

  public sendMail() {

    if(this.formGroup.valid){
      this.appService.sendMail(this.formGroup.value).subscribe(
        {
          next:  (data:any) => {
            this.util.exibirSucesso(data.message);
           },
          error:  (erro) => {
            console.error(erro)
          }
        }
      );
    }else{
      console.log('Formulário inválido');
    }
  }
  
}
