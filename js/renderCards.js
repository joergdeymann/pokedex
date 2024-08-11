function renderPokemonCardType(typeList) {
    html=``;
    for(let i=0;i<typeList.length;i++) {
        html += `<div class="bg-${typeList[i]}">${typeList[i]}</div>`;
    }
    return html;
}

function renderPokemonCard(pokemon) {
    return /*html*/`
        <div class="card bg-${pokemon.typeList[0]}"  onclick="renderPokemonById(${pokemon.id})">
            <div class="card-head">
                <h2 class="circle">${pokemon.id}</h2>
                <h2>${pokemon.name}</h2>
                <h2 onclick="addToActiveDeck(${pokemon.id},event)"  class="hover circle">+</h2>
            </div>
            <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg">

            <div class="pokemon-types">
            ${renderPokemonCardType(pokemon.typeList)}
            </div>
        </div>
    `;    
}

function renderSomePokemonCards(start,end) {
    let html='';
    for (let i=start;i<=end;i++) {
        let pokemon = pokemonList.find((element) => element.id == i);
        html += renderPokemonCard(pokemon);
    }
    document.getElementById("pokemon-liste").innerHTML = html;
}

function sortObject(obj,key) {
    function compare(a, b) {
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }
        return 0;
    }
    return obj.sort(compare);
}

function getOrder() {
    if (document.getElementById("order-id").classList.contains("brick-active")) return "id";
    if (document.getElementById("order-name").classList.contains("brick-active")) return "name";
    if (document.getElementById("order-type").classList.contains("brick-active")) return "typeList";
    return "id";
}

function renderMore() {
    let more= document.getElementById("moreCards");
    if (document.getElementById("input-pokemon").value=="") {
        more.classList.remove("hide");
    } else {
        if  (!more.classList.contains("hide")) {
            more.classList.add("hide");
        };
    }
}

function renderPokemonMore(pl,plFiltered) {
    if (isFiltered(pl,plFiltered)) {
        if (!document.getElementById("more").classList.contains("hide")) {
            document.getElementById("more").classList.add("hide");
        }
        document.getElementById("notMore").classList.remove("hide");        
    }
}

function renderPokemonCards(pokemonList) {
    let html=``;
    let pl=sortObject(pokemonList,getOrder());
    pl.forEach(pokemon => {
        html+=renderPokemonCard(pokemon);
    });
    document.getElementById("pokemon-liste").innerHTML =html;
    renderMore();
}

