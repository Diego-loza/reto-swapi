'use strict';

const swapi = require('swapi-node');
const PadawanAdapter = require("../../infraestructure/databases/DynamoDB/PadawanAdapter")
const SwapiAdapter = require("../../infraestructure/external/SwapiAdapter");
const Persona = require('../models/Persona.js')

class PadawanService {
    constructor() {
        this.padawanAdapter = new PadawanAdapter();
        this.swapiAdapter = new SwapiAdapter();
    }

    async createPadawan(event) {
        let result = null;
        try {
            const body = JSON.parse(event.body)
            
            result = await this.padawanAdapter.createPadawan(body);

            if(result == null)
                throw new Error("Error creating Padawan");
        } catch(e) {
            console.log(e)
        } finally {
            return result;
        }
    }

    async getPadawan(event) {
        let result = null;
        try {
            let elements = await this.padawanAdapter.getPadawan(event.pathParameters);
            if(elements == null)
                throw new Error("Error fetching Padawans");
        
            for await (let element of elements.Items) {
                const swRes = await this.swapiAdapter.getPeople(element.persona);
                element.persona = new Persona(swRes);
                element.creado = new Date(element.creado).toTimeString()
                element.editado = new Date(element.editado).toTimeString()
            }
        
            result = {
                "cantidad": elements.Count,
                "resultados": elements.Items,
            }
        } catch (e) {
            console.log(e)
        } finally {
            return result;
        }
    }
}

module.exports = PadawanService;
