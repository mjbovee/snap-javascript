function iqTest(numbers){
	// ...
	const array = numbers.split(' ');
	/*const reducer = (accumulator, currentVal) => accumulator + currentVal;
	let reduced = array.reduce(reducer);*/

	const even = [];
	const odd = [];

	for (i = 0 ; i < array.length; i++) {
		if(array[i] % 2 !== 0) {
			odd.push(array[i]);
		} else {
			even.push(array[i]);
		}
	}

	if(odd.length > even.length) {
		console.log(even[0]);
	} else if(odd.length < even.length) {
		console.log(odd[0]);
	}
}

iqTest("2 4 7 8 10")