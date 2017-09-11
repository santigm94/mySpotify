
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
    declarations: [ AppComponent, NavbarComponent, AboutComponent ],
    imports: [ BrowserModule ],
    exports: [],
    providers: [],
    bootstrap: [ AppComponent ]
})


export class AppModule{

}