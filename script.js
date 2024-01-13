"use strict"

let input=document.querySelector("#b-date")
// console.log(input);
let btn=document.getElementById("calculate")
// console.log(btn);


btn.addEventListener("click",year)

function year(){

let current_date=new Date().getDate()
// console.log(current_date);

let current_month=new Date().getMonth()+1
// console.log(current_month);


let current_year=new Date().getFullYear()
// console.log(current_year);

  let Birth_date=new Date(input.value).getDate()
//   console.log(Birth_date);
  let Birth_year=new Date(input.value).getFullYear()
//   console.log(Birth_year);
  let Birth_month=new Date(input.value).getMonth()+1
  // console.log(Birth_month);
  let diff_year=0;
  let diff_month=0;
  let days=0;
  let y=document.querySelector("#y");

  diff_year = current_year-Birth_year;

if(current_month>=Birth_month){
    // diff_year=current_year-Birth_year
    diff_month=current_month-Birth_month

}
else{
    //  current_year--;
    diff_year--;
    //  diff_year=current_year-Birth_year;
     diff_month=12-Birth_month+current_month;
}
 
if(current_date>=Birth_date)
{
   days=current_date-Birth_date
  // console.log(days);
}
else{
   diff_month--
  //  days=new Date(Birth_year,Birth_month,0).getDate();
   days = new Date(Birth_year,Birth_month,0).getDate()-Birth_date+current_date

}

if(diff_month < 0)
{
  diff_month = 11;
  diff_year--;
}
   y.innerHTML=`${diff_year} years ${diff_month} months ${days} days`
   
   console.log(diff_year);
   console.log(diff_month);
   console.log(days);
}
































// if (current_date < Birth_date) {
//   current_month--;
// }




// let lastDateOfMonth = new Date(current_year, current_month + 1, 0).getDate();
// console.log(lastDateOfMonth);
// let remainingDays = lastDateOfMonth - Birth_date + current_date;
// let days = document.querySelector("#days");
// days.innerHTML = remainingDays + " days";
// } else {
// let days = document.querySelector("#days");
// let remainingDays = current_date - Birth_date;
// days.innerHTML = remainingDays + " days";
// }