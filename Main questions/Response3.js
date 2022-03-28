/**3. Create a function that returns an array of all inline script tags on the page.The array should only contain the body of each inline script tag for each entry. */

function listAllInlineScripts() {
    var scripts = document.getElementsByTagName("script");
    console.log(scripts)
    let bucket = []
    for (var i = 0; i < scripts.length; i++) {
        if (!scripts[i].src)
            bucket.push(scripts[i].innerHTML)
    }
    console.log(bucket)
}

console.log(listAllInlineScripts());