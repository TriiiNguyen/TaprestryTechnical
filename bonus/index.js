// import axios from "axios";
const axios = require('axios')
require('dotenv').config()
const MY_KEY = process.env.RIGOR_API;

//destructure object
let unwrap = ({ name, frequency, links, url, user_agent, viewport, browser, locations, connection }) => ({ name, frequency, links, url, user_agent, viewport, browser, locations, connection });

//fetch API
function APIrequest() {
  axios.get('https://monitoring-api.rigor.com/v2/checks/real_browsers/210155', {
    headers: { API_KEY: MY_KEY},
  })
  .then((response) =>{
    let extractInfo = unwrap(response.data);
    //extract necessary info
    let lastRunItem = extractInfo['links']['last_run'];
    let browserName = extractInfo['browser']['label'];
    Object.assign(extractInfo, { last_run: lastRunItem })
    Object.assign(extractInfo, { browser_name: browserName })
    //delete unecessary info
    delete extractInfo.links;
    delete extractInfo.browser;
    console.log(extractInfo);
    return extractInfo;
  })
  .catch(error => console.error(`Something went wrong ${error}`));
}

APIrequest();
