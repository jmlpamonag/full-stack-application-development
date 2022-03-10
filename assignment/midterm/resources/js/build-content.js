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
 * The JSON Blob ID of the podcast document.
 */
const PODCAST_BLOB = '950251742357110784';

/**
 * The JSON Blob ID of the user document.
 */
const USER_BLOB = '950253428945469440';

/**
 * The JSON Blob ID of the author document.
 */
const AUTHOR_BLOB = '950254564695883776';

/**
 * The JSON Blob ID of the category document.
 */
const CATEGORY_BLOB = '951604363324047360';

/**
 * Create an HTTP request at the {@link GET_ENDPOINT} with the provided JSON Blob ID to retrieve the data that the
 * corresponding document contains and parse it as JSON.
 *
 * @param blobId	the JSON Blob ID from which data should be read.
 *
 * @returns {Promise<any>}	the retrieved data in JSON format.
 */
async function retrieve(blobId) {
	try {
		let result = await fetch(GET_ENDPOINT + blobId);

		return await result.json();

	} catch (error) {
		console.log(error);
	}
}