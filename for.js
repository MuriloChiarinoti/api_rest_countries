//Retorna a capital de um país

const service = require('./service')

async function main () {
    try{
        const result = await service.obterPaises('United States of America')  //Insira o nome de um pais em inglês ex: brazil, germany, france....
        const capital = []

        console.time('for')

        for(let i = 0; i <= result.length -1; i++){
            const paises = result[i]
            capital.push(paises.capital)
        }

        console.timeEnd('for')
        console.log('Capital: ', capital)  

    } catch (error) {
        console.log('Erro', error) 
    }
}

main()
