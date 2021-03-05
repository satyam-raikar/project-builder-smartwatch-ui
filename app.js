function displayClock() {

    let flag = "";

    let time = new Date(); //fetching time from system

    let hrs = time.getHours().toString(); //seprating data needed
    let mins = time.getMinutes().toString();
    let secs = time.getSeconds();
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();

    if(hrs > 12) {              // setting am pm
        flag = "PM"
    }
    else{
        flag = "AM"
    }


    if (hrs > 12) { // converting time to 12hrs format
        hrs = hrs - 12;
    }

    if (hrs == 0) { //exceptional case management for 12 o'clock
        hrs = 12;
    }

    
    function addZero(value) { //function to add 0 
        if (value < 10) {
            newValue = "0" + value;
            return newValue;
        } else {
            return value;
        }
    }


    hrs = addZero(hrs); // adding 0 to make it nice and useful
    mins = addZero(mins);
    secs = addZero(secs);


    date = addZero(date);
    month = addZero(month);

    let weekDay  = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY",
                        "THURDSAY", "FRIDAY", "SATURDAY" , "SUNDAY"];
   












    // inserting everything into html

    document.getElementById('main-clock').innerHTML = hrs + ":" + mins +" "+ flag; // setting time on main clock on top


    document.getElementById('clock').innerHTML = hrs + ":" + mins + ":" + secs; //setting display clock
    document.getElementById('ampm').innerHTML = flag; //setting ampm on display clock
    document.getElementById('day').innerHTML = weekDay[day]; //setting ampm on display clock
    document.getElementById('date').innerHTML = date + "-" + month + "-" + year; //setting   //setting ampm on display clock

    console.log(time.toString());

}

setInterval(displayClock, 500);