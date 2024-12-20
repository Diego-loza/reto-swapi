'use strict';

const axios = require('axios');

class SwapiAdapter {
    constructor() {
        this.swapiEndpoint = process.env.SWAPI_ENDPOINT;
    }

    async getPeople(id) {
        let result = null;
        try {
            const endpoint = this.swapiEndpoint + 'people/' + String(id);
            result = await axios.get(endpoint);
        } catch(e) {
            console.log(e);
            throw new Error('Error al consultar Swapi: ' + e.message);
        }
        return result;
    }

    async getGenericSwapi(endpoint, baseUrl) {
        let result = null;
        try {
            const result = await axios.get(endpoint);
        } catch(e) {
            console.log(e);
            throw new Error('Error al consultar Swapi: ' + e.message);
        }
        return result;
    }

    async getRootSwapi(endpoint) {
        let result = null;
        try {
            const response = await axios.get(endpoint);
            result = {
                personas: response.data['people'],
                planetas: response.data['planets'],
                peliculas: response.data['films'],
                especies: response.data['species'],
                vehiculos: response.data['vehicles'],
                naveEspacial: response.data['starships'],
            }
        } catch(e) {
            console.log(e);
            throw new Error('Error al consultar Swapi: ' + e.message);
        }
        return result;
    }
}

module.exports = SwapiAdapter;
