addLayer("A", {
    tabFormat: [
        "blank", 
        ["display-text", function() { return "<h2>Achievements: "+player.A.achievements.length+"/"+(Object.keys(tmp.A.achievements).length-2) + "</h2><br> damn, this is full of spoilers, not anymore..." }], 
        "blank", "blank",
        "achievements",
    ],
    startData() { return {
        unlocked: true,
    }},
    color: "#FFE4B5",
    row: "side",
    layerShown() {return true}, 
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Achievements")
    },
    achievements: {
        11: {
            name: "a",
            done() { return getBuyableAmount("f", 11).gte(1) },
            tooltip: "<b>The 'a' variable</b><br><br> Have 1 'a' variable amount.",
            style(){ 
                if (tmp["A"].achievements[21].unlocked) return {"border-radius": "15px 0px 0px 0px",'height': '64px', 'width': '64px'}
                else return {"border-radius": "15px 0px 0px 15px",'height': '64px', 'width': '64px'}
            },
        },
        12: {
            name: "b",
            done() { return getBuyableAmount("f", 21).gte(1) },
            tooltip: "<b>The 'b' variable</b><br><br> Have 1 'b' variable amount.",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
        },
        13: {
            name: "c",
            done() { return getBuyableAmount("f", 31).gte(1) },
            tooltip: "<b>The 'c' variable</b><br><br> Have 1 'c' variable amount.",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
        },
        14: {
            name: "d",
            done() { return getBuyableAmount("f", 41).gte(1) },
            tooltip: "<b>The 'd' variable</b><br><br> Have 1 'd' variable amount.",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
        },
        15: {
            name: "= 100",
            done() { return (buyableEffect("f",11).add(buyableEffect("f",21)).add(buyableEffect("f",31)).add(buyableEffect("f",41))).gte(100) },
            tooltip: "<b>a + b + c + d</b><br><br> The sum of your 'a, b, c, and d' variable is 100",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
        },
        16: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
        },
        17: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
        },
        18: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                if (tmp["A"].achievements[28].unlocked) return {"border-radius": "0px 15px 0px 0px",'height': '64px', 'width': '64px'}
                else return {"border-radius": "0px 15px 15px 0px",'height': '64px', 'width': '64px'}
            },
        },
        21: {
            name: "U",
            done() { return hasUpgrade("u",11) },
            tooltip: "<b>The 'U' variable</b><br><br> Buy the first 'U' Upgrade",
            style(){ 
                if (tmp["A"].achievements[31].unlocked) return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
                else return {"border-radius": "0px 0px 0px 15px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(10000) || hasAchievement("A",21)},
        },
        22: {
            name: "First row",
            done() { return hasUpgrade("u",11) && hasUpgrade("u",12) && hasUpgrade("u",13) && hasUpgrade("u",14) && hasUpgrade("u",15) },
            tooltip: "<b>5 each row</b><br><br> Buy the first row of 'U' Upgrades",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(10000) || hasAchievement("A",21)},
        },
        23: {
            name: "Another first row",
            done() { return hasUpgrade("u",21) },
            tooltip: "<b>Res-Upgrades</b><br><br> Unlock the first row of Res-Upgrades",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(10000) || hasAchievement("A",21)},
        },
        24: {
            name: "Second row",
            done() { return hasUpgrade("u",21) && hasUpgrade("u",22) && hasUpgrade("u",23) && hasUpgrade("u",24) && hasUpgrade("u",25) },
            tooltip: "<b>A total of 10</b><br><br>  Buy the second row of 'U' Upgrades",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(10000) || hasAchievement("A",21)},
        },
        25: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(10000) || hasAchievement("A",21)},
        },
        26: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(10000) || hasAchievement("A",21)},
        },
        27: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(10000) || hasAchievement("A",21)},
        },
        28: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                if (tmp["A"].achievements[38].unlocked) return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
                else return {"border-radius": "0px 0px 15px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(10000) || hasAchievement("A",21)},
        },
        31: {
            name: "Research",
            done() { return getBuyableAmount("res",11).gte(1) },
            tooltip: "<b>Gain Knowledge</b><br><br> Start gaining Knowledge",
            style(){ 
                if (tmp["A"].achievements[41].unlocked) return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
                else return {"border-radius": "0px 0px 0px 15px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("u",14) || hasAchievement("A",31)},
        },
        32: {
            name: "Uno",
            done() { return player["res"].points.gte(1) },
            tooltip: "<b>A whole number</b><br><br> Have 1 Knowledge",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("u",14) || hasAchievement("A",31)},
        },
        33: {
            name: "Smart",
            done() { return hasUpgrade("res",11) && hasUpgrade("res",12) && hasUpgrade("res",13) && hasUpgrade("res",14) && hasUpgrade("res",15) },
            tooltip: "<b>not smart enough</b><br><br> Buy the first row of Res-Upgrades",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("u",14) || hasAchievement("A",31)},
        },
        34: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("u",14) || hasAchievement("A",31)},
        },
        35: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("u",14) || hasAchievement("A",31)},
        },
        36: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("u",14) || hasAchievement("A",31)},
        },
        37: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("u",14) || hasAchievement("A",31)},
        },
        38: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                if (tmp["A"].achievements[48].unlocked) return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
                else return {"border-radius": "0px 0px 15px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("u",14) || hasAchievement("A",31)},
        },
        41: {
            name: "Time Machine",
            done() { return getBuyableAmount("tm",11).gte(1) },
            tooltip: "<b>Gain Time Fragments</b><br><br> Start gaining Time Fragments",
            style(){ 
                if (tmp["A"].achievements[51].unlocked) return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
                else return {"border-radius": "0px 0px 0px 15px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("res",15) || hasAchievement("A",41)},
        },
        42: {
            name: "Warp Warp Time",
            done() { return getBuyableAmount("tm",22).gte(1) },
            tooltip: "<b>Faster and more Time</b><br><br> Do 1 Warp Warp Time",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("res",15) || hasAchievement("A",41)},
        },
        43: {
            name: "The acronymn one",
            done() { return getBuyableAmount("tm",21).gte(1) },
            tooltip: "<b>More more more Time Fragments</b><br><br> Have 1 Time Fragment Generator Enhancer",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("res",15) || hasAchievement("A",41)},
        },
        44: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("res",15) || hasAchievement("A",41)},
        },
        45: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("res",15) || hasAchievement("A",41)},
        },
        46: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("res",15) || hasAchievement("A",41)},
        },
        47: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("res",15) || hasAchievement("A",41)},
        },
        48: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                if (tmp["A"].achievements[58].unlocked) return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
                else return {"border-radius": "0px 0px 15px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("res",15) || hasAchievement("A",41)},
        },
        51: {
            name: "Prestige",
            done() { return player["p"].best.gte(1) },
            tooltip: "<b>Reset Layer 1</b><br><br> Do Prestige to gain atleast 1 PP",
            style(){ 
                return {"border-radius": "0px 0px 0px 15px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        52: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        53: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        54: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        55: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        56: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        57: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        58: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 15px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
    }
})