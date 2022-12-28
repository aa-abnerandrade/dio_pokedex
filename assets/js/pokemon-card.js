const cardAPI = {}
const pokemonSelect = []
let currentIDPokemonCard = 0


cardAPI.getPokemonSelect = function(urlSelecionada) {
    
    return fetch(urlSelecionada)
        .then(  (response)=> {
            return response.json()
        })
        .then(  (responseJson)=> {
            console.log(responseJson)
            return responseJson
        })
        .then( (jResponse)=> {
            return convertDetPokemonToClassPokemon(jResponse)
        })
        .then( (instanciaPokemon)=> {
            return instanciaPokemon
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
    .then(  (instanciaPokemon)=> {
        let cardPokemon = document.getElementById('div-popup')
        cardPokemon.innerHTML = convertPokemonToCardHTML(instanciaPokemon)
        cardPokemon.classList.replace('ocultaPUP', 'exibePUP')
        currentIDPokemonCard = instanciaPokemon.number
        console.log(currentIDPokemonCard)
        //console.log(convertPokemonToCardHTML(responseInfos))
    })
    
}

function previousPokemonPopup() {
    let idPreviousPokemon = currentIDPokemonCard - 1
    console.log(idPreviousPokemon)
    clickOnPokemon(idPreviousPokemon)
}

function closePopup() {
    console.log('fechar')
    const elementPopup = document.getElementById('div-popup')
    elementPopup.classList.replace('exibePUP', 'ocultaPUP')
    // elementPopup.classList.remove('exibePUP')
    // elementPopup.classList.add('ocultaPUP')
}

function nextPokemonPopup() {
    let idNextPokemon = currentIDPokemonCard + 1
    console.log(idNextPokemon)
    clickOnPokemon(idNextPokemon)
}



