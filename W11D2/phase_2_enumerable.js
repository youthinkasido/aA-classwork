
// console.log(x(1))
function x(num) {
    console.log(num * 2);
}


Array.prototype.myEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        let ele = this[i];
        cb(ele);
        //  console.log(cb(ele));
    }
}

console.log([1, 2, 3].myEach(x));


function x(num) {
    return (num * 2);
}

Array.prototype.myMap = function(cb) {

    const mapped = [];

    this.myEach(function(ele) {
        mapped.push(cb(ele));
    })

    return mapped;
}

// the callback function on line 27 is itself a function newly defined for each ele?

console.log([1, 2, 3].myMap(x));

// 
//
//
//
//
// where is function(cb) pointing to?
// 