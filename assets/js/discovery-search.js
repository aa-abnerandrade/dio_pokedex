function searchPokemon() {
    let objInputSearch = document.getElementById('discovery__plus__search__form__input').value; 
    console.log(objInputSearch);
    
    pokeApi.getPokemonByNameOrNumber(objInputSearch).then( (onePokemon = [])=> {
        const newHTML = convertPokemonToLi(onePokemon)
        listaPokemon.innerHTML = newHTML
    })
}


bttSearch.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('botão pesquisar')
    searchPokemon();
})

pokeApi.getPokemonByNameOrNumber = (objInputSearch)=> {
    console.log('Poke API por nome ou number');
    const urlWanted = `https://pokeapi.co/api/v2/pokemon/${objInputSearch}/`;
    console.log(urlWanted);
    
    return fetch(urlWanted)
        .then( (response)=> response.json() )
        .then( convertDetPokemonToClassPokemon )
}