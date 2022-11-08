var liSelect = document.getElementById('listaPokemon');
// let pokemonSelect = document.getElementsByClassName('pokemon');
// console.log(pokemonSelect);

// liSelect.addEventListener("click", console.log('LI clicada'))
// pokemonSelect.addEventListener("click", console.log('Pokemon Clicado'))


// addEventListener("click", () =>
//     pokemonSelect = document.getElementById

// )


function clickOnPokemon(idSelecionado){
    console.log('Pokemon clicado')
    console.log(idSelecionado)
    exibePopupPokemon(idSelecionado)
}

function exibePopupPokemon(numPokemon) {
    let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${numPokemon}`
    console.log('URL Recebida: ' + urlPokemon)
}

//var el = document.getElementById('fora');
// liSelect.addEventListener('click', function(e) {
//     console.log(e.target.id);
// });