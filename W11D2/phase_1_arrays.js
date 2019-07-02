Array.prototype.uniq = function(){
    const uniqs = [];
    for (let i = 0; i < this.length; i++){
        if (!uniqs.includes(this[i])){
            uniqs.push(this[i]);
        }
    }
    return uniqs;
}


// const cant reassign, block scope
// let and const limitied to scope of blocks its in
// difference between return and console.log?


// use const when we dont want to modify
   // for (let j=i+1;j<this.length;j++){
       // when do we pass something into function?

Array.prototype.twoSum = function(){
    const pairs = [];
    for (let i = 0 ; i < this.length - 1; i++){
        for (let j = i+1 ; j < this.length; j++){
            if (this[i] + this[j] === 0) {
                pairs.push([i,j]);
            }
        }
    }
    console.log(pairs);
}

[-2,4,2,-4].twoSum();


Array.prototype.transpose = function(){
const transposed = [];
    for (let i = 0 ; i < this.length; i++){
        let subArray = []; 
        for (let j = 0 ; j < this.length; j++){ 
            subArray.push(this[j][i]);
        }
        transposed.push(subArray);
    }
    return transposed;
}







arr.myEach(cb)

class Array
    def my_transpose

        transposed = []

        (0...self.length).each do |idx|  [[1,2,9],[3,4,8], [5,6,7]]
            sub_arr = []
            (0...self.length).each do |idx2|
                sub_arr << self[idx2][idx]
            end
            transposed << sub_arr
        end

        transposed
    end
end


// [[1,2],[3,4], [5,6]].my_transpose

// [1, 2],   [1, 3, 5] 
// [3, 4],   [2, 4, 6] 
// [5, 6],

arr[0][0], arr[1][0], arr[2][0]
arr[1][0]