/*let valueX = "Here's a " ;
let valueY = "string value.";
let array = [];

function average(a, b) {
	return (a + b) / 2;
}

function joinString(x, y) {
	return x + y
}

function addToArray() {
	for (i = 0 ; i < 10 ; i++) {
		array.push(i);
	}
} */


// console log results
for(i = 1 ; i <=100 ; i++) {
	if(i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz')
	} else if(i % 3 === 0) {
		console.log('Fizz')
	} else if(i % 5 === 0) {
		console.log('Buzz')
	} else {
		console.log(i)
	}
}

// append results to body

let body = document.querySelector('body');

for(i = 1 ; i <=100 ; i++) {
	if(i % 3 === 0 && i % 5 === 0) {
		newPara = document.createElement('p');
		newPara.innerHTML = "FizzBuzz";
		body.appendChild(newPara)
	} else if(i % 3 === 0) {
		newPara = document.createElement('p');
		newPara.innerHTML = "Fizz";
		body.appendChild(newPara)
	} else if(i % 5 === 0) {
		newPara = document.createElement('p');
		newPara.innerHTML = "Buzz";
		body.appendChild(newPara)
	} else {
		newPara = document.createElement('p');
		newPara.innerHTML = i;
		body.appendChild(newPara)
	}
}