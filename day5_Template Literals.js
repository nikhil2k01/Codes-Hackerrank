function sides(literals, ...expressions) {
    let [a,p] = expressions;
    let root = Math.sqrt((p*p) - 16*a)
    return [((p - root) / 4 ), ((p + root) / 4)];
}