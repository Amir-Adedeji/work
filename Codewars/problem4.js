// A pangram is a sentence that contains every single letter of the alphabet at least once.
//  For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
//   because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
//  Ignore numbers and punctuation.

function isPangram(string) {
    string = string.toLowerCase();
    
    let pan = new Set();
    console.log(pan);
    
    for (let char of string) {
    if (char >= 'a' && char <= 'z') {
    pan.add(char);
    }
    }
    
    return pan.size === 26;
    }