
/** Create a function that finds all the script tags on the page and returns an array of objects with info
 about the scripts. Each object should contain the script url, and a boolean property for async and defer attributes. You should be able to run this in the dev tools console of any site you choose.*/


// Pseudo Code
/**
 * 1. make a function that deconstruct objects
 * 2. get a collection of object with 'script' tag
 * 3. declare an empty array
 * 4. traverse through, deconstruct each script object filtered by 'src', 'async', 'defer'attributes and push in the result array
 * 5. output as table (doesn't work chrome?)
 */


// Main Code
let unwrap = ({ src, async, defer }) => ({ src, async, defer });

function listScripts() {
  var scripts = document.getElementsByTagName("script");
  const bucket = [];
  for (var i = 0; i < scripts.length; i++) {
    let filtered = unwrap(scripts[i]);
    console.log(filtered);
    bucket.push(filtered);
  }
  return bucket;
}

console.table(listScripts());

// Usage
/** To better performance, third party js codes need to be:
 * async and deferred 
 * Preferably not an inline script 
*/
