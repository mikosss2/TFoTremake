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