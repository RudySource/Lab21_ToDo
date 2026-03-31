let startTime
let elapsedTime = 0
let timerInterval

const display = document.getElementById('display')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const resetBtn = document.getElementById('resetBtn')

function timeToString(time) {
	let diffInHrs = time / 3600000
	let hh = Math.floor(diffInHrs)
	let diffInMin = (diffInHrs - hh) * 60
	let mm = Math.floor(diffInMin)
	let diffInSec = (diffInMin - mm) * 60
	let ss = Math.floor(diffInSec)
	let formattedHH = hh.toString().padStart(2, '0')
	let formattedMM = mm.toString().padStart(2, '0')
	let formattedSS = ss.toString().padStart(2, '0')

	return `${formattedHH}:${formattedMM}:${formattedSS}`
}

function print(txt) {
	display.innerHTML = txt
}

function start() {
	startTime = Date.now() - elapsedTime
	timerInterval = setInterval(function printTime() {
		elapsedTime = Date.now() - startTime
		print(timeToString(elapsedTime))
	}, 1000)
	showButton('STOP')
}

function stop() {
	clearInterval(timerInterval)
	showButton('START')
}

function reset() {
	clearInterval(timerInterval)
	print('00:00:00')
	elapsedTime = 0
	showButton('START')
}

function showButton(buttonKey) {
	if (buttonKey === 'STOP') {
		startBtn.style.display = 'none'
		stopBtn.style.display = 'block'
	} else {
		startBtn.style.display = 'block'
		stopBtn.style.display = 'none'
	}
}

startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)
stopBtn.style.display = 'none'
