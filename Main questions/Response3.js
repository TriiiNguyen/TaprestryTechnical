/**3. Create a function that returns an array of all inline script tags on the page.The array should only contain the body of each inline script tag for each entry. */

//Pseudo Code
/**
 * 1. create function to get all element with a script tag
 * 2. create an empty array
 * 
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