// Write a function that takes a string as an argument and returns true if the string is
// a palindrome (reads the same backwards and forwards) and false if it is not.
function palindrome(string) {
   const len = string.length;
   for(let i = 0; i < len/2; i++){

   }
    
}


// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('civic ');

// call the function
const value = checkPalindrome(string);

console.log(value);
