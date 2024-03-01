const io = console.log;
class Character{
    constructor(name, abilities, rank, minPlayers=2){
        this.name = name;
        this.abilities = abilities;
        this.rank = rank;
        this.minPlayers = minPlayers
    }
    canBeUsed(nPlayers){
        return nPlayers>=this.minPlayers;
    }

    get info(){
        return (this.abilities || []).join('\n');
    }
}
class UniqueDistrict{
    constructor(name, descr, cost){
        this.name = name;
        this.descr = descr;
        this.cost = cost;
        this.cost_str = number[cost];
    }
    get info(){
        return `Cost: ${this.cost}\n${this.descr}`;
    }
}
const number = ['⓪', '①', '②', '③', '④', '⑤', '⑥']

const present = "🎁"; //get...
const hand = "✋"
const crown = "👑"; //get crown
const knife = "🔪"; //assassinate
const hanafuda = "🎴" // card TODO: Use this
const card = hanafuda;
const bomb = "💣"; // destroy (district)
const coin = "🪙"; // coin
const moneybag = "💰";
const greenSquare = "🟩"; // trade
const redSquare = "🟥"; // military
const blueSquare = "🟦"; // religious
const yellowSquare = "🟨"; // trade
const purpleSquare = "🟪"; // unique
const district = "🏘️"; // houses image
const rotate = "🔄"; // switch (cards, districts)
const onePerson = "👤"; // character
// const wrench = "🔧"; // build
const hammer = "🔨"; //build
const build = hammer;

class CitadelsData {
    ch = [
        /*1:*/
        new Character("Assassin", [`Choose ${onePerson} to ${knife}. Skip target player turn without showing ${onePerson} card.`], 1),
        new Character("Witch", [`Choose ${onePerson} to bewitch. Stop turn after gathering resources. Bewitched target ${onePerson} can only gather resources, then Witch does rest of turn`], 1),
        new Character("Magistrate", [`Assign 3 warrants facedown to 3 ${onePerson}s. Only signed warrant ${onePerson} is targeted. If target pays to ${build}, you may show warrant and confiscate ${district} for free. Target receives back ${coin}s.`], 1),
        /*2:*/
        new Character("Thief", [`Choose ${onePerson} to rob. Take all ${coin}s from target on ${onePerson} reveal`], 2),
        new Character("Spy", [`Choose player and ${district} type. Look at player ${card}s. For each matching ${card}, gain 1 ${card} from deck and 1 ${coin} from player`], 2),
        new Character("Blackmailer", [`Assign 2 laces facedown to 2 ${onePerson}s. Only flowered lace ${onePerson} is targeted. On ${onePerson} turn right after only gathering resources, player may bribe you by giving half of his ${coin}s, removing thread without revealing. Otherwise lace may be revealed. If flowered, take all of his ${coin}s.`], 2),
        /*3:*/
        new Character("Magician", [`Either ${rotate} ${hand} with a player, or draw ${card}s from deck equal to amout you discard`], 3),
        new Character("Wizard", [`Look at player ${hand}, choose a ${card}. Either pay to ${build} or put it in your ${hand}`,`Can ${build}${district} identical to already built ${district}`], 3),
        new Character("Seer", [`Take a ${card} from all other players. Return a ${card} to all other players.`, `${build}x2`], 3),
        /*4:*/
        new Character("King", [`+1 ${coin} per ${yellowSquare}${district}`, `Must take ${crown}`], 4),
        new Character("Emperor", [`+1 ${coin} per ${yellowSquare}${district}`, `Must take ${crown} and give it to a different player, not yourself.`], 4, 3),
        new Character("Patrician", [`+1 card per ${yellowSquare}${district}`, `Must take ${crown}`], 4),
        /*5:*/
        new Character("Bishop", [`+1 ${coin} per ${blueSquare}${district}`, `Immune to rank 8 ${onePerson} ability`], 5),
        new Character("Abbot", [`+1 ${coin} or card per ${blueSquare}${district}`, `Take 1 ${coin} from richest player`], 5),
        new Character("Cardinal", [`+1 ${card} per ${blueSquare}${district}`, `Can take remaining ${coin}s needed to buy ${district} from a player, must return ${card}s equal to ${coin}s taken`], 5),
        /*6:*/
        new Character("Merchant", [`+1 ${coin} per ${greenSquare}${district}`, `+1 ${coin}`], 6),
        new Character("Alchemist", [`Gain all ${coin}s paid to build ${district}`], 6),
        new Character("Trader", [`+1 ${coin} per ${greenSquare}${district}`, `${build}${greenSquare}${district}x∞`], 6),
        /*7:*/
        new Character("Architect", [`+2 ${card}s`, `${build}x3`], 7),
        new Character("Navigator", [`+4 ${coin}s or +4 ${card}s`, `${build}x0`], 7),
        new Character("Scholar", [`Draw 7 ${card}s from deck, add 1 ${card} to ${hand}`, `${build}x2`], 7),
        /*8:*/
        new Character("Warlord", [`+1 ${coin} per ${redSquare}${district}`, `${bomb}${district}, pay 1 less ${coin} than its building cost`], 8),
        new Character("Marshal", [`+1 ${coin} per ${redSquare}${district}`, `Seize ${district} with cost 3 or less. Pay player building cost.`], 8),
        new Character("Diplomat", [`+1 ${coin} per ${redSquare}${district}`, `${rotate}${district} in opponents city with a ${district} in own city. Pay player difference in ${coin}`], 8),
        /*9:*/
        new Character("Queen", [`+3 ${coin}s if sitting next to rank 4 ${onePerson}`], 9, 5),
        new Character("Artist", [`Beautify up to two ${district} by adding 1 ${coin} on top of ${district} from own stash. Beautified ${district} value +1. ${district} can only be beautified once.`], 9, 5),
        new Character("Tax Collector", [`After any player builds ${district}, player places 1${coin} as tax on Tax Collector token if possible.`, `Take all ${coin}s from Tax Collector token`, `Not charged tax`], 9),
    ]

