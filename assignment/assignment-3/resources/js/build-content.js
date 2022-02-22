/**
 * A local database of sorts from which the content will be built.
 *
 * @author Robert Adams
 */
const animals = [
	{
		"animalName"            :   "Benny",
		/* images courtesy of Joshua Dixon on Unsplash (https://unsplash.com/@joshdixon00) */
		"animalImages"          :   [ 'https://i.imgur.com/w1aMeLB.jpg', 'https://i.imgur.com/oG0IUhv.jpg' ],
		"type"                  :   "Dog",
		"breed"                 :   "Australian Shepherd Cross",
		"secondBreed"           :   "",
		"sex"                   :   "Male",
		"color"                 :   "Brown / White",
		"declawed"              :   null,
		"spayedOrNeutered"      :   true,
		"age"                   :   "2Yrs 1Mths 4Wks (approx)",
		"size"                  :   "Large",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   true,
		"animalID"              :   "23531",
		"microchipNumber"       :   "985113005872810",
		"isSuitableWithChildren":   false,
		"isOkWithDogs"          :   null,
		"isLaidBack"            :   null,
		"isShy"                 :   null,
		"likeCats"              :   null,
		"isSpecialNeeds"        :   null,
		"aboutMeDescription"    :   [],
		"inFosterCase"          :   false,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	},
	{
		"animalName"            :   "Cornelia",
		/* images courtesy of Vidhey PV on Unsplash (https://unsplash.com/@pv2k) */
		"animalImages"          :   [ 'https://i.imgur.com/aBxzNf8.jpg', 'https://i.imgur.com/a9dE6Uh.jpg' ],
		"type"                  :   "Dog",
		"breed"                 :   "Boxer Cross",
		"secondBreed"           :   "",
		"sex"                   :   "Female",
		"color"                 :   "White",
		"declawed"              :   null,
		"spayedOrNeutered"      :   true,
		"age"                   :   "6Yrs 2Mths 3Wks (approx)",
		"size"                  :   "Large",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   true,
		"animalID"              :   "23390",
		"microchipNumber"       :   "985113005872687",
		"isSuitableWithChildren":   null,
		"isOkWithDogs"          :   true,
		"isLaidBack"            :   true,
		"isShy"                 :   true,
		"likeCats"              :   null,
		"isSpecialNeeds"        :   null,
		"aboutMeDescription"    :   [
			"Cornelia is calm and quiet in their kennel. She needs a home willing to use positive reinforcement training to build their confidence. Cornelia is shy on first meeting but if you give her time they warm up quickly. She would so best in a calm quiet home due to their personality and demeanor.",
			"Cornelia seems to do well with other dogs and would love a buddy ti play with in their new home. We would suggest laid back, calm dogs in their new home. They are so low maintenance and calm, a hyper, playful dog might stress them out.",
			"We would suggest other dogs and/or children meet them prior to being adopted because we want to make sure they do not overwhelm him. In time with TLC, patience, and confidence building they will fit perfectly into their forever family."
		],
		"inFosterCase"          :   false,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	},
	{
		"animalName"            :   "Hemingway",
		/* images courtesy of Milada Vigerova on Unsplash (https://unsplash.com/@milada_vigerova) */
		"animalImages"          :   [ 'https://i.imgur.com/HoJOoxu.jpg','https://i.imgur.com/qCibVNc.jpg','https://i.imgur.com/LPVqCQw.jpg' ],
		"type"                  :   "Cat",
		"breed"                 :   "Domestic Short Hair Cross",
		"size"                  :   "Large",
		"secondBreed"           :   "",
		"sex"                   :   "Male",
		"color"                 :   "Grey",
		"declawed"              :   false,
		"spayedOrNeutered"      :   true,
		"age"                   :   "3Yrs 3Wks (approx)",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   null,
		"animalID"              :   "23897",
		"microchipNumber"       :   null,
		"isSuitableWithChildren":   null,
		"isOkWithDogs"          :   null,
		"isLaidBack"            :   null,
		"isShy"                 :   null,
		"likeCats"              :   false,
		"isSpecialNeeds"        :   true,
		"aboutMeDescription"    :   [],
		"inFosterCase"          :   false,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	},
	{
		"animalName"            :   "Howard",
		/* images courtesy of Seven Song on Unsplash (https://unsplash.com/@sevenbenzema) */
		"animalImages"          :   [ 'https://i.imgur.com/Ftgm2mU.jpg', 'https://i.imgur.com/TvYNOqT.jpg', 'https://i.imgur.com/EkpNJDu.jpg' ],
		"type"                  :   "Cat",
		"breed"                 :   "Domestic Short Hair Cross",
		"size"                  :   "Large",
		"secondBreed"           :   "Russian",
		"sex"                   :   "Male",
		"color"                 :   "Grey",
		"declawed"              :   false,
		"spayedOrNeutered"      :   true,
		"age"                   :   "Adult",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   true,
		"animalID"              :   "23882",
		"microchipNumber"       :   "985113006299853",
		"isSuitableWithChildren":   null,
		"isOkWithDogs"          :   null,
		"isLaidBack"            :   null,
		"isShy"                 :   null,
		"likeCats"              :   null,
		"isSpecialNeeds"        :   null,
		"aboutMeDescription"    :   [],
		"inFosterCase"          :   false,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	},
	{
		"animalName"            :   "Niko",
		/* images courtesy of Krystal Ng on Unsplash (https://unsplash.com/@bykrystal) */
		"animalImages"          :   [ 'https://i.imgur.com/tz2ifSh.jpg', 'https://i.imgur.com/W3f2r8w.jpg' ],
		"type"                  :   "Kitten",
		"breed"                 :   "Domestic Longhair Cross",
		"size"                  :   "Large",
		"secondBreed"           :   "",
		"sex"                   :   "Male",
		"color"                 :   "Grey Tabby / White",
		"declawed"              :   false,
		"spayedOrNeutered"      :   true,
		"age"                   :   "3Mths 3Wks",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   true,
		"animalID"              :   "23541",
		"microchipNumber"       :   "985113006299812",
		"isSuitableWithChildren":   null,
		"isOkWithDogs"          :   null,
		"isLaidBack"            :   null,
		"isShy"                 :   null,
		"likeCats"              :   null,
		"isSpecialNeeds"        :   null,
		"aboutMeDescription"    :   [],
		"inFosterCase"          :   true,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	},
	{
		"animalName"            :   "Wishbone",
		/* image courtesy of Mike Burke on Unsplash (https://unsplash.com/@themikeburke) */
		"animalImages"          :   [ 'https://i.imgur.com/t6Ls5xE.jpg' ],
		"type"                  :   "Dog",
		"breed"                 :   "American Bulldog Cross",
		"size"                  :   "Large",
		"secondBreed"           :   "",
		"sex"                   :   "Male",
		"color"                 :   "Black",
		"declawed"              :   null,
		"spayedOrNeutered"      :   true,
		"age"                   :   "2Yrs 1Mths 4Wks (approx)",
		"healthCheck"           :   true,
		"upToDateVaccinations"  :   true,
		"upToDateWorming"       :   true,
		"microchipped"          :   true,
		"animalID"              :   "20579",
		"microchipNumber"       :   "985113004709947",
		"isSuitableWithChildren":   null,
		"isOkWithDogs"          :   null,
		"isLaidBack"            :   null,
		"isShy"                 :   null,
		"likeCats"              :   null,
		"isSpecialNeeds"        :   null,
		"aboutMeDescription"    :   [
			"Wishbone is a super sweet playful guy! He is around a 2 years old, but is still very much a puppy. He loves people and he, like any youngster, will need basic manner training and a patient home willing to put their time and energy into him. Wishbone also seems to play well with other dogs! His perfect doggy pal would be one that can keep up yet be tolerant of his playful antics. He would benefit from a home willing to exhaust his energy and keep him active . Wishbone might jump on you or play mouth because he is young and still learning. Wishbone will require a home with children 13 years and older because he gets so playful and excited he doesn't realize his size and strength. He truly is a smart young man just needs the right home to spoil him rotton! My past owner went through the process of getting me a registered as an Emotional Support Animal as well! And I have the Certificate to prove it!"
		],
		"inFosterCase"          :   false,
		"dogLocation"           :   "Kenton County Animal Shelter",
		"contactPhone"          :   "(859) 356-7400",
		"contactStreetAddress"  :   "1020 Mary Laidley",
		"contactCity"           :   "Ft Mitchell",
		"contactState"          :   "KY",
		"contactZip"            :   "41017"
	}
];

