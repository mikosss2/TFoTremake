addLayer("inf", {
    tabFormat: [
        "blank", 
        ["display-text", function() { return "<h2> Here is infinity stuffs" }], 
        "blank", "blank",
        "challenges",
    ],
    name: "Infinity",
    symbol: "∞",
    startData() { return {
        unlocked: true,
    }},
    color: "#FFE4B5",
    row: "side",
    displayRow: 0,
    position: 2,
    color: "#FFFFFF",
    nodeStyle() {
        return {"background": "linear-gradient(60deg, #970439, #FFFFFF, #BF40BF)",
        "background-origin": "border-box",}
    },
    tooltip() { 
        return ("Infinity")
    },
    layerShown(){return player["f"].points.gte(new Decimal(2).pow(1024)) || hasAchievement("A",71)}, 
    branches: ["f"],
    challenges: {
        11: {
            name: "Break Infinity I",
            challengeDescription() {return "Just reach infinity, in 32 seconds <br> <span style='color: red;'> Must have all of the other challenges except for 'Heavy Machines & Break Infinity II' </span> <br> Time: " + formatTime(player["f"].realtime)},
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024)) && player["f"].realtime.lte(32) && hasChallenge("inf",12) && hasChallenge("inf",21) && hasChallenge("inf",22) && hasChallenge("inf",31) },
            rewardDescription: "Your f(t) value will go past f(t) = 1.79e308",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "15px 0px 0px 0px", "width": "270px", "height": "270px"}
        },
        12: {
            name: "Variables",
            challengeDescription() {return "'U' Variable is weak"},
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock 'a, b, c, & d' Variables autobuyer and turn their cost into requirement.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 15px 0px 0px", "width": "270px", "height": "270px"}
        },
        21: {
            name: "Research Upgrades",
            challengeDescription() {return "Variables inflation is high (x16 Variables cost mult)"},
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock Additive and Multiplicative Research Upgrade autobuyer and turn their cost into requirement.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 0px 0px 0px", "width": "270px", "height": "270px"}
        },
        22: {
            name: "Variable Upgrades",
            challengeDescription() {return "Only 'a & b' Variable exist"},
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock 'a, b, c, & d' Variable Upgrade autobuyer and turn their cost into requirement.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 0px 0px 0px", "width": "270px", "height": "270px"}
        },
        31: {
            name: "Light Machines",
            challengeDescription() {return "Warp Warp Time is much weaker"},
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock Time Fragments Generator and Time Warp autobuyer and turn their cost into requirement.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 0px 0px 15px", "width": "270px", "height": "270px"}
        },
        32: {
            name: "Heavy Machines & Break Infinity II",
            challengeDescription() {return "Combination of all of the challenges in this tab <br>  Time: " + formatTime(player["f"].realtime)},
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024)) && player["f"].realtime.lte(32)},
            rewardDescription: "Unlock T.M.G.E. and Warp Warp Time autobuyer & your g(t) value will go past g(t) = 1.79e308.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 0px 15px 0px", "width": "270px", "height": "270px"}
        },
    },
    update(diff) {
        if (player.points.gte(new Decimal(2).pow(1024))) player.points = new Decimal(2).pow(1024)
        
    },
})