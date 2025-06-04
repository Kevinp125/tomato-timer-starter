let studyBtn = document.getElementById('study-btn');
let breakBtn = document.getElementById('break-btn');
let timerElem = document.getElementById('time-left');
let studyCountElem = document.querySelector('#study-count');
let id = null
let totalSeconds = 25 * 60
let studySeshCount = 0;

console.log(studyBtn);
console.log(breakBtn)

studyBtn.addEventListener('click', () => {
  clearInterval(id);
  console.log('studyBtn clicked')
  studyCountElem.textContent = ++studySeshCount
  id = setInterval(()=> { 
    totalSeconds--;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60
    if(seconds < 11){
      seconds = '0' + seconds;
    }
    timerElem.textContent = `${minutes}:${seconds}`
  } , 1000) //set interval is provided a function to execute every time by the milliseconds specified next to it.
})

breakBtn.addEventListener('click', () => {
  console.log('breakBtn clicked')
})
 

// clearInterval(id); //this recieves the id and kills the interval pretty much immidiately