/**
 * A local database of constant attribute description values from which the attribute elements will be built.
 *
 * @author Michael Muzzarelli
 */
const attributeDescription = {
	healthCheckTrue: 'I have had a complete health check.',
	healthCheckFalse: 'I have NOT had a health check.',

	vaccinationTrue: 'I have an up-to-date vaccination record.',
	vaccinationFalse: 'I do NOT have an up-to-date vaccination record.',

	wormingTrue: 'I have an up-to-date record of worming.',
	wormingFalse: 'I do NOT have an up-to-date record of worming.',

	microchipTrue: 'I have a microchip and can be found in the database.',
	microchipFalse: 'I do NOT have a microchip.',

	suitableChildrenTrue: 'I do well with children around.',
	suitableChildrenFalse: 'I prefer not to have children around.',

	suitableDogTrue: 'I do well with other dogs around.',
	suitableDogFalse: 'I prefer not to have other dogs around.',

	suitableCatTrue: 'I do well with other cats around.',
	suitableCatFalse: 'I prefer not to have other cats around.',

	laidBackTrue: 'I am laid back and relaxed.',
	laidBackFalse: 'I am not laid back. I require a lot of attention.',

	shyTrue: 'I am shy and might play hide-and-seek without telling you.',
	shyFalse: 'I am not shy and make sure to let everyone know it.',

	specialNeedsTrue: 'I will require additional or special care.',
	specialNeedsFalse: 'I will not require any additional or special care.',
}

