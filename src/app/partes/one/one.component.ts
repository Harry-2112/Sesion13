import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  titulo = "Uso de pipes";
  valor = "valor:";
  resultado = ""
}
