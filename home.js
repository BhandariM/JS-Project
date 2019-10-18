var test = "mhi";
console.log(typeof(test));

// function formSubmit(){
//     Console.log("mounika");
//     document.getElementById("form").submit();
// }

function formSubmit(){
    // console.log( document.getElementById("form").submit(),"mounika")
    var uname =  document.getElementById("username").value;
    var frstdrpdwn =   document.getElementById("mainMenu").value;
    var scnddrpdwn =   document.getElementById("secondMenu").value;
    var cmnt =   document.getElementById("commentbox").value;
    console.log(uname,  "is my name");
    console.log(frstdrpdwn,  "is the score");
    console.log(scnddrpdwn,  "is the rating");
    console.log(cmnt, "are the comments ");
    var clear =   document.getElementById("username").value = " ";
    var clear =   document.getElementById("mainMenu").value = " ";
    var clear =   document.getElementById("secondMenu").value = " ";
    var clear =   document.getElementById("commentbox").value = " ";
    alert("Thanks for your valuable input");
    document.getElementById("comment").innerHTML == "If you like or dislike this page please enter comments or suggestions below."
    + '\n' + " This helps me to improve my skills in required areas. Thanks!.";
    console.log(clear, "mouni clear");

    
   }

// var rating =
// [
//     {
//     "name": "Good",
//     "abbreviation": "gud"
//   },
//   {
//     "name": "Bad",
//     "abbreviation": "bad"
//   },
//   {
//     "name": "Avg",
//     "abbreviation": "avg"
//   }
// ];

let rating = document.getElementById("mainMenu");
const url1 = "https://api.myjson.com/bins/7xq2x";
const request1 = new XMLHttpRequest();
request1.open('GET', url1, true);
request1.onload = function(){
  if(request1. status == 200){
    const data = JSON.parse(request1.responseText);
    let option;
   for(let i=0; i<=2; i++){
      option = document.createElement('option');
      option.text = data[i].name;
      option.value = data[i].abbrevation;
      mainMenu.add(option);
  }
  }
  else{
  console.error('An error occurred fetching the JSON from ' + url1);
  }
}

request1.send();




let secondDropdown = document.getElementById('secondMenu');
secondDropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose rating';

secondDropdown.add(defaultOption);
secondDropdown.selectedIndex = 0;

const url = 'https://jsonplaceholder.typicode.com/comments';
//const url = 'https://api.myjson.com/bins/7xq2x';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i <=4; i++) {
      option = document.createElement('option');
      option.text = data[i].id;
     // option.value = data[i].id;
      secondDropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();