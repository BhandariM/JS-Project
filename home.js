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
    console.log(uname,  "mouni uname submit");
    console.log(frstdrpdwn,  "mouni uname submit");
    console.log(scnddrpdwn,  "mouni uname submit");
    console.log(cmnt, "mouni cmnt submit");
    var clear =   document.getElementById("username").value = " ";
    var clear =   document.getElementById("mainMenu").value = " ";
    var clear =   document.getElementById("secondMenu").value = " ";
    var clear =   document.getElementById("commentbox").value = " ";
    alert("Thanks for your valuable input");
    document.getElementById("comment").innerHTML == "If you like or dislike this page please enter comments or suggestions below."
    + '\n' + " This helps me to improve my skills in required areas. Thanks!.";
    console.log(clear, "mouni clear");

    
   }

var rating =
[
    {
    "name": "Good",
    "abbreviation": "gud"
  },
  {
    "name": "Bad",
    "abbreviation": "bad"
  },
  {
    "name": "Avg",
    "abbreviation": "avg"
  }
];


let secondDropdown = document.getElementById('secondMenu');
secondDropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose State/Province';

secondDropdown.add(defaultOption);
secondDropdown.selectedIndex = 0;

//const url = 'https://jsonplaceholder.typicode.com/comments';
const url = 'https://api.myjson.com/bins/7xq2x';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
      option.value = data[i].abbreviation;
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