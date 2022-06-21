addLayer("tm", {
    tabFormat: {
        "Time Machine": {
            content:[
                "main-display",
                ["display-text", function() { return "You Are Gaining <h2><b style='color:#D0B49F;'>" + format(getResetGain("tm")) + "</b></h2> Time Fragments Per Second" },],
                "blank",
                ["display-text", function() { return "You Have <h2><b style='color:#234F1E;'>" + format(player["res"].points) + "</b></h2> Knowledge" },],
                "blank",
                ["display-text", function() { return "<h3> Light Machines </h3>" },],
                ["clickable", 11],
                ["row", [["buyable", 11], ["buyable", 12]]],
                "blank",
                ["display-text", function() { return "<h3> Heavy Machines </h3>" },],
                ["row", [["buyable", 21], ["buyable", 22]]],
                "blank",
            ],
        },
    },
    name: "Time Machine", 
    symbol: "TM",
    color: "#D0B49F", 
    nodeStyle() {
    },
    resource: "Time Fragments",
    baseResource: "Knowledge",
    requires: new Decimal(1),
    baseAmount() {return player.points}, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration() { return true },
    type: "normal", 
    clickables: {
        11: {
            display() {return "<h2>Buy Max"},
            canClick() {return true},
            onClick() {
                buyMaxBuyable("tm", 11) & buyMaxBuyable("tm", 12)
            },
            onHold() {
                buyMaxBuyable("tm", 11) & buyMaxBuyable("tm", 12)
            },
            style() {
                return {"border-radius": "15px 15px 0px 0px", "width": "540px", "min-height": "40px"}
            },
            unlocked() {return hasAchievement("A", 44)}
        },
    },
    buyables: {
        11: {
            title() {return "Time Fragments Generator"},
            cost(x) { return new Decimal(40960).mul(new Decimal(tmbuy11cm()).pow(x))},
            display() { return "Increase Time Machine Fragments gained <br> Currently:<b> +" + format(tmp.tm.buyables[11].effect) + " </b> <br> (bought:" + format(getBuyableAmount("tm", 11)) + ")" + "<br> Cost: <b style='color:red;'>" + format(this.cost(getBuyableAmount("tm", 11))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                player["res"].points = player["res"].points.sub(this.cost())
                setBuyableAmount("tm", 11, getBuyableAmount("tm", 11).add(1))
            },
            buyMax() {
                getMax(player["res"].points.abs(), this.cost(), tmbuy11cm())
                subCost(tmbuy11cm(), getBuyableAmount("tm", 11), 40960)
                player["res"].points = player["res"].points.sub(new Decimal(sub))
                setBuyableAmount("tm", 11, getBuyableAmount("tm", 11).add(new Decimal(max)))
            },
            effect() { 
                eff = new Decimal(0)
                eff = eff.add(getBuyableAmount("tm",11))
                eff = eff.pow(new Decimal(2).add(buyableEffect("tm",21)))
                return eff
            },
            style(){ 
                if (tmp["tm"].clickables[11].unlocked) return {"border-radius": "0px 0px 0px 15px", "width": "270px", "height": "180px"}
                else return {"border-radius": "15px 0px 0px 15px", "width": "270px", "height": "180px"}
            },
            unlocked() {
                return true
            }
        },
        12: {
            title() {return "Warp Time"},
            cost(x) { return new Decimal(1).mul(new Decimal(tmbuy12cm()).pow(x))},
            display() { return "Speed up time <br> Currrently: <b>+" + format(tmp.tm.buyables[12].effect) + " </b> <br> (bought:" + format(getBuyableAmount("tm", 12)) + ")" + "<br> Cost: <b style='color:red;'>" + format(this.cost(getBuyableAmount("tm", 12))) + " Time Fragments"},
            canAfford() { return player["tm"].points.gte(this.cost()) },
            buy() {
                player["tm"].points = player["tm"].points.sub(this.cost())
                setBuyableAmount("tm", 12, getBuyableAmount("tm", 12).add(1))
            },
            buyMax() {
                getMax(player["tm"].points.abs(), this.cost(), tmbuy12cm())
                subCost(tmbuy12cm(), getBuyableAmount("tm", 12), 1)
                player["tm"].points = player["tm"].points.sub(new Decimal(sub))
                setBuyableAmount("tm", 12, getBuyableAmount("tm", 12).add(new Decimal(max)))
            },
            effect() { 
                eff = new Decimal(0)
                eff = eff.add(getBuyableAmount("tm", 12))
                eff = eff.pow(new Decimal(1).add(buyableEffect("tm",22)))
                return eff
            },
            style(){ 
                if (tmp["tm"].clickables[11].unlocked) return {"border-radius": "0px 0px 15px 0px", "width": "270px", "height": "180px"}
                else return {"border-radius": "0px 15px 15px 0px", "width": "270px", "height": "180px"}
            },
            unlocked() {
                return true
            }
        },
        21: {
            title() {return "T.F.G.E."},
            cost(x) { return new Decimal(5).add(new Decimal(5).mul(x))},
            display() { return "Enhance <b>Time Fragments Generator</b> so you gain more Time Fragments <br> Currently: <b>^(2 + " + format(tmp.tm.buyables[21].effect) + ") </b> <br> (bought:" + format(getBuyableAmount("tm", 21)) + ")" + "<br><b>Warning: Resets f(t), Knowledge, Time Fragments, Time Fragment Generator, and Warp Time</b><br> Req: <b style='color:red;'> " + format(this.cost(getBuyableAmount("tm", 21))) + " Time Fragments Generator"},
            canAfford() { return getBuyableAmount("tm", 11).gte(this.cost()) },
            buy() {
                if (!hasUpgrade("p",22)) {
                    player["f"].points = player["f"].points.pow(0).add(1)
                    player["res"].points = player["res"].points.mul(0)
                    player["tm"].points = player["tm"].points.mul(0)
                    setBuyableAmount("tm", 11, getBuyableAmount("tm", 11).mul(0))
                    setBuyableAmount("tm", 12, getBuyableAmount("tm", 12).mul(0))
                }
                setBuyableAmount("tm", 21, getBuyableAmount("tm", 21).add(1))
            },
            effect() { 
                pow = new Decimal(0.85)
                if (hasUpgrade("p",14)) pow = pow.add(0.03)
                
                eff = new Decimal(0)
                eff = eff.add(getBuyableAmount("tm", 21).pow(pow))
                return eff
            },
            style(){ 
                return {"border-radius": "15px 0px 0px 15px", "width": "270px", "height": "180px"}
            },
            unlocked() {
                return true
            }
        },
        22: {
            title() {return "Warp Warp Time"},
            cost(x) { return new Decimal(5).add(new Decimal(5).mul(x))},
            display() { return "Warp the <b>Warp Time</b> so you gain more time <br> Currently: <b>^(1 + " + format(tmp.tm.buyables[22].effect) + ") </b> <br> (bought:" + format(getBuyableAmount("tm", 22)) + ")" + "<br><b>Warning: Resets f(t), Knowledge, Time Fragments, Time Fragment Generator, and Warp Time</b><br> Req: <b style='color:red;'> " + format(this.cost(getBuyableAmount("tm", 22))) + " Warp Time"},
            canAfford() { return getBuyableAmount("tm", 12).gte(this.cost()) },
            buy() {
                if (!hasUpgrade("p",22)) {
                    player["f"].points = player["f"].points.pow(0).add(1)
                    player["res"].points = player["res"].points.mul(0)
                    player["tm"].points = player["tm"].points.mul(0)
                    setBuyableAmount("tm", 11, getBuyableAmount("tm", 11).mul(0))
                    setBuyableAmount("tm", 12, getBuyableAmount("tm", 12).mul(0))
                }
                setBuyableAmount("tm", 22, getBuyableAmount("tm", 22).add(1))
            },
            effect() { 
                eff = new Decimal(0)
                eff = eff.add(new Decimal(2/3).mul(getBuyableAmount("tm", 22)))
                return eff
            },
            style(){ 
                return {"border-radius": "0px 15px 15px 0px", "width": "270px", "height": "180px"}
            },
            unlocked() {
                return true
            }
        },
    },
    automate() {

    },
    update(diff) {

    },
    getResetGain() {
        gain = new Decimal(0)
        gain = gain.add(buyableEffect("tm",11))
        gain = gain.mul(tmp.tm.gainMult)
        gain = gain.pow(tmp.tm.gainExp)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    exponent: 1, 
    position: 5, 
    row: 0,
    displayRow: 1,
    branches: ["res"],
    layerShown(){return hasUpgrade("res",15) || hasAchievement("A", 41)},
})

function tmbuy11cm() {
    cm = new Decimal(2)
    if (hasUpgrade("pu",21)) cm = new Decimal(1.85)
    return cm
}

function tmbuy12cm() {
    cm = new Decimal(2)
    if (hasUpgrade("p",21)) cm = new Decimal(1.85)
    return cm
}