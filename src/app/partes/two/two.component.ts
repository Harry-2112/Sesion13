import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
  titulo = "Currency pipes";
  valor = "valor:";
  resultado = "";
  select = "";
  moneda = "";

  log = ()=>{
    if (this.select ==="1") {
      this.moneda = 'USD'
    }else{
      this.moneda= 'EUR'
    }
  }
}

