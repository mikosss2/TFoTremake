addLayer("f", {
    tabFormat: {
        "Variables": {
            content:[
                "main-display",
                ["display-text", function() { return "You Are Gaining <h2><b style='color:#63C5DA;'>" + format(getResetGain("f")) + "</b></h2> f(t) Per Second" },],
                "blank",
                ["display-text", function() {
                    if (player["f"].best.gte(100000) && tmp["u"].layerShown && tmp["tm"].layerShown && tmp["g"].layerShown) return "f(time+TimeSpeed) = f(time) + abcd⋅U⋅(TimeSpeed)⋅g(t)"
                    else if (player["f"].best.gte(1000) && tmp["u"].layerShown && tmp["tm"].layerShown && tmp["g"].layerShown) return "f(time+TimeSpeed) = f(time) + abc⋅U⋅(TimeSpeed)⋅g(t)"
                    else if (player["f"].best.gte(10) && tmp["u"].layerShown && tmp["tm"].layerShown && tmp["g"].layerShown) return "f(time+TimeSpeed) = f(time) + ab⋅U⋅(TimeSpeed)⋅g(t)"
                    else if (tmp["u"].layerShown && tmp["tm"].layerShown && tmp["g"].layerShown) return "f(time+TimeSpeed) = f(time) + a⋅U⋅(TimeSpeed)⋅g(t)"
                    else if (tmp["tm"].layerShown && tmp["g"].layerShown) return "f(time+TimeSpeed) = f(time) + a⋅(TimeSpeed)⋅g(t)"
                    else if (tmp["g"].layerShown) return "f(time+1) = f(time) + a⋅g(t)"
                    else if (player["f"].best.gte(100000) && tmp["u"].layerShown && tmp["tm"].layerShown) return "f(time+TimeSpeed) = f(time) + abcd⋅U⋅(TimeSpeed)"
                    else if (player["f"].best.gte(1000) && tmp["u"].layerShown && tmp["tm"].layerShown) return "f(time+TimeSpeed) = f(time) + abc⋅U⋅(TimeSpeed)"
                    else if (player["f"].best.gte(10) && tmp["u"].layerShown && tmp["tm"].layerShown) return "f(time+TimeSpeed) = f(time) + ab⋅U⋅(TimeSpeed)"
                    else if (tmp["u"].layerShown && tmp["tm"].layerShown) return "f(time+TimeSpeed) = f(time) + a⋅U⋅(TimeSpeed)"
                    else if (tmp["tm"].layerShown) return "f(time+TimeSpeed) = f(time) + a⋅(TimeSpeed)"
                    else if (player["f"].best.gte(100000) && tmp["u"].layerShown) return "f(time+1) = f(time) + abcd⋅U"
                    else if (player["f"].best.gte(1000) && tmp["u"].layerShown) return "f(time+1) = f(time) + abc⋅U"
                    else if (player["f"].best.gte(10) && tmp["u"].layerShown) return "f(time+1) = f(time) + ab⋅U"
                    else if (tmp["u"].layerShown) return "f(time+1) = f(time) + a⋅U"
                    else if (player["f"].best.gte(100000)) return "f(time+1) = f(time) + abcd"
                    else if (player["f"].best.gte(1000)) return "f(time+1) = f(time) + abc"
                    else if (player["f"].best.gte(10)) return "f(time+1) = f(time) + ab"
                    else return "f(time+1) = f(time) + a"
                },],
                "blank",
                "clickables",
                "buyables",
                "blank",
            ],
        },
    },
    name: "f of t", 
    symbol: "f",
    color: "#63C5DA", 
    nodeStyle() {
    },
    resource: "f(t)",
    baseResource: "time",
    requires: new Decimal(1),
    baseAmount() {return player.points}, 
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    passiveGeneration() { return true },
    type: "normal", 
    clickables: {
        11: {
            display() {return "<h2>Buy Max"},
            canClick() {return true},
            onClick() {
                buyMaxBuyable("f", 11) & buyMaxBuyable("f", 21) & buyMaxBuyable("f", 31) & buyMaxBuyable("f", 41)
            },
            onHold() {
                buyMaxBuyable("f", 11) & buyMaxBuyable("f", 21) & buyMaxBuyable("f", 31) & buyMaxBuyable("f", 41)
            },
            style() {
                return {"border-radius": "15px 15px 0px 0px", "width": "480px", "min-height": "40px"}
            },
            unlocked() {return hasAchievement("A", 16)}
        }
    },
    buyables: {
        11: {
            title() {return "'a' Variable"},
            cost(x) { return new Decimal(1).mul(new Decimal(fbuy11cm()).pow(x))},
            display() { return "Increase the value of 'a' Variable <br> <b> a = " + format(tmp.f.buyables[11].effect) + " </b> <br> (bought:" + format(getBuyableAmount("f", 11)) + ")" + "<br> Cost: <b style='color:red;'> f(t) = " + format(this.cost(getBuyableAmount("f", 11)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("f", 11, getBuyableAmount("f", 11).add(1))
            },
            buyMax() {
                getMax(player["f"].points.abs(), this.cost(), fbuy11cm())
                subCost(fbuy11cm(), getBuyableAmount("f", 11), 1)
                player["f"].points = player["f"].points.sub(new Decimal(sub))
                setBuyableAmount("f", 11, getBuyableAmount("f", 11).add(new Decimal(max)))
            },
            effect() { 
                eff = new Decimal(0)
                eff = eff.add(getBuyableAmount("f", 11))
                eff = eff.mul(buyableEffect("res",31))
                return eff
            },
            style(){ 
                if (tmp["f"].clickables[11].unlocked && tmp["f"].buyables[21].unlocked) return {"border-radius": "0px 0px 0px 0px", "width": "480px", "height": "100px"}
                else if (tmp["f"].clickables[11].unlocked) return {"border-radius": "0px 0px 15px 15px", "width": "480px", "height": "100px"}
                else if (tmp["f"].buyables[21].unlocked) return {"border-radius": "15px 15px 0px 0px", "width": "480px", "height": "100px"}
                else return {"border-radius": "15px 15px 15px 15px", "width": "480px", "height": "100px"}
            },
            unlocked() {
                return true
            }
        },
        21: {
            title() {return "'b' Variable"},
            cost(x) { return new Decimal(100).mul(new Decimal(fbuy21cm()).pow(x))},
            display() { return "Increase the value of 'b' Variable <br> <b> b = " + format(tmp.f.buyables[21].effect) + " </b> <br> (bought:" + format(getBuyableAmount("f", 21)) + ")" + "<br> Cost: <b style='color:red;'> f(t) = " + format(this.cost(getBuyableAmount("f", 21)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("f", 21, getBuyableAmount("f", 21).add(1))
            },
            buyMax() {
                getMax(player["f"].points.abs(), this.cost(), fbuy21cm())
                subCost(fbuy21cm(), getBuyableAmount("f", 21), 100)
                player["f"].points = player["f"].points.sub(new Decimal(sub))
                setBuyableAmount("f", 21, getBuyableAmount("f", 21).add(new Decimal(max)))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("f", 21))
                eff = eff.mul(buyableEffect("res",32))
                return eff
            },
            style(){ 
                if (tmp["f"].buyables[31].unlocked) return {"border-radius": "0px 0px 0px 0px", "width": "480px", "height": "100px"}
                else return {"border-radius": "0px 0px 15px 15px", "width": "480px", "height": "100px"}
            },
            unlocked() {
                return player["f"].best.gte(10)
            }
        },
        31: {
            title() {return "'c' Variable"},
            cost(x) { return new Decimal(10000).mul(new Decimal(fbuy31cm()).pow(x))},
            display() { return "Increase the value of 'c' Variable <br> <b> c = " + format(tmp.f.buyables[31].effect) + " </b> <br> (bought:" + format(getBuyableAmount("f", 31)) + ")" + "<br> Cost: <b style='color:red;'> f(t) = " + format(this.cost(getBuyableAmount("f", 31)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("f", 31, getBuyableAmount("f", 31).add(1))
            },
            buyMax() {
                getMax(player["f"].points.abs(), this.cost(), fbuy31cm())
                subCost(fbuy31cm(), getBuyableAmount("f", 31), 10000)
                player["f"].points = player["f"].points.sub(new Decimal(sub))
                setBuyableAmount("f", 31, getBuyableAmount("f", 31).add(new Decimal(max)))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("f", 31))
                eff = eff.mul(buyableEffect("res",41))
                return eff
            },
            style(){ 
                if (tmp["f"].buyables[41].unlocked) return {"border-radius": "0px 0px 0px 0px", "width": "480px", "height": "100px"}
                else return {"border-radius": "0px 0px 15px 15px", "width": "480px", "height": "100px"}
            },
            unlocked() {
                return player["f"].best.gte(1000)
            }
        },
        41: {
            title() {return "'d' Variable"},
            cost(x) { return new Decimal(1000000).mul(new Decimal(fbuy41cm()).pow(x))},
            display() { return "Increase the value of 'd' Variable <br> <b> d = " + format(tmp.f.buyables[41].effect) + " </b> <br> (bought:" + format(getBuyableAmount("f", 41)) + ")" + "<br> Cost: <b style='color:red;'> f(t) = " + format(this.cost(getBuyableAmount("f", 41)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("f", 41, getBuyableAmount("f", 41).add(1))
            },
            buyMax() {
                getMax(player["f"].points.abs(), this.cost(), fbuy41cm())
                subCost(fbuy41cm(), getBuyableAmount("f", 41), 1000000)
                player["f"].points = player["f"].points.sub(new Decimal(sub))
                setBuyableAmount("f", 41, getBuyableAmount("f", 41).add(new Decimal(max)))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("f", 41))
                eff = eff.mul(buyableEffect("res",42))
                return eff
            },
            style(){ 
                return {"border-radius": "0px 0px 15px 15px", "width": "480px", "height": "100px"}
            },
            unlocked() {
                return player["f"].best.gte(100000)
            }
        },
    },
    automate() {

    },
    update(diff) {
        if (hasAchievement("A",51) && player["f"].best.lte(3599)) player["f"].points = player["f"].points.add(3599)
        if (player["f"].points.gte(new Decimal(2).pow(1024)))  player["f"].points = new Decimal(2).pow(1024)
    },
    getResetGain() {
        gain = new Decimal(0)
        gain = gain.add(buyableEffect("f",11).mul(buyableEffect("f",21)).mul(buyableEffect("f",31)).mul(buyableEffect("f",41)))
        gain = gain.mul(tmp.f.gainMult)
        gain = gain.pow(tmp.f.gainExp)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        mult = mult.mul(player["u"].points)
        mult = mult.mul(player["g"].points)
        mult = mult.mul(getPointGen())
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    exponent: 1, 
    position: 2, 
    row: 0,
    displayRow: 1,
    layerShown(){return true},
})

function fbuy11cm() {
    cm = new Decimal(1.5)
    if (hasUpgrade("u",33)) cm = new Decimal(1.425)
    return cm
}

function fbuy21cm() {
    cm = new Decimal(1.5)
    if (hasUpgrade("u",33)) cm = new Decimal(1.425)
    return cm
}

function fbuy31cm() {
    cm = new Decimal(1.5)
    if (hasUpgrade("u",33)) cm = new Decimal(1.425)
    return cm
}

function fbuy41cm() {
    cm = new Decimal(1.5)
    if (hasUpgrade("u",33)) cm = new Decimal(1.425)
    return cm
}