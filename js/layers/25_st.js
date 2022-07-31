addLayer("st", {
    name: "Study Tree",
    resource: "Study Points",
    baseResource: "Time",
    requires: new Decimal(1),
    baseAmount() {return player.points}, 
    startData() { return {
		points: new Decimal(0),
        unlocked: true,
    }},
    passiveGeneration() { return false },
    type: "normal", 
    clickables: {

    },
    challenges: {
       
    },
    buyables: {
       
    },
    upgrades: {
       
    },
    automate() {
    },
    update(diff) {

    },
    getResetGain() {
        gain = new Decimal(0)
        return gain
    },
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
        exp = new Decimal(1)
        return exp
    },
    exponent: 1, 
    position: 0, 
    row: 0,
    displayRow: 0,
    branches: ["tm"],
    layerShown(){return false},
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("st", keep);
        }
    },
})