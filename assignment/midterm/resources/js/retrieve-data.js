/**
 * The endpoint utilised in accessing a particular JSON Blob in a [GET]{@link https://jsonblob.com/api#get},
 * [PUT]{@link https://jsonblob.com/api#put}, or [DELETE]{@link https://jsonblob.com/api#delete} request.
 */
const GET_ENDPOINT = 'https://jsonblob.com/api/jsonBlob/';

/**
 * The endpoint utilised in creating a new JSON Blob in a [POST]{@link https://jsonblob.com/api#post} request.
 */
const POST_ENDPOINT = 'https://jsonblob.com/api/jsonBlob';

/**
 * The JSON Blob ID of the author document.
 */
const AUTHOR_BLOB = '950254564695883776';

/**
 * The JSON Blob ID of the category document.
 */
const CATEGORY_BLOB = '951604363324047360';

/**
 * The JSON Blob ID of the podcast document.
 */
const PODCAST_BLOB = '950251742357110784';

/**
 * The JSON Blob ID of the user document.
 */
const USER_BLOB = '950253428945469440';

/**
 * Retrieve the document stored at {@link AUTHOR_BLOB}.
 *
 * @returns {Promise<JSON>}		the data within the document, parsed as JSON.
 */
async function retrieveAuthorDocument() {
	return await retrieve(AUTHOR_BLOB);
}

/**
 * Retrieve the document stored at {@link CATEGORY_BLOB}.
 *
 * @returns {Promise<JSON>}		the data within the document, parsed as JSON.
 */
async function retrieveCategoryDocument() {
	return await retrieve(CATEGORY_BLOB);
}

/**
 * Retrieve the document stored at {@link PODCAST_BLOB}.
 *
 * @returns {Promise<JSON>}		the data within the document, parsed as JSON.
 */
async function retrievePodcastDocument() {
	return await retrieve(PODCAST_BLOB);
}

/**
 * Retrieve the document stored at {@link USER_BLOB}.
 *
 * @returns {Promise<JSON>}		the data within the document, parsed as JSON.
 */
async function retrieveUserDocument() {
	return await retrieve(USER_BLOB);
}

/**
 * Create an HTTP request at {@link GET_ENDPOINT} with the provided blob ID to retrieve the document stored at that
 * address and return the data within as a JSON array.
 *
 * @param id	the JSON Blob ID of the necessary document.
 *
 * @returns {Promise<JSON>}		the data stored within the document, parsed as JSON.
 */
async function retrieve(id) {
	try {
		let response = await fetch(GET_ENDPOINT + id);

		return await response.json();

	} catch (error) {
		console.log(error);
	}
}