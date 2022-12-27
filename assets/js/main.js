const listaPokemon = document.getElementById('listaPokemon')
const bttMore = document.getElementById('bttMore')

const maxRecords = 386;
let limit = 10;
let offset = 0;


function convertPokemonToLi(objPokemon) {
    console.log('Convertendo para LI ' + objPokemon)
    return `
        <li id="${objPokemon.number}" class="pokemon ${objPokemon.type}" onclick="clickOnPokemon(this.id)" >
            <span class="number">#${objPokemon.number}</span>
            <span class="name">${objPokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${objPokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${objPokemon.photo}" alt="${objPokemon.name}">
            </div>
        </li>
    `
}



function loadMorePokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((allPokemons = []) => {
        const newHtml = allPokemons.map(convertPokemonToLi).join('')
        listaPokemon.innerHTML += newHtml
    })
}

loadMorePokemons(offset, limit)

bttMore.addEventListener('click', ()=> {
    offset += limit
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadMorePokemons(offset, newLimit)
        bttMore.parentElement.removeChild(bttMore)
    } else {
        loadMorePokemons(offset, limit)
    }
})