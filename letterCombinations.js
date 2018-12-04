/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    digits = toArr(digits.toString().split(""));



    let newArr = [],prefix = "";
    run(digits,newArr, 0, prefix);
    return newArr;
};
function run(arr, newArr, len, prefix){

    if(len == arr.length - 1){

        for(let i =0; i < arr[len].length; i++){
            newArr.push(prefix + arr[len][i])
        }

    }
    else{

        for(let i = 0; i < arr[len].length; i++){
            let str = arr[len][i];
            run(arr, newArr, len + 1, prefix + str)


        }


    }




}
function toArr(digits){

    let obj = {
        "2":["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"],
    }

    let arr = [];

    for(let char in digits){
        arr.push(obj[digits[char]]);
    }
    return arr;

}

letterCombinations("23")

