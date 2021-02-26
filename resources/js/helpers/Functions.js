import moment from "moment";
import 'moment/locale/fr';
//moment.locale('fr');

export function test_exist(data) {
	return data
}

export function isEmpty(data) {
	switch (typeof data) {

		case 'object':
			for (var prop in data) {
				if (data.hasOwnProperty(prop)) {
					return false;
				}
			}
			return JSON.stringify(data) === JSON.stringify({}) || data === null;

		case 'string':
			return !(!!data) && !(!!data.trim().length) && data != null;

		case 'number':
			return !(!!data) && !(data != NaN);

		case 'boolean':
			return !data;

		default:
			return true;
	}
}

export function testObjectItem(object = {}, except = []) {
	if (typeof object != 'object') return console.warn('This function require a object');

	let arrayKey = [];

	for (const key in object) {
		if (Object.hasOwnProperty.call(object, key)) {
			if (isEmpty(object[key])) arrayKey.push(key)
		}
	}
	return arrayKey
}

/**
 * @param {Any} initialState reference
 */
export class createReference {
	constructor(initialState) {
		this.state = initialState;
	}
	get _() {
		return this.state;
	}
	setState(newState) {
		//console.log(newState)
		this.state = newState;
	}
}

// Validate.js
export function stringifyErrors(object, showNumber = true) {
	let
		combinedError = '',
		i = 0;
	for (const key in object) {
		if (Object.hasOwnProperty.call(object, key)) {
			const array = object[key];
			array.forEach(error => {
				combinedError +=
					(combinedError.length ? '\n' : '') +
					(showNumber ? `${++i}. ` : '') +
					error +
					' !'
			});
		}
	}
	return combinedError;
}

// Moment.js
/**
 * @param {Date} dt needed date
 * @param {String} pattern of date format
 */
export function momentFormat(dt = new Date(), pattern = "DD/MM/YYYY HH:mm") {
	return moment(dt).format(pattern)
}

/**
 * @param {Date} dt needed date
 * @param {Boolean} bool for prefixing
 */
export function fromNow(dt = new Date(), bool = true) {
	return moment(dt).fromNow(bool)
}
// End Moment.js
