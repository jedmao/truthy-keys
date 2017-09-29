# truthy-keys

[![NPM version](http://img.shields.io/npm/v/truthy-keys.svg?style=flat)](https://www.npmjs.org/package/truthy-keys)
[![npm license](http://img.shields.io/npm/l/truthy-keys.svg?style=flat-square)](https://www.npmjs.org/package/truthy-keys)
[![Travis Build Status](https://img.shields.io/travis/jedmao/truthy-keys.svg)](https://travis-ci.org/jedmao/truthy-keys)
[![Dependency Status](https://gemnasium.com/badges/github.com/jedmao/truthy-keys.svg)](https://gemnasium.com/github.com/jedmao/truthy-keys)

[![npm](https://nodei.co/npm/truthy-keys.svg?downloads=true)](https://nodei.co/npm/truthy-keys/)

Creates an array of the own enumerable property names of an object for which the values are truthy..

## Installation

```
$ npm install truthy-keys
```

## Usage examples

```ts
truthyKeys({ foo: true, bar: false });
// ["foo"]

truthyKeys('foo');
// ["0", "1", "2"]

truthyKeys(/* any falsey value */);
// []

truthyKeys(42);
// []
```

See [the tests](https://github.com/jedmao/bem-helpers/blob/master/src/index.test.ts).

