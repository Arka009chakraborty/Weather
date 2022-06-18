var button=document.querySelector('.button')
var inputvalue=document.querySelector('.inputvalue')
var name=document.querySelector('.name');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');


button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=00c697a9cf40d309c59e193e4212791b')
.then(response => response.json())
.then(data=>{
    var namevalue=data['name']
    
    var tempvalue=data['main']['temp']
    var descvalue=data['weather']['0']['description']
   

    name.innerHTML=namevalue;
    temp.innerHTML=`${Math.round(tempvalue-273)}&deg;C`;
    desc.innerHTML=descvalue;
})
.catch(err=> alert ("Wrong City Name!"))
})


