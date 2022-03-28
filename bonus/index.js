// import axios from "axios";
const axios = require('axios')
require('dotenv').config()
const MY_KEY = process.env.RIGOR_API;

let unwrap = ({ name, frequency, links, url, user_agent, viewport, browser, locations, connection }) => ({ name, frequency, links, url, user_agent, viewport, browser, locations, connection });


function APIrequest() {
  axios.get('https://monitoring-api.rigor.com/v2/checks/real_browsers/210155', {
    headers: { API_KEY: MY_KEY},
  })
  .then((response) =>{
    let extractInfo = unwrap(response.data);
    return extractInfo;
  })
    .catch(error => console.error(`Something went wrong ${error}`));
}

console.log(APIrequest());
