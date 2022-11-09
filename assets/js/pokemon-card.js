const cardAPI = {}
const pokemonSelect = []


cardAPI.getPokemonSelect = function (urlSelecionada){
    
    return fetch(urlSelecionada)
        .then(  (response)=> {
            return response.json()
        })
        .then(  (responseJson)=> {
            console.log(responseJson)
            //console.log('Response Json')
            //pokemonSelect.push(responseJson.abilities)
            //console.log(pokemonSelect)
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
        let cardPokemon = document.getElementById('popupPokemon')
        cardPokemon.innerHTML = convertPokemonToCardHTML(responseInfos)
        //console.log(convertPokemonToCardHTML(responseInfos))
    })
    
}




