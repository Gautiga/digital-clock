let hrs = document.getElementById("hrs");
let mint = document.getElementById("mint");
let scnd = document.getElementById("scnd");
let date = document.getElementById("date");
let day = document.getElementById("day");
setInterval(()=>{
    let currentTime = new Date();
    let dd = String(currentTime.getDate()).padStart(2, '0');
    let mm = String(currentTime.getMonth() +1).padStart(2, '0');
    let yyyy = currentTime.getFullYear();
    Date1 = dd + '-' + mm + '-' + yyyy;
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    hrs.innerHTML = ((currentTime.getHours()<10?"0":"") + currentTime.getHours());
    mint.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    scnd.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    date.innerHTML = Date1;
    day.innerHTML = days[currentTime.getDay()];
}, 1000)
