function speciesIs(value,color,text,textFalse) {
    if (!value) {
        color +=" brick-inactive";
    }
    return `<div class="brick long-brick ${color}">${text}</div>`; 
}

function speciesRow(value,text) {
    return /*html*/ `
    <div class="flex-row">
        <div class="bg-fighting brick effect-brick">${text}</div>
        <div class="">${value}</div>
    </div>
    `
}

function getGenus(genera) {
    e=genera.find(element => element.language.name=="en");
    return e.genus;
}

function getGender(gender_rate) {
    let gender_text="";
    if (gender_rate == 4) {
        gender_text ="half / half"
    }

    let gender_p=gender_rate*100/8;
    if (gender_rate <4) {
        gender_text = `${(100-gender_p)} % masculine`;
    }
    if (gender_rate >4) {
        gender_text = `${(gender_p)} % female`;
    }
    if (gender_rate == -1) {
        gender_text="sexless";
    }

    return gender_text;

}

function getSpeciesBlm()  {
    let blm="";
    
    blm+=speciesIs(pokemonSpecies.is_baby,"bg-grass","baby");
    blm+=speciesIs(pokemonSpecies.is_legendary,"bg-poison","legendary");
    blm+=speciesIs(pokemonSpecies.is_mythical,"bg-rock","mythical");
    return blm;
}

function getSpeciesLeft()  {
    return `
        ${speciesRow(pokemonSpecies.name,"species")}
        ${speciesRow(getGenus(pokemonSpecies.genera),"genus")}
        ${speciesRow(getGender(pokemonSpecies.gender_rate),"gender")}
        ${speciesRow(pokemonSpecies.color.name,"color")}
        ${speciesRow(pokemonData.height,"height")}
        ${speciesRow(pokemonData.weight,"weight")}                    
    `;
}

function getSpeciesRight()  {
    return `
        ${speciesRow(pokemonSpecies.generation.name,"generation")}
        ${speciesRow(pokemonSpecies.habitat.name,"habitat")}
        ${speciesRow(pokemonSpecies.egg_groups[0].name,"egg groups")}
        ${speciesRow(pokemonSpecies.growth_rate.name,"groth rate")}
        ${speciesRow(pokemonSpecies.has_gender_differences?"yes":"no","has gender difference")}
        ${speciesRow(pokemonSpecies.hatch_counter,"hatch counter")}
    `;
}

function getSpeciesForms()  {
    if (pokemonData.forms.length>1) alert("/renderSpecies()");
}

function renderSpecies() {
    let html= /*html*/ `
        <div class="textarea-container"><div class="textarea">
            <div class="flex-row gap16">
                <div class="bg-poison brick mainH-brick">Species</div>
                <div onclick="play('${pokemonData.cries.latest}')" class="brick bg-grass cry"><img src="./img/megaphone.svg"></div>
            </div>
            <div class="flex-row gap16 m8">${getSpeciesBlm()}</div>
            <div class="species-row">
                <div class="species-area">
                    ${getSpeciesLeft()}
                </div>        
                <div class="species-area">
                    ${getSpeciesRight()}
                </div>
            </div>
        </div> </div>
    `;
    document.getElementById("tab-main").innerHTML=html;
}
