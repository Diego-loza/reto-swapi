'use strict';

const SwapiAdapter = require("../../infraestructure/external/SwapiAdapter");
const Especie = require('../models/Especie.js')
const NaveEspacial = require('../models/NaveEspacial.js')
const Pelicula = require('../models/Pelicula.js')
const Persona = require('../models/Persona.js')
const Planeta = require('../models/Planeta.js')
const Vehiculo = require('../models/Vehiculo.js')

class SwapiService {
    constructor() {
        this.swapiAdapter = new SwapiAdapter();
        this.swapiEndpoint = process.env.SWAPI_ENDPOINT;
    }

    async getSwapi(baseUrl, event) {
        let data = null;
        try {
            if (event.pathParameters != null && event.pathParameters.resource != '' && event.pathParameters.resource != null) {
                let endpoint = this.swapiEndpoint + event.pathParameters.resource;
          
                if (event.pathParameters.param != null) {
                    endpoint += `/${event.pathParameters.param}`;
                }
          
                if (event.queryStringParameters != null) {
                    endpoint += `?${Object.keys(event.queryStringParameters)[0]}=${Object.values(event.queryStringParameters)[0]}`;
                }
          
                const response = await this.swapiAdapter.getGenericSwapi(endpoint, baseUrl);
                data = {
                    "cantidad": response.data.count || 0,
                    "siguiente": response.data.next ? response.data.next.replace(this.swapiEndpoint, baseUrl) : null,
                    "anterior": response.data.previous ? response.data.previous.replace(this.swapiEndpoint, baseUrl) : null,
                    "resultados": [],
                }

                switch (event.pathParameters.resource) {
                    case 'people':
                        if (event.pathParameters.param != null && event.pathParameters.param != '' && event.queryStringParameters == null) {
                            data = new Persona(response.data);
                        } else {
                            for await (let element of response.data.results) {
                                data.resultados.push(new Persona(element));
                            }
                        }
                        break;
                    case 'films':
                        if (event.pathParameters.param != null && event.pathParameters.param != '' && event.queryStringParameters == null) {
                            data = new Pelicula(response.data);
                        } else {
                            for await (let element of response.data.results) {
                                data.resultados.push(new Pelicula(element));
                            }
                        }
                        break;
                    case 'starships':
                        if (event.pathParameters.param != null && event.pathParameters.param != '' && event.queryStringParameters == null) {
                            data = new NaveEspacial(response.data);
                        } else {
                            for await (let element of response.data.results) {
                                data.resultados.push(new NaveEspacial(element));
                            }
                        }
                        break;
                    case 'vehicles':
                        if (event.pathParameters.param != null && event.pathParameters.param != '' && event.queryStringParameters == null) {
                            data = new Vehiculo(response.data);
                        } else {
                            for await (let element of response.data.results) {
                                data.resultados.push(new Vehiculo(element));
                            }
                        }
                        break;
                    case 'species':
                        if (event.pathParameters.param != null && event.pathParameters.param != '' && event.queryStringParameters == null) {
                            data = new Especie(response.data);
                        } else {
                            for await (let element of response.data.results) {
                                data.resultados.push(new Especie(element));
                            }
                        }
                        break;
                    case 'planets':
                        if (event.pathParameters.param != null && event.pathParameters.param != '' && event.queryStringParameters == null) {
                            data = new Planeta(response.data);
                        } else {
                            for await (let element of response.data.results) {
                                data.resultados.push(new Planeta(element));
                            }
                        }
                        break;
                }
            } else {
                data = await this.swapiAdapter.getRootSwapi(this.swapiEndpoint)
            }
            return data;
        } catch (e) {
            console.log(e);
            throw new Error('Error al obtener datos de SWAPI: ' + e.message);
        }
    }
}

module.exports = SwapiService;
