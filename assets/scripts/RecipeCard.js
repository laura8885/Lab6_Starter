// RecipeCard.js

class RecipeCard extends HTMLElement {
	// Called once when document.createElement('recipe-card') is called, or
	// the element is written into the DOM directly as <recipe-card>
	constructor() {
		super(); // Inherit everything from HTMLElement

		// EXPOSE - START (All expose numbers start with A)
		// A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
		this.attachShadow({ mode: 'open' });

		// A2. TODO - Create an <article> element - This will hold our markup once our data is set
		const article = document.createElement('article');

		// A3. TODO - Create a style element - This will hold all of the styles for the Web Component
		const style = document.createElement('style');

		// A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made (copy everything INSIDE the <style> tag>)
		style.textContent = `
			* {
				font-family: sans-serif;
				margin: 0;
				padding: 0;
			}

			a {
				text-decoration: none;
			}

			a:hover {
				text-decoration: underline;
			}

			article {
				align-items: flex-start;
				display: flex;
				height: 150px;
				margin: 16px;
				padding: 16px;
				width: 400px;
			}

			img {
				border-radius: 5px;
				flex: 0 0 150px;
				height: 150px;
				object-fit: cover;
				width: 150px;
			}

			div {
				flex: 1;
				margin-left: 25px;
			}

			p {
				margin: 0;
			}

			.organization {
				color: #800080;
				font-size: 0.9em;
				margin-bottom: 30px;
				text-transform: uppercase;
			}

			.rating {
				align-items: center;
				display: flex;
			}

			.rating-icon {
				color: #800080;
			}

			.rating-value {
				font-size: 1.5em;
				font-weight: bold;
				margin-left: 5px;
				margin-right: 5px;
			}

			.rating-count {
				color: #656565;
				font-size: 0.9em;
			}

			time {
				color: #656565;
			}

			.ingredients {
				margin-top: 20px;
			}
		`;

		// A5. TODO - Append the <style> and <article> elements to the Shadow DOM
		this.shadowRoot.append(style, article);
	}

	/**
	 * Called when the .data property is set on this element.
	 *
	 * For example:
	 * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
	 * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
	 *
	 * @param {Object} data - The data to pass into the <recipe-card> must be of the
	 *                        following format:
	 *                        {
	 *                          "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 */
	set data(data) {
		// If nothing was passed in, return
		if (!data) return;

		// A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
		const article = this.shadowRoot.querySelector('article');

		// A7. TODO - Set the contents of the <article> with the <article> template given in
		//           cardTemplate.html and the data passed in (You should only have one <article>,
		//           do not nest an <article> inside another <article>). You should use template
		//           literals (template strings) and element.innerHTML for this.
		// 			 Do NOT include the <article> tags within the innerHTML of the element you create.
		//           Remember to replace all the placeholders in the template with the data passed in.
		//           i.e. imgSrc, titleLnk, etc
		article.innerHTML = `
			<img src="${data.imgSrc}" alt="${data.imgAlt}">
			<div>
				<p class="organization">${data.organization}</p>
				<h2>
					<a href="${data.titleLnk}">${data.titleTxt}</a>
				</h2>
				<p class="rating">
					<span class="rating-icon">⭐</span>
					<span class="rating-value">${data.rating}</span>
					<span class="rating-count">${data.numRatings} Ratings</span>
				</p>
				<time>${data.lengthTime}</time>
				<p class="ingredients">${data.ingredients}</p>
			</div>
		`;
	}
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);