// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//  Implement a function that determines whether a string that contains only letters is an isogram.
//  Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    //...
    str = str.toLowerCase();
    
    let iso = new Set();
    console.log(iso);
    
    for ( let char of str){
      if (iso.has(char)){
        return false;
      }
      
    iso.add(char);
    }
    return true;
  }

//   a different approach from the solutions
// function isIsogram(str){
//     var i, j;
//     str = str.toLowerCase();
//     for(i = 0; i < str.length; ++i)
//       for(j = i + 1; j < str.length; ++j)
//         if(str[i] === str[j])
//           return false;
//     return true;
//   }



// another one
// function isIsogram(str){ 
//     return !/(\w).*\1/i.test(str)
//   }


// another one
// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }