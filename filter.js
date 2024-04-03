// Retorna a soma de toda população mundial

const axios = require('axios');

async function listarPaises(inicial) {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    
    const paisesFiltrados = response.data.filter(pais => {
      return 'name' in pais && pais.name.common.slice(0, inicial.length).toUpperCase() === inicial.toUpperCase();
    }); 
    
    paisesFiltrados.forEach(pais => {
      console.log(`${pais.name.common} (${pais.cca2}): população ${pais.population}, capital ${pais.capital}`)
    })
  } catch (error) {
    console.error(`Ocorreu um erro: ${error}`)
  }
}

listarPaises('D')
