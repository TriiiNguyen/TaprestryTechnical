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




Please pick one bonus question if you choose.

BONUS 1 

Expanding off of question 1, navigate to https://www.stuartweitzman.com. We would like to modify the function in the first script to list all FIRST PARTY scripts. The objects should contain the same details, but the array should only contain scripts that have urls that originate from stuartweitzman.com domain. The resulting array should contain no inline scripts either, only scripts that have a src attribute.

This is a bit tricky and will require you to really look over the DOM and find a pattern.
If you successfully create the first function, use that function on https://www.stuartweitzman.com and use the list of scripts to see if you can find the pattern.

hint: Some first party scripts don't start with https://www.stuartweitzman.com or even contain stuartweitzman.com in the url when viewing script tags in the page source or in the elements tab in dev tools.

let unwrap = ({ src, async, defer }) => ({ src, async, defer });

function listScripts() {
  var scripts = document.getElementsByTagName("script");
  const bucket = [];
  for (var i = 0; i < scripts.length; i++) {
    let filtered = unwrap(scripts[i]);
    if(filtered['async']==false && filtered['defer']==true)
      bucket.push(filtered);
  }
  return bucket;
}

console.table(listScripts());

BONUS 2 - In Bonus 2 file

Use the included folder for a node project. Inside index.js you will need to create a function that calls an external API. The API key will be included in a .env file. You can use a package like [node-fetch](https://www.npmjs.com/node-fetch) or [axios](https://www.npmjs.com/package/axios) to fetch data from the API.

We will be using the Rigor Synthetic Monitoring API for this task. Rigor is a monitoring tool that allows us to capture performance metrics in a controlled setting. Tests are set up simulating different devices, network speeds, and other factors and are run many times per day to create a baseline trend of how a site performs.

We would like to get information relating to a specific Real Browser Check we have set up. The Test ID is **210155** and you can test this endpoint with Rigor's API Explorer - [Get Real Browser Check Detail Documentation](https://monitoring-api.rigor.com/docs?url=%2Fv2%2Fdocs#!/Real_Browser_Checks/getRealBrowserCheck)

Create a function that calls the endpoint with the ID provided. This function should return an object containing this information about the Real Browser Check: 
- name
- frequency
- url of the last run
- url of page being tested
- user agent
- viewport
- browser name
- array of location names
- connection (download, upload, latency)