    ud = [
        new UniqueDistrict("Armory", `During your turn, ${bomb} the armory to ${bomb} 1 ${district} of your choice.`, 3),
        new UniqueDistrict("Basilica", `At the end of the game, score +1 for each ${district} in your city with an odd-numbered cost.`, 4),
        new UniqueDistrict("Capitol", `If you have at least 3 ${district}s of the same type at the end of the game, score +3.`, 5),
        new UniqueDistrict("Dragon Gate", `At the end of the game, score +2.`, 6),
        new UniqueDistrict("Factory", `You pay -1 ${coin} to ${build} any other ${purpleSquare}${district}.`, 5),
        new UniqueDistrict("Framework", `You can ${build} a ${district} by ${bomb} the Framework instead of paying ${district} cost.`, 3),
        new UniqueDistrict("Gold Mine", `If you choose to gain ${coin}s when gathering resources, +1 ${coin}.`, 6),
        new UniqueDistrict("Great Wall", `The rank 8 ${onePerson} must pay +1 ${coin} to use its ability on any other ${district}s in your city.`, 6),
        new UniqueDistrict("Haunted Quarter", `At the end of the game, the Haunted Quarter counts as any 1 ${district} type of your choice.`, 2),
        new UniqueDistrict("Imperial Treasury", `At the end of the game, score +1 for each ${coin} in your stash.`, 5),
        new UniqueDistrict("Ivory Tower", `If the Ivory Tower is the only ${purpleSquare}${district} in your city at the end of the game, score +5.`, 5),
        new UniqueDistrict("Keep", `The rank 8 ${onePerson} cannot use its ability on the Keep.`, 3),
        new UniqueDistrict("Laboratory", `Once per turn, discard 1 ${card} from your hand to gain 2 ${coin}.`, 5),
        new UniqueDistrict("Library", `If you choose to draw ${card}s when gathering resources, keep all drawn ${card}s.`, 6),
        new UniqueDistrict("Map Room", `At the end of the game, score +1 for each ${card} in your hand.`, 5),
        new UniqueDistrict("Monument", `You cannot ${build} the Monument if you have 5 or more ${district} in your city. Treat the Monument as being 2 districts towards your completed city.`, 4),
        new UniqueDistrict("Museum", `Once per turn, assign 1 ${card} from your hand facedown under the Museum. At the end of the game, score +1 for each ${card} under the Museum.`, 4),
        new UniqueDistrict("Necropolis", `You can ${build} the Necropolis by ${bomb} 1 ${district} in your city instead of paying the Necropolis cost.`, 5),
        new UniqueDistrict("Observatory", `If you choose to draw ${card}s when gathering resources, draw 3 ${card}s instead of 2.`, 4),
        new UniqueDistrict("Park", `If there are no ${card}s in your hand at the end of your turn, +2 ${card}s.`, 6),
        new UniqueDistrict("Poor House", `If you have no ${coin}s in your stash at the end of your turn, gain 1 ${coin}.`, 4),
        new UniqueDistrict("Quarry", `You can ${build} ${district} that are identical to ${district}in your city.`, 5),
        new UniqueDistrict("School of Magic", `For abilities that gain resources for your districts, the School of Magic counts as the type of your choice.`, 6),
        new UniqueDistrict("Secret Vault", `The Secret Vault cannot be ${build}. At the end of the game, reveal the Secret Vault from your hand to score +3.`, 0),
        new UniqueDistrict("Smithy", `Once per turn, pay 2 ${coin}s to gain 3 ${card}s`, 5),
        new UniqueDistrict("Stables", `Building the Sables does not count toward your building limit for the turn.`, 2),
        new UniqueDistrict("Statue", `If you have ${crown} at the end of the game, score +5.`, 3),
        new UniqueDistrict("Theater", `At the end of each selection phase, you may exchange your chosen ${onePerson} card with an opponent's ${onePerson} card.`, 6),
        new UniqueDistrict("Thieves' Den", `Pay some or all of the Thieves' Den cost with ${card}s from your hand instead of ${coin} at a rate of 1 ${card}:1 ${coin}.`, 6),
        new UniqueDistrict("Wishing Well", `At the end of the game score +1 for each ${purpleSquare}${district} in your city (including Wishing Well).`, 5),
    ]

