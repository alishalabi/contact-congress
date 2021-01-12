var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()
request.open("GET", "https://theunitedstates.io/congress-legislators/legislators-social-media.json");
request.send();
request.onload = () => {
  console.log(JSON.parse(request.response));
  // console.log(request);
  // if (request.status === 200) {
  //   console.log(JSON.parse(request.response));
  // }
  // else {
  //   console.log("Error")
  // }
}

// function reqListener () {
//   console.log(this.responseText);
// }
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://theunitedstates.io/congress-legislators/legislators-social-media.json");
// var ret = oReq.send();
// var parsed = JSON.parse(ret)
// // console.log("Ret")
// console.log(parsed[0])
//
// // var result = parsed.find(obj => {
// //   return obj.id.govtrack === 456849
// // })
//
// // console.log(result)
