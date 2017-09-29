/**
 * Creates an array of the own enumerable property names of an object
 * for which the values are truthy.
 */
export default function truthyKeys(obj: {}) {
	return obj
		? Object.keys(obj).filter(k => !!obj[k])
		: []
}