    presets = {
        'First game': {
            "Characters": [
                /*1:*/"Assassin",
                /*2:*/"Thief",
                /*3:*/"Magician",
                /*4:*/"King",
                /*5:*/"Bishop",
                /*6:*/"Merchant",
                /*7:*/"Architect",
                /*8:*/"Warlord",
                /*9:*/undefined,
            ],
            "Districts": [
                "Dragon Gate",
                "Factory",
                "Haunted Quarter",
                "Imperial Treasury",
                "Keep",
                "Laboratory",
                "Library",
                "Map Room",
                "Quarry",
                "School of Magic",
                "Smithy",
                "Statue",
                "Thieves' Den",
                "Wishing Well",
            ],
        },
        'Ambitious Aristocrats': {
            "Characters": [
                /*1:*/"Magistrate",
                /*2:*/"Thief",
                /*3:*/"Wizard",
                /*4:*/"Patrician",
                /*5:*/"Bishop",
                /*6:*/"Trader",
                /*7:*/"Architect",
                /*8:*/"Marshal",
                /*9:*/"Queen",
            ],
            "Districts": [
                "Capitol",
                "Factory",
                "Framework",
                "Great Wall",
                "Haunted Quarter",
                "Keep",
                "Necropolis",
                "Park",
                "Poor House",
                "Quarry",
                "School of Magic",
                "Stables",
                "Statue",
                "Thieves' Den",
            ]
        },
        'Cunning Agents': {
            "Characters": [
                /*1:*/"Witch",
                /*2:*/"Blackmailer",
                /*3:*/"Magician",
                /*4:*/"Emperor",
                /*5:*/"Abbot",
                /*6:*/"Alchemist",
                /*7:*/"Architect",
                /*8:*/"Warlord",
                /*9:*/"Tax Collector",
            ],
            "Districts": [
                "Armory",
                "Basilica",
                "Dragon Gate",
                "Gold Mine",
                "Keep",
                "Monument",
                "Museum",
                "Necropolis",
                "Park",
                "Poor House",
                "Quarry",
                "Secret Vault",
                "Smithy",
                "Theater",
            ]
        },
        'Illustrious Emissaries': {
            "Characters": [
                /*1:*/"Witch",
                /*2:*/"Spy",
                /*3:*/"Seer",
                /*4:*/"Emperor",
                /*5:*/"Bishop",
                /*6:*/"Merchant",
                /*7:*/"Scholar",
                /*8:*/"Diplomat",
                /*9:*/"Artist",
            ],
            "Districts": [
                "Factory",
                "Framework",
                "Great Wall",
                "Haunted Quarter",
                "Ivory Tower",
                "Keep",
                "Library",
                "Museum",
                "Observatory",
                "Park",
                "Poor House",
                "Quarry",
                "School of Magic",
                "Smithy",
            ]
        },
        'Devious Dignitaries': {
            "Characters": [
                /*1:*/"Magistrate",
                /*2:*/"Blackmailer",
                /*3:*/"Wizard",
                /*4:*/"King",
                /*5:*/"Abbot",
                /*6:*/"Alchemist",
                /*7:*/"Navigator",
                /*8:*/"Marshal",
                /*9:*/"Queen",
            ],
            "Districts": [
                "Dragon Gate",
                "Factory",
                "Framework",
                "Haunted Quarter",
                "Laboratory",
                "Necropolis",
                "Park",
                "Poor House",
                "Secret Vault",
                "Smithy",
                "Stables",
                "Theater",
                "Thieves' Den",
                "Wishing Well",
            ]
        },
        'Tenacious Delegates': {
            "Characters": [
                /*1:*/"Assassin",
                /*2:*/"Spy",
                /*3:*/"Seer",
                /*4:*/"King",
                /*5:*/"Cardinal",
                /*6:*/"Trader",
                /*7:*/"Scholar",
                /*8:*/"Diplomat",
                /*9:*/"Artist",
            ],
            "Districts": [
                "Basilica",
                "Capitol",
                "Haunted Quarter",
                "Imperial Treasury",
                "Laboratory",
                "Library",
                "Map Room",
                "Observatory",
                "School of Magic",
                "Secret Vault",
                "Smithy",
                "Stables",
                "Statue",
                "Wishing Well",
            ]
        },
        'Vicious Nobles': {
            "Characters": [
                /*1:*/"Assassin",
                /*2:*/"Thief",
                /*3:*/"Magician",
                /*4:*/"Patrician",
                /*5:*/"Cardinal",
                /*6:*/"Merchant",
                /*7:*/"Navigator",
                /*8:*/"Warlord",
                /*9:*/"Tax Collector",
            ],
            "Districts": [
                "Armory",
                "Basilica",
                "Dragon Gate",
                "Gold Mine",
                "Imperial Treasury",
                "Ivory Tower",
                "Laboratory",
                "Map Room",
                "Monument",
                "Museum",
                "School of Magic",
                "Statue",
                "Thieves' Den",
                "Wishing Well",
            ],
        }
    }



