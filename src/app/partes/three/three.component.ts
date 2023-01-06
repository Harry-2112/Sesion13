import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent {
  titulo="Contador de tiempo";
  valor = "Ingresar Publicacion";
  resultado ="";
  publicaciones:any=[
    {nombre:"hola profesor",creacion:"January 6th 2023, 4:44:09 pm",relativa:""}
  ]
  publicar=()=>{
    let fecha = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
    let fechaRelativa = moment(fecha,'MMMM Do YYYY, h:mm:ss a').fromNow();
    let newObj = {nombre:this.resultado,creacion:fecha,relativa:fechaRelativa}
    this.publicaciones.push(newObj)
    console.log(moment().startOf('hour').fromNow());
  }
  compararFecha=()=>{
    this.publicaciones.forEach((e: any) => {
      let fechaCreacion = e.creacion;
      let fechaRelativa = moment(fechaCreacion,'MMMM Do YYYY, h:mm:ss a').fromNow();
      e.relativa = fechaRelativa;
    });
  }
  repetirCadaSegundo=()=>{
    setInterval(this.compararFecha, 1000);
  }
}
