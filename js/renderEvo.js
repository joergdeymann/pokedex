let pokemonEvo=[];

function getEvoPart(chain) {
    let parts=chain.species.url.split("/");
    let chainId=parts[parts.length-2];
    let chainName=chain.species.name;
    return {
        id: chainId,
        name: chainName
    };

}

async function loadEvoChain() {
    DB.setUrl(pokemonSpecies.evolution_chain.url);
    let evo= await getData();
    pokemonEvo=[];
    let chain=evo.chain;

    do {
        pokemonEvo.push(getEvoPart(chain));
        chain=chain.evolves_to[0];
    } while (chain != null);
}

function renderEvoChainPart(pokemonEvo,i) {
    let html="";
    html+=`
        <div>
            <img class="evo-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonEvo[i].id}.svg">            
            <div>${pokemonEvo[i].name}</div>
        </div>`;
    if (i+1<pokemonEvo.length) {
        html+=`
            <div>
                <img class="evo-arrow" src="./img/firearrow3right.svg">
            </div>`;
    }
    return html;
}

function renderEvoChainList() {
    let html=``;
    html+=`<div class="evo-container">`;
    for (i=0;i<pokemonEvo.length;i++) {
        html+=renderEvoChainPart(pokemonEvo,i);
    }
    html+=`</div>`;
    document.getElementById("tab-evo").innerHTML=html;
}