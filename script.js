const currentDate = new Date();
const currentDayOfWeek = currentDate.getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayName = daysOfWeek[currentDayOfWeek];
document.getElementById('day').innerHTML = currentDayName;


let currentUtcTimeMilliseconds;
const getTime = () => {
    currentUtcTimeMilliseconds = new Date().getTime();
    document.getElementById('time').innerHTML = currentUtcTimeMilliseconds;
    setTimeout(getTime, 100);
};
getTime();



