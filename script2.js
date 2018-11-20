const btn = document.querySelector('button');
const body = document.querySelector('body');
const cardTitle = document.querySelector('.card-title');
const cardText = document.querySelector('.card-text');
const container = document.querySelector('.container');

function getIpsum() {
	fetch("https://jsonplaceholder.typicode.com/posts/13")
		.then(response => {
			return response.json();
		})
		.then(myJson => {
			cardTitle.innerHTML = (myJson['title']);
			cardText.innerHTML = (myJson['body']);
		});
}

function getIpsum2() {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then(response => {
			return response.json();
		})
		.then(myJson => {
			myJson.forEach(obj => {

				let newDiv = document.createElement('div');
				body.appendChild(newDiv);
				newDiv.classList.add("container", "card-deck", "row");

				let newerDiv = document.createElement('div');
				newDiv.appendChild(newerDiv);
				newerDiv.classList.add("card", "m-5", "p-5", "bg-light");

				let newCardTitle = document.createElement('h5');
				newCardTitle.innerText = (obj['title']);
				newCardTitle.classList.add("card-title", "text-danger");
				newerDiv.appendChild(newCardTitle);

				let newCardText = document.createElement('p');
				newCardText.innerText = (obj['body']);
				newCardText.classList.add("card-text");
				newerDiv.appendChild(newCardText);

				}
			)
		});
}


btn.addEventListener('click', getIpsum2);