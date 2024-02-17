function getCount(objects) {
    let countOfEqualAttributes = 0;
    objects.forEach(function (object) {
        if (object.x == object.y) {
            countOfEqualAttributes++;
        }
    });
    return countOfEqualAttributes;
}
