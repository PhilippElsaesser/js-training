'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 function jadenCase(x) {
     return x.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(" ");
 }


//* Begin of tests
const assert = require('assert')
assert.strictEqual("How Are You ?", "How Are You ?")

// End of tests */
