const deadline = '2023-03-30'

alert(deadline);

function getTimeRemaining(endtime){
   const total = Date.parse(endtime) - Date.parse(new Date());
   const seconds = Math.floor((total/1000)%60);
   const minutes = Math.floor((total/1000/60)%60);
   const hours = Math.floor((total/(1000*60*60))%24);
   const days = Math.floor(total/(1000*60*60*24));
   return{total, days, hour, minutes, seconds};
}

// function initializeClock(id,endtime){
//   const clock = document.getElementByID(id);
//   const timeinterval = setInterval(() =>
//     {const t = getTimerRemaining(endtime);
//     clock.innerHTML = 'days: ' + t.days +'<br>'  +
//                       'hours: '+t.hours +'<br>'  +
//                       'mins:  '+t.minutes+'<br>' +
//                       'seconds:'+t.seconds+'<br>'+
//     if (t.total <= 0)
//     {
//       clearInterval(timeinterval);
//     }
//     },1000);
// }

// initializeClock('clockdiv', deadline);