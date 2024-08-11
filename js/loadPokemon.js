let pokemonData;
let pokemonAbilityList = [];
let pokemonSpecies = [];

async function loadPokemonSpecies(id) {
    try {
        DB.setUrl("https://pokeapi.co/api/v2/");
        DB.setProject(`pokemon-species/${id}`); // One Pokemon
        pokemonSpecies = await getData();
    } catch(error) {
        console.error("PokemonSpezies konnte nicht gelade werden: ${DB.getUrl()}",error);
        return;
    }
    check4Errors(pokemonSpecies);
    renderSpecies();
}

function check4Errors(json) {
    for (let key in json) {
        if (json[key] === null) {
            json[key]="";
        } else 
        if (typeof json[key] === 'object') check4Errors(json[key]);
    };
}

async function loadPokemonDataDetail(id)  {
    check4Errors(pokemonAbilityList);
    check4Errors(pokemonData);
    renderAbilities();
    await loadPokemonSpecies(id);
    await loadEvoChain();

    renderStats();
    renderDeck();
    renderEvoChainList();
}

async function loadPokemonData(id) {
    DB.setUrl("https://pokeapi.co/api/v2/");
    DB.setProject(`pokemon/${id}`); // One Pokemon
    pokemonData = await getData();
    pokemonAbilityList = [];
    let abilityPromises = pokemonData.abilities.map(async ability => { // anstatt foreach
        DB.setUrl(ability.ability.url)
        let abilityData = await getData();
        pokemonAbilityList.push(abilityData); // Ability
    })
    await Promise.all(abilityPromises);
    loadPokemonDataDetail(id);
}

function preparePokemonData(id) {
    loadPokemonData(id);
}





