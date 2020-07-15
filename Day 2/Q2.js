//Strings

let str = "stringify";
console.log( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
console.log( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0


// If there is no second argument, then slice goes till the end of the string:
console.log( str.slice(2) ); // 'ringify', from the 2nd position till the end


// Negative values for start/end are also possible. They mean the position is counted from the string end:
// start at the 4th position from the right, end at the 1st from the right
console.log( str.slice(-4, -1) ); // 'gif'


// these are same for substring
console.log( str.substring(2, 6) ); // "ring"
console.log( str.substring(6, 2) ); // "ring"

// ...but not for slice:
console.log( str.slice(2, 6) ); // "ring" (the same)
console.log( str.slice(6, 2) ); // "" (an empty string)
// Negative arguments are (unlike slice) not supported, they are treated as 0.

console.log( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters
// The first argument may be negative, to count from the end:


console.log( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters


var str2 = "I am improving myself!";
console.log(str2.replace("improving", "Upgrading..,"));

//Arrays


let arr = ["I", "go", "home"];
console.log( arr );
delete arr[1]; // remove "go"

console.log( arr[1] ); // undefined
console.log( arr );
// now arr = ["I",  , "home"];
console.log( arr.length ); // 3


let arr2 = ["I", "study", "JavaScript"];
console.log(arr2);
arr2.splice(1, 1); // from index 1 remove 1 element

console.log( arr2 ); // ["I", "JavaScript"]

let arr3 = ["I", "study", "JavaScript", "right", "now"];
console.log(arr3);
// remove 2 first elements
let removed = arr3.splice(0, 2);

console.log( removed ); // "I", "study"  array of removed elements


let arr4 = [ 1, 15, 2];
console.log( arr4 );
// the method reorders the content of arr
arr4.sort();
console.log( arr4 ); // 1, 15, 2


function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr5 = [ 1, 15, 2 ];
console.log(arr5);
arr5.sort(compareNumeric);

console.log(arr5);  // 1, 2, 15
