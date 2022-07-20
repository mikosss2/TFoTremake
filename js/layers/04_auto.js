addLayer("auto", {
    tabFormat: {
        "Layer 1": {
            content:[
                ["display-text", function() { return "<h3>Do challenges or buy upgrades to unlock automations." },],
                "blank",
                ["microtabs", "layer1"],
            ]
        },
    },
    microtabs: {
        layer1: {
            "f": {
                buttonStyle() { return {'border-color': '#63C5DA'} },
                unlocked() {return hasChallenge("inf", 12)},
                content: [
                    "blank",
                    ["clickable", 1101],
                    ["clickable", 1111],
                    ["clickable", 1121],
                    ["clickable", 1131],
                    ["clickable", 1141],
                    "blank",
                ]
            },
            "R": {
                buttonStyle() { return {'border-color': '#234F1E'} },
                unlocked() {return hasChallenge("inf", 21) || hasChallenge("inf", 22)},
                content: [
                    "blank",
                    ["display-text", function() { return "<h3> Research Upgrades </h3>" },],
                    ["clickable", 1301],
                    ["row", [["clickable", 1311], ["clickable", 1312]]],
                    "blank",
                    ["display-text", function() { return "<h3> Variable Upgrades </h3>" },],
                    ["clickable", 1302],
                    ["row", [["clickable", 1321], ["clickable", 1322]]],
                    ["row", [["clickable", 1331], ["clickable", 1332]]],
                    ["row", [["clickable", 1341], ["clickable", 1342]]],
                    "blank",
                ]
            },
            "TM": {
                buttonStyle() { return {'border-color': '#D0B49F'} },
                unlocked() {return hasChallenge("inf", 31) || hasChallenge("inf", 32)},
                content: [
                    "blank",
                    ["display-text", function() { return "<h3> Light Machines </h3>" },],
                    ["clickable", 1401],
                    ["row", [["clickable", 1411], ["clickable", 1412]]],
                    "blank",
                    ["display-text", function() { return "<h3> Heavy Machines </h3>" },],
                    ["clickable", 1402],
                    ["row", [["clickable", 1421], ["clickable", 1422]]],
                    "blank",
                ]
            },
        }
    },
    startData() { return {
        unlocked: true,
    }},
    name: "Automation", 
    symbol: "Au",
    color: "#FFFFFF",
    row: "side",
    layerShown() {return player["f"].points.gte(new Decimal(2).pow(1024)) || hasAchievement("A",71)}, 
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Automation")
    },
    clickables: {
        1101: {
            display() {return "<h2>Buy Max on Automation"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1101) == false) {
                    setClickableState("auto", 1101, true)
                }
                else if (getClickableState("auto", 1101) == true) {
                    setClickableState("auto", 1101, false)
                }
            },
            style() {
                if (getClickableState("auto", 1101) == false) return {'background-color': 'red',"border-radius": "15px 15px 0px 0px", "width": "480px", "min-height": "40px"}
                else if (getClickableState("auto", 1101) == true) return {'background-color': '#FFFFFF',"border-radius": "15px 15px 0px 0px", "width": "480px", "min-height": "40px"}
            },
            unlocked() {return hasChallenge("inf", 12)}
        },
        1111: {
            display() {return "<h2>Automate 'a' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1111) == false) {
                    setClickableState("auto", 1111, true)
                }
                else if (getClickableState("auto", 1111) == true) {
                    setClickableState("auto", 1111, false)
                }
            },
            style() {
                if (getClickableState("auto", 1111) == false) return {'background-color': 'red',"border-radius": "0px 0px 0px 0px", "width": "480px", "height": "100px"}
                else if (getClickableState("auto", 1111) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 0px 0px", "width": "480px", "height": "100px"}
            },
            unlocked() {return hasChallenge("inf", 12)}
        },
        1121: {
            display() {return "<h2>Automate 'b' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1121) == false) {
                    setClickableState("auto", 1121, true)
                }
                else if (getClickableState("auto", 1121) == true) {
                    setClickableState("auto", 1121, false)
                }
            },
            style() {
                if (getClickableState("auto", 1121) == false) return {'background-color': 'red',"border-radius": "0px 0px 0px 0px", "width": "480px", "height": "100px"}
                else if (getClickableState("auto", 1121) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 0px 0px", "width": "480px", "height": "100px"}
            },
            unlocked() {return hasChallenge("inf", 12)}
        },
        1131: {
            display() {return "<h2>Automate 'c' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1131) == false) {
                    setClickableState("auto", 1131, true)
                }
                else if (getClickableState("auto", 1131) == true) {
                    setClickableState("auto", 1131, false)
                }
            },
            style() {
                if (getClickableState("auto", 1131) == false) return {'background-color': 'red',"border-radius": "0px 0px 0px 0px", "width": "480px", "height": "100px"}
                else if (getClickableState("auto", 1131) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 0px 0px", "width": "480px", "height": "100px"}
            },
            unlocked() {return hasChallenge("inf", 12)}
        },
        1141: {
            display() {return "<h2>Automate 'd' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1141) == false) {
                    setClickableState("auto", 1141, true)
                }
                else if (getClickableState("auto", 1141) == true) {
                    setClickableState("auto", 1141, false)
                }
            },
            style() {
                if (getClickableState("auto", 1141) == false) return {'background-color': 'red',"border-radius": "0px 0px 15px 15px", "width": "480px", "height": "100px"}
                else if (getClickableState("auto", 1141) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 15px 15px", "width": "480px", "height": "100px"}
            },
            unlocked() {return hasChallenge("inf", 12)}
        },
        1301: {
            display() {return "<h2>Buy Max on Automation"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1301) == false) {
                    setClickableState("auto", 1301, true)
                }
                else if (getClickableState("auto", 1301) == true) {
                    setClickableState("auto", 1301, false)
                }
            },
            style() {
                if (getClickableState("auto", 1301) == false) return {'background-color': 'red',"border-radius": "15px 15px 0px 0px", "width": "600px", "min-height": "40px"}
                else if (getClickableState("auto", 1301) == true) return {'background-color': '#FFFFFF',"border-radius": "15px 15px 0px 0px", "width": "600px", "min-height": "40px"}
            },
            unlocked() {return hasChallenge("inf", 21)}
        },
        1311: {
            display() {return "<h2>Automate Additive Research Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1311) == false) {
                    setClickableState("auto", 1311, true)
                }
                else if (getClickableState("auto", 1311) == true) {
                    setClickableState("auto", 1311, false)
                }
            },
            style() {
                if (getClickableState("auto", 1311) == false) return {'background-color': 'red',"border-radius": "0px 0px 0px 15px", "width": "300px", "height": "120px"}
                else if (getClickableState("auto", 1311) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 0px 15px", "width": "300px", "height": "120px"}
            },
            unlocked() {return hasChallenge("inf", 21)}
        },
        1312: {
            display() {return "<h2>Automate Multiplicative Research Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1312) == false) {
                    setClickableState("auto", 1312, true)
                }
                else if (getClickableState("auto", 1312) == true) {
                    setClickableState("auto", 1312, false)
                }
            },
            style() {
                if (getClickableState("auto", 1312) == false) return {'background-color': 'red',"border-radius": "0px 0px 15px 0px", "width": "300px", "height": "120px"}
                else if (getClickableState("auto", 1312) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 15px 0px", "width": "300px", "height": "120px"}
            },
            unlocked() {return hasChallenge("inf", 21)}
        },
        1302: {
            display() {return "<h2>Buy Max on Automation"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1302) == false) {
                    setClickableState("auto", 1302, true)
                }
                else if (getClickableState("auto", 1302) == true) {
                    setClickableState("auto", 1302, false)
                }
            },
            style() {
                if (getClickableState("auto", 1302) == false) return {'background-color': 'red',"border-radius": "15px 15px 0px 0px", "width": "600px", "min-height": "40px"}
                else if (getClickableState("auto", 1302) == true) return {'background-color': '#FFFFFF',"border-radius": "15px 15px 0px 0px", "width": "600px", "min-height": "40px"}
            },
            unlocked() {return hasChallenge("inf", 22)}
        },
        1321: {
            display() {return "<h2>Automate 'U' Variable Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1321) == false) {
                    setClickableState("auto", 1321, true)
                }
                else if (getClickableState("auto", 1321) == true) {
                    setClickableState("auto", 1321, false)
                }
            },
            style() {
                if (getClickableState("auto", 1321) == false) return {'background-color': 'red',"border-radius": "0px 0px 0px 0px", "width": "300px", "height": "120px"}
                else if (getClickableState("auto", 1321) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 0px 0px", "width": "300px", "height": "120px"}
            },
            unlocked() {return hasChallenge("inf", 22)}
        },
        1322: {
            display() {return "<h2>Automate 'pU' Variable Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1322) == false) {
                    setClickableState("auto", 1322, true)
                }
                else if (getClickableState("auto", 1322) == true) {
                    setClickableState("auto", 1322, false)
                }
            },
            style() {
                if (getClickableState("auto", 1322) == false) return {'background-color': 'red',"border-radius": "0px 0px 0px 0px", "width": "300px", "height": "120px"}
                else if (getClickableState("auto", 1322) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 0px 0px", "width": "300px", "height": "120px"}
            },
            unlocked() {return hasChallenge("inf", 22)}
        },
        1331: {
            display() {return "<h2>Automate 'a' Variable Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1331) == false) {
                    setClickableState("auto", 1331, true)
                }
                else if (getClickableState("auto", 1331) == true) {
                    setClickableState("auto", 1331, false)
                }
            },
            style() {
                if (getClickableState("auto", 1331) == false) return {'background-color': 'red',"border-radius": "0px 0px 0px 0px", "width": "300px", "height": "120px"}
                else if (getClickableState("auto", 1331) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 0px 0px", "width": "300px", "height": "120px"}
            },
            unlocked() {return hasChallenge("inf", 22)}
        },
        1332: {
            display() {return "<h2>Automate 'b' Variable Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1332) == false) {
                    setClickableState("auto", 1332, true)
                }
                else if (getClickableState("auto", 1332) == true) {
                    setClickableState("auto", 1332, false)
                }
            },
            style() {
                if (getClickableState("auto", 1332) == false) return {'background-color': 'red',"border-radius": "0px 0px 0px 0px", "width": "300px", "height": "120px"}
                else if (getClickableState("auto", 1332) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 0px 0px", "width": "300px", "height": "120px"}
            },
            unlocked() {return hasChallenge("inf", 22)}
        },
        1341: {
            display() {return "<h2>Automate 'c' Variable Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1341) == false) {
                    setClickableState("auto", 1341, true)
                }
                else if (getClickableState("auto", 1341) == true) {
                    setClickableState("auto", 1341, false)
                }
            },
            style() {
                if (getClickableState("auto", 1341) == false) return {'background-color': 'red',"border-radius": "0px 0px 0px 15px", "width": "300px", "height": "120px"}
                else if (getClickableState("auto", 1341) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 0px 15px", "width": "300px", "height": "120px"}
            },
            unlocked() {return hasChallenge("inf", 22)}
        },
        1342: {
            display() {return "<h2>Automate 'd' Variable Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1342) == false) {
                    setClickableState("auto", 1342, true)
                }
                else if (getClickableState("auto", 1342) == true) {
                    setClickableState("auto", 1342, false)
                }
            },
            style() {
                if (getClickableState("auto", 1342) == false) return {'background-color': 'red',"border-radius": "0px 0px 15px 0px", "width": "300px", "height": "120px"}
                else if (getClickableState("auto", 1342) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 15px 0px", "width": "300px", "height": "120px"}
            },
            unlocked() {return hasChallenge("inf", 22)}
        },
        1401: {
            display() {return "<h2>Buy Max on Automation"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1401) == false) {
                    setClickableState("auto", 1401, true)
                }
                else if (getClickableState("auto", 1401) == true) {
                    setClickableState("auto", 1401, false)
                }
            },
            style() {
                if (getClickableState("auto", 1401) == false) return {'background-color': 'red',"border-radius": "15px 15px 0px 0px", "width": "540px", "min-height": "40px"}
                else if (getClickableState("auto", 1401) == true) return {'background-color': '#FFFFFF',"border-radius": "15px 15px 0px 0px", "width": "540px", "min-height": "40px"}
            },
            unlocked() {return hasChallenge("inf", 31)}
        },
        1411: {
            display() {return "<h2>Automate Time Fragments Generator"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1411) == false) {
                    setClickableState("auto", 1411, true)
                }
                else if (getClickableState("auto", 1411) == true) {
                    setClickableState("auto", 1411, false)
                }
            },
            style() {
                if (getClickableState("auto", 1411) == false) return {'background-color': 'red',"border-radius": "0px 0px 0px 15px", "width": "270px", "height": "180px"}
                else if (getClickableState("auto", 1411) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 0px 15px", "width": "270px", "height": "180px"}
            },
            unlocked() {return hasChallenge("inf", 31)}
        },
        1412: {
            display() {return "<h2>Automate Warp Time"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1412) == false) {
                    setClickableState("auto", 1412, true)
                }
                else if (getClickableState("auto", 1412) == true) {
                    setClickableState("auto", 1412, false)
                }
            },
            style() {
                if (getClickableState("auto", 1412) == false) return {'background-color': 'red',"border-radius": "0px 0px 15px 0px", "width": "270px", "height": "180px"}
                else if (getClickableState("auto", 1412) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 15px 0px", "width": "270px", "height": "180px"}
            },
            unlocked() {return hasChallenge("inf", 31)}
        },
        1402: {
            display() {return "<h2>Buy Max on Automation"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1402) == false) {
                    setClickableState("auto", 1402, true)
                }
                else if (getClickableState("auto", 1402) == true) {
                    setClickableState("auto", 1402, false)
                }
            },
            style() {
                if (getClickableState("auto", 1402) == false) return {'background-color': 'red',"border-radius": "15px 15px 0px 0px", "width": "540px", "min-height": "40px"}
                else if (getClickableState("auto", 1402) == true) return {'background-color': '#FFFFFF',"border-radius": "15px 15px 0px 0px", "width": "540px", "min-height": "40px"}
            },
            unlocked() {return hasChallenge("inf", 32)}
        },
        1421: {
            display() {return "<h2>Automate T.M.G.E."},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1421) == false) {
                    setClickableState("auto", 1421, true)
                }
                else if (getClickableState("auto", 1421) == true) {
                    setClickableState("auto", 1421, false)
                }
            },
            style() {
                if (getClickableState("auto", 1421) == false) return {'background-color': 'red',"border-radius": "0px 0px 0px 15px", "width": "270px", "height": "180px"}
                else if (getClickableState("auto", 1421) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 0px 15px", "width": "270px", "height": "180px"}
            },
            unlocked() {return hasChallenge("inf", 32)}
        },
        1422: {
            display() {return "<h2>Automate Warp Warp Time"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1422) == false) {
                    setClickableState("auto", 1422, true)
                }
                else if (getClickableState("auto", 1422) == true) {
                    setClickableState("auto", 1422, false)
                }
            },
            style() {
                if (getClickableState("auto", 1422) == false) return {'background-color': 'red',"border-radius": "0px 0px 15px 0px", "width": "270px", "height": "180px"}
                else if (getClickableState("auto", 1422) == true) return {'background-color': '#FFFFFF',"border-radius": "0px 0px 15px 0px", "width": "270px", "height": "180px"}
            },
            unlocked() {return hasChallenge("inf", 32)}
        },
    },
})