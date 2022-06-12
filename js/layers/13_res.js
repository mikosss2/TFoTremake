addLayer("res", {
    tabFormat: {
        "Research": {
            content:[
                "main-display",
                ["display-text", function() { return "You Are Gaining <h2><b style='color:#234F1E;'>" + format(getResetGain("res")) + "</b></h2> Knowledge Per Second" },],
                "blank",
                ["display-text", function() { return "You Have <h2><b style='color:#63C5DA;'>" + format(player["f"].points) + "</b></h2> f(t)" },],
                "blank",
                "clickables",
                ["display-text", function() { return "<h3> Research Upgrades </h3>" },],
                ["row", [["buyable", 11], ["buyable", 12]]],
                "blank",
                ["display-text", function() { return "<h3> Variable Upgrades </h3>" },],
                ["row", [["buyable", 21]]],
                ["row", [["buyable", 31], ["buyable", 32]]],
                ["row", [["buyable", 41], ["buyable", 42]]],
                "blank",
            ],
        },
        "Res-Upgrades": {
            content:[
                "main-display",                
                "blank",
                "upgrades",
            ],
            unlocked() {return hasUpgrade("u",21)},
        },
    },
    name: "Research", 
    symbol: "R",
    color: "#234F1E", 
    nodeStyle() {
    },
    resource: "Knowledge",
    baseResource: "f(t)",
    requires: new Decimal(1),
    baseAmount() {return player.points}, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        pTime: new Decimal(0),
    }},
    passiveGeneration() { return true },
    type: "normal", 
    clickables: {

    },
    buyables: {
        11: {
            title() {return "Additive Research Upgrade <br> (+)"},
            cost(x) { return new Decimal(100000000).mul(new Decimal(1.5).pow(x))},
            display() { return "Increase the value of knowlege gain additively <b>(+0.01)</b> <br> Currrently: <b>+" + format(tmp.res.buyables[11].effect) + " </b> <br> (bought:" + format(getBuyableAmount("res", 11)) + ")" + "<br> Cost: <b style='color:red;'> f(t) = " + format(this.cost(getBuyableAmount("res", 11)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("res", 11, getBuyableAmount("res", 11).add(1))
            },
            effect() { 
                eff = new Decimal(0)
                eff = eff.add(new Decimal(0.01).mul(getBuyableAmount("res", 11)))
                return eff
            },
            style(){ 
                return {"border-radius": "15px 0px 0px 15px", "width": "300px", "height": "120px"}
            },
            unlocked() {
                return true
            }
        },
        12: {
            title() {return "Multiplicative Research Upgrade <br> (x)"},
            cost(x) { return new Decimal(100000000).mul(new Decimal(1.5).pow(x))},
            display() { return "Increase the value of knowlege gain additively <b>(x1.05)</b> Currrently: <b>x" + format(tmp.res.buyables[12].effect) + " </b> <br> (bought:" + format(getBuyableAmount("res", 12)) + ")" + "<br> Cost: <b style='color:red;'> f(t) = " + format(this.cost(getBuyableAmount("res", 12)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("res", 12, getBuyableAmount("res", 12).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.05).pow(getBuyableAmount("res", 12)))
                return eff
            },
            style(){ 
                return {"border-radius": "0px 15px 15px 0px", "width": "300px", "height": "120px"}
            },
            unlocked() {
                return true
            }
        },
        21: {
            title() {return "'U' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(new Decimal(10).pow(x))},
            display() { return "<b>x2</b> 'U' variable value <br> Currently: <b> x" + format(tmp.res.buyables[21].effect) + " </b> <br> (bought:" + format(getBuyableAmount("res", 21)) + ")" + "<br> Cost: <b style='color:red;'>" + format(this.cost(getBuyableAmount("res", 21))) + " Knowledge" },
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                player["res"].points = player["res"].points.sub(this.cost())
                setBuyableAmount("res", 21, getBuyableAmount("res", 21).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(2).pow(getBuyableAmount("res", 21)))
                return eff
            },
            style(){ 
                if (player["res"].points.gte(this.cost())) return {'background-color': '#FFE338',"border-radius": "15px 15px 0px 0px", "width": "300px", "height": "120px"}
                else return {"border-radius": "15px 15px 0px 0px", "width": "300px", "height": "120px"}
            },
            unlocked() {
                return true
            }
        },
        31: {
            title() {return "'a' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(new Decimal(1.0964).pow(x))},
            display() { return "<b>+1%</b> 'a' variable value <br> Currrently: <b>x" + format(tmp.res.buyables[31].effect) + " </b> <br> (bought:" + format(getBuyableAmount("res", 31)) + ")" + "<br> Cost: <b style='color:red;'>" + format(this.cost(getBuyableAmount("res", 31))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                player["res"].points = player["res"].points.sub(this.cost())
                setBuyableAmount("res", 31, getBuyableAmount("res", 31).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(new Decimal(0.01).mul(getBuyableAmount("res", 31)))
                return eff
            },
            style(){ 
                if (player["res"].points.gte(this.cost())) return {'background-color': '#63C5DA',"border-radius": "15px 0px 0px 0px", "width": "300px", "height": "120px"}
                else return {"border-radius": "15px 0px 0px 0px", "width": "300px", "height": "120px"}
            },
            unlocked() {
                return true
            }
        },
        32: {
            title() {return "'b' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(new Decimal(1.0964).pow(x))},
            display() { return "<b>+1%</b> 'b' variable value <br> Currrently: <b>x" + format(tmp.res.buyables[32].effect) + " </b> <br> (bought:" + format(getBuyableAmount("res", 32)) + ")" + "<br> Cost: <b style='color:red;'>" + format(this.cost(getBuyableAmount("res", 32))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                player["res"].points = player["res"].points.sub(this.cost())
                setBuyableAmount("res", 32, getBuyableAmount("res", 32).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(new Decimal(0.01).mul(getBuyableAmount("res", 32)))
                return eff
            },
            style(){ 
                if (player["res"].points.gte(this.cost())) return {'background-color': '#63C5DA',"border-radius": "0px 15px 0px 0px", "width": "300px", "height": "120px"}
                else return {"border-radius": "0px 15px 0px 0px", "width": "300px", "height": "120px"}
            },
            unlocked() {
                return true
            }
        },
        41: {
            title() {return "'c' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(new Decimal(1.0964).pow(x))},
            display() { return "<b>+1%</b> 'c' variable value <br> Currrently: <b>x" + format(tmp.res.buyables[41].effect) + " </b> <br> (bought:" + format(getBuyableAmount("res", 41)) + ")" + "<br> Cost: <b style='color:red;'>" + format(this.cost(getBuyableAmount("res", 41))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                player["res"].points = player["res"].points.sub(this.cost())
                setBuyableAmount("res", 41, getBuyableAmount("res", 41).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(new Decimal(0.01).mul(getBuyableAmount("res", 41)))
                return eff
            },
            style(){ 
                if (player["res"].points.gte(this.cost())) return {'background-color': '#63C5DA',"border-radius": "0px 0px 0px 15px", "width": "300px", "height": "120px"}
                else return {"border-radius": "0px 0px 0px 15px", "width": "300px", "height": "120px"}
            },
            unlocked() {
                return true
            }
        },
        42: {
            title() {return "'d' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(new Decimal(1.0964).pow(x))},
            display() { return "<b>+1%</b> 'd' variable value <br> Currrently: <b>x" + format(tmp.res.buyables[42].effect) + " </b> <br> (bought:" + format(getBuyableAmount("res", 42)) + ")" + "<br> Cost: <b style='color:red;'>" + format(this.cost(getBuyableAmount("res", 42))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                player["res"].points = player["res"].points.sub(this.cost())
                setBuyableAmount("res", 42, getBuyableAmount("res", 42).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(new Decimal(0.01).mul(getBuyableAmount("res", 42)))
                return eff
            },
            style(){ 
                if (player["res"].points.gte(this.cost())) return {'background-color': '#63C5DA',"border-radius": "0px 0px 15px 0px", "width": "300px", "height": "120px"}
                else return {"border-radius": "0px 0px 15px 0px", "width": "300px", "height": "120px"}
            },
            unlocked() {
                return true
            }
        },
    },
    upgrades: {
        11: {
            title: "Res-Upgrade 1.1",
            description: "<b>x3</b> gained Knowledge",
            cost: new Decimal(10),
            currencyDisplayName: "Knowledge",
            currencyInternalName: "points",
            currencyLayer: "res",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(3)
                return eff
            },
            style(){ 
                return {"border-radius": "15px 0px 0px 15px", "width": "120px", "height": "135px"}
            },
            unlocked() {return hasUpgrade("u",21)},
        },
        12: {
            title: "Res-Upgrade 1.2",
            description: "<b>x1.5</b> gained Knowledge every Res-Upgrade bought",
            cost: new Decimal(80),
            currencyDisplayName: "Knowledge",
            currencyInternalName: "points",
            currencyLayer: "res",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("res",11)) eff = eff.mul(1.5)
                if (hasUpgrade("res",12)) eff = eff.mul(1.5)
                if (hasUpgrade("res",13)) eff = eff.mul(1.5)
                if (hasUpgrade("res",14)) eff = eff.mul(1.5)
                if (hasUpgrade("res",15)) eff = eff.mul(1.5)
                return eff
            },
            effectDisplay() {
                return "<b>x" + format(upgradeEffect("res", 12))
            },
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return hasUpgrade("u",21)},
        },
        13: {
            title: "Res-Upgrade 1.3",
            description: "<b>x1.01</b> gained Knowledge every 'a, b, c, & d' Variable bought divided by 2 <br> Max = x100",
            cost: new Decimal(640),
            currencyDisplayName: "Knowledge",
            currencyInternalName: "points",
            currencyLayer: "res",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("f",11).add(getBuyableAmount("f",21)).add(getBuyableAmount("f",31)).add(getBuyableAmount("f",41)).div(2)))
                if (eff.gte(100)) eff = new Decimal(100)
                return eff
            },
            effectDisplay() {
                return "<b>x" + format(upgradeEffect("res", 13))
            },
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return hasUpgrade("u",21)},
        },
        14: {
            title: "Res-Upgrade 1.4",
            description: "<b>x1.01</b> gained Knowledge every Variable Upgrades bought divided by 2 <br> Max = x100",
            cost: new Decimal(5120),
            currencyDisplayName: "Knowledge",
            currencyInternalName: "points",
            currencyLayer: "res",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("res",21).add(getBuyableAmount("res",31)).add(getBuyableAmount("res",32)).add(getBuyableAmount("res",41)).add(getBuyableAmount("res",42)).div(2)))
                if (eff.gte(100)) eff = new Decimal(100)
                return eff
            },
            effectDisplay() {
                return "<b>x" + format(upgradeEffect("res", 14))
            },
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return hasUpgrade("u",21)},
        },
        15: {
            title: "Res-Upgrade 1.5",
            description: "<b>Unlock</b> Time Machine",
            cost: new Decimal(40960),
            currencyDisplayName: "Knowledge",
            currencyInternalName: "points",
            currencyLayer: "res",
            style(){ 
                return {"border-radius": "0px 15px 15px 0px", "width": "120px", "height": "135px"}
            },
            unlocked() {return hasUpgrade("u",21)},
        },
    },
    automate() {

    },
    update(diff) {

    },
    getResetGain() {
        gain = new Decimal(0)
        gain = gain.add(buyableEffect("res",11))
        gain = gain.mul(buyableEffect("res",12))
        gain = gain.mul(tmp.res.gainMult)
        gain = gain.pow(tmp.res.gainExp)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("res", 11)) mult = mult.mul(tmp.res.upgrades[11].effect)
        if (hasUpgrade("res", 12)) mult = mult.mul(tmp.res.upgrades[12].effect)
        if (hasUpgrade("res", 13)) mult = mult.mul(tmp.res.upgrades[13].effect)
        if (hasUpgrade("res", 14)) mult = mult.mul(tmp.res.upgrades[14].effect)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    exponent: 1, 
    position: 4, 
    row: 0,
    displayRow: 1,
    branches: ["f"],
    layerShown(){return hasUpgrade("u",14) || hasAchievement("A", 31)},
})
