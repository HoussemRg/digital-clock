let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
console.log(hours.textContent);


function rightTextContent(value){
    return value<10? '0'+value :value;
}

function updatTime(){
    const date=new Date();
    hours.textContent= rightTextContent(date.getHours());
    minutes.textContent=rightTextContent(date.getMinutes());
    seconds.textContent=rightTextContent(date.getSeconds());

}

setInterval(updatTime,1000);

/* GOOD JOB*/