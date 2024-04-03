// Vai retornar todas as informações do país escolhido

const axios = require('axios');
const URL ='https://restcountries.com/v3.1';

async function obterPaises(paises) {
    const urlAPI = `${URL}/name/${paises}?fullText=true`;
    const response = await axios.get(urlAPI);
    return response.data;
}

module.exports = { obterPaises }



//Obs: após copilar comentar a secção obterPaises('')

/*obterPaises('brazil')
    .then(function(resultado){
        console.log('País solicitado: ', resultado)   
    })
    .catch(function(error){
        console.log('Erro: ', error.response.status, error.response.statusText);
    });
*/
