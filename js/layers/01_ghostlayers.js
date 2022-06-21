addLayer("ln13", {
    name: "ln13", 
    symbol: "", 
    position: 3,
    canclick(){return false},
    row: 1,
    color: "#000000",
    layerShown() {
        if (tmp["res"].layerShown) return "ghost"
        else return false
    }
})

addLayer("ln24", {
    name: "ln24", 
    symbol: "", 
    position: 4,
    canclick(){return false},
    row: 2,
    color: "#000000",
    layerShown() {
        if (tmp["g"].layerShown) return "ghost"
        else return false
    }
})

addLayer("ln25", {
    name: "ln25", 
    symbol: "", 
    position: 5,
    canclick(){return false},
    row: 2,
    color: "#000000",
    layerShown() {
        if (tmp["pu"].layerShown) return "ghost"
        else return false
    }
})