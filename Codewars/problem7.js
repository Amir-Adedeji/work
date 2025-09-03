// Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware
//  of the rules.

// So, the goal of this kata is to wite a function that encodes a single word string to pig latin.

// The rules themselves are rather easy:

// The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

// The word starts with a consonant -> move consonants from the beginning of the word to the end
//  of the word until the first vowel, then return it plus "ay".

// The result must be lowercase, regardless of the case of the input. If the input string has
//  any non-alpha characters, the function must return None, null, Nothing (depending on the language).

// The function must also handle simple random strings and not just English words.

// The input string has no vowels -> return the original string plus "ay".

// For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants,
//  so they are moved to the end of the string and "ay" is appended.

function pigLatin(string){
    //your code here
    if (typeof string !== "string")
       return null;
    
    string = string.toLowerCase();
    
    if (!/^[a-z]+$/.test(string)) {
      return null;
    }
    
    const vowels = 'aeiou';
    
    if (vowels.includes(string[0])) {
      return string + "way";
    }
    
     let firstVowelIndex = -1;
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        firstVowelIndex = i;
        break;
      }
    }
    
    return string.slice(firstVowelIndex) + string.slice(0, firstVowelIndex) + "ay";
  }