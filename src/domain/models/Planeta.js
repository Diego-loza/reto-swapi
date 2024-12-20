class Planeta {
    constructor(data) {
        this.clima = data.climate;
        this.creado = data.created;
        this.diametro = data.diameter;
        this.editado = data.edited;
        this.peliculas = data.films;
        this.gravedad = data.gravity;
        this.nombre = data.name;
        this.periodo_orbital = data.orbital_period;
        this.poblacion = data.population;
        this.residentes = data.residents;
        this.periodo_rotacion = data.rotation_period;
        this.agua_superficie = data.surface_water;
        this.terreno = data.terrain;
        this.url = data.url;
    }

    // Método para obtener la información completa del planeta
    get() {
        return {
            clima: this.clima,
            creado: this.creado,
            diametro: this.diametro,
            editado: this.editado,
            peliculas: this.peliculas,
            gravedad: this.gravedad,
            nombre: this.nombre,
            periodo_orbital: this.periodo_orbital,
            poblacion: this.poblacion,
            residentes: this.residentes,
            periodo_rotacion: this.periodo_rotacion,
            agua_superficie: this.agua_superficie,
            terreno: this.terreno,
            url: this.url
        };
    }
}

module.exports = Planeta;