    drawInfo(nPlayers, use9){
        switch (nPlayers) {
            case 2:
                return `Facedown cards: 1. After 1st player, each chooses 1 to discard`;
            case 3:
                return `Facedown cards: 1, also 1 after player 3`;
            default:
                const diff = (8 + use9) - nPlayers;
                const nFaceup = Math.max(0, diff - 2);
                const facedownValue = !(diff < 2) ? `1` : `1, ${nPlayers}th player may see and choose facedown card`;
                return `Faceup cards: ${nFaceup}\nFacedown cards: ${facedownValue}`;
        }
    }

    constructor(){
        for (let character of this.ch){
            this[character.name] = character;
        }
        this[undefined] = new Character();
        for (let district of this.ud){
            this[district.name] = district;
        }

        for (let i=1;i<10;++i){
            this[i] = this.ch.filter(character => character.rank==i);
        }

    }
}
// rank 9 optional for 4-7, mandatory for 3 & 8 players

class CitadelsGame{
    mandatory9 = [3,8];
    illegal9 = [2];
    n_districts = 14;

    constructor(){
        this.cd = new CitadelsData();
        this.state = new URLSearchParams(window.location.search).get("state")
        this.set_players(this.statePlayers());
        this.set_preset(this.statePreset());
        this.set_rank9(this.stateRank9());
        if (!this.state){this.setState(null)}
        this.listenEvents();
        this.startingStuff();

    }
    setState(seed){
        let presetId = Object.keys(this.cd.presets).indexOf(this.preset_name) + 1;
        this.seed = seed ?? Math.random().toString(36).substring(2,6);
        this.state = `${+this.use9}${this.p}${presetId}${this.seed}`;

        document.getElementById("statebox").value = this.state;
        
        const url = new URL(window.location);
        url.searchParams.set("state", this.state);

        io(`pushing ${this.state}`);
        window.history.pushState({}, "", url);
    }
    statePlayers(){
        return parseInt(this.state?.charAt(1) ?? document.getElementById("nplayers-filter").value);
    }
    statePreset(){
        let presetId = parseInt(this.state?.charAt(1)-1 ?? -1);
        return Object.keys(this.cd.presets)[presetId];
    }
    stateRank9(){
        return !!parseInt(this.state?.charAt(0) ?? 0);
    }

