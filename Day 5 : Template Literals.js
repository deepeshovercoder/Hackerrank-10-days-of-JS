function calculateSides(a, p) {
    let results = [];
    let term = Math.sqrt((p * p) - (16 * a));    
    results.push((p + term) / 4.0);
    results.push((p - term) / 4.0);
    results.sort(function (a, b) { return a - b; });
    return results;
}

function sides(literals, ...expressions) {
    let area = expressions[0]
    let perimeter = expressions[1];
    return calculateSides(area, perimeter);
}
