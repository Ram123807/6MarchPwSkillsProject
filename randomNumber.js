function randomNumber(){
    console.log(Math.random());
}

setInterval(randomNumber,3000)

setInterval( function () {
const currentDate = new Date()
time = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();
console.log(time)}, 1000);