// main.js

window.addEventListener("DOMContentLoaded", init);

function init() {
	let recipes = getRecipesFromStorage();
	addRecipesToDocument(recipes);
	initFormHandler();
}

function getRecipesFromStorage() {
	return JSON.parse(localStorage.getItem("recipes")) || [];
}

function addRecipesToDocument(recipes) {
	const main = document.querySelector("main");

	main.replaceChildren();

	recipes.forEach((recipe) => {
		const card = document.createElement("recipe-card");
		card.data = recipe;
		main.appendChild(card);
	});
}

function saveRecipesToStorage(recipes) {
	localStorage.setItem("recipes", JSON.stringify(recipes));
}

function initFormHandler() {
	const form = document.querySelector("#new-recipe");
	const clearButton = document.querySelector("button.danger");

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const formData = new FormData(form);

		const recipeObject = {};
		for (let [key, value] of formData.entries()) {
			recipeObject[key] = value;
		}

		const newCard = document.createElement("recipe-card");
		newCard.data = recipeObject;

		document.querySelector("main").appendChild(newCard);

		let recipes = getRecipesFromStorage();
		recipes.push(recipeObject);
		saveRecipesToStorage(recipes);

		form.reset();
	});

	clearButton.addEventListener("click", (event) => {
		event.preventDefault();

		localStorage.removeItem("recipes");
		document.querySelector("main").replaceChildren();
	});
}
