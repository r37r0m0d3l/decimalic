# Decimalic

A small pack of utils for arbitrary-precision number calculations. Based on 'decimal.js-light'.

[![npm](https://badgen.net/npm/v/decimalic?&icon=npm&label=npm&color=DD3636)](https://www.npmjs.com/package/decimalic)
[![downloads](https://badgen.net/npm/dt/decimalic?&icon=terminal&label=downloads&color=009688)](https://www.npmjs.com/package/decimalic)
[![stars](https://badgen.net/github/stars/r37r0m0d3l/decimalic?&icon=github&label=stars&color=ffcc33)](https://github.com/r37r0m0d3l/decimalic)
[![types](https://badgen.net/npm/types/decimalic?&icon=typescript&label=types&color=1E90FF)](https://github.com/r37r0m0d3l/decimalic/blob/master/dist/decimalic.d.ts)
[![build](https://badgen.net/travis/r37r0m0d3l/decimalic?&icon=travis&label=build)](https://travis-ci.org/r37r0m0d3l/decimalic)
[![lgtm](https://badgen.net/lgtm/grade/g/r37r0m0d3l/decimalic?&icon=lgtm&label=lgtm:js/ts&color=00C853)](https://lgtm.com/projects/g/r37r0m0d3l/decimalic/alerts/)

---

## Usage

Require CommonJS.

```javascript
const { Decimal, diff, divide, multiply, sum } = require("decimalic");
```

Import as ECMAScript module.

```javascript
import { Decimal, diff, divide, multiply, sum } from "decimalic";
```

## Examples

### Diff

```javascript
import { diff } from "decimalic";
console.log(2.3 - 1.0); // 1.2999999999999998
console.log(diff(2.3, 1.0)); // 1.3
```

### Divide

```javascript
import { divide } from "decimalic";
console.log(5.3 / 0.1); // 52.99999999999999
console.log(divide(5.3, 0.1)); // 53
```

### Multiply

```javascript
import { multiply } from "decimalic";
console.log(2232.0 * 0.1); // 223.20000000000002
console.log(multiply(2232.0, 0.1)); // 223.2
```

### Sum

```javascript
import { sum } from "decimalic";
console.log(2.3 + 1.15); // 3.4499999999999997
console.log(sum(2.3, 1.15)); // 3.45
```

## See also

[My other projects](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">
