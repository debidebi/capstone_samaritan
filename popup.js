//    var CLIENT_ID = undefined;
//    var CLIENT_SECRET = undefined;

// var list = document.getElementById('list');

// document.addEventListener('DOMContentLoaded', () => {
    CLIENT_ID = config.ID;
    CLIENT_SECRET = config.SECRET;
//    //watsonCat is an empty array for storing categories imported from the watson API
//    watsonCat = [];
//   //charity navigator will take those categories and perform a query search 

//  var request = new XMLHttpRequest();

//   request.open('GET', `https://api.data.charitynavigator.org/v2/Organizations?app_id=${CLIENT_ID}&app_key=${CLIENT_SECRET}&search=pollution&minRating=4&sort=RELEVANCE%3ADESC`, true);
//   //create callback
//   //when the page loads
//   request.onreadystatechange = function () {
//     //if request status code is OK 
//     if (request.readyState == request.DONE) {
//       var responseData = JSON.parse(request.responseText);
//       renderHTML(responseData)

//       console.log(responseData[0].charityName + responseData[0].mission);
//     }
//   }
//   request.send();

//   console.log(request.readyState);
//   console.log(request.status)
// }); 

// function renderHTML(data) {
//   var htmlString =  "";
//     for (i = 0; i < data.length; i++) {
//     htmlString += "<li>" + data[i].charityName + "</li>";
// }
// //list.innerHTML('beforeend', 'testing');
// }


axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${CLIENT_ID}&app_key=${CLIENT_SECRET}&search=pollution&minRating=4&sort=RELEVANCE%3ADESC`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

