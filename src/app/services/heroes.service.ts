import { Injectable } from '@angular/core';

// Para poder usar HTTP, se debe inyectar en el constructor
import { Http, Headers } from '@angular/http';

// Para poder usar la interfaz heroe se ha de importar
import { Heroe } from '../interfaces/heroe.interface';

// Se importa para poder usar map
import 'rxjs-compat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesFireUrl: string = 'https://heroesapp-1a6db.firebaseio.com/heroes.json';
  heroeFireUrl: string = 'https://heroesapp-1a6db.firebaseio.com/heroes/';

  constructor(private http: Http) { }


  // POST - Función para insertar nuevo heroe
  public nuevoHeroe(heroe: Heroe): Observable<any> {

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

   // PUT - Función para actualizar un heroe
  actualizarHeroe(heroe: Heroe, key$: string): Observable<any> {

    // CUERPO PETICIÓN. Se va a crear un string de un JSON válido
    let body = JSON.stringify(heroe);

    // CABECERA DEL CUERPO DE LA PETICIÓN
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    // Se crea un nueva URL con el key$ que es el ID del heroe (nomre del nodo de la BBDD)
    let url = `${this.heroeFireUrl}/${key$}.json`;

    return this.http.put(url, body, {headers}).map(res => {
      console.log(res.json());
      return res.json();
    });

  }

  // GET - Función para realizar una petición GET y recuperar un héroe
  getHeroe(key$: string): Observable<any> {

    // URL para el get
    let url = `${this.heroeFireUrl}/${key$}.json`;

    return this.http.get(url).map(res => {
      return res.json();
    });
  }

  // GET - Función para realizar una petición GET y recuperar el listado de héroes
  getHeroes(): Observable<any> {

    return this.http.get(this.heroesFireUrl).map(res => {
      return res.json();
    });
  }

  borrarHeroe(key$: string): Observable<any> {

    // URL
    let url = `${this.heroeFireUrl}/${key$}.json`;
    return this.http.delete(url).map(res => {
      return res.json();
    });
  }


}
