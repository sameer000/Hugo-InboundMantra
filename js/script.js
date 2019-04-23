var i = 0;
var txt = '.....granted.';
var speed = 500;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
setTimeout(function(){
  jQuery(function(){
     jQuery('#type').click();
  });

}, 5000);


var i = 0;
var text = 'Lorem';
var speed = 50;

function typeWriters() {
  if (i < text.length) {
    document.getElementById("types").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriters, speed);
  }
}
setTimeout(function(){
  jQuery(function(){
     jQuery('#types').click();
  });

}, 500);
