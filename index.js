// ************ problem 1- reverse string............ solved ************* //
function reverseString(value){
    const reverseText = value.split('');
    const newReverseWay = reverseText.reverse();
    const newText = newReverseWay.join('');
    return newText;
}
const result = reverseString('hello');
// console.log(result);


// ************ problem 2- check vowel count in string............ solved ************* //
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
// console.log(vowelCountResult);


// ************ problem 3- check Palindrome............ solved ************* //

function checkWordPalindromeOrNot(palindromeWord){
    const makeStringArray = palindromeWord.split('');
    const reverseTheArray = makeStringArray.reverse();
    const finalResult = reverseTheArray.join('');
    if(palindromeWord.toLowerCase() === finalResult.toLowerCase()){
        return true
    }
    else{
        return false
    }
}

const isPalindromeOrNot = checkWordPalindromeOrNot('madam');
// console.log(isPalindromeOrNot);




// ************ problem 4- check largest number of an array............ solved ************* //
const numberArray = [15, 1, 9, 3];

function findMaxNumber(numbers){
    let maxNumber = numbers[0];
    for(let i = 0; i <= numbers.length; i++){
        if(maxNumber < numbers[i]){
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}

const maxNumberResult = findMaxNumber(numberArray);
// console.log(maxNumberResult);


// ************ problem 5- Remove Duplicates from an Array............ solved ************* //

const duplicateArrayNumbers = [1, 2, 2, 3, 4, 4];