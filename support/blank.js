/* Client support JS goes here */

//const axios = require('axios');

//var baseUrl = "https://okta-rocks-api.glitch.me/";
//var endpoint = "/api/private";
//var token = "1111";

//require('dotenv').config({ path: '.okta.env' })
//const { endpoint, baseUrl, token } = process.env;

console.log('Client-side code running');

/*
const button = document.getElementById('publicButton');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
});
*/


function sampleFunction() {
  var test1 = "<%:test1%>";
  var test2 = "<%:test2%>";
  alert("Function call works");
  console.log("client side var is: ", test1);
  console.log("client side const is: ", test2);

}

/*
function callPublicAPI() {
  const request = axios.get(baseUrl + 'api/public')
  
  request
  .then(result => console.log('----- Inside result:', result.data))
  .catch(error => console.error('----- Inside error:', error.response.data))

  return request
  document.getElementById('request').innerHTML = request;
} 
*/

const callApi = async (baseUrl, endpoint) => {
  try {
    //const token = await auth0.getTokenSilently();
    var baseUrl = "https://okta-rocks-api.glitch.me/";
    console.log(baseUrl);
    var endpoint = "/api/private";
    var token = "1111";
    const response = await fetch(baseUrl + endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData = await response.json();

    const responseElement = document.getElementById("api-call-result");

    responseElement.innerText = JSON.stringify(responseData, {}, 2);
    
    console.log(responseData);

    //document.querySelectorAll("pre code").forEach(hljs.highlightBlock);

    //eachElement(".result-block", (c) => c.classList.add("show"));
    
    location.href = "/#anchor-results";
  } catch (e) {
    console.error(e);
    alert("Unable to access API or API is not configured correctly.  Check the 'baseAPIUrl' in the 'index.html' file and your glitch API app");
  }
};

/*
$('#publicButton').click(function(){
    console.log('button clicked');
    $.ajax({url: 'publicButtonURL', success:function(res){
        console.log('server response is', res);
    }});
});
*/