    startingStuff(){
      const outerDiv = document.getElementById("starting-stuff");
      // const b1   = this.createElement('b', 'title', outerDiv, ``);
      const p1 = this.createElement('p', 'coins-cards', outerDiv, `Starting resources: 2x ${coin}, 4x ${card}`);
      const p2 = this.createElement('p', 'deck-cards', outerDiv, `Deck number of ${purpleSquare}${district}: ${this.n_districts}`);
    }


    set_players(numPlayers){this.p = parseInt(numPlayers);io(this.p)}

    set_preset(presetName){
        this.preset_name = Object.keys(this.cd.presets).includes(presetName) ? presetName : null;
        this.preset = this.cd.presets[this.preset_name];
    }
    set_rank9(use9){
        // forced if in mandatory 
        if (this.mandatory9.includes(this.p)){
            this.use9 = true;
        } else if (this.illegal9.includes(this.p)){
            this.use9 = false;
        } else {
            this.use9 = use9;
        }
    }

    get_character(rank){
        let character = this.preset ? this.cd[this.preset.Characters[rank-1]] : this.draw(this.cd[rank]);
        if (!character.canBeUsed(this.p)){
            const alternatives = this.cd[rank].filter(c => c.name!=character.name);
            character = this.draw(alternatives);
        }
        return character;
    }


    choose_characters(){
        this.characters = [];
        for (let rank=1; rank<(9+this.use9); ++rank){
            this.characters.push(this.get_character(rank));
        }
        return this.characters;
    }

    draw(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    }

