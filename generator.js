$(document).ready(function() {

var i = 0;
var txt = 'Websites';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

      // create sidebar and attach to menu open
      $('.ui.sidebar').sidebar('attach events', '.toc.item');


//Generate the HTML for the sidebar
function sidebarHtml(){
  $(".ui.vertical.inverted.sidebar.menu")
  .append("<a class='active item' href='#'>Home</a>")
  .append("<a class='item' href='about'>About Me</a>")
  .append("<a class='item' href='#process'>The Process</a>")
  .append("<a class='item' href='#products'>The Product</a>")
  .append("<a class='item' href='#foot'>Contact</a>");
}

sidebarHtml();

// function hireMeForm(){
// 	$("#hm1")
// 	.append("")
// 	.append("")
// 	.append("")
// 	.append("")
// 	.append("")
// 	.append("")
// 	.append("")
// 	.append("")
// }

// hireMeForm();

});