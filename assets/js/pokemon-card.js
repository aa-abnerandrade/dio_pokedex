const cardAPI = {}
const pokemonSelect = []


cardAPI.getPokemonSelect = function(urlSelecionada) {
    
    return fetch(urlSelecionada)
        .then(  (response)=> {
            return response.json()
        })
        .then(  (responseJson)=> {
            console.log(responseJson)
            return responseJson
        })

        .catch( function(erro){
            console.log(erro)
        } )
        .finally( function(){
            console.log('Fetch Finalizado')
        })

}


function clickOnPokemon(idSelecionado) {

    const numPokemon = idSelecionado;
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${numPokemon}`
    //console.log('URL DENTRO' + urlPokemon)

    cardAPI.getPokemonSelect(urlPokemon)
    .then(  (responseInfos)=> {
        console.log(responseInfos)
        console.log('Response Infos')
        let cardPokemon = document.getElementById('div-popup')
        cardPokemon.innerHTML = convertPokemonToCardHTML(responseInfos)
        cardPokemon.classList.replace('ocultaPUP', 'exibePUP')
        //console.log(convertPokemonToCardHTML(responseInfos))
    })
    
}

function closePopup() {
    console.log('fechar')
    const elementPopup = document.getElementById('div-popup')
    elementPopup.classList.replace('exibePUP', 'ocultaPUP')
    // elementPopup.classList.remove('exibePUP')
    // elementPopup.classList.add('ocultaPUP')
}


