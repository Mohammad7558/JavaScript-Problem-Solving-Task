// ************ problem 1 solved ************* //
function reverseString(value){
    const reverseText = value.split('');
    const newReverseWay = reverseText.reverse();
    const newText = newReverseWay.join('');
    return newText;
}
const result = reverseString('hello');
console.log(result);


// ************ problem 2 solved ************* //
function countVowel(value){
    let count = 0;
    const actualVowel = ['a', 'e', 'i', 'o', 'u'];
    const toLowerCaseText = value.toLowerCase();
    for(let i = 0; i <= actualVowel.length; i++){
        if(toLowerCaseText.includes(actualVowel[i])){
            count = count + 1
        }
        else{
            // console.log('nai');
        }
    }
    return count
}
const vowelCountResult = countVowel('programming');
console.log(vowelCountResult);