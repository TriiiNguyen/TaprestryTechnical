/** 2. Create a function that removes all CSS on a page.When run in dev tools console, this function should remove all external stylesheets, inline styles, and style attributes from the DOM.Write a message to the console that says "All CSS removed" to finish this function. 
*/

//Pseudo Code
/** 
 * 1. select query "style" + link to stylesheet
 * 2. remove
*/

function removeAllCSS() {
  document.querySelectorAll('style,link[rel="stylesheet"]').forEach(item => item.remove())
}

removeAllCSS();

//Usage
/** Remove all css to reveal elements on the HTML raw to take a look at a website's HTML structure. This function will also reveal redundant content that was hidden with CSS and show the true size of images. This informations will help make changes to assist performance and web optimization
 */