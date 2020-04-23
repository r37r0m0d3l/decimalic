import { Decimal } from "./Decimal";

/**
 * @name diff
 * @description Return the value of first decimal minus second decimal.
 * @param {number|string|Decimal} alpha
 * @param {number|string|Decimal} beta
 * @returns {number}
 */
export function diff(alpha, beta) {
  const a = new Decimal(alpha);
  const b = new Decimal(beta);
  const c = a.minus(b);
  return c.toNumber();
}
