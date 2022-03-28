/**3. Create a function that returns an array of all inline script tags on the page.The array should only contain the body of each inline script tag for each entry. */


/**
 * 1. create function to get all element with a script tag
 * 2. create an empty array
 * 3. for loop to go through all script tag that was found and filtered those with script that doesn't contain src
 * 4. return result into the empty array
*/
function listAllInlineScripts() {
    var scripts = document.getElementsByTagName("script");
    console.log(scripts)
    let bucket = []
    for (var i = 0; i < scripts.length; i++) {
        if (!scripts[i].src)
            bucket.push(scripts[i].innerHTML)
    }
  return bucket;

}

console.log(listAllInlineScripts());

//Usage
/**
 * Avoid unecessary in-line javascript so this function can find the in-line scripts and console log the result
 */