class NaveEspacial {
    constructor(data) {
        this.mglt = data.MGLT;
        this.capacidad_carga = data.cargo_capacity;
        this.consumibles = data.consumables;
        this.costo_en_creditos = data.cost_in_credits;
        this.creado = data.created;
        this.tripulacion = data.crew;
        this.editado = data.edited;
        this.clasificacion_hiperimpulsor = data.hyperdrive_rating;
        this.longitud = data.length;
        this.fabricante = data.manufacturer;
        this.velocidad_maxima_en_atmosfera = data.max_atmosphering_speed;
        this.modelo = data.model;
        this.nombre = data.name;
        this.pasajeros = data.passengers;
        this.peliculas = data.films;
        this.pilotos = data.pilots;
        this.clase_nave = data.starship_class;
        this.url = data.url;
    }

    // Método para obtener la información completa de la nave espacial
    get() {
        return {
            mglt: this.mglt,
            capacidad_carga: this.capacidad_carga,
            consumibles: this.consumibles,
            costo_en_creditos: this.costo_en_creditos,
            creado: this.creado,
            tripulacion: this.tripulacion,
            editado: this.editado,
            clasificacion_hiperimpulsor: this.clasificacion_hiperimpulsor,
            longitud: this.longitud,
            fabricante: this.fabricante,
            velocidad_maxima_en_atmosfera: this.velocidad_maxima_en_atmosfera,
            modelo: this.modelo,
            nombre: this.nombre,
            pasajeros: this.pasajeros,
            peliculas: this.peliculas,
            pilotos: this.pilotos,
            clase_nave: this.clase_nave,
            url: this.url
        };
    }
}

module.exports = NaveEspacial;