/**
 * Build the index content - dynamically generated Bootstrap card elements containing animal information and a link to
 * the details page pertaining that animal - and append it to the index document. Note: this function is to be called
 * independently in the index document to invoke this function on page load.
 */
function buildIndex() {
	let parent = $('#index-parent');

	for (let i = 0; i < animals.length; i++) {
		let animal = animals[i];

		parent.append(buildIndexCardElement(animal, i));
	}
}

/**
 * Build a detail document of information pertaining to a particular animal selected from the index. The index value
 * is parsed from a value in the query string of the current URL. Note: this function is to be called independently
 * in the detail document to invoke this function on page load.
 *
 * @param index		the index position of the animal a detail document should be built for.
 */
function buildDetail(index) {
	let animal = animals[index];

	$('#detail-carousel-container').append(buildCarouselElement(animal.animalImages, animal.animalName));

	/* set the about heading text to include the name of the animal */
	let aboutHeading = document.getElementById('about-heading');
	aboutHeading.innerText = `About ${animal.animalName}...`;

	/* append the values of the aboutMeDescription array to the about-description container */
	let aboutDescription = document.getElementById('about-description');
	animal.aboutMeDescription.forEach(value => {
		let paragraph = document.createElement('p');
		paragraph.innerText = value.toString();
		aboutDescription.append(paragraph);
	});

	console.log(attributeDescription.healthCheckTrue);

	let generalGrid = document.getElementById('attribute-accordion-general-grid');
	/* TODO: breed and second breed */
	/* TODO: sex */
	/* TODO: color */
	/* TODO: if cat, declawed */
	/* TODO: spayed or neutered depending on sex */
	/* TODO: age */
	/* TODO: size */

	let healthGrid = document.getElementById('attribute-accordion-health-grid');
	healthGrid.append(buildHealthAttributeElement('health-check', animal.healthCheck));
	healthGrid.append(buildHealthAttributeElement('vaccination', animal.upToDateVaccinations));
	healthGrid.append(buildHealthAttributeElement('worming', animal.upToDateWorming));
	healthGrid.append(buildHealthAttributeElement('microchip', animal.microchipped));

	let suitabilityGrid = document.getElementById('attribute-accordion-suitability-grid');
	suitabilityGrid.append(buildSuitabilityAttributeElement('children', animal.isSuitableWithChildren));
	suitabilityGrid.append(buildSuitabilityAttributeElement('dog', animal.isOkWithDogs));
	suitabilityGrid.append(buildSuitabilityAttributeElement('cat', animal.likeCats));

	let behaviorGrid = document.getElementById('attribute-accordion-behavior-grid');
	/* TODO: laid back? */
	/* TODO: shy */
	/* TODO: special needs */
	/* TODO: foster care */

	/* SECTION: contact and adopt */
	/* TODO: animalId */
	/* TODO: dogLocation */
	/* TODO: contactPhone, contactStreetAddress, contactCity, contactState, contactZip */
}

/**
 * Build a Bootstrap 'card' element to be appended to the parent container in the index document.
 *
 * @param animal	the object from the dataset to retrieve data from.
 * @param index		the index of the animal object from the dataset.
 *
 * @returns {HTMLDivElement}	a Bootstrap 'card' element for the index document.
 */
