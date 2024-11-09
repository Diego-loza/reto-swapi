'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

module.exports.addPadawan = async (event) => {
  try {
    const body = JSON.parse(event.body)
    const dynamoDb = new AWS.DynamoDB.DocumentClient()
    const timestamp = new Date().getTime();

    const putParams = {
      TableName: process.env.DYNAMO_SWAPI_TABLE,
      Item: {
        id: uuid.v1(),
        nombre: body.nombre,
        persona: body.personaId,
        url: body.url,
        creado: timestamp,
        editado: timestamp,
      }
    }

    await dynamoDb.put(putParams).promise()
  
    return {
      statusCode: 201,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(putParams.Item)
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
