
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

//Servicios
import { SpotifyService } from "./shared/spotify.service";

//Rutas
import { AppRoutesModule } from './app.routes';

@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutesModule 
    ],
    declarations: [ 
        AppComponent, 
        NavbarComponent, 
        AboutComponent, 
        SearchComponent 
    ],
    exports: [],
    providers: [
        SpotifyService
    ],
    bootstrap: [ 
        AppComponent 
    ]
})


export class AppModule{

}