function buildIndexCardElement(animal, index) {
	let col = buildColElement();
	let card = buildCardElement();
	let image = buildCardImageElement(animal.animalImages[0], animal.animalName);
	let body = buildCardBodyElement();
	let title = buildCardTitleHeading(animal.animalName);
	let subtitle = buildCardSubtitleHeading(animal.sex + ', ' + animal.breed);
	let text = buildCardTextElement(`${animal.animalName} is a ${animal.sex.toLowerCase()} ${animal.breed}, ${animal.age} in age, and ${animal.color} in color.`);
	let button = buildCardButtonElement('Learn More', 'detail.html?index=' + index);

	body.append(title, subtitle, text, button);
	card.append(image, body);
	col.append(card);

	return col;
}

/**
 * Build a flexible Bootstrap column ('col') container element.
 *
 * @returns {HTMLDivElement}	a Bootstrap 'col' element.
 */
function buildColElement() {
	let col = document.createElement('div');

	col.setAttribute('class', 'col');

	return col;
}

/**
 * Build a flexible Bootstrap 'card' container element.
 *
 * @returns {HTMLDivElement}	a Bootstrap 'card' element.
 */
function buildCardElement() {
	let card = document.createElement('div');

	card.setAttribute('class', 'card h-100');

	return card;
}

/**
 * Build an img element to be appended to the top of a Bootstrap 'card' element.
 *
 * @param src	a path to the source image.
 * @param alt	an alternative text for the image that is displayed if the image cannot be.
 *
 * @returns {HTMLImageElement}	an img element to be appended to the top of a Bootstrap 'card' element.
 */
function buildCardImageElement(src, alt) {
	let img = document.createElement('img');

	img.setAttribute('class', 'card-img-top');
	img.setAttribute('src', src);
	img.setAttribute('alt', alt);

	return img;
}

/**
 * Build a flexible Bootstrap 'card-body' element to be appended to a Bootstrap 'card' element.
 *
 * @returns {HTMLDivElement}	a Bootstrap 'card-body' element.
 */
function buildCardBodyElement() {
	let body = document.createElement('div');

	body.setAttribute('class', 'card-body d-flex flex-column');

	return body;
}

/**
 * Build a Bootstrap 'card-title' heading to be appended to a Bootstrap 'card-body' element.
 *
 * @param value		the inner text value of the heading.
 *
 * @returns {HTMLHeadingElement}	a Bootstrap 'card-title' heading.
 */
function buildCardTitleHeading(value) {
	let title = document.createElement('h5');

	title.setAttribute('class', 'card-title');
	title.innerText = value;

	return title;
}

/**
 * Build a Bootstrap 'card-subtitle' heading to be appended to a Bootstrap 'card-body' element.
 *
 * @param value		the inner text value of the heading.
 *
 * @returns {HTMLHeadingElement}	a Bootstrap 'card-subtitle' heading.
 */
function buildCardSubtitleHeading(value) {
	let subtitle = document.createElement('h6');

	subtitle.setAttribute('class', 'card-subtitle text-muted mb-1');
	subtitle.innerText = value;

	return subtitle;
}

/**
 * Build a Bootstrap 'card-text' element to be appended to a Bootstrap 'card-body' element.
 *
 * @param value		the inner text value of the element.
 *
 * @returns {HTMLParagraphElement}	a Bootstrap 'card-text' element.
 */
function buildCardTextElement(value) {
	let text = document.createElement('p');

	text.setAttribute('class', 'card-text');
	text.innerText = value;

	return text;
}

/**
 * Build a full-width Bootstrap 'btn' button to be appended to a Bootstrap 'card-body' element.
 *
 * @param value		the inner text value of the button.
 * @param href		the URL that the button should link to when clicked.
 *
 * @returns {HTMLAnchorElement}		a Bootstrap 'btn' button.
 */
function buildCardButtonElement(value, href) {
	let button = document.createElement('a');

	button.setAttribute('class', 'btn btn-primary col-12 mt-auto');
	button.setAttribute('href', href);
	button.innerText = value;

	return button;
}

/**
 * Build a Bootstrap carousel element with indicator and direction control elements.
 *
 * @param images	the links to images that should be displayed in this carousel.
 * @param name		the name of the animal for which the carousel is being generated.
 *
 * @returns {HTMLDivElement}	a Bootstrap carousel element.
 */
