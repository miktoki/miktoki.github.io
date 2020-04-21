
class Character{
    constructor(name, abilities, rank, minPlayers=2){
        this.name = name;
        this.abilities = abilities;
        this.rank = rank;
        this.minPlayers = minPlayers
    }
    canBeUsed(nPlayers){
        return nPlayers>=minPlayers;
    }
}
class UniqueDistrict{
    constructor(name, descr, cost){
        this.name = name;
        this.descr = descr;
        this.cost = cost;
    }
}

const present = "🎁"; //get...
const crown = "👑"; //get crown
const knife = "🔪"; //assassinate
const jokercard = "🃏"; //
const bomb = "💣"; // destroy (district)
const coin = "🪙"; //coming in late 2020
const moneybag = "💰";
const greenSquare = "🟩";
const redSquare = "🟥";
const blueSquare = "🟦";
const yellowSquare = "🟨";
const purpleSquare = "🟪";
const houses = "🏘️"; // district
const rotate = "🔄"; // switch (cards, districts)
const onePerson = "👤"; // character
// const wrench = "🔧"; // build
const hammer = "🔨"; //build

class CitadelsData {
    characters = [
        /*1:*/['Assassin', 'Witch', 'Magistrate'],
        /*2:*/['Thief', 'Spy', 'Blackmailer'],
        /*3:*/['Magician', 'Wizard', 'Seer'],
        /*4:*/['King', 'Emperor', 'Patrician'],
        /*5:*/['Bishop', 'Abbot', 'Cardinal'],
        /*6:*/['Merchant', 'Alchemist', 'Trader'],
        /*7:*/['Architect', 'Navigator', 'Scholar'],
        /*8:*/['Warlord', 'Diplomat', 'Marshal'],
        /*9:*/['Queen', 'Artist', 'Tax Collector'],
    ]
    ch = [
      new Character("Assassin", [`Choose ${onePerson} to ${knife}. Skip target player turn without showing ${onePerson} card.`], 1),
      new Character("Witch", [`Choose ${onePerson} to bewitch. Stop turn after gathering resources. Bewitched target ${onePerson} can only gather resources, then Witch does rest of turn`], 1),
      new Character("Magistrate", [`Assign 3 warrants facedown to 3 ${onePerson}s. Only signed warrant ${onePerson} is targeted. If target pays to ${hammer}, you may show warrant and confiscate 🏘️, ${houses} for free. Target receives back ${coin}s.`], 1),
      new Character("Thief", [`Choose ${onePerson} to rob. Take all ${coin}s from target on ${onePerson} reveal`], 2),
      new Character("Spy", [`Choose player and ${houses} type. Look at player cards. For each matching card, ${present} 1 card from deck and 1 ${coin} from player`], 2),
      new Character("Blackmailer", [`Assign 2 laces facedown to 2 ${onePerson}s. Only flowered lace ${onePerson} is targeted. If `], 2),
      new Character("Magician", [``], 3),
      new Character("Wizard", [``], 3),
      new Character("Seer", [``], 3),
      new Character("King", [``], 4),
      new Character("Emperor", [``], 4),
      new Character("Patrician", [``], 4),
      new Character("Bishop", [``], 5),
      new Character("Abbot", [``], 5),
      new Character("Cardinal", [``], 5),
      new Character("Merchant", [``], 6),
      new Character("Alchemist", [``], 6),
      new Character("Trader", [``], 6),
      new Character("Architect", [``], 7),
      new Character("Navigator", [``], 7),
      new Character("Scholar", [``], 7),
      new Character("Warlord", [``], 8),
      new Character("Diplomat", [``], 8),
      new Character("Marshal", [``], 8),
      new Character("Queen", [``], 9),
      new Character("Artist", [``], 9),
      new Character("Tax Collector", [``], 9),
    ]
    ud = [
       new UniqueDistrict("Armory", "", 0),
       new UniqueDistrict("Capitol", "", 0),
       new UniqueDistrict("Basilica", "", 0),
       new UniqueDistrict("Dragon Gate", "", 0),
       new UniqueDistrict("Factory", "", 0),
       new UniqueDistrict("Framework", "", 0),
       new UniqueDistrict("Gold Mine", "", 0),
       new UniqueDistrict("Great Wall", "", 0),
       new UniqueDistrict("Haunted Quarter", "", 0),
       new UniqueDistrict("Imperial Treasury", "", 0),
       new UniqueDistrict("Ivory Tower", "", 0),
       new UniqueDistrict("Keep", "", 0),
       new UniqueDistrict("Laboratory", "", 0),
       new UniqueDistrict("Library", "", 0),
       new UniqueDistrict("Map Room", "", 0),
       new UniqueDistrict("Monument", "", 0),
       new UniqueDistrict("Museum", "", 0),
       new UniqueDistrict("Necropolis", "", 0),
       new UniqueDistrict("Observatory", "", 0),
       new UniqueDistrict("Park", "", 0),
       new UniqueDistrict("Poor House", "", 0),
       new UniqueDistrict("Quarry", "", 0),
       new UniqueDistrict("School of Magic", "", 0),
       new UniqueDistrict("Secret Vault", "", 0),
       new UniqueDistrict("Smithy", "", 0),
       new UniqueDistrict("Stables", "", 0),
       new UniqueDistrict("Statue", "", 0),
       new UniqueDistrict("Theater", "", 0),
       new UniqueDistrict("Thieves' Den", "", 0),
       new UniqueDistrict("Wishing Well", "", 0),
    ]

