// Necessaries
var inputs = document.getElementById('inputs');
var checkBtn = document.getElementById('checker');
var result = document.getElementById('result');
var guess = document.getElementById('guess');
var wrongDiv = document.getElementById('wrong');
var imageRight = '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><path d="M9 23 L10 23 L16 29 L36 9 L42 15 L16 41 L4 29 L4 28 Z" fill="#336600"></path></svg>';
var imageWrong = '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><path d="M4 10 L10 4 L22 16 L23 16 L35 4 L41 10 L29 22 L29 23 L41 35 L35 41 L23 29 L22 29 L10 41 L4 35 L16 23 L16 22 Z" stroke="red" fill="red"></path></svg>';
var att;

var nextButton = document.createElement("button");
var textnode = document.createTextNode('Next');
nextButton.appendChild(textnode);
nextButton.style.display = 'inline';
nextButton.setAttribute('class', 'btn');


// Audios
nextAudio = new Audio("/audios/itutor/lightswitch2.m4a");
correctAudio = new Audio("/audios/itutor/correct.mp3");
wrongAudio = new Audio("/audios/itutor/wrong.mp3");
overAudio = new Audio("/audios/itutor/over3.m4a");


// Over style
var modalTrigger = document.getElementById('myBtn');
$(document).ready(function() {
    $("#myBtn").click(function() {
        $("#myModal").modal();
    });
});

var st = document.createElement('style');
var txt = document.createTextNode('body>*:not(.container){filter: blur(3px)}');
st.appendChild(txt);


function ClaerBlur() {
            document.head.removeChild(document.head.lastChild);
            document.body.style.filter = 'blur(0)';
        }
