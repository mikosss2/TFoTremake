addLayer("p", {
    tabFormat: {
        "Prestige": {
            content:[
                "main-display",
                ["display-text", function() { return "You Have <h2><b style='color:#63C5DA;'>" + format(player["f"].points) + "</b></h2> f(t)" },],
                "blank",
                "prestige-button",
                "blank",
                "buyables"
            ],
        },
        "Pres-Upgrades": {
            content:[
                "main-display",
                "blank",
                "upgrades",
            ],
        },
    },
    componentStyles: {
        "prestige-button"() { return {"border-radius": "15px 15px 15px 15px"} }
    },
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#BF40BF",
    requires: new Decimal(1e21), // Can be a function that takes requirement increases into account
    resource: "PP", // Name of prestige currency
    baseResource: "f(t)", // Name of resource prestige is based on
    baseAmount() {return player["f"].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    update(diff) {

    },
    getNextAt(canMax=true) {
        canMax = new Decimal(1e21)
        canMax = canMax.mul(tmp.p.getResetGain.add(1).add(tmp.p.getResetGain.add(1).pow(2))).div(2)
        return canMax
    },
    getResetGain() {
        gain = new Decimal(0)
        //gain = gain.add((player["f"].points.mul(8).add(1)).sqrt().sub(1).div(2))
        gain = gain.add((player["f"].points.mul(8e21).add(1e42)).sqrt().sub(1e21).div(2e21))
        gain = Decimal.floor(gain)
        gain = gain.mul(tmp.p.gainMult)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        mult = mult.mul(buyableEffect("p",11))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    passiveGeneration() { 
        return false
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    displayRow: 2,
    layerShown(){return player["f"].best.gte(1e18) || hasAchievement("A", 51)},
    branches: ["f"],
    clickables: {

    },
    buyables: {
        11: {
            title() {return "More PP"},
            cost(x) { return new Decimal(1e72).mul(new Decimal(10).pow(x))},
            display() { return "Increase PP gained <br> Currently:<b> x" + format(tmp.p.buyables[11].effect) + " </b> <br> (bought:" + format(getBuyableAmount("p", 11)) + ")" + "<br> Cost: <b style='color:red;'>" + format(this.cost(getBuyableAmount("p", 11))) + " PP"},
            canAfford() { return player["p"].points.gte(this.cost()) },
            buy() {
                player["p"].points = player["p"].points.sub(this.cost())
                setBuyableAmount("p", 11, getBuyableAmount("p", 11).add(1))
            },
            effect() { 
                eff = new Decimal(2)
                eff = eff.pow(getBuyableAmount("p",11))
                return eff
            },
            style(){ 
                return {"border-radius": "15px 15px 15px 15px", "width": "270px", "height": "180px"}
            },
            unlocked() {
                return hasUpgrade("u",35)
            }
        },
    },
    upgrades: {
        11: {
            title: "Pres-Upgrade 1.1",
            description: "<b>Remove</b> 0.01 in g(t) function",
            cost: new Decimal(1e12),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            style(){ 
                if (tmp["p"].upgrades[21].unlocked) return {"border-radius": "15px 0px 0px 0px",'width': '120px', 'height': '135px'}
                else return {"border-radius": "15px 0px 0px 15px", "width": "120px", "height": "135px"}
            },
            unlocked() {return true},
        },
        12: {
            title: "Pres-Upgrade 1.2",
            description: "<b>Remove</b> ^0.75 in g(t) function",
            cost: new Decimal(1e15),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return true},
        },
        13: {
            title: "Pres-Upgrade 1.3",
            description: "<b>Unlock</b> 'pU' Upgrades",
            cost: new Decimal(1e18),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return true},
        },
        14: {
            title: "Pres-Upgrade 1.4",
            description: "<b>Enhance</b> T.F.G.E. effect (^0.85 -> ^0.88)",
            cost: new Decimal(1e21),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return true},
        },
        15: {
            title: "Pres-Upgrade 1.5",
            description: "<b>Unlock</b> third row of 'U' Upgrades",
            cost: new Decimal(1e24),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            style(){ 
                if (tmp["p"].upgrades[25].unlocked) return {"border-radius": "0px 15px 0px 0px",'width': '120px', 'height': '135px'}
                else return {"border-radius": "0px 15px 15px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return true},
        },
        21: {
            title: "Pres-Upgrade 2.1",
            description: "<b>Reduce</b> Time Warp's cost mult (x2 -> x1.85)",
            cost: new Decimal(1e100),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            style(){ 
                return {"border-radius": "0px 0px 0px 15px", "width": "120px", "height": "135px"}
            },
            unlocked() {return hasUpgrade("u",35)},
        },
        22: {
            title: "Pres-Upgrade 2.2",
            description: "<b>Enhance</b> - Heavy Machines will not reset anything anymore",
            cost: new Decimal(1e150),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return hasUpgrade("u",35)},
        },
        23: {
            title: "Pres-Upgrade 2.3",
            description: "<b>---</b>",
            cost: new Decimal(1e200),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return hasUpgrade("u",35)},
        },
        24: {
            title: "Pres-Upgrade 2.4",
            description: "<b>---</b>",
            cost: new Decimal(1e250),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return hasUpgrade("u",35)},
        },
        25: {
            title: "Pres-Upgrade 2.5",
            description: "<b>---</b>",
            cost: new Decimal(1e300),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            style(){ 
                return {"border-radius": "0px 0px 15px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return hasUpgrade("u",35)},
        },
    },
    automate() {
        
    },
})