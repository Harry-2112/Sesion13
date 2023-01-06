import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    OneComponent,
    TwoComponent,
    ThreeComponent
  ]
})
export class PartesModule { }
