'use strict';

const AWS = require('aws-sdk');
const axios = require('axios');
const swapi = require('swapi-node');
const Especie = require('./models/Especie.js')
const NaveEspacial = require('./models/NaveEspacial.js')
const Pelicula = require('./models/Pelicula.js')
const Persona = require('./models/Persona.js')
const Planeta = require('./models/Planeta.js')
const Vehiculo = require('./models/Vehiculo.js')

module.exports.getSwapi = async (event) => {
  const protocol = event.headers["X-Forwarded-Proto"] || "https";
  const host = event.headers.host;
  const path = event.requestContext.path;

  const baseUrl = `${protocol}://${host}/getSwapi/`;
  
  try {
    if (event.pathParameters != null && event.pathParameters.resource != '' 
      && event.pathParameters.resource != null) {
      let data;
      let endpoint = process.env.SWAPI_ENDOINT + event.pathParameters.resource;

      if (event.pathParameters.param != null) {
        endpoint += `/${event.pathParameters.param}`;
      }

      if (event.queryStringParameters != null) {
        endpoint += `?${Object.keys(event.queryStringParameters)[0]}=${Object.values(event.queryStringParameters)[0]}`;
      }

      const response = await axios.get(endpoint);
      data = {
        "cantidad": response.data.count?response.data.count:0,
        "siguiente": response.data.next?response.data.next.replace(process.env.SWAPI_ENDOINT,baseUrl):null,
        "anterior": response.data.previous?response.data.next.replace(process.env.SWAPI_ENDOINT,baseUrl):null,
        "resultados": [],
      }
      switch (event.pathParameters.resource) {
        case 'people':
          if (event.pathParameters.param != null && event.pathParameters.param != '' 
            && event.queryStringParameters == null) {
            data = new Persona(response.data);
          } else {
            for await (let element of response.data.results) {
              data.resultados.push(new Persona(element));
            }
          }
          break;
        case 'films':
          if (event.pathParameters.param != null && event.pathParameters.param != '' 
            && event.queryStringParameters == null) {
            data = new Pelicula(response.data);
          } else {
            for await (let element of response.data.results) {
              data.resultados.push(new Pelicula(element));
            }
          }
          break;
        case 'starships':
          if (event.pathParameters.param != null && event.pathParameters.param != '' 
            && event.queryStringParameters == null) {
            data = new NaveEspacial(response.data);
          } else {
            for await (let element of response.data.results) {
              data.resultados.push(new NaveEspacial(element));
            }
          }
          break;
        case 'vehicles':
          if (event.pathParameters.param != null && event.pathParameters.param != '' 
            && event.queryStringParameters == null) {
            data = new Vehiculo(response.data);
          } else {
            for await (let element of response.data.results) {
              data.resultados.push(new Vehiculo(element));
            }
          }
          break;
        case 'species':
          if (event.pathParameters.param != null && event.pathParameters.param != '' 
            && event.queryStringParameters == null) {
            data = new Especie(response.data);
          } else {
            for await (let element of response.data.results) {
              data.resultados.push(new Especie(element));
            }
          }
          break;
        case 'planets':
          if (event.pathParameters.param != null && event.pathParameters.param != '' 
            && event.queryStringParameters == null) {
            data = new Planeta(response.data);
          } else {
            for await (let element of response.data.results) {
              data.resultados.push(new Planeta(element));
            }
          }
          break;
      }
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    } else {
      const response = await axios.get(process.env.SWAPI_ENDOINT);
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personas: response.data['people'],
          planetas: response.data['planets'],
          peliculas: response.data['films'],
          especies: response.data['species'],
          vehiculos: response.data['vehicles'],
          naveEspacial: response.data['starships'],
        })
      }
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
