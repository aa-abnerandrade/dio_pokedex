
const bttOption = document.getElementById('discovery__option__icon');
const divPlus = document.getElementById('discovery__plus');
console.log(bttOption);
console.log(divPlus);
let showPlus = false;


let inputSearch = document.getElementById('discovery__plus__search__form__input'); 
const bttSearch = document.getElementById('discovery__plus__search__form__icon');

const divTypes = document.getElementById('discovery__plus__types');

// ---------------------------------------------------------------------

// >>>>>>>>> Exibir e Ocultar Tipos com botão Filtro
bttOption.addEventListener('click', function(e) {
    if(!showPlus) {
        divPlus.classList.remove("oculto");
        divPlus.classList.add("animate__fadeIn");
        showPlus = true;
    }else {
        divPlus.classList.remove("animate__fadeIn");
        divPlus.classList.add("oculto");
        showPlus = false;
    }
})

divTypes.childNodes.forEach(typeRadio => {
    typeRadio.addEventListener('click', function(e) {
        const selectedType = e.target.innerHTML;

        if (selectedType) {
            console.log('tipo selecionado ' + selectedType);

            pokeApi.getPokemonByType(selectedType)
            .then( (allPokemons = [])=> {
                    const newHtml = allPokemons.map(convertPokemonToLi).join('')
                    listaPokemon.innerHTML = newHtml
            })
            // pokeApi.getPokemonByType(selectedType)
            //     .then( (responseFiltred)=> {
            //         const newHtml = responseFiltred.map(convertTypedToLi).join('')
            //         listaPokemon.innerHTML += newHtml
            // })
        }
    })
})


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
