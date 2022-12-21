/* Client support JS goes here */

//const app = require('./app.js');
//import { app } from './app.js';


//require('dotenv').config({ path: '.okta.env' })
//const { endpoint, baseUrl } = process.env;

var baseAPIUrl = "https://okta-rocks-api.glitch.me/"; // This is the base URL of the API Application
var token = "eyJraWQiOiI3Y3N6LUpqN2pDVXh6MjctN3QxVWJaWTY3T2g1aVlmSlBaZjVKYTBWR05RIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULk1rUkhhSTFPOTBQUjU3RFJ4Mi1TeGhHR2I3bUI3ZDRWQVhOZlNyZVA2WFEiLCJpc3MiOiJodHRwczovL2RlbG9uZ29pZS5va3RhcHJldmlldy5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjcxMTMwODc5LCJleHAiOjE2NzExMzQ0NzksImNpZCI6IjBvYTV4d3ZkcDB3Rmg2ZU81MWQ3IiwidWlkIjoiMDB1Mml3bmp3cVAyREhOYlMxZDciLCJzY3AiOlsib3BlbmlkIiwiZ3JvdXBzIiwicGhvbmUiLCJwcm9maWxlIl0sImF1dGhfdGltZSI6MTY3MTEzMDg3OCwic3ViIjoiand0QGF0a28uZW1haWwifQ.L_J96IXhOD0B0BJhvCl3eMpUK6oxaYvPmRrLh2wqG6ITPvX-cTh1LLJrf7XztT8maOkdntrHwqoEerlmvda-2-LPhk-T-QWohvilsFON1XWZAVzcmQMqi77CUf8N1yNFJpKM9OIWR8Xrr2zG2qKBbUbACCDDnqIx01ho4YL55CSZ9DJnHqBxm5i-tYXr-Ua1lpLdqv__ubIRhhQZCmtCO9Fq5XALhYNISJuTpnbnjYOddvfRG5XwsL3bPY31N2VczPHfxyCrR7kKaup5fffsWb9KNW60-Y9JgdQtzE8IOjRgBiDXQc-dnD18TmbJ5SpHQa7xERkOcruDlcmRVZ1rSA";


console.log('Client-side code');

/*
Implement API calls
*/

function callPublicAPI() {
  //const apiResponse = ""
  const request =  axios.get(baseAPIUrl + "api/public")
  
  request
  .then(result => document.getElementById('apiResult').innerHTML = JSON.stringify(result.data))
  .catch(error => document.getElementById('apiResult').innerHTML = JSON.stringify(error.response.data))

  return request
}

function callPrivateAPI() {
  const request = axios.get(baseAPIUrl + "api/private", {
  headers: {
    'Authorization': token
  }
})
  
  request
  .then(result => document.getElementById('apiResult').innerHTML = JSON.stringify(result.data))
  .catch(error => document.getElementById('apiResult').innerHTML = JSON.stringify(error.response.data))
  
  return request
}

function callAccessAPI() {
  const request = axios.get(baseAPIUrl + "api/access", {
  headers: {
    'Authorization': token
  }
})
  
  request
  .then(result => document.getElementById('apiResult').innerHTML = JSON.stringify(result.data))
  .catch(error => document.getElementById('apiResult').innerHTML = JSON.stringify(error.response.data))

  return request
}







