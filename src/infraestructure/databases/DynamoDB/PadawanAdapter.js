'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

class PadawanAdapter {
    constructor() {
        this.tableName = process.env.DYNAMO_SWAPI_TABLE;
        this.dynamoDb = new AWS.DynamoDB.DocumentClient();
    }
  
    async createPadawan(padawan) {
        let result = null;
        try {
            const timestamp = new Date().getTime();
            const putParams = {
                TableName: this.tableName,
                Item: {
                    id: uuid.v1(),
                    nombre: padawan.nombre,
                    persona: padawan.personaId,
                    url: padawan.url,
                    creado: timestamp,
                    editado: timestamp,
                }
            }
            result = await this.dynamoDb.put(putParams).promise();
        } catch(e) {
            console.log(e);
            throw new Error('Error al crear Padawan: ' + e.message);
        } finally {
            return result;
        }
    }

    async getPadawan(pathParameters) {
        let result = null;
        try {
            let scanParams = null;
            if (pathParameters != null && pathParameters.param != null) {
                scanParams = {
                    TableName: this.tableName,
                    Key: {
                        id: pathParameters.param,
                    },
                }
            } else {
                scanParams = {
                    TableName: process.env.DYNAMO_SWAPI_TABLE
                }
            }
            result = await this.dynamoDb.scan(scanParams).promise();
        } catch(e) {
            console.log(e);
            throw new Error('Error al buscar Padawans: ' + e.message);
        } finally {
            return result;
        }
    }
}

module.exports = PadawanAdapter;
