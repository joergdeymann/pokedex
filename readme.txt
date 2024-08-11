API:
    https://pokeapi.co/api/v2/

Spezieles Pokemon:
    pokemon/ditto
    pokemon/1

    das ist das Pokekmon mit den Namen ditto

Pokemon Speziufikationen
    pokemon-species/aegislash
    Hier werden verschiedene Spezifikationenen des Pokemon "aegislash" angezeigt

Pokemon Farbe:
    https://pokeapi.co/api/v2/pokemon-color/7/
    7 ist die Pokemon ID


Sprache
    https://pokeapi.co/api/v2/language/6/

Entwicklungskette
    evolution-chain/66
    "evoution_chain":url 

type/3
ability/battle-armor

Liste mit Pokemon und den dazugehörigen Link
pokemon?limit=100000&offset=0 

Was habe ich gelernt ?
1. Umgang mit den Ladezeiten, Synchrones Laden aus einer Datenbank
    umgang mit arrays und Promises
    hier: 
        promises = []
        for (i=1;i<5;i++) {
            promises.push(functionLoad());
        }

        // Waten auf Fertig
        await Promise.all(promises);

    function functionLoad() {
        let object=await getDataFromDatabase();
        objArray.push(object);        
    }
    Weitere Beispiele mit foreach und Rückgabe werte auch hier zu sehen

2. Umgang mit Query Selector, parent, child

3. Umwandlung einer HTMLCollection die zB. aus einer .children entstehtzu einer Array function
    let array= Array.from(node.parent.children);

4. Umgang mit Callback Funktionen: find,findIndex,filter

5. map funktion als Alternative zu foreach, da foreach nicht bei Promises funktioniert

6. funktionen in Objekten zu nutzen
    Achtung:
         this bei function beutzen
         obj  bei Arrow Fuktion benutzen

7. Arrow Funktion anzuwenden

8. Die Bind Funktion
    habe ich leider nicht genau verstanden

9. Chat GPT hat mir viel geholfen Sachen zu verstehen, ist aber in machen Dingen zu blöd.
    zb: Habe ich einen runden Ladebalken umgeschrieben, so daß er von eine bestimmte Prozentzahl 
    auf eine ander Prozentzahl anzeigt. beim Übergang der Mitte wurde immer Der Balken oben sichtbar.
    auf die anfarge dahin den Fehler auzuzeigen mit genauen Angaben, habe ich eine Lapidare Antwort 
    bekommen, wie ich meine Erstelle funktion aufrufe, anstatt meinen Text folge zu leisten.
    Ich bin gespannt auf 4.0.


10. Ich habe gemerkr daß ich bei diesem Projekt viel Speicher brauche, 
    Wie kann ich desn Speicher reduzieren ?

11. Beim ersten Mal Laden des einzelnen Pokemon brauche ich sehr lange. 
    Warum beim 2. mal nicht, oder beim Blättern ?

12. Ich habe mich mit Variablen in CSS auseinandergesetzt und gelernt es einzusetzten

13. Die Schnittstele HTML / CSS übergabe von Werten mittels getAttribute() verstehe ich jetzt auch



LINKS:
    https://pokeapi.co/
WIKI: 
    https://www.pokewiki.de/Dratini    
    https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_color
POKEMON-Suchmaschine:
    https://beta.pokeapi.co/graphql/console/
POKEMON:
    https://pokeapi.co/api/v2/pokemon-color/5/
    https://pokeapi.co/api/v2/pokemon-species/2/
        evolution_chain.url
        evolves_from_species.url -> https://pokeapi.co/api/v2/evolution-chain/1/
        shape.name eg. quadruped
        varieties[0].is_default
        varieties[0].pokemon.name
        genera[].language
        genera[].genus           Art des Pokemon kann ich als 2. Namen einsetzen
        gender_rate:
            -1: Geschlechtsloses Pokémon
            0: 100% männlich
            1: 87.5% männlich, 12.5% weiblich
            2: 75% männlich, 25% weiblich
            4: 50% männlich, 50% weiblich
            6: 25% männlich, 75% weiblich
            8: 100% weiblich

    https://pokeapi.co/api/v2/evolution-chain/1/    
        chain.species.name
        chain.evolves_to.species.name
        chain.evolves_to.evolves_to.species.name
        chain.evolves_to.evolves_to.evolves_to.[] evolves_to.length=0
    
    https://pokeapi.co/api/v2/berry-flavor/1/ 

    https://pokeapi.co/api/v2/pokemon/1/
        sprites.front_default  
            https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
        sprites.back_default   
            https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png
        sprites.other.dream_world.front_default "
            https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg
        sprites.other.showdown.front_default 
            https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif
        sprites.other.showdown.back_default 
            https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif
        cries.latest
            https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/2.ogg",

    https://pokeapi.co/api/v2/type/3
    https://pokeapi.co/api/v2/type/flying <-- pokemonData.types[].type.url / .name
        damage_relations.double_damage_from[].name
        damage_relations.double_damage_to[].name
        damage_relations.half_damage_from[].name
        damage_relations.half_damage_to[].name
        damage_relationsno_damage_to[].name





