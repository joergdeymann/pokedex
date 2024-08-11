function renderAbility(ability) {
    let effectEntry = ability.effect_entries.find(element => element.language.name == "en");
    if (effectEntry == null) {
        effectEntry={
            "effect": "no effect found",
            "short_effect": "no effect found"
        };
    }
    return /*html*/ `
    <div class="textarea-container"><div class="textarea">
        <div class="bg-poison brick ability-brick">${ability.name}</div>
        <div class="ability-row">
            <div class="bg-fighting brick effect-brick">Normal Effect</div>
            <div class="block">${effectEntry.effect}</div>
        </div>
        <div class="ability-row">
            <div class="bg-psychic brick effect-brick">Short Effect</div>
            <div class="block">${effectEntry.short_effect}</div>
        </div>
    </div> </div>
    `;
}

function renderAbilities() {
    html = "";
    pokemonAbilityList.forEach(ability => {
        html += renderAbility(ability);
    });
    document.getElementById("tab-abilities").innerHTML = html;
    return
}
