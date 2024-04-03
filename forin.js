//Retorna a moeda monetária de um país


const service = require('./service')

async function main () {
    try {
        const result = await service.obterPaises('france')   //Insira o nome de um pais em inglês ex: brazil, germany, france....
        const moeda = []

        console.time('forIn')

        for (let i in result) { 
            const pais = result[i]
            console.log('Moeda corrente:',pais.currencies) 
            if (pais.currencies && pais.currencies[0]) {
                moeda.push(pais.currencies[0].name)
            }
        }

        console.timeEnd('forIn')
        
    } catch(error) {
        console.log('Falha', error)
    }
}

main()

