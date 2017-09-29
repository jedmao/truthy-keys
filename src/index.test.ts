import test from 'ava'

import truthyKeys from './'

test(
	[
		'truthyKeys creates an array of the own enumerable property names',
		'of an object for which the values are truthy',
	].join(' '),
	t => {
		t.deepEqual(
			truthyKeys({
				a: true,
				b: false,
				c: 0,
				d: null,
				e: undefined,
				f: 1,
				g: '',
				h: 'h',
			}),
			['a', 'f', 'h'],
		)
	},
)

test('truthyKeys converts a string into an array of key indexes', t => {
	t.deepEqual(
		truthyKeys('foo'),
		['0', '1', '2'],
	)
})

test('truthyKeys creates an empty array when falsey values are provided', t => {
	[
		false,
		undefined,
		null,
		0,
		'',
	].forEach(falseyValue => {
		t.deepEqual(
			// tslint:disable-next-line:no-any
			truthyKeys(falseyValue as any),
			[],
		)
	})
})

test('truthyKeys creates an empty array when a truthy number is provided', t => {
	t.deepEqual(
		truthyKeys(42),
		[],
	)
})
