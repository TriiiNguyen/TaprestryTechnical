# coding-questions + answer

The questions below can be solved in many different ways using different syntax. All we ask is to use the style of JavaScript you feel most comfortable using and pseudocode each step of your function. These questions are just to make sure you know the basics of DOM traversal and targeting, looping, and basic data structures like objects and arrays, but they also relate to performance and debugging. You cannot use jQuery in any of these functions, everything must be done in vanilla JavaScript.

1. Create a function that finds all the script tags on the page and returns an array of objects with info about the scripts. Each object should contain the script url, and a boolean property for async and defer attributes. You should be able to run this in the dev tools console of any site you choose.
```
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

```

2. Create a function that removes all CSS on a page. When run in dev tools console, this function should remove all external stylesheets, inline styles, and style attributes from the DOM. Write a message to the console that says "All CSS removed" to finish this function.

```
function removeAllCSS() {
    document.querySelectorAll('style,link[rel="stylesheet"]').forEach(item => item.remove())
}

removeAllCSS();

```
3. Create a function that returns an array of all inline script tags on the page. The array should only contain the body of each inline script tag for each entry.

```
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
```

4. Pick a favorite website of yours and come up with 3 potential performance optimizations. Use any tool or resource you would like to use.

Website: https://www.uniqlo.com/us/en/men

Pulling result from WebPageTest: 
LCP speed is at 9 second. The goal for LCP is under 2.5 second.

Render Blocking takes up to 7.6 second preventing user from interacting with the website. It is recommened to be under 1 second. 

According to Yellowlab tools. The main reason for long LCP delay and extends render blocking time is due to JavaScript complexity. Hence increases execution time. 

To improve we can: 
Utilize cache in the browser 

Looking at the waterfall, we can move the LCP to the first 25 elements by deferring the load of unnecessary JaveScript. 

Use Lazy loading fir img and other elements on HTML

There are unused javascript. Google light house showed 7 unused third-party script and 3 in house script. We can reduce redering time by getting rid of them without hindering functionality

Switch images format from jpg/jpeg/png to next-gen format like WebP or AVIF for less data consumption 

Use responsive images by using media queries in html or css for different screen dimension.