function buildCarouselElement(images, name) {
	let id = `carousel-${name.toLowerCase()}`;

	let carousel = document.createElement('div');
	carousel.setAttribute('class', 'carousel slide');
	carousel.setAttribute('id', id);
	carousel.setAttribute('data-bs-ride', 'carousel');

	let indicators = document.createElement('div');
	indicators.setAttribute('class', 'carousel-indicators');

	images.forEach((image, index) => {
		let indicator = document.createElement('button');
		indicator.setAttribute('type', 'button');
		indicator.setAttribute('data-bs-target', `#${id}`);
		indicator.setAttribute('data-bs-slide-to', `${index}`);
		indicator.setAttribute('aria-label', `${name} ${index + 1}`);

		if (index === 0) {indicator.setAttribute('class', 'active');
			indicator.setAttribute('aria-current', 'true');
		}

		indicators.append(indicator);
	});

	let inner = document.createElement('div');
	inner.setAttribute('class', 'carousel-inner');

	images.forEach((image, index) => {
		let item = document.createElement('div');

		if (index === 0) {
			item.setAttribute('class', 'carousel-item active');
		} else {
			item.setAttribute('class', 'carousel-item');
		}

		let img = document.createElement('img');
		img.setAttribute('class', 'd-block w-100');
		img.setAttribute('src', image);
		img.setAttribute('alt', `${name} ${index + 1}`);

		item.append(img);
		inner.append(item);
	});

	let prev = buildCarouselControlElement('prev', id);
	let next = buildCarouselControlElement('next', id);

	carousel.append(indicators, inner, prev, next);

	return carousel;
}

/**
 * Build the three Bootstrap carousel control elements: a button, an icon, and descriptive text.
 *
 * @param direction		the direction that the control should be designed for; either 'previous' or 'next'.
 * @param id			the 'id' attribute of the carousel that these elements should control.
 *
 * @returns {HTMLButtonElement}		the Bootstrap carousel control element.
 */
function buildCarouselControlElement(direction, id) {
	let control = document.createElement('button');
	let icon = document.createElement('span');
	let text = document.createElement('span');

	control.setAttribute('type', 'button');
	control.setAttribute('data-bs-target', `#${id}`);

	icon.setAttribute('aria-hidden', 'true');

	text.setAttribute('class', 'visually-hidden');

	if (direction === 'prev') {
		control.setAttribute('class', 'carousel-control-prev');
		control.setAttribute('data-bs-slide', 'prev');

		icon.setAttribute('class', 'carousel-control-prev-icon');

		text.innerText = 'Previous';

	} else if (direction === 'next') {
		control.setAttribute('class', 'carousel-control-next');
		control.setAttribute('data-bs-slide', 'next');

		icon.setAttribute('class', 'carousel-control-next-icon');

		text.innerText = 'Next';
	}

	control.append(icon, text);

	return control;
}

/**
 * Build a Bootstrap 'card' element to be appended to an accordion grid container element within the detail document,
 * styled with appropriate [color]{@link https://getbootstrap.com/docs/5.1/customize/color/} and
 * [icon]{@link https://icons.getbootstrap.com/} attributes.
 *
 * @param attribute		a semantic name of the attribute as it is represented in the dataset.
 * @param description	a short description of the relationship between the attribute and the attribute value.
 * @param icon			an icon name based on the BI webfont <strong>without</strong> the 'bi-' prefix.
 * @param color			a color name based on the current Bootstrap theme color palette <strong>without</strong> the
 * 						'bg-' prefix.
 *
 * @returns {HTMLDivElement}	a Bootstrap 'card' element for the detail document.
 */
function buildAccordionAttributeElement(attribute, description, icon, color) {
	let col = buildColElement();
	let card = buildCardElement();
	let body = buildCardBodyElement();

	let badgeContainer = document.createElement('h3');

	let badge = document.createElement('span');
	badge.setAttribute('class', `badge bg-${color} text-start w-100`);

	let badgeIcon = document.createElement('i');
	badgeIcon.setAttribute('class', `bi bi-${icon}`);

	let badgeAttribute = document.createElement('span');
	badgeAttribute.innerText = ` ${attribute}`;

	let attributeDescription = document.createElement('p');
	attributeDescription.setAttribute('class', 'body-text mx-1 mb-0');
	attributeDescription.innerText = description;

	badge.append(badgeIcon, badgeAttribute);
	badgeContainer.append(badge);
	body.append(badgeContainer, attributeDescription);
	card.append(body);
	col.append(card);

	return col;
}

