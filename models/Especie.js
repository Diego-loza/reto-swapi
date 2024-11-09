class Especie {
    constructor(data) {
        this.altura_promedio = data.average_height;
        this.promedio_vida = data.average_lifespan;
        this.clasificacion = data.classification;
        this.creado = data.created;
        this.designacion = data.designation;
        this.editado = data.edited;
        this.colores_ojos = data.eye_colors;
        this.colores_cabello = data.hair_colors;
        this.mundo_origen = data.homeworld;
        this.idioma = data.language;
        this.nombre = data.name;
        this.personas = data.people;
        this.peliculas = data.films;
        this.colores_piel = data.skin_colors;
        this.url = data.url;
    }

    // Método para obtener la información completa de la especie
    get() {
        return {
            altura_promedio: this.altura_promedio,
            promedio_vida: this.promedio_vida,
            clasificacion: this.clasificacion,
            creado: this.creado,
            designacion: this.designacion,
            editado: this.editado,
            colores_ojos: this.colores_ojos,
            colores_cabello: this.colores_cabello,
            mundo_origen: this.mundo_origen,
            idioma: this.idioma,
            nombre: this.nombre,
            personas: this.personas,
            peliculas: this.peliculas,
            colores_piel: this.colores_piel,
            url: this.url
        };
    }
}

module.exports = Especie;
