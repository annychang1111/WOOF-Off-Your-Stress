// var isMobile = 0;
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var socket = io('https://woof-off-your-stress.herokuapp.com/');

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

if(isMobile == true){
	hide("desktop");
	show("mobile");
	setTimeout(transit, 2000, "mbHome", "mbTask");
	setTimeout(transit, 6000, "mbTask", "mbThought");
}else{
	hide("mobile");
	show("desktop");
}


var isThrowing = false;
var doneThrowing = false;
function doneThought(){
	hide("mbThought");
	show("mbThrow");
	isThrowing = true;
	// countThrowing();
	setTimeout(doneThrow, 2000);
}

function doneThrow(){
	setTimeout(transit, 100, "mbThrow", "mbChecked");
	setTimeout(transit, 2000, "mbChecked", "mbCode");
}

function showInputCode(){
	if(isMobile != true){
		// setTimeout(show, 100, "codeInput");
		setTimeout(show, 13000, "codeInput");
		// setTimeout(show, 100, "nav");
	}
}
showInputCode();

var defaultCode = 1295;
function getInput(){
	var code = document.getElementById('inputCode').value;
	if(code == defaultCode){
		rewardGenerate();
		setTimeout(transit, 100, "dHome", "dReward");
		// console.log("Now is reward view");
	}
}

var fourFacts = ['Close relationships such as family and friends help you beat stress!<br>Be around with those you love more!', 'Writing down your thoughts has shown to help people better deal with stress & negative emotions.', 'Get together with your friends and family to have fun! Laugh and do the things you love.', 'Get your body moving! Even just a 20 minutes walk, run, swim, or stretch have shown to help reduce stress and boost up positivity.']
var rewards = ['<img src="../images/stress facts_6.gif"><div id="fact" style="color: #feddd6;">Get together with your friends and family to have fun! Laugh and do the things you love.</div>', '<img src="../images/stress facts_2.gif"><div id="fact" style="color: white;">Writing down your thoughts has shown to help people better deal with stress & negative emotions.</div>', '<img src="../images/stress facts_4.gif"><div id="fact" style="color: white;">Close relationships such as family and friends help you beat stress!<br>Be around with those you love more!</div>']

function rewardGenerate(){
	document.getElementById("dReward").innerHTML = rewards[getRandomInt(0, 2)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var animationCheck = bodymovin.loadAnimation({
	container: document.getElementById("check"),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'check.json'
})

var animationX = bodymovin.loadAnimation({
	container: document.getElementById("x"),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'x.json'
})

// var animationIntro = lottie.loadAnimation({
// 	container: document.getElementById("intro"),
// 	renderer: 'svg',
// 	loop: false,
// 	autoplay: true,
// 	path: 'IntroVideo.json'
// })

// var count;
// var throwVal = 0;
// $.getScript( "countStep.js", function() {
// 	count = new Countstep();
// });
// function countThrowing(){
// if(isMobile == 1 && isThrowing == true){
// 	count[0] = 0;
// 	window.addEventListener('devicemotion', function(event){
// 		console.log(count[0]);
// 		throwVal = count[0];
// 			if(throwVal >= 3){
// 		isThrowing = false;
// 	}
// 	})

// }else {
// 	window.removeEventListener('devicemotion', function(event){})
// }
// }

// function startCountingSteps(){
// 	if (isMobile==true && isThrowing==true) {
// 		// console.log(isMobile);
// 		count[0] = 0;
// 		window.addEventListener('devicemotion', function(event) {
// 			// acc.innerHTML = "acceleration: " + event.acceleration.x + ' m/s2' + "(" + event + ")";
// 			// acc = event.acceleration;
// 			// rot = event.rotationRate;
// 			document.getElementById("steps").innerHTML = "Steps: " + count[0];
// 			console.log(count[0]);
// 			// console.log(acc, rot);
// 			// var steps = pedometer(event.acceleration, event.rotationRate, 100, options);
// 	  		// console.log(event.acceleration.x + ' m/s2');
// 	  		// console.log(steps.length);
// 		});
// 	}
// }

function hide(n){
	var id = n;
	document.getElementById(id).style.display = "none";
	document.getElementById(id).style.visibility = "hidden";
	console.log("hide " + id);
}
function show(n){
	var id = n;
	document.getElementById(id).style.display = "inline-block";
	document.getElementById(id).style.visibility = "visible";
	console.log("show " + id);
}
function transit(a, b){
	var hideContent = a;
	var showContent = b;
	hide(a);
	show(b);
}


