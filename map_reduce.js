//Soma da população de todos os países 

const axios = require('axios')

async function somarPopulacao() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    
    const populacaoTotal = response.data.reduce((total, pais) => {
      return total + pais.population
    }, 0)
    
    console.log(`A população total de todos os países é ${populacaoTotal}.`)
  } catch (error) {
    console.error(`Ocorreu um erro: ${error}`)
  }
}

somarPopulacao()
