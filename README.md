# parse-cookies.js (written in ES6)

[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/meandmax/parse-cookies.js/master/LICENSE)
[![npm](http://img.shields.io/npm/v/parse-cookies.js.svg?style=flat)](https://www.npmjs.com/package/parse-cookies.js)
[![build](http://img.shields.io/travis/meandmax/parse-cookies.js/master.svg?style=flat)](https://travis-ci.org/meandmax/parse-cookies.js)
[![Coverage Status](https://coveralls.io/repos/meandmax/parse-cookies.js/badge.svg?branch=master&service=github)](https://coveralls.io/github/meandmax/parse-cookies.js?branch=master)
[![code climate](http://img.shields.io/codeclimate/github/meandmax/parse-cookies.js.svg?style=flat)](https://codeclimate.com/github/meandmax/parse-cookies.js)
[![devDependencies](http://img.shields.io/david/dev/meandmax/parse-cookies.js.svg?style=flat)](https://david-dm.org/meandmax/parse-cookies.js#info=devDependencies&view=table)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

### Install:

```
npm install parse-cookies.js
```

### Run tests

```
npm test
```

### parseCookies()
Parses document.cookie string into an object (dictionary) by splitting at ';' and '='.

```javascript
import parseCookies from 'parse-cookies';

parseCookies('a=1;b=2;c=3'); // result: {a: '1', b: '2', c: '3'}
parseCookies('a=1;b=2;a=3'); // result: {a: '3', b: '2'}
```

```javascript
import parseCookies from 'parse-cookies';

let cookies = parseCookies('a=x;b=y', function (x) {
    return '<' + x + '>';
});

// result: {a: '<x>', b: '<y>'}

let cookies = parseCookies('a=1;b=2', function (x) {
    return parseInt(x, 10);
});

// result: {a: 1, b: 2}
```

### Copyright

Copyright &copy; 2015 Maximilian Heinz, contributors. Released under the MIT License
