/** Looking at the DOM the pattern that I see to differentiate first party sccript to third party scripts is wether the script is async or defer
 * Third party script runs asyncronously while first party script are deferred
 * Third party like ads or counters doesn't need to wait for the execution order
 * The function below filtered out first party scripts by looking for deferred attributes script
*/


let unwrap = ({ src, async, defer }) => ({ src, async, defer });

function listScripts() {
  var scripts = document.getElementsByTagName("script");
  const bucket = [];
  for (var i = 0; i < scripts.length; i++) {
    let filtered = unwrap(scripts[i]);
    if (filtered['async'] == false && filtered['defer'] == true)
      bucket.push(filtered);
  }
  return bucket;
}

console.table(listScripts());
