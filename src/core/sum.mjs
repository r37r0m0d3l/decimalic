import { Decimal } from "./Decimal";

/**
 * @name sum
 * @description Return the value of first decimal plus second decimal.
 * @param {number|string|Decimal} alpha
 * @param {number|string|Decimal} beta
 * @returns {number}
 */
export function sum(alpha, beta) {
  const psi = new Decimal(alpha);
  const omega = new Decimal(beta);
  const result = psi.plus(omega);
  return result.toNumber();
}
