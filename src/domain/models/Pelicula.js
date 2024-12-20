class Pelicula {
    constructor(data) {
        this.personajes = data.characters;
        this.creado = data.created;
        this.director = data.director;
        this.editado = data.edited;
        this.episodio_id = data.episode_id;
        this.introduccion = data.opening_crawl;
        this.planetas = data.planets;
        this.productores = data.producer;
        this.fecha_lanzamiento = data.release_date;
        this.especies = data.species;
        this.naves_estelares = data.starships;
        this.titulo = data.title;
        this.url = data.url;
        this.vehiculos = data.vehicles;
    }

    // Método para obtener la información completa de la película
    get() {
        return {
            personajes: this.personajes,
            creado: this.creado,
            director: this.director,
            editado: this.editado,
            episodio_id: this.episodio_id,
            introduccion: this.introduccion,
            planetas: this.planetas,
            productores: this.productores,
            fecha_lanzamiento: this.fecha_lanzamiento,
            especies: this.especies,
            naves_estelares: this.naves_estelares,
            titulo: this.titulo,
            url: this.url,
            vehiculos: this.vehiculos
        };
    }
}

module.exports = Pelicula;
