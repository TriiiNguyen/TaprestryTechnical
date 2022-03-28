// import axios from "axios";
const axios = require('axios')
require('dotenv').config()
const MY_KEY = process.env.RIGOR_API;

function APIrequest() {
  axios.get('https://monitoring-api.rigor.com/v2/checks/real_browsers/210155', {
    headers: { API_KEY: MY_KEY},
  })
}
