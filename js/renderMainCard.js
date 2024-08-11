function renderPokemonCardOfMain(pokemon) {
    return /*html*/`
        <div class="card bg-${pokemon.typeList[0]}" id="card">
            <div class="card-head">
                <div class="circle"><b>${pokemon.id}</b></div>
                <h2>${pokemon.name}</h2>
                <div onclick="addToActiveDeck(${pokemon.id})" class="circle pointer"><b>+</b></div>
            </div>
            <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg">
            <div class="pokemon-types">
                ${renderPokemonCardType(pokemon.typeList)}
            </div>
        </div>
    `;    
}

function exchangePokemonCard(id) {
    let pl=pokemonList;
    if (filteredPokemonList.length>0) pl=filteredPokemonList;

    if (id >= pl.length) id=0;
    if (id < 0 ) id=pl.length-1;

    let pokemon=pl[id];
    pokemonArrayId=id;
    preparePokemonData(pokemon.id);
    document.getElementById("maincard-pokemon").innerHTML=renderPokemonCardOfMain(pokemon);

    return pokemon;
}

function renderPokemonById(id) {
    document.getElementById("tab-headline").style.transform="";

    pokemonArrayId=pokemonList.findIndex(element => element.id == id);
    if (filteredPokemonList.length>0) pokemonArrayId=filteredPokemonList.findIndex(element => element.id == id);

    document.getElementById("maincard-container").classList.toggle("hide");
    exchangePokemonCard(pokemonArrayId);
    document.getElementsByTagName("body")[0].style.overflow="hidden";
}

function renderPokemonByArrayIndex(id) {
    document.getElementById("maincard-container").classList.toggle("hide");
    exchangePokemonCard(id);
    document.getElementsByTagName("body")[0].style.overflow="hidden";
}

function previousPokemon() {
    exchangePokemonCard(--pokemonArrayId);
}

function nextPokemon() {
    exchangePokemonCard(++pokemonArrayId);
}