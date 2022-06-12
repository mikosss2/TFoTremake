addLayer("u", {
    tabFormat: {
        "'U' Upgrades": {
            content:[
                "main-display",
                ["display-text", function() { return "You Have <h2><b style='color:#63C5DA;'>" + format(player["f"].points) + "</b></h2> f(t)" },],
                "blank",
                "upgrades"
            ],
        },
    },
    name: "'U' Upgrades", 
    symbol: "U",
    color: "#FFE338", 
    nodeStyle() {
    },
    resource: "U",
    baseResource: "f(t)",
    requires: new Decimal(1),
    baseAmount() {return player.points}, 
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
        pTime: new Decimal(0),
    }},
    passiveGeneration() { return true },
    type: "normal", 
    clickables: {

    },
    upgrades: {
        11: {
            title: "'U' Upgrade 1.1",
            description: "<b>x3</b> 'U' value",
            cost: new Decimal(100000),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(3)
                return eff
            },
            style(){ 
                return {"border-radius": "15px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
        },
        12: {
            title: "'U' Upgrade 1.2",
            description: "<b>x1.5</b> 'U' value every 'U' Upgrade bought",
            cost: new Decimal(1000000),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("u",11)) eff = eff.mul(1.5)
                if (hasUpgrade("u",12)) eff = eff.mul(1.5)
                if (hasUpgrade("u",13)) eff = eff.mul(1.5)
                if (hasUpgrade("u",14)) eff = eff.mul(1.5)
                if (hasUpgrade("u",15)) eff = eff.mul(1.5)
                if (hasUpgrade("u",21)) eff = eff.mul(1.5)
                if (hasUpgrade("u",22)) eff = eff.mul(1.5)
                if (hasUpgrade("u",23)) eff = eff.mul(1.5)
                if (hasUpgrade("u",24)) eff = eff.mul(1.5)
                if (hasUpgrade("u",25)) eff = eff.mul(1.5)
                return eff
            },
            effectDisplay() {
                return "<b>x" + format(upgradeEffect("u", 12))
            },
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
        },
        13: {
            title: "'U' Upgrade 1.3",
            description: "<b>x1.01</b> 'U' value every 'a' Variable bought <br> Max = x100",
            cost: new Decimal(10000000),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("f",11)))
                if (eff.gte(100)) eff = new Decimal(100)
                return eff
            },
            effectDisplay() {
                return "<b>x" + format(upgradeEffect("u", 13))
            },
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
        },
        14: {
            title: "'U' Upgrade 1.4",
            description: "<b>Unlock</b> Research",
            cost: new Decimal(100000000),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
        },
        15: {
            title: "'U' Upgrade 1.5",
            description: "<b>x1.01</b> 'U' value every 'b' Variable bought <br> Max = x100",
            cost: new Decimal(1e9),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("f",21)))
                if (eff.gte(100)) eff = new Decimal(100)
                return eff
            },
            effectDisplay() {
                return "<b>x" + format(upgradeEffect("u", 15))
            },
            style(){ 
                return {"border-radius": "0px 15px 0px 0px", "width": "120px", "height": "135px"}
            },
        },
        21: {
            title: "'U' Upgrade 2.1",
            description: "<b>Unlock</b> Res-Upgrades",
            cost: new Decimal(1e10),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            style(){ 
                return {"border-radius": "0px 0px 0px 15px", "width": "120px", "height": "135px"}
            },
        },
        22: {
            title: "'U' Upgrade 2.2",
            description: "<b>x1.01</b> 'U' value every 'c' Variable bought <br> Max = x100",
            cost: new Decimal(1e11),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("f",31)))
                if (eff.gte(100)) eff = new Decimal(100)
                return eff
            },
            effectDisplay() {
                return "<b>x" + format(upgradeEffect("u", 22))
            },
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
        },
        23: {
            title: "'U' Upgrade 2.3",
            description: "<b>x1.5</b> 'U' value every Res-Upgrade bought",
            cost: new Decimal(1e12),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
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
                return "<b>x" + format(upgradeEffect("u", 23))
            },
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
        },
        24: {
            title: "'U' Upgrade 2.4",
            description: "<b>x1.01</b> 'U' value every 'd' Variable bought <br> Max = x100",
            cost: new Decimal(1e13),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("f",41)))
                if (eff.gte(100)) eff = new Decimal(100)
                return eff
            },
            effectDisplay() {
                return "<b>x" + format(upgradeEffect("u", 24))
            },
            style(){ 
                return {"border-radius": "0px 0px 0px 0px", "width": "120px", "height": "135px"}
            },
        },
        25: {
            title: "'U' Upgrade 2.5",
            description: "<b>+ ^0.05</b> 'U' value",
            cost: new Decimal(1e14),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(0)
                eff = eff.add(0.05)
                return eff
            },
            style(){ 
                return {"border-radius": "0px 0px 15px 0px", "width": "120px", "height": "135px"}
            },
        },
    },
    automate() {

    },
    update(diff) {
        pow = new Decimal(1)
        if (hasUpgrade("u",25)) pow = pow.add(tmp.u.upgrades[25].effect)

        player["u"].points = new Decimal(1)
        player["u"].points = player["u"].points.mul(buyableEffect("res", 21))
        if (hasUpgrade("u", 11)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[11].effect)
        if (hasUpgrade("u", 12)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[12].effect)
        if (hasUpgrade("u", 13)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[13].effect)
        if (hasUpgrade("u", 15)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[15].effect)
        if (hasUpgrade("u", 22)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[22].effect)
        if (hasUpgrade("u", 23)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[23].effect)
        if (hasUpgrade("u", 24)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[24].effect)
        player["u"].points = player["u"].points.pow(pow)

    },
    getResetGain() {
        gain = new Decimal(0)
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
    position: 1, 
    row: 0,
    displayRow: 1,
    branches: ["f"],
    layerShown(){return player["f"].best.gte(10000) || hasAchievement("A", 21)},
})
