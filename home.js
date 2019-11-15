


function formSubmit() {
  var uname = document.getElementById("username").value;
  var frstdrpdwn = document.getElementById("mainMenu").value;
  var scnddrpdwn = document.getElementById("secondMenu").value;
  var phnum = document.getElementById("phnum").value;
  var cmnt = document.getElementById("commentbox").value;

  // for (let i = 0; i < array.length; i++) {
  //  constelement = validation.value;
  // }


  //----form validation----
  if (uname == '' || frstdrpdwn == '' || scnddrpdwn == '' || phnum == '' || cmnt == '') {
    alert("Please enter all fields!");
    return false;
  } 
  // else {
  //   document.getElementById("subbtn").disabled = true;
  // }

  

  console.log(uname, "is my name");
  console.log(frstdrpdwn, "is the score");
  console.log(scnddrpdwn, "is the rating");
  console.log(phnum, "is my num");
  console.log(cmnt, "are the comments ");
  var clear = document.getElementById("username").value = " ";
  var clear = document.getElementById("mainMenu").value = " ";
  var clear = document.getElementById("secondMenu").value = " ";
  var clear = document.getElementById("phnum").value = " ";
  var clear = document.getElementById("commentbox").value = " ";
  alert("Thanks for your valuable input");
  document.getElementById("comment").innerHTML == "If you like or dislike this page please enter comments or suggestions below." +
    '\n' + " This helps me to improve my skills in required areas. Thanks!.";
  console.log(clear, "mouni clear");

}

//--phone number validation
// function validatePhoneNumber(elementValue){
//   var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
//   return phoneNumberPattern.test(elementValue);
//   }


function inputOnblue(e) {
  console.log(e);
  if (isNaN(Number(e.target.value))) {
    alert('Entered value is not a number');
  }
}

// function phnumber(e) {
//   console.log('hahahah');
//   // var phoneno = /^\d{10}$/;
//   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   //var inputtxt = e.target.value;
//   if ( e.target.value.match(phoneno)) {
//     return true;
//   } else {
//     alert("message");
//     return false;
//   }
//}


  function phnum(inputtxt){
       var ph = /^\+1?\d{0-9}$/;
//    var phoneno = /^\d{10}$/;
//   // var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   if((inputtxt.value.match(phoneno))) 
   {
       return true;
      }
       else{
         alert("message");
         return false;
         }
  }

//------api call for first dropdown from local json file-----
let rating = document.getElementById("mainMenu");
mainMenu.length = 0;
let defaOption = document.createElement('option');
defaOption.text = 'Choose score';
mainMenu.add(defaOption);
mainMenu.selectedIndex = 0;
// const url1 = "https://api.myjson.com/bins/7xq2x";
 const url1 = "home.json";
const request1 = new XMLHttpRequest();
request1.open('GET', url1, true);
request1.onload = function(){
  if(request1. status == 200){
    const data = JSON.parse(request1.responseText);
    let option;
   for(let i=0; i<=2; i++){
      option = document.createElement('option');
      option.text = data[i].name;
    //  option.value = data[i].abbrevation;
      mainMenu.add(option);
  }
  }
  else{
  console.error('An error occurred fetching the JSON from ' + url1);
  }
}
request1.send();


//-----api call for the second dropdown----
// let secondDropdown = document.getElementById('secondMenu');
// secondDropdown.length = 0;
// let defaultOption = document.createElement('option');
// defaultOption.text = "choose rating";
// defaultOption.value = "";
// secondDropdown.add(defaultOption);
// secondDropdown.selectedIndex = 0;
// const url = 'https://jsonplaceholder.typicode.com/comments';
// //const url = 'https://api.myjson.com/bins/7xq2x';
// const request = new XMLHttpRequest();
// request.open('GET', url, true);
// request.onload = function () {
//   if (request.status === 200) {
//     const data = JSON.parse(request.responseText);
//     let option;
//     // for(let i=0; i<=2; i++){
//     //         option = document.createElement('option');
//     //         option.text = data[i].id;
//     //         mainMenu.add(option);
//     populateRatings([]);
//   } else {
//     alert(" Reached the server, but it returned an error");
//   }
// }
// request.onerror = function () {
//   console.error('An error occurred fetching the JSON from ' + url);
// };
// request.send();


// function populateRatings(items = []) {
//   var length = secondDropdown.options.length;
//   console.log(secondDropdown.options.length);
  
//   for (i = 0; i < length; i++) {
//     secondDropdown.options[i] = null;
//   }
//   for (let i = 0; i < items.length; i++) {
//     option = document.createElement('option');
//     option.text = items[i];
//     // option.value = data[i].id;
//     secondDropdown.add(option);
//   }
// }

// onchangeevent(){
//   check wheather its good bad poor
//   populateRatings
// }

// function populate(data = [])
// {
//   for(let i=0; i<=2; i++){
//     option = document.createElement('option');
//     option.text = data[i].id;
//     mainMenu.add(option);
// }

function dynamicdropdown(listindex)
{
//   if(mainMenu.value= "good"){
//     populateRatings([1,2]);

//   }
//   if(mainMenu.value= "avg"){
//     populateRatings([3,4]);

//   }
//   if(mainMenu.value= "bad"){
//     populateRatings([5]);

//   }
// }
    switch (listindex)
    {
    case "GOOD" :
        document.getElementById("secondMenu").options[0]=new Option("Choose Rating","");
        document.getElementById("secondMenu").options[1]=new Option("1","1");
        document.getElementById("secondMenu").options[2]=new Option("2","2");
        break;
    case "AVG" :
        document.getElementById("secondMenu").options[0]=new Option("Choose Rating","");
        document.getElementById("secondMenu").options[1]=new Option("3","3");
        document.getElementById("secondMenu").options[2]=new Option("4","4");
        break;
    case "BAD" :
          document.getElementById("secondMenu").options[0]=new Option("Choose Rating","");
          document.getElementById("secondMenu").options[1]=new Option("5","5");
          break;
    }
    return true;
    }
