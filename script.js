document.addEventListener('DOMContentLoaded', () => {
     boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('active');
        });
    });
});

var onRooms=14;
var timer;
var time = 60
var timerEl = document.getElementById('time'); 
timerEl.textContent = time
function clockTick(){
	time -- ;
	timerEl.textContent = time; 
}

timer = setInterval (clockTick, 1000/onRooms )