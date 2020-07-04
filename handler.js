'use strict';
const axios = require('axios');
function calculadora(params) {
  const operador = params.operador
  const valor1 = params.valor1
  const valor2 = params.valor2
  let resultado

  if (operador === 'soma') {
    resultado = Number(valor1) + Number(valor2)
  }

  else if (operador === 'sub') {
    resultado = Number(valor1) - Number(valor2)
  }

  else if (operador === 'mult') {
    resultado = Number(valor1) * Number(valor2)
  }

  else if (operador === 'div') {
    resultado = Number(valor1) / Number(valor2)
  }

  else {
    resultado = "Operador nao info"
  }

  console.log('log', { payload: `result, ${resultado}` });
  return { payload: `result, ${resultado}!` };
}

function pokeApi(params) {
  let pokemon = params.name ? params.name : ''

  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  
  let res = axios.get(url)
    .then(data => {
      return data.data 
    })
    .catch(function (error) {
      return { payload: `result, ${error}!` };
    })

  return res
}

exports.calculadora = calculadora
exports.pokeApi = pokeApi
