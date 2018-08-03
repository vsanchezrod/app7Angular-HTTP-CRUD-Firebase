import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

// Se importa la interfaz
import { Heroe } from '../../interfaces/heroe.interface';

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

  constructor() { }

  ngOnInit() {
  }

  // Método para guardar datos
  guardar() {
    console.log(this.heroe);
  }


}
