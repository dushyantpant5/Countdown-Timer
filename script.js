const newYear = "1 Jan 2023"

const daysE = document.getElementById("days");
const hoursE = document.getElementById("hours");
const minE = document.getElementById("min");
const secE = document.getElementById("sec");




function countdown()
{
    const newYearDate = new Date(newYear);

    const currDate = new Date();

    const seconds = (newYearDate-currDate)/1000;

    const days = Math.floor(seconds/3600/24);

    const hours = Math.floor((seconds/3600)%24);

    const min =  Math.floor((seconds/60)%60);

    const sec = Math.floor((seconds)%60);

   
    daysE.innerHTML = `${days} :`;
    hoursE.innerHTML = formatTime(`${hours} :`);
    minE.innerHTML = formatTime(`${min} :`);
    secE.innerHTML = formatTime(sec);

    console.log(days,hours,min,sec);
}   

function formatTime(time)
{
    if(time<10)
    {
        return `0${time}`;
    }
    else
    {
        return time;
    }
}

//Initial Call
countdown(); 
//Will call every 1 sec (1000ms)
setInterval(countdown,1000);
