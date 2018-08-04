import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

// Se importa la interfaz
import { Heroe } from '../../interfaces/heroe.interface';

// Se importa el servicio
import { HeroesService } from '../../services/heroes.service';

// Se importa Router para poder navegar a otra página cuando se inserta un registro nuevo
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  // Crear un objeto que permita setear datos y a la vez poder realizar el posteo de esa información
  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: '',
  };

  constructor(private _heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
  }

  // Método para guardar datos
  guardar() {
    console.log(this.heroe);

    this._heroesService.nuevoHeroe(this.heroe).subscribe(data => {

      // Vamos a navegar a la URL del heroe creado, por ello se le pasa su id en la ruta que es data.name
      this.router.navigate(['/heroe', data.name]);
      }, error => console.error(error));

  }


}
