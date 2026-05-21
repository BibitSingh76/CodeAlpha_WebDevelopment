const btn = document.querySelector(".calculate-btn");

btn.addEventListener("click",calculateAge);

function calculateAge(){

    // find here input value
    const dob = document.querySelector(".age-dob-input").value;

    //take a variable for input
    const result = document.querySelector(".age-result");

    // now check condition for input
    if(!dob){
        result.innerHTML = "Please select your birth date";//show this if input field empty
        return;
    }

    // Convert into Date object
    const birthDate = new Date(dob);

    // find current date
    const today = new Date();

    // also varify for future date
    if(birthDate > today){
        result.innerHTML = "Future date is not allowed";//show this if filled future date
        return;
    }

    
    //now find differance year,month and days
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // modify if value -ve 
    if(days < 0){
        months--;
        const previousMonthDays = new Date(today.getFullYear(), today.getMonth(),0).getDate();//total days in previous Month
        days += previousMonthDays;
    }

    // also check for month if -ve then take borrow from previuos year which are 12
    if(months < 0){
        years--;
        months += 12;
    }
    //now show final result on screen
    result.innerHTML =`You are: <br>${years} Years ${months} Months ${days} Days old`;

    // show reset button
    document.querySelector(".reset-btn").style.display =
    "block";
}

//for reset btn
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click",resetData);
function resetData(){
    // Clear input field
    document.querySelector(".age-dob-input").value = "";
    // Reset output text
    document.querySelector(".age-result").innerHTML =
    "Your age will appear here";

    // hide reset button
    document.querySelector(".reset-btn").style.display =
    "none";
}