import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',

  // El pipe tiene que estar pendiente de los cambios q haga angular
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(data: any): any [] {

    // Se crea un pipe que devuelva un array con las claves de los objetos contenidos en un objeto
    const keys = [];

    // Bucle for que recorre los objetos de la data y almacena las claves
    // tslint:disable-next-line:forin
    for (const key in data) {
      keys.push(key);
    }

    return keys;
  }

}
