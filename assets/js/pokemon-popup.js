

function convertPokemonToCardHTML(objPokemonSelect) {
    return ` 
        <div id="popupPokemon" class="${objPokemonSelect.types[0].type.name}">

            <div id="card" class="${objPokemonSelect.types[0].type.name}">
                <div id="card__tabela">
                    
                    <table id="tabelaCompletaPokemon">
                        <thead>
                            <tr id="row-photo"><td colspan="3" id="col-photo"><img id="photo-pokemon" src="${objPokemonSelect.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="${objPokemonSelect.name}"></td></tr>
                            <tr id="row-namenumber"><td  id="cel-name">${objPokemonSelect.name}</td><td id="cel-num">#${objPokemonSelect.id}</td></tr>
                        </thead>
                        <tbody>
                            <tr id="row_overview" class="row-group">
                                <td colspan="2">
                                    nome científico
                                </td>
                            </tr>
                            <tr id="row_types" class="row-group">
                                <td id="col-types" colspan="2">
                                    <ol class="lista-NoListed">
                                        <li class="card__types__li ${objPokemonSelect.types[0].type.name}">${objPokemonSelect.types[0].type.name}</li>
                                        <li class="card__types__li ${objPokemonSelect.types[1].type.name}">Poison</li>
                                    </ol>
                                </td>
                            </tr>
                            <tr id="row_entries" class="row-group">
                                <td colspan="2">
                                    Bulbassauro é um Pokemon que tem um casco de planta e solta grama
                                </td>
                            </tr>
                            <tr id="row_stats" class="row-group">
                                <td colspan="2">
                                    <table class="subtabelas">
                                        <thead>
                                            <tr><td colspan="4" class="cel-title">Stats</td></tr>
                                        </thead>
                                        <tbody id="body-stats">
                                            <tr><td>HP</td><td class="cel-stats-val">${objPokemonSelect.stats[0].base_stat}</td><td>Speed</td><td class="cel-stats-val">${objPokemonSelect.stats[5].base_stat}</td></tr>
                                            <tr><td>Attack</td><td class="cel-stats-val">${objPokemonSelect.stats[1].base_stat}</td><td>Defense</td><td class="cel-stats-val">${objPokemonSelect.stats[2].base_stat}</td></tr>
                                            <tr><td>Special Attack</td><td class="cel-stats-val">${objPokemonSelect.stats[3].base_stat}</td><td>Special Defense</td><td class="cel-stats-val">${objPokemonSelect.stats[4].base_stat}</td></tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                    
                            <tr id="row_abilities" class="row-group">
                                <td colspan="2">
                    
                                    <table class="subtabelas">
                                        <thead>
                                            <tr><td class="cel-title">Abilities</td></tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>
                                                <ol class="lista-NoListed">
                                                    <li class="cel-capitalize">${objPokemonSelect.abilities[0].ability.name}</li>
                                                    <li class="cel-capitalize">${objPokemonSelect.abilities[1].ability.name}</li>
                                                </ol>
                                            </td></tr>
                                        </tbody>

                                    </table>
                    
                                </td>
                            </tr>
                    
                        </tbody>
                    </table>
                </div>
                <div id="card__botoes">
                    <button class="botao-seta" onclick="previousPokemonPopup()">
                        <i class="uil uil-angle-left"></i>
                    </button>
                    <button id="bttClosePUP" class="${objPokemonSelect.types[0].type.name}" onclick="closePopup()">
                        <i class="uil uil-multiply"></i>
                    </button>
                    <button class="botao-seta" onclick="nextPokemonPopup()">
                        <i class="uil uil-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>    
        `
}

