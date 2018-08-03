// Creamos una interfaz para el heroe

export interface Heroe {
    nombre: string;
    bio: string;
    casa: string;
    // Llave que genera por nosotros el Firebase
    key$?: string;
}
