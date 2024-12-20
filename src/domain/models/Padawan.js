export class Persona {
    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.persona = data.persona;
        this.url = data.url;
        this.creado = data.created;
        this.editado = data.edited;
    }

    // Método para obtener la información completa de la persona
    get() {
        return {
            id: this.id,
            nombre: this.nombre,
            persona: this.persona,
            url: this.url,
            creado: this.creado,
            editado: this.editado
        };
    }
}
