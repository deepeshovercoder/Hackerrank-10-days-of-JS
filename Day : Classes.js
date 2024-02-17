class Polygon{
    constructor(lengths) {
        this.lengths = lengths;
    }
    perimeter() {
        return this.lengths.reduce((a, b) => a + b, 0);        
    };
}
