// import axios from "axios";
const axios = require('axios')
require('dotenv').config()
const MY_KEY = process.env.RIGOR_API;

//destructure object
let unwrap = ({ name, frequency, links, url, user_agent, viewport, browser, locations, connection }) => ({ name, frequency, links, url, user_agent, viewport, browser, locations, connection });


function APIrequest() {
  axios.get('https://monitoring-api.rigor.com/v2/checks/real_browsers/210155', {
    headers: { API_KEY: MY_KEY},
  })
  .then((response) =>{
    let extractInfo = unwrap(response.data);
    let lastRunItem = extractInfo['links']['last_run'];
    let browserName = extractInfo['browser']['label'];
    return extractInfo;
  })
    .catch(error => console.error(`Something went wrong ${error}`));
}

console.log(APIrequest());
