# coding-questions

The questions below can be solved in many different ways using different syntax. All we ask is to use the style of JavaScript you feel most comfortable using and pseudocode each step of your function. These questions are just to make sure you know the basics of DOM traversal and targeting, looping, and basic data structures like objects and arrays, but they also relate to performance and debugging. You cannot use jQuery in any of these functions, everything must be done in vanilla JavaScript.

1. Create a function that finds all the script tags on the page and returns an array of objects with info about the scripts. Each object should contain the script url, and a boolean property for async and defer attributes. You should be able to run this in the dev tools console of any site you choose.
```
function listScripts() {

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

}

console.table(listAllInlineScripts());
```

4. Pick a favorite website of yours and come up with 3 potential performance optimizations. Use any tool or resource you would like to use.
