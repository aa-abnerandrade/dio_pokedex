const listaPokemon = document.getElementById('listaPokemon')
const bttMore = document.getElementById('bttMore')

const maxRecords = 386;
let limit = 10;
let offset = 0;

function hideLoadMore() {
    bttMore.parentElement.removeChild(bttMore)
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
        const newLimit = maxRecords - offset;
        loadMorePokemons(offset, newLimit);
        hideLoadMore();
    } else {
        loadMorePokemons(offset, limit)
    }
})