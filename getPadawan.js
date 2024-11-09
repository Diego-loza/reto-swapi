'use strict';

const AWS = require('aws-sdk');
const swapi = require('swapi-node');
const Persona = require('./models/Persona.js')

module.exports.getPadawan = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    let scanParams = null;

    if (event.pathParameters != null && event.pathParameters.param != null) {
      scanParams = {
        TableName: process.env.DYNAMO_SWAPI_TABLE,
        Key: {
          id: event.pathParameters.param,
        },
      }
    } else {
      scanParams = {
        TableName: process.env.DYNAMO_SWAPI_TABLE
      }
    }

    const res = await dynamodb.scan(scanParams).promise();

    for await (let element of res.Items) {
      const swRes = await swapi.people({ id: element.persona });
      element.persona = new Persona(swRes);
      element.creado = new Date(element.creado).toTimeString()
      element.editado = new Date(element.editado).toTimeString()
    }

    const result = {
      "cantidad": res.Count,
      "resultados": res.Items,
    }
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result)
    }
  } catch (e) {
    console.log(e)
    return {
        statusCode: e.statusCode || 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({Message: e.message})
    }
  }
}
