const pokeApi = {}
var availablePokemon = false;
var idOnePokemon = 1;

function convertDetPokemonToClassPokemon(detPokemonAPI) {
    const pokemon = new Pokemon()
    pokemon.number = detPokemonAPI.id
    pokemon.name = detPokemonAPI.name

    const types = detPokemonAPI.types.map( (typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = detPokemonAPI.sprites.other.dream_world.front_default
    pokemon.gif = detPokemonAPI.sprites.versions["generation-v"]["black-white"].animated.front_default

    pokemon.hp = detPokemonAPI.stats[0].base_stat
    pokemon.speed = detPokemonAPI.stats[5].base_stat
    pokemon.attack = detPokemonAPI.stats[1].base_stat
    pokemon.defense = detPokemonAPI.stats[2].base_stat
    pokemon.specialattack = detPokemonAPI.stats[3].base_stat
    pokemon.specialdefense = detPokemonAPI.stats[4].base_stat

    const abilities = detPokemonAPI.abilities.map( (abilitySlot)=> abilitySlot.ability.name)
    const [ability] = abilities
    pokemon.abilities = abilities
    pokemon.ability = ability
    console.log('Instância criada')    
    
    return pokemon
}



pokeApi.getIDPokemon = function(draftPokemon) {
    console.log(draftPokemon);
    console.log(draftPokemon.pokemon.url); 
    let urlDraftPokemon = draftPokemon.pokemon.url;
    console.log(urlDraftPokemon)

    return fetch(urlDraftPokemon)
        .then( (response)=> response.json())
        .then( (jResponse)=> jResponse.id)
        .then( (idOnePoke)=> {return idOnePoke})
} 


pokeApi.getDetailPokemon = (pokemon)=> {
    console.log(pokemon.url)
    return fetch(pokemon.url)
        .then( (response)=> response.json() )
        .then( convertDetPokemonToClassPokemon )
}

pokeApi.getPokemons = (offset = 0, limit = 10)=> {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then( (response)=> response.json() )
        .then( (jsonBody)=> jsonBody.results)
        .then( (resultPokemons)=> resultPokemons.map(pokeApi.getDetailPokemon) )
        .then( (detailRequisicoes)=> Promise.all(detailRequisicoes) )
        .then( (detailsPokemons)=> detailsPokemons)
}



pokeApi.getPokemonByNameOrNumber = (objInputSearch)=> {
    console.log('Poke API por nome ou number');
    const urlWanted = `https://pokeapi.co/api/v2/pokemon/${objInputSearch}/`;
    console.log(urlWanted);
    
    return fetch(urlWanted)
        .then( (response)=> response.json() )
        .then( convertDetPokemonToClassPokemon )
}



pokeApi.filtraPokemon = (idPokemon)=> {
    console.log("ID Recebido" + idPokemon)
    return idPokemon <= 386;
}


pokeApi.getDetailTyped = (idFiltred)=> {
    console.log('ID Filtrado' + idFiltred)
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${idFiltred}`

    return fetch(urlPokemon)
        .then( (response)=> response.json() )
        .then( convertDetPokemonToClassPokemon )
}

pokeApi.getPokemonByType = (oneType)=> {
    console.log('o tipo é' + oneType)
    const urlType = `https://pokeapi.co/api/v2/type/${oneType}`;
    console.log(urlType);

    return fetch(urlType)
        .then( (responseT)=> responseT.json() )
        .then( (jsonTypesBody)=> jsonTypesBody.pokemon)
        .then( (totalPokemon)=> totalPokemon.map(pokeApi.getIDPokemon))
        .then( (listaID)=> Promise.all(listaID) )
        .then( (numberPokemon)=> numberPokemon.filter(pokeApi.filtraPokemon))
        .then( (listaFiltrada)=> Promise.all(listaFiltrada))
        .then( (filtredPokemon)=> filtredPokemon.map(pokeApi.getDetailTyped))
        .then( (detailTypesRequisicoes)=> Promise.all(detailTypesRequisicoes) )
        .then( (detailsTypesPokemons)=> detailsTypesPokemons)

}