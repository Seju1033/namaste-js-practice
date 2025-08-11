function findLargest(a, b, c) {
    let largest;
    if (a >= b && a >= c) {
        largest = a;
    } else if (b >= a && b >= c) {
        largest = b;
    } else {
        largest = c;
    }
    return largest;
}
console.log("Largest among 12, 45, 32:", findLargest(12, 45, 32));