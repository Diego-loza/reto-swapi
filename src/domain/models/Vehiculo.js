class Vehiculo {
    constructor(data) {
        this.capacidad_carga = data.cargo_capacity;
        this.consumibles = data.consumables;
        this.costo_en_creditos = data.cost_in_credits;
        this.creado = data.created;
        this.tripulacion = data.crew;
        this.editado = data.edited;
        this.longitud = data.length;
        this.fabricante = data.manufacturer;
        this.velocidad_maxima_en_atmosfera = data.max_atmosphering_speed;
        this.modelo = data.model;
        this.nombre = data.name;
        this.pasajeros = data.passengers;
        this.pilotos = data.pilots;
        this.peliculas = data.films;
        this.url = data.url;
        this.clase_vehiculo = data.vehicle_class;
    }

    // Método para obtener la información completa del vehículo
    get() {
        return {
            capacidad_carga: this.capacidad_carga,
            consumibles: this.consumibles,
            costo_en_creditos: this.costo_en_creditos,
            creado: this.creado,
            tripulacion: this.tripulacion,
            editado: this.editado,
            longitud: this.longitud,
            fabricante: this.fabricante,
            velocidad_maxima_en_atmosfera: this.velocidad_maxima_en_atmosfera,
            modelo: this.modelo,
            nombre: this.nombre,
            pasajeros: this.pasajeros,
            pilotos: this.pilotos,
            peliculas: this.peliculas,
            url: this.url,
            clase_vehiculo: this.clase_vehiculo
        };
    }
}

module.exports = Vehiculo;
