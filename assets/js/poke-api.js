const pokeApi = {}

function convertDetPokemonToClassPokemon(detPokemonAPI) {
    const pokemon = new Pokemon()
    pokemon.number = detPokemonAPI.id
    pokemon.name = detPokemonAPI.name

    const types = detPokemonAPI.types.map( (typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = detPokemonAPI.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getDetailPokemon = (pokemon)=> {
    return fetch(pokemon.url)
        .then( (response)=> response.json() )
        .then( convertDetPokemonToClassPokemon )
}

pokeApi.getPokemons = (offset = 0, limit = 5)=> {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then( (response)=> response.json() )
        .then( (jsonBody)=> jsonBody.results)
        .then( (resultPokemons)=> resultPokemons.map(pokeApi.getDetailPokemon) )
        .then( (detailRequisicoes)=> Promise.all(detailRequisicoes) )
        .then( (detailsPokemons)=> detailsPokemons)
}


// pokeApi.getDetailTyped = (oneType)=> {
//     return fetch(oneType.pokemon.url)
//         .then( (response)=> response.json() )
//         .then( convertDetPokemonToClassPokemon )
// }

pokeApi.getDetailTyped = (pokemon)=> {
    return fetch(pokemon.url)
        .then( (response)=> response.json() )
        .then( convertDetPokemonToClassPokemon )
}

pokeApi.getPokemonByType = (oneType)=> {
    console.log(typeof oneType)
    console.log('o tipo é' + oneType)
    const urlType = `https://pokeapi.co/api/v2/type/${oneType}`;

    return fetch(urlType)
        .then( (responseT)=> responseT.json() )
        .then( (jsonTypesBody)=> jsonTypesBody.results)
        .then( (resultTypesPokemons)=> resultTypesPokemons.map(pokeApi.getDetailTyped) )
        .then( (detailTypesRequisicoes)=> Promise.all(detailTypesRequisicoes) )
        .then( (detailsTypesPokemons)=> detailsTypesPokemons)



}