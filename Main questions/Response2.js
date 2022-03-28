/** 2. Create a function that removes all CSS on a page.When run in dev tools console, this function should remove all external stylesheets, inline styles, and style attributes from the DOM.Write a message to the console that says "All CSS removed" to finish this function. 
*/

//Pseudo Code
/** 
 * 1. 
*/

function removeAllCSS() {
  document.querySelectorAll('style,link[rel="stylesheet"]').forEach(item => item.remove())
}

removeAllCSS();