## Write a JavaScript function `getMax` which takes tree numbers and returns the highest and lowest number of them.

- Example:
  - getMax(12, 34, 56) --> `Max number is 56, min is 12 👍`
  - getMax(0, -34, 83) --> `Max number is 83,min is 0 👍`

---

## Write a JavaScript function to count the digits of an integer.

- Hint: convert number to string then use str.length property to determinate length of string.

---

## Write a JavaScript function to generate a random integer:

- between 0 and 1
- between 0 and 100
- between 5 and 20

---

## Write a JavaScript function `toDecimals` to format a number up to specified decimal places.

- Example:
  - toDecimals(2.100212, 2) --> 2.10
  - toDecimals(2.100212, 3) --> 2.100
  - toDecimals(2100, 2) --> 2100.00

---

## Given a non-negative integer as input, write function `isPowerOfTwo` which returns `true` if input is a power of `2` and `false` otherwise. Use Math.log()

- A number is a power of `2` if it can be written as `2**k` for some non-negative
  integer `k`, where "`**`" represents the exponentiation operator.

- For example, `8` is a power of `2` since `8` equals `2 * 2 * 2 === 2**3`.

- Conversely, `81` is not a power of `2` since there's no integer `k` such
  that `81 === 2**k`.

- Example:
  - isPowerOfTwo(2) --> true
  - isPowerOfTwo(3) --> false
  - isPowerOfTwo(4) --> true
  - isPowerOfTwo(2\*\*20) --> true
  - isPowerOfTwo(2\*\*20 + 1) --> false