/**
 * Build a Bootstrap 'card' element to be appended to the attribute accordion health grid within the detail document.
 *
 * @param attribute		the name of the attribute to use in the switch statement; e.g., 'health-check', 'vaccination',
 * 						'worming', or 'microchip'.
 * @param value			the value - true or false - of the data attribute.
 *
 * @returns {HTMLDivElement}	a Bootstrap 'card' element to be appended to the attribute accordion health grid.
 */
function buildHealthAttributeElement(attribute, value) {
	let element;

	switch (attribute) {
		case 'health-check':
			value === true ?
				element = buildAccordionAttributeElement('Health Check', attributeDescription.healthCheckTrue, 'check-circle-fill', 'success') :
				element = buildAccordionAttributeElement('Health Check', attributeDescription.healthCheckFalse, 'x-circle-fill', 'danger'); break;

		case 'vaccination':
			value === true ?
				element = buildAccordionAttributeElement('Vaccination', attributeDescription.vaccinationTrue, 'check-circle-fill', 'success') :
				element = buildAccordionAttributeElement('Vaccination', attributeDescription.vaccinationFalse, 'x-circle-fill', 'danger'); break;

		case 'worming':
			value === true ?
				element = buildAccordionAttributeElement('Worming', attributeDescription.wormingTrue, 'check-circle-fill', 'success') :
				element = buildAccordionAttributeElement('Worming', attributeDescription.wormingFalse, 'x-circle-fill', 'danger'); break;

		case 'microchip':
			value === true ?
				element = buildAccordionAttributeElement('Microchip', attributeDescription.microchipTrue, 'check-circle-fill', 'success') :
				element = buildAccordionAttributeElement('Microchip', attributeDescription.microchipFalse, 'x-circle-fill', 'danger'); break;
	}

	return element;
}

/**
 * Build a Bootstrap 'card' element to be appended to the attribute accordion suitability grid within the detail
 * document.
 *
 * @param attribute		the name of the attribute for use in the switch statement; e.g., 'children', 'dog', or 'cat'.
 * @param value			the value - true or false - of the data attribute.
 *
 * @returns {HTMLDivElement}	a Bootstrap 'card' element to be appended to the attribute accordion suitability grid.
 */
function buildSuitabilityAttributeElement(attribute, value) {
	let element;

	/* if the attribute value is null, meaning no value was assigned, build an empty element with 'display: none' */
	if (value === null) {
		element = document.createElement('div');
		element.setAttribute('style', 'display: none');

		return element;
	}

	switch (attribute) {
		case 'children':
			value === true ?
				element = buildAccordionAttributeElement('Children', attributeDescription.suitableChildrenTrue, 'heart-half', 'primary') :
				element = buildAccordionAttributeElement('Children', attributeDescription.suitableChildrenFalse, 'heart-fill', 'warning'); break;

		case 'dog':
			value === true ?
				element = buildAccordionAttributeElement('Dogs', attributeDescription.suitableDogTrue, 'heart-half', 'primary') :
				element = buildAccordionAttributeElement('Dogs', attributeDescription.suitableDogFalse, 'heart-fill', 'warning'); break;

		case 'cat':
			value === true ?
				element = buildAccordionAttributeElement('Cats', attributeDescription.suitableCatTrue, 'heart-half', 'primary') :
				element = buildAccordionAttributeElement('Cats', attributeDescription.suitableCatFalse, 'heart-fill', 'warning'); break;
	}

	return element;
}

/**
 * Function provided by Dr. Caporusso to parse query string values.
 *
 * @param url	the URL to be parsed.
 *
 * @returns {{}}	an array of parsed values.
 */
function getAllUrlParams(url) {
	var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
	var obj = {};

	if (queryString) {
		queryString = queryString.split('#')[0];
		var arr = queryString.split('&');

		for (var i = 0; i < arr.length; i++) {
			var a = arr[i].split('=');
			var paramName = a[0];
			var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

			if (paramName.match(/\[(\d+)]$/)) {
				var key = paramName.replace(/\[(\d+)?/, '');
				if (!obj[key]) obj[key] = [];

				if (paramName.match(/\[\d+$/)) {
					var index = /\[(\d+)/.exec(paramName)[1];
					obj[key][index] = paramValue;
				} else {
					obj[key].push(paramValue);
				}
			} else {
				if (!obj[paramName]) {
					obj[paramName] = paramValue;
				} else if (obj[paramName] && typeof obj[paramName] === 'string') {
					obj[paramName] = [obj[paramName]];
					obj[paramName].push(paramValue);
				} else {
					obj[paramName].push(paramValue);
				}
			}
		}
	}

	return obj;
}