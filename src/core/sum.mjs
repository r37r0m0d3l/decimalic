import { Decimal } from "./Decimal";

/**
 * @name sum
 * @description Return the value of first decimal plus second decimal.
 * @param {number|string|Decimal} alpha
 * @param {number|string|Decimal} beta
 * @returns {number}
 */
export function sum(alpha, beta) {
  const a = new Decimal(alpha);
  const b = new Decimal(beta);
  const c = a.plus(b);
  return c.toNumber();
}
