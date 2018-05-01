window.sr = ScrollReveal()
sr.reveal('.navbar', {duration: 2000}, 10)

var divs = document.getElementsByClassName('col-sm-4')

for (var i = 0, j = divs.length; i < divs.length; i++, j--) {
  var className = divs[i].className
  var dur = 330
  sr.reveal('.' + className, 50)
}
