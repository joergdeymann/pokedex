function filterPokemonNames(pokemonList) {
    let search=document.getElementById("input-pokemon").value;
    let filteredPokemonList=pokemonList;
    if (search.length > 0) {
        filteredPokemonList=filterText(pokemonList,search);
    }
    return filteredPokemonList;
}

function filterTypesIsSelected(type) {
    let bricks= document.getElementById("pokemon-types").querySelectorAll('.brick');
    for (let i=0;i<bricks.length;i++) {
        if (bricks[i].classList.contains(`bg-${type}`)) {
            if (!bricks[i].classList.contains("brick-inactive")) return true;
            return false;
        }
    }
    return false;
}

function filterTypesSelectedAll(options) {
    let addX = (options == null || options == "none");
    let bricks= document.getElementById("pokemon-types").querySelectorAll('.brick');
    for (let i=3;i<bricks.length;i++) {
        if (addX) {
            if (!bricks[i].classList.contains("brick-inactive")) {
                bricks[i].classList.add("brick-inactive")
            } 
        } else {
            bricks[i].classList.remove("brick-inactive")
        }
    }
    return false;
}

function isType(element) { 
    return filterTypesIsSelected(element.typeList[0]);
}

function filterTypes(list) {
    let filteredList=list.filter(element =>  isType(element));
    return filteredList;
}

function filterText(list,search) {
    let filteredList=list.filter(element =>  element.name.toLowerCase().indexOf(search.toLowerCase()) != -1);
    return filteredList;
}

function filterPokemonList() {
    let list=pokemonList;
    list = filterPokemonNames(list);
    list = filterTypes(list);
    renderPokemonCards(list);
    filteredPokemonList=list;
}

function collapse(id) {
    document.getElementById(id).classList.toggle("hide");
}

function isFiltered(filteredList,list) {
    return filteredList.length != list.length;
}