function getSecondLargest(nums) {

    const max = Math.max(...nums);


    const newarr = nums.filter(el => {
        return el < max;
    

        return el < max;

    });

    return Math.max(...newarr);

}