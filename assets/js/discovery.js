// declarações filtro
const bttFilter = document.getElementById('discovery__filter__icon');
const divTypes = document.getElementById('discovery__types');
console.log(bttFilter);
console.log(divTypes);
let showTypes = false;

// declarações pesquisa
const bttSearch = document.getElementById('discovery__search__icon');
let inputSearch = document.getElementById('discovery__search__input'); 

// ---------------------------------------------------------------------

// >>>>>>>>> Exibir e Ocultar Tipos com botão Filtro
bttFilter.addEventListener('click', function(e) {
    if(!showTypes) {
        divTypes.classList.remove("escondeTypes");
        divTypes.classList.add("animate__flipInX");
        showTypes = true;
    }else {
        divTypes.classList.remove("animate__flipInX");
        divTypes.classList.add("escondeTypes");
        showTypes = false;
    }
})

divTypes.childNodes.forEach(typeRadio => {
    typeRadio.addEventListener('click', function(e) {
        const selectedType = e.target.innerHTML;

        if (selectedType) {
            console.log('tipo selecionado');
            console.log(selectedType);

            pokeApi.getPokemonByType(selectedType).then((pokemons = [])=> {
                const newHtml = pokemons.map(convertPokemonToHtml).join('')
                pokemonList.innerHTML = newHtml
            })
        }
    })
})
// >>>>>>>>> Procurar Pokemon
//const input = document.querySelector("#my-input");

function searchPokemon() {
    let objInputSearch = document.getElementById('discovery__search__input').value; 
    console.log(objInputSearch);
}

bttSearch.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('botão pesquisar')
    searchPokemon();
})

// inputSearch.addEventListener('keyup', function(e) {
//     e.preventDefault();
//     let tecla = e.key;
//     if (tecla === "Enter") {
//         console.log("Ativou o Enter!")
//         searchPokemon();
//     }
// })