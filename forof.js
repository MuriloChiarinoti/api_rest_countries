//Retorna o idioma de um país


const service = require('./service')

async function main() {
  try {
    const result = await service.obterPaises('germany') //Insira o nome de um pais em inglês ex: brazil, germany, france....
    const languages = []

    console.time('forOf')
    
    for(let i in result){
      const pais = result[i]
      console.log('Idioma nativo: ',pais.languages)
      if(pais.languages && pais.languages[0]){ 
      languages.push(result.results[i].languages)
      }
    }

    console.timeEnd('forOf')
    
  } catch (error) {
    console.log('Erro:', error)
  }
}

main()