    choose_districts(){
        if (this.preset){
            this.districts = this.preset.Districts.map(d => this.cd[d]);
        } else {
            let districts = new Set();
            while (districts.size<this.n_districts){
                districts.add(this.draw(this.cd.ud));
            }
            this.districts = Array.from(districts);
        }
        return this.districts.toSorted((a,b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0);
    }

    reroll(seed=null){
        let newSeed = seed ? seed : Math.random().toString(36).substring(2,6);
        this.setState(newSeed)
        Math.seedrandom(newSeed);
        // this.set_available_characters();
        let dists = this.choose_districts();
        let dist_div = this.genUI(dists, "Districts", false);
        let chars = this.choose_characters();
        let char_div = this.genUI(chars, "Characters", true);
        let content_div = document.getElementsByClassName("content")[0];
        content_div.innerHTML = ``;
        content_div.appendChild(char_div);
        content_div.appendChild(dist_div);
    }

    reproduce(state=null){
        // id consists of
        // ABCDDDD
        // A=number in [0,1]: use rank 9
        // B=number in [2,8]: number of players
        // C=number in [0,7]: use preset, if 0 do not use
        // D=characters     : info to regenerate character and district state 
        this.stopListen()
        let newState = state ?? this.state 

        this.set_rank9(parseInt(newState.charAt(0)));
        document.getElementById("rank9-filter").checked = this.use9;

        this.set_players(parseInt(newState.charAt(1)));
        document.getElementById("nplayers-filter").value = this.p;

        const presetId = parseInt(newState.charAt(2));
        let preset = Object.keys(this.cd.presets)[presetId-1];
        this.set_preset(preset);
        document.getElementById("preset-filter").value = preset ?? "";
        this.reroll(newState.substring(3));
        this.listenEvents();

    }

    createElement(name, title, parent=null, innertext=null, hidden_content=null){
        let e = document.createElement(name);
        e.classList.add(`${title}-${name}`.toLowerCase());
        if (parent){parent.appendChild(e);}
        if (innertext){e.innerText = innertext;}
        if (hidden_content){
            let sub_e = document.createElement(name);
            sub_e.innerText = hidden_content;
            sub_e.classList.add('hidden', 'sub');
            sub_e.style.display = "none"; // temporary fix...
            e.appendChild(sub_e);
        }
        return e;
    }

    genUI(objs, title, enumerate=false){
        let div = this.createElement('div',title);
        let h2 = this.createElement('h2',title, div, title);
        for (const [i, obj] of objs.entries()){
            let p = this.createElement('p', title, div, (enumerate ? `${i + 1}. `.padStart(3,' ') : "") + obj.name, obj.info);
            p.dataIndex=`${i + 1}`;
        }
        return div;
    }
    updateDrawText(){
        this.drawText = this.cd.drawInfo(this.p, this.use9);
        document.getElementById("drawInfoText").innerHTML = this.drawText.replace('\n', '<br/>\n');
    }

    nplayers_update(){
        let p = document.getElementById("nplayers-filter").value;
        this.set_players(p);
        this.rank9_update();


    }

    preset_update(){
        let preset = document.getElementById("preset-filter").value;
        if (this.preset_name==preset) return;
        this.set_preset(preset);
        this.rank9_update();
    }

    rank9_update(){
        let rank9_checkbox = document.getElementById("rank9-filter")
        this.set_rank9(rank9_checkbox.checked);
        const onchange = rank9_checkbox.onchange;
        rank9_checkbox.onchange = null;
        rank9_checkbox.checked = this.use9;
        rank9_checkbox.onchange = onchange;
        this.reroll(this.seed);
        this.updateDrawText();
    }
    toggleSelection(el){
        let elem = (el || document.getElementsByClassName("focused")[0])
        if (elem){
            elem.classList.toggle("focused");
            let sub_e = elem.querySelector(`${elem.tagName}`);
            if (sub_e) {
                sub_e.classList.toggle("hidden");
                sub_e.style.display = sub_e.classList.contains("hidden") ?  "none" : ""; // temporary fix...
            }

        }
    }

    getInfo(e){
        let el = e.target;
        if (el.classList.contains('sub')){el = el.parentNode;}
        if (el!==document.getElementsByClassName("focused")[0]){
            this.toggleSelection();
        }
        // let key = (el.innerText.match(/^\s*\d+\. (.+)/) || [])[1];
        // if (key && key in this.cd){
        //  this.toggleSelection(el);
        // }
        let index = el.dataIndex
        if (index){
            this.toggleSelection(el)
        }
    }

    listenEvents(){
        console.log(" start")
        document.getElementById("nplayers-filter").onchange = ()=>{this.nplayers_update()};
        document.getElementById("preset-filter").onchange = ()=>{io("changing to", document.getElementById("preset-filter").value); this.preset_update()};
        document.getElementById("rank9-filter").onchange = ()=>{this.rank9_update()};
        document.getElementById("reroll-button").onclick = ()=>{document.getElementById("preset-filter").value = ""; this.preset_update(); this.reroll()};
        document.getElementById("reproduce-button").onclick = ()=>{this.reproduce(document.getElementById("statebox").value)};
        document.getElementsByClassName("content")[0].onclick = (e)=>{console.log("content");this.getInfo(e)};
    }
    stopListen(){
        console.log(" stop")
        document.getElementById("nplayers-filter").onchange = ()=>{};
        document.getElementById("preset-filter").onchange = ()=>{};
        document.getElementById("rank9-filter").onchange = ()=>{};
        document.getElementById("reroll-button").onclick = ()=>{};
        document.getElementById("reproduce-button").onclick = ()=>{};
        document.getElementsByClassName("content")[0].onclick = (e)=>{};
    }  
}

window.cg = new CitadelsGame();
window.cg.updateDrawText();
window.cg.reproduce();

/* 
    update state when:
        - changing url
        - clicking reroll
        - change preset, r9, #players
*/