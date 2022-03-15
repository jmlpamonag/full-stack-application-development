/**
 * Build the dynamic discover page content: the filter menu category selection and category content sections.
 */
async function buildDiscover() {
	await buildCategorySelection('filter-category')

	await buildContentSectionByCategory('Computer Science');
	await buildContentSectionByCategory('Environmental Science');
	await buildContentSectionByCategory('Exercise Science');
}

/**
 * Retrieve the category document and return the `categories` array within.
 *
 * @returns {Promise<Array>}	the `categories` array.
 */
async function buildCategoryOptions() {
	let document = await retrieveCategoryDocument();

	return document.categories;
}

/**
 * Build and append a series of {@link HTMLOptionElement} elements to a parent {@link HTMLSelectElement} element.
 *
 * @param parent	a parent {@link HTMLSelectElement} element.
 *
 * @returns {Promise<void>}		append the generated {@link HTMLOptionElement} elements to the {@link HTMLSelectElement}
 * parent element.
 */
async function buildCategorySelection(parent) {
	let categories = await buildCategoryOptions();
	let parentElement = document.getElementById(parent);

	categories.forEach(category => {
		let option = document.createElement('option');

		option.setAttribute('value', category);
		option.innerText = category;

		parentElement.append(option);
	});
}

/**
 * Build a content section - a 'row' container consisting of podcast 'card' elements - based on a provided category.
 *
 * @param category		the category the content should be built with respect to.
 *
 * @returns {Promise<void>}		append a built 'row' to the 'discover-content' parent element.
 */
async function buildContentSectionByCategory(category) {
	let podcasts = await retrievePodcastDocument();

	let row = document.createElement('div');
	row.setAttribute('class', 'row p-2');

	let heading = document.createElement('h1');
	heading.setAttribute('class', 'display-6 pt-5 content-heading');

	row.append(heading);

	switch (category) {
		case 'all':
			heading.innerText = 'All';

			podcasts.forEach(podcast => {
				row.append(buildPodcastCard(podcast));
			});

			break;

		default:
			heading.innerText = category;
			let matching = [];

			podcasts.forEach(podcast => {
				if (podcast.categorization.category === category) {
					matching.push(podcast);
				}
			});

			matching.forEach(podcast => row.append(buildPodcastCard(podcast)));
			break;
	}

	document.getElementById('discover-content').append(row);
}

/**
 * Build a Bootstrap 'card' element with respect to a particular podcast and corresponding data attributes.
 *
 * @param podcast	the podcast for which the 'card' should contain data.
 *
 * @returns {HTMLDivElement}	a built 'card' element.
 */
function buildPodcastCard(podcast) {
	let container = document.createElement('div');
	container.setAttribute('class', 'col-12 col-sm-6 col-xl-4 col-xxl-2 p-3');

	let card = document.createElement('div');
	card.setAttribute('class', 'card');

	let body = document.createElement('div');
	body.setAttribute('class', 'card-body');

	let title = document.createElement('h5');
	title.setAttribute('class', 'card-title');
	title.innerText = podcast.content.title;

	let author = document.createElement('p');
	author.setAttribute('class', 'card-text');

	let authorLink = document.createElement('a');
	authorLink.setAttribute('class', 'inline-link');
	authorLink.setAttribute('href', 'author.html?id=' + podcast.id.author);
	authorLink.innerText = podcast.id.author;

	let button = document.createElement('a');
	button.setAttribute('class', 'btn btn-primary w-100');
	button.setAttribute('href', 'podcast.html?id=' + podcast.id.podcast)
	button.innerText = 'Learn More';

	author.append(authorLink);
	body.append(title, author, button);
	card.append(body);
	container.append(card);

	return container;
}