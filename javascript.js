function filterArray(arr) {
    arr = arr.filter(isEligible);
    return arr;
}

function isEligible(value) {
    if(value !==false || value !== null || value !== 0 || value !== "") {
        return value
    }
}

console.log(filterArray([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true]