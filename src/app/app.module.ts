import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Para trabajar con formularios
import { FormsModule } from '@angular/forms';

// Para trabajar con HTTP
import { HttpModule } from '@angular/http';

// Componentes
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './services/heroes.service';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
