/**
 * A rudimentary user authentication module to be utilised in the first iteration of PodScholar.
 *
 * @module authentication
 * @author Michael Muzzarelli, muzzarellm1@nku.edu
 */

/**
 * A variable to check if the user has been authenticated.
 *
 * @type {boolean}	true if the user has been authenticated, and false if not.
 */
let authenticated = false;

/**
 * Set the value of the authentication variable, thus setting the status of user authentication.
 *
 * @param value		true if the user should be authenticated, false if the user should not bne.
 */
function setAuthentication(value) {
	if (typeof value != 'boolean') {
		return console.error('The provided value of setAuthentication(boolean) must be of type boolean!');
	}

	authenticated = value;
}