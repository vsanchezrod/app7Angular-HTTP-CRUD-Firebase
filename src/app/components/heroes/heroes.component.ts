import { Component, OnInit } from '@angular/core';

// Se importa el servicio
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})

export class HeroesComponent implements OnInit {

  // Se crea un array
  heroes: any[] = [];


  constructor(private _heroesService: HeroesService) {

    // Para cargar todos los heroes en la tabla
    this._heroesService.getHeroes().subscribe(data => {
      this.heroes = data;
    });


  }

  ngOnInit() {
  }
  
  // Función para borrar héroe
  borrarHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$).subscribe(respuesta => {

      // Según la documentación de FireBase si devuelve algo ha sido un error
      if (respuesta !== null) {
        console.error(respuesta);
      }
      else {
        // Todo ha ido bien -> Se necesita eliminar el objeto de la tabla sin recargar la pagina
        delete this.heroes[key$];
      }
    });
  }
}

