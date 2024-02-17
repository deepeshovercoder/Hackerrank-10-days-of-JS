function modifyArray(nums) {
    return nums.map(element => { 
        if (element % 2 == 1) {
            return element * 3;
        }
        return element * 2;
    });
}
