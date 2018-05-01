// //
// var myObj
//
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         myObj = JSON.parse(this.responseText);
//         document.getElementById("demo").innerHTML = myObj;
//     }
// };
// xmlhttp.open("GET", "C:/Users/Azam/iTuTor/answers.txt", true);
// xmlhttp.send();
//
// console.log(myObj);



var spans = document.getElementsByClassName('keys');
var answers = ['who', 'was born', 'was left', 'to become', 'where', 'was still'];

var ks = new KS(spans, answers);
var paragraphs = new P();

UI.displayNext();
