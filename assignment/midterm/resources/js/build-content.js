/**
 * Build the dynamic discover page content: filter menu options.
 */
async function buildDiscover() {
	await buildFilterCategoryOptions();
}

/**
 * Retrieve the available categories from the 'category' JSON document and parse each value as an option of the
 * 'category' selection dropdown in the filter menu.
 */
async function buildFilterCategoryOptions() {
	let data = await retrieveCategoryDocument();
	let list = document.getElementById('filter-category');

	data.categories.forEach(category => {
		let option = document.createElement('option');

		option.setAttribute('value', category);
		option.innerText = category;

		list.append(option);
	});
}

buildDiscover().then();