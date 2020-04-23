import { Decimal } from "./Decimal";

/**
 * @name divide
 * @description Return the value of first decimal divided by second decimal.
 * @param {number|string|Decimal} alpha
 * @param {number|string|Decimal} beta
 * @returns {number}
 */
export function divide(alpha, beta) {
  const a = new Decimal(alpha);
  const b = new Decimal(beta);
  const c = a.dividedBy(b);
  return c.toNumber();
}
