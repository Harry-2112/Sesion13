import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartesModule } from './partes/partes.module';
import { MomentPipe } from './pipes/moment.pipe';
@NgModule({
    declarations: [
        AppComponent,
        MomentPipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PartesModule,
        FormsModule,

    ]
})
export class AppModule { }