    unique_districts = [
        "Armory",
        "Capitol",
        "Basilica",
        "Dragon Gate",
        "Factory",
        "Framework",
        "Gold Mine",
        "Great Wall",
        "Haunted Quarter",
        "Imperial Treasury",
        "Ivory Tower",
        "Keep",
        "Laboratory",
        "Library",
        "Map Room",
        "Monument",
        "Museum",
        "Necropolis",
        "Observatory",
        "Park",
        "Poor House",
        "Quarry",
        "School of Magic",
        "Secret Vault",
        "Smithy",
        "Stables",
        "Statue",
        "Theater",
        "Thieves' Den",
        "Wishing Well",
    ]

    constructor(){
        this.characters_flat = this.characters.flat();
    }

    

    

    presets = {
        'First game': {
            "Characters": [
                /*1:*/["Assassin"],
                /*2:*/["Thief"],
                /*3:*/["Magician"],
                /*4:*/["King"],
                /*5:*/["Bishop"],
                /*6:*/["Merchant"],
                /*7:*/["Architect"],
                /*8:*/["Warlord"],
                /*9:*/["<Not defined>"],
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
                /*1:*/["Magistrate"],
                /*2:*/["Thief"],
                /*3:*/["Wizard"],
                /*4:*/["Patrician"],
                /*5:*/["Bishop"],
                /*6:*/["Trader"],
                /*7:*/["Architect"],
                /*8:*/["Marshal"],
                /*9:*/["Queen"],
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
                /*1:*/["Witch"],
                /*2:*/["Blackmailer"],
                /*3:*/["Magician"],
                /*4:*/["Emperor"],
                /*5:*/["Abbot"],
                /*6:*/["Alchemist"],
                /*7:*/["Architect"],
                /*8:*/["Warlord"],
                /*9:*/["Tax Collector"],
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
                /*1:*/["Witch"],
                /*2:*/["Spy"],
                /*3:*/["Seer"],
                /*4:*/["Emperor"],
                /*5:*/["Bishop"],
                /*6:*/["Merchant"],
                /*7:*/["Scholar"],
                /*8:*/["Diplomat"],
                /*9:*/["Artist"],
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
                /*1:*/["Magistrate"],
                /*2:*/["Blackmailer"],
                /*3:*/["Wizard"],
                /*4:*/["King"],
                /*5:*/["Abbot"],
                /*6:*/["Alchemist"],
                /*7:*/["Navigator"],
                /*8:*/["Marshal"],
                /*9:*/["Queen"],
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
                /*1:*/["Assassin"],
                /*2:*/["Spy"],
                /*3:*/["Seer"],
                /*4:*/["King"],
                /*5:*/["Cardinal"],
                /*6:*/["Trader"],
                /*7:*/["Scholar"],
                /*8:*/["Diplomat"],
                /*9:*/["Artist"],
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
                /*1:*/["Assassin"],
                /*2:*/["Thief"],
                /*3:*/["Magician"],
                /*4:*/["Patrician"],
                /*5:*/["Cardinal"],
                /*6:*/["Merchant"],
                /*7:*/["Navigator"],
                /*8:*/["Warlord"],
                /*9:*/["Tax Collector"],
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
}
// Queen only with >=5 players
// Emperor only with >=3 players
// rank 9 optional for 4-7, mandatory for 3 & 8 players

class CitadelsGame{
    mandatory9 = [3,8];
    illegal9 = [2];
    n_districts = 14;

	constructor(){
        this.cd = new CitadelsData();
		this.set_players(document.getElementById("nplayers-filter").value);
        this.set_preset(document.getElementById("preset-filter").value);
        this.set_rank9(document.getElementById("rank9-filter").checked);
        this.reroll();
        this.listenEvents();
	}

    set_players(value){this.p = parseInt(value);}
    set_preset(value){this.preset_name = Object.keys(this.cd.presets).includes(value) ? value : null;}
    set_rank9(value){
        if (this.mandatory9.includes(this.p)){
            this.use9 = true;
        } else if (this.illegal9.includes(this.p)){
            this.use9 = false;
        } else {
            this.use9 = value;
        }
    }

	set_available_characters(){
		this.characters = Object.keys(this.cd.presets)
            .includes(this.preset_name) 
            ? [...JSON.parse(JSON.stringify(this.cd.presets[this.preset_name].Characters))]
            : JSON.parse(JSON.stringify(this.cd.characters));
        if (!this.use9){
            this.characters.pop();
		} else if (this.p<5){
			let char9 = this.characters[9-1];
            const idx = char9.indexOf("Queen");
            if (idx>-1) char9.splice(idx, 1);
			if (!char9.length){
				char9.push("Artist", "Tax Collector");
			}
		}
		if (this.p==2){
			let char4 = this.characters[4-1];
			const idx = char4.indexOf("Emperor");
            if (idx>-1) char4.splice(idx, 1);
			if (!char4.length){
				char4.push("King", "Patrician");
			}
        }
		return this.characters; // TODO: check that it is updated
	}
	choose_characters(){
		let chars = [];
		for (let i=0; i<(8+this.use9); ++i){
            chars.push(this.draw(this.characters[i]));
            
		}
		this.chosen_characters = chars;
		return chars;
	}

	draw(arr){
		return arr[Math.floor(Math.random() * arr.length)];
	}

	choose_districts(){
		if (this.preset_name){
			return JSON.parse(JSON.stringify(this.cd.presets[this.preset_name].Districts));
		}
		let districts = new Set();
        while (districts.size<this.n_districts){
			districts.add(this.draw(this.cd.unique_districts));
		}
        this.districts = Array.from(districts);
		return this.districts.sort();
	}
    
    reroll(seed=null){
        this.seed = seed ? seed : Math.random().toString(36).substring(2,6);
        Math.seedrandom(this.seed);
        this.set_available_characters();
        let chars = this.choose_characters();
        let char_div = this.genUI(chars, "Characters");
        let dists = this.choose_districts();
        let dist_div = this.genUI(dists, "Districts");
        let content_div = document.getElementsByClassName("content")[0];
        content_div.innerHTML = "";
        content_div.appendChild(char_div);
        content_div.appendChild(dist_div);
        
        let seed_container = document.getElementById("seedbox");
        let presetId = Object.keys(this.cd.presets).indexOf(this.preset_name) + 1
        seed_container.value = `${+this.use9}${this.p}${presetId}${this.seed}`;
    }

    reproduce(){
        this.stopListen()
        let seedstr = document.getElementById("seedbox").value;
        
        this.set_rank9(parseInt(seedstr.substring(0,1)));
        document.getElementById("rank9-filter").checked = this.use9;
        
        this.set_players(seedstr.substring(1,2));
        document.getElementById("nplayers-filter").value = this.p;
        
        const presetId = parseInt(seedstr.substring(2,3));
        let key = (presetId) ? Object.keys(this.cd.presets)[presetId-1] : "";
        this.set_preset(key);
        document.getElementById("preset-filter").value = key;
        
        this.reroll(seedstr.substring(3));
        this.listenEvents();

    }
    
    createElement(name, title, parent=null, innertext=null){
        let e = document.createElement(name);
        e.classList.add(`${title}-${name}`.toLowerCase());
        if (parent){parent.appendChild(e);}
        if (innertext){e.innerText = innertext;}
        return e;
    }
    
    genUI(values, title){
        let div = this.createElement('div',title);
        let h2 = this.createElement('h2',title, div, title);
        for (const [i, value] of values.entries()){
            let p = this.createElement('p',title, div, `${i+1}. `.padStart(3,' ')+value);
        }
        return div;
    }

    nplayers_update(){
        let p = document.getElementById("nplayers-filter").value;
        this.set_players(p);
        this.rank9_update();
    }

    preset_update(){
        let preset = document.getElementById("preset-filter").value;
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
        this.reroll();
    }
    toggleSelection(el){
        let elem = (el || document.getElementsByClassName("focused")[0])
        if (elem){
            elem.classList.toggle("focused");
        }
    }

    getInfo(e){
        let el = e.target;
        if (el!==document.getElementsByClassName("focused")[0]){
            this.toggleSelection();
        }
        let key = (el.innerText.match(/^\s*\d+\. (.+)/) || [])[1];
        if (this.cd.characters_flat.includes(key)){
            this.toggleSelection(el);
            //TODO: descr_char
        } else if (this.cd.unique_districts.includes(key)){
            this.toggleSelection(el);
            //TODO: descr_dist
        }
    }

    listenEvents(){
        document.getElementById("nplayers-filter").onchange = ()=>{this.nplayers_update()};
        document.getElementById("preset-filter").onchange = ()=>{this.preset_update()};
        document.getElementById("rank9-filter").onchange = ()=>{this.rank9_update()};
        document.getElementById("reroll-button").onclick = ()=>{this.reroll()};
        document.getElementById("reproduce-button").onclick = ()=>{this.reproduce()};
        document.getElementsByClassName("content")[0].onclick = (e)=>{this.getInfo(e)};
    }
    stopListen(){
        document.getElementById("nplayers-filter").onchange = ()=>{};
        document.getElementById("preset-filter").onchange = ()=>{};
        document.getElementById("rank9-filter").onchange = ()=>{};
        document.getElementById("reroll-button").onclick = ()=>{};
        document.getElementById("reproduce-button").onclick = ()=>{};
        document.getElementsByClassName("content")[0].onclick = (e)=>{};
    }
}

window.cg = new CitadelsGame();