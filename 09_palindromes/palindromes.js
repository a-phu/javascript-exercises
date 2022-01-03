// const palindromes = function (word) {
//     //split punctuation into array (includes spaces)
//     const punctuation = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');
//     //change to word to lowercase and split into an array
//     let splitWord = word.toLowerCase().split("");
//     //filter out all punctuation and spaces
//     splitWord = splitWord.filter(e => punctuation.indexOf(e) === -1);
//     //have empty array to push each letter from splitWord into
//     let reversed = [];
//     //starting from the last letter of splitWord, push into reversed array
//     for(let i = splitWord.length-1; i >= 0; i--){
//         reversed.push(splitWord[i]);
//     }

//     //join reversed and splitWord back into one string
//     reversed = reversed.join("");
//     splitWord = splitWord.join("");

//     //return true or false if reversed word is the same as splitWord
//     return reversed == splitWord ? true : false;
// };

const palindromes = function (string){
    //set string to lowercase and replace anything that is not a letter
    //[^A-Za-z] with a blank string
    let processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");

    return (
        processedString
            //split it into an array
            .split("")
            //reverse letters
            .reverse()
            //add them back together and compare with original string
            .join("") == processedString     
    );
}

console.log(palindromes("racecar!"));

// Do not edit below this line
module.exports = palindromes;
