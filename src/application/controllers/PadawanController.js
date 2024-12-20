const PadawanService = require("../../domain/services/PadawanService");

class PadawanController {
    constructor() {
        this.padawanService = new PadawanService();
    }

    async createPadawan(event) {
        try {
            const result = await this.padawanService.createPadawan(event);
            if(result == null)
                throw new Error("Error al crear Padawan");

            return {
                statusCode: 201,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(result)
            }
        } catch(e) {
            console.log(e)
            return {
                statusCode: e.statusCode || 500,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({Message: e.message})
            }
        }
    }

    async getPadawan(event) {
        try {
            const result = await this.padawanService.getPadawan(event);
            if(result == null)
                throw new Error("Error al buscar Padawans");

            return {
                statusCode: 201,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(result)
            }
        } catch(e) {
            console.log(e)
            return {
                statusCode: e.statusCode || 500,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({Message: e.message})
            }
        }
    }
}

module.exports = PadawanController;
