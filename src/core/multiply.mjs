import { Decimal } from "./Decimal";

/**
 * @name multiply
 * @description Return the value of first decimal multiplied by second decimal.
 * @param {number|string|Decimal} alpha
 * @param {number|string|Decimal} beta
 * @returns {number}
 */
export function multiply(alpha, beta) {
  const a = new Decimal(alpha);
  const b = new Decimal(beta);
  const c = a.times(b);
  return c.toNumber();
}
