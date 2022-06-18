var date= new Date();
const todaydate= document.querySelector('.date');
const todayday= document.querySelector('.day');
const noofday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function printDate(){
var date= new Date();
var day=date.getDate();
var month=date.getMonth()+1;
var year=date.getFullYear();

todaydate.innerHTML=day + "/" + month + "/" + year;

}
printDate();


function printDay(){
    var date=new Date();
    var today= date.getDay();
    var day=noofday[today];
    todayday.innerHTML =day;
}
printDay();