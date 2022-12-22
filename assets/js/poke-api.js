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

    return pokemon
}

pokeApi.getIdPokemonDiscovey = function(urlOnePokemon) {
    return fetch(urlOnePokemon)
        .then( (responseOnePokemon)=> responseOnePokemon.json() )
        .then( (jsonOnePokemon)=> jsonOnePokemon.id)
        .then( (uniqueID)=> uniqueID)
} 

pokeApi.limitaNumeroPokemon = function(oneID) {
    console.log('Dentro de getnumeropokemon ' + oneID);
    if (oneID < 386) {
        console.log('verdadeiro ' + oneID)
        return true;
    } else {
        console.log('falso ' + oneID)
        return false;
    }
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



pokeApi.getDetailTyped = async (oneType)=> {
    console.log('Get detalhe type pokemon');
    console.log(oneType.pokemon.url);

    idOnePokemon = await pokeApi.getIdPokemonDiscovey(oneType.pokemon.url);
    console.log('TESTE DE ID DEPOIS DA BUSCA: ' + idOnePokemon)
    availablePokemon = await pokeApi.limitaNumeroPokemon(idOnePokemon);
    console.log('Pokemon Disponivel ' + availablePokemon)
    if (availablePokemon === true) {
        return fetch(oneType.pokemon.url)
                .then( (response)=> response.json() )
                .then( convertDetPokemonToClassPokemon )  
    }    

    // return fetch(oneType.pokemon.url)
    //     .then( (response)=> response.json() )
    //     .then( convertDetPokemonToClassPokemon )
}

pokeApi.getPokemonByType = (oneType)=> {
    console.log('o tipo é' + oneType)
    const urlType = `https://pokeapi.co/api/v2/type/${oneType}`;
    console.log(urlType);

    return fetch(urlType)
        .then( (responseT)=> responseT.json() )
        .then( (jsonTypesBody)=> jsonTypesBody.pokemon)
        .then( (resultTypesPokemons)=> resultTypesPokemons.map(pokeApi.getDetailTyped) )
        .then( (detailTypesRequisicoes)=> Promise.all(detailTypesRequisicoes) )
        .then( (detailsTypesPokemons)=> detailsTypesPokemons)

    // return fetch(urlType)
    //     .then( (responseT)=> responseT.json() )
    //     .then( (jsonTypesBody)=> jsonTypesBody.pokemon)
    //     .then( (resultTypesPokemons)=> resultTypesPokemons.map(pokeApi.getDetailTyped) )
    //     .then( (detailTypesRequisicoes)=> Promise.all(detailTypesRequisicoes) )
    //     .then( (detailsTypesPokemons)=> detailsTypesPokemons)
}