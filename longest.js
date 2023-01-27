function longestString(str1, str2){
    let longest = '';
    let current = '';
    for(let i=0; i< str1.length; i++){
        for(let j=0; j<str2.length; j++){
            if(str1[i] === str2[i]){
                current += str2[j]
                if(current.length > longest.length){
                    longest=current;
                }
            } else{
                current =''
            }
        }
    }
    return longest;
}
console.log(longestString("abcdef", "abc"));