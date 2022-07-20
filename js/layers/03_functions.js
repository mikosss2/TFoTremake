function getMax(points, cost, expo) {
    max = new Decimal(0)
    max = max.add(Decimal.floor((((new Decimal(points).div(cost).mul(new Decimal(expo).sub(1)).add(1)).log10()).div(new Decimal(expo).log10()))))
    return max
}

function subCost(expo, bAmt, baseC) {
    sub = (new Decimal(expo).pow(new Decimal(bAmt).add(max)).sub(1).div(new Decimal(expo).sub(1)).sub(new Decimal(expo).pow(bAmt).sub(1).div(new Decimal(expo).sub(1)))).mul(new Decimal(baseC))
    return sub
}

function startft() {
    start = new Decimal(1)
    if (player["f"].best.gte(1e18) || hasAchievement("A", 51)) start = new Decimal(3600)
    return start
}

function layer1reset() {
    player.points = player.points.pow(0)
    player["g"].points = player["g"].points.pow(0)
    setBuyableAmount("g", 11, getBuyableAmount("g", 11).mul(0))
    setBuyableAmount("g", 21, getBuyableAmount("g", 21).mul(0))
    setBuyableAmount("g", 31, getBuyableAmount("g", 31).mul(0))
    setBuyableAmount("g", 41, getBuyableAmount("g", 41).mul(0))
    player["pu"].points = player["pu"].points.pow(0)
    let keep=[];
    {layerDataReset("f", keep);}
    {layerDataReset("u", keep);
    if (hasUpgrade("fd",13)) player["u"].upgrades = player["u"].upgrades.concat([11,12,13,14,15]);
    if (hasUpgrade("fd",13)) player["u"].upgrades = player["u"].upgrades.concat([21,22,23,24,25]);
    if (hasUpgrade("fd",13)) player["u"].upgrades = player["u"].upgrades.concat([31,32,33,34,35]);
    if (hasAchievement("A", 26)) player["u"].upgrades = player["u"].upgrades.concat([35]);
    if (hasAchievement("A", 21)) player["u"].upgrades = player["u"].upgrades.concat([21]);
    if (hasAchievement("A", 21)) player["u"].upgrades = player["u"].upgrades.concat([14]);}
    {layerDataReset("res", keep);
    if (hasUpgrade("fd",13)) player["res"].upgrades = player["res"].upgrades.concat([11,12,13,14,15]);
    if (hasUpgrade("fd",13)) player["res"].upgrades = player["res"].upgrades.concat([21,22,23,24,25]);
    if (hasAchievement("A", 31)) player["res"].upgrades = player["res"].upgrades.concat([15]);}
    {layerDataReset("tm", keep);}
}