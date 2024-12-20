const SwapiService = require("../../domain/services/SwapiService");

class SwapiController {
    constructor() {
        this.swapiService = new SwapiService();
    }

    async getSwapi(event) {
        try {
            const protocol = event.headers["X-Forwarded-Proto"] || "https";
            const host = event.headers.host;
            const path = event.requestContext.path;

            const baseUrl = `${protocol}://${host}/getSwapi/`;

            const data = await this.swapiService.getSwapi(baseUrl, event);
            if(data == null)
                throw new Error("Error al consultar Swapi");

            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
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

module.exports = SwapiController;
