
    /*clock & date*/
function startTime() {
    var today = new Date();
    var h = today.getHours();
    //america
    if (h >= 13) {
        h -= 12;
    } else if (h < 1) {
        h += 12;
    }
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $("#clock").text(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}

startTime();

var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var date = new Date();
var day = date.getDate();
var weekday = date.getDay();
var monthIndex = date.getMonth();
var year = date.getFullYear(days[weekday] + ", " + monthNames[monthIndex] + " " + day);
//finished line of text to get printed
var cal = (days[weekday] + ", " + monthNames[monthIndex] + " " + day);
 $("index.html").ready(function(){
      $("#calendar").html(cal);
    });

  