class Persona {
    constructor(data) {
        this.anio_nacimiento = data.birth_year;
        this.color_ojos = data.eye_color;
        this.peliculas = data.films;
        this.genero = data.gender;
        this.color_cabello = data.hair_color;
        this.altura = data.height;
        this.planeta_origen = data.homeworld;
        this.masa = data.mass;
        this.nombre = data.name;
        this.color_piel = data.skin_color;
        this.creado = data.created;
        this.editado = data.edited;
        this.especies = data.species;
        this.naves_estelares = data.starships;
        this.url = data.url;
        this.vehiculos = data.vehicles;
    }

    // Método para obtener la información completa de la persona
    get() {
        return {
            anio_nacimiento: this.anio_nacimiento,
            color_ojos: this.color_ojos,
            peliculas: this.peliculas,
            genero: this.genero,
            color_cabello: this.color_cabello,
            altura: this.altura,
            planeta_origen: this.planeta_origen,
            masa: this.masa,
            nombre: this.nombre,
            color_piel: this.color_piel,
            creado: this.creado,
            editado: this.editado,
            especies: this.especies,
            naves_estelares: this.naves_estelares,
            url: this.url,
            vehiculos: this.vehiculos
        };
    }
}

module.exports = Persona;
