function removeKDigits(str,k){

    let index = 0;
    for(let len = 0; len < str.length - 1, index < k; len++){

        let first = parseInt(str.charAt(len));
        let second = parseInt(str.charAt(len + 1));

        if(first > second && index < k){
            str = str.substring(0, len) + str.substring(len+1);
            index++;
            len--;
        }

    }
    if(index < k){
        str = str.substring(0, str.length - (k - index))
    }
}
removeKDigits("1593212",3)