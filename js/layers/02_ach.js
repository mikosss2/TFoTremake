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
            name: "= 666",
            done() { return (buyableEffect("f",11).add(buyableEffect("f",21)).add(buyableEffect("f",31)).add(buyableEffect("f",41))).gte(666) },
            tooltip: "<b>and again <br> a + b + c + d</b><br><br> The sum of your 'a, b, c, and d' variable is 666<br><br>Reward: Unlock Buy Max buttons for 'a, b, c, and d' variables",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px', "color": "#680CA6"}
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
            tooltip: "<b>A total of 10</b><br><br> Buy the second row of 'U' Upgrades",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(10000) || hasAchievement("A",21)},
        },
        25: {
            name: "Ten milli-U-n",
            done() { return player['u'].points.gte(10000000) },
            tooltip: "<b>yikes we gonna do this again</b><br><br> Have 10,000,000 'U' variable value <br><br> Reward: Unlock Buy Max buttons for Variable Upgrades in Research",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px', "color": "#680CA6"}
            },
            unlocked() {return player["f"].best.gte(10000) || hasAchievement("A",21)},
        },
        26: {
            name: "Third row",
            done() { return hasUpgrade("u",31) && hasUpgrade("u",32) && hasUpgrade("u",33) && hasUpgrade("u",34) && hasUpgrade("u",35) },
            tooltip: "<b>Now 15</b><br><br> Buy the third row of 'U' Upgrades",
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
            name: "Uno base",
            done() { return buyableEffect("res",11).gte(1) },
            tooltip: "<b>OMG ONE OMG</b><br><br> Additive Research Upgrade base is 1<br><br>Reward: Unlock Buy Max buttons for Research Upgrades in Research",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px', "color": "#680CA6"}
            },
            unlocked() {return hasUpgrade("u",14) || hasAchievement("A",31)},
        },
        35: {
            name: "base-10",
            done() { return buyableEffect("res",11).gte(10) },
            tooltip: "<b>WOOWOWOW</b><br><br> Additive Research Upgrade base is 10<br><br>Reward: Unlock Buy All buttons for Res-Upgrades",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px', "color": "#680CA6"}
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
            name: "2^20",
            done() { return getPointGen().gte(1048576) },
            tooltip: "<b>This is not the speed of potato</b><br><br> Gain 1,048,576 Time per second<br><br>Reward: Unlock Buy Max buttons for Light Machines in Time Machine",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px', "color": "#680CA6"}
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
            tooltip: "<b>Reset Layer 1</b><br><br> Do Prestige to gain atleast 1 PP<br><br>Reward: Unlock g(t) and start with f(t) = 3,600",
            style(){ 
                if (tmp["A"].achievements[61].unlocked) return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px', "color": "#680CA6"}
                else return {"border-radius": "0px 0px 0px 15px",'height': '64px', 'width': '64px', "color": "#680CA6"}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        52: {
            name: "w",
            done() { return getBuyableAmount("g", 11).gte(1) },
            tooltip: "<b>The 'w' variable</b><br><br> Have w ≥ 1",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        53: {
            name: "x",
            done() { return getBuyableAmount("g", 21).gte(1) },
            tooltip: "<b>wait where is...</b><br><br> Have x ≥ 1",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        54: {
            name: "y",
            done() { return getBuyableAmount("g", 31).gte(1) },
            tooltip: "<b>but why did we skip</b><br><br> Have y ≥ 1",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        55: {
            name: "z",
            done() { return getBuyableAmount("g", 41).gte(1) },
            tooltip: "<b>weird™</b><br><br> Have z ≥ 1<br><br>Reward: Unlock Buy Max buttons for 'w, x, y, and z' variables",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px', "color": "#680CA6"}
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
                if (tmp["A"].achievements[68].unlocked) return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
                else return {"border-radius": "0px 0px 15px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return player["f"].best.gte(1e18) || hasAchievement("A",51)},
        },
        61: {
            name: "Dejavu",
            done() { return hasUpgrade("p",13) },
            tooltip: "<b>This already happened</b><br><br> Unlock 'pU' Upgrades",
            style(){ 
                return {"border-radius": "0px 0px 0px 15px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("p",13) || hasAchievement("A",61)},
        },
        62: {
            name: "a bit tiring",
            done() { return (hasUpgrade("pu",11) && hasUpgrade("pu",12) && hasUpgrade("pu",13) && hasUpgrade("pu",14) && hasUpgrade("pu",15) && hasUpgrade("pu",21) && hasUpgrade("pu",22) && hasUpgrade("pu",23) && hasUpgrade("pu",24) && hasUpgrade("pu",25)) },
            tooltip: "<b>completed as of now</b><br><br> Buy the first two rows of 'pU' Upgrades<br><br> Reward: Unlock Buy All buttons for 'U' Upgrades",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px', "color": "#680CA6"}
            },
            unlocked() {return hasUpgrade("p",13) || hasAchievement("A",61)},
        },
        63: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("p",13) || hasAchievement("A",61)},
        },
        64: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("p",13) || hasAchievement("A",61)},
        },
        65: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("p",13) || hasAchievement("A",61)},
        },
        66: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("p",13) || hasAchievement("A",61)},
        },
        67: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 0px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("p",13) || hasAchievement("A",61)},
        },
        68: {
            name: "---",
            done() { return false },
            tooltip: "<b>---</b><br><br> ---",
            style(){ 
                return {"border-radius": "0px 0px 15px 0px",'height': '64px', 'width': '64px'}
            },
            unlocked() {return hasUpgrade("p",13) || hasAchievement("A",61)},
        },
    }
})