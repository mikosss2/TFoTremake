addLayer("ln1", {
    name: "ln1", 
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