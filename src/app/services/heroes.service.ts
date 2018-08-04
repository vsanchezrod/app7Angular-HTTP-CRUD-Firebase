import { Injectable } from '@angular/core';

// Para poder usar HTTP, se debe inyectar en el constructor
import { Http, Headers } from '@angular/http';

// Para poder usar la interfaz heroe se ha de importar
import { Heroe } from '../interfaces/heroe.interface';

// Se importa para poder usar map
import 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesFireUrl: string = 'https://heroesapp-1a6db.firebaseio.com/heroes.json';


  constructor(private http: Http) { }


  // Función para insertar nuevo heroe
  nuevoHeroe(heroe: Heroe) {

    // CUERPO PETICIÓN. Se va a crear un string de un JSON válido
    let body = JSON.stringify(heroe);

    // CABECERA DEL CUERPO DE LA PETICIÓN
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    // El servicio HTTP.POST regresa un observable
    // dentro de post() se pasa la URL a donde se manda la petición, el body y un objeto con los headers
    // Con map podemos transformar los datos que vienen
    return this.http.post(this.heroesFireUrl, body, {headers}).map(res => {
      console.log(res.json());
      return res.json();
    });

  }

}
