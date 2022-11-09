

function convertPokemonToCardHTML(objPokemonSelect) {
    return `
    <div id="popupPokemon" class="${objPokemonSelect.types[0].type.name}">
        <table id="tabelaCompletaPokemon" class="${objPokemonSelect.types[0].type.name}">
            <thead>
                <tr><th  id="cel-name">${objPokemonSelect.name}</th><th id="cel-num">#${objPokemonSelect.id}</th></tr>
                
            </thead>

            <tbody>
                
                <tr id="row_overview" class="row-group">
                    <td colspan="2">
                        <table id="table_overview" class="subtabelas">
                            <thead>
                                <tr><th colspan="3" id="cel-desc">nome científico</th></tr>
                            </thead>
                            <tbody>
                                <tr id="row-photo"><td colspan="3" id="col-photo"><img id="photo-pokemon" src="${objPokemonSelect.sprites.other.dream_world.front_default}" alt="${objPokemonSelect.name}"></td></tr>
                            </tbody>
                        </table>
                    </td>
                </tr>


                <tr id="row_types" class="row-group">
                    <td colspan="2">
                        <table class="subtabelas">
                            <thead>
                                <tr><th class="cel-title">Type</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Grass Poison</td></tr>
                            </tbody>
                        </table>
                    </td>
                </tr>


                <tr id="row_stats" class="row-group">
                    <td colspan="2">
                        <table class="subtabelas">
                            <thead>
                                <tr><td colspan="4" class="cel-title">Stats</td></tr>
                            </thead>
                            <tbody id="body-stats">
                                <tr><td>HP</td><td class="cel-stats-val">40</td><td>Speed</td><td class="cel-stats-val">50</td></tr>
                                <tr><td>Attack</td><td class="cel-stats-val">41</td><td>Defense</td><td class="cel-stats-val">51</td></tr>
                                <tr><td>Special Attack</td><td class="cel-stats-val">42</td><td>Special Defense</td><td class="cel-stats-val">52</td></tr>
                                <tr><td colspan="2">Total</td><td colspan="2" class="cel-stats-val">1000</td></tr>
                            </tbody>
                        </table>
                    </td>
                </tr>


                <tr id="row_entries" class="row-group">
                    <td colspan="2">
                        <table class="subtabelas">
                            <thead>
                                <tr><td class="cel-title">Entries Yellow</td></tr>
                            </thead>
                            <tbody>
                                <tr><td>Bulbassauro é um Pokemon que tem um casco de planta e solta grama</td></tr>
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
                                <tr><td>OvergrowChlorophyll</td></tr>
                            </tbody>
                        </table>

                    </td>
                </tr>


                <tr id="row_location" class="row-group">
                    <td colspan="2">

                        <table class="subtabelas">
                            <tbody>
                                
                                <tr><td class="cel-title">Location Yellow</td></tr>
                                <tr><td>Cerulean City</td></tr>

                            </tbody>
                        </table>

                    </td>

                </tr>

            </tbody>
        </table>

        <button id="bttClosePUP" class="${objPokemonSelect.types[0].type.name}" onclick="closePopup()">
            X
        </button>  
    </div>
    `
}

