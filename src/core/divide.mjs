import { Decimal } from "./Decimal";

/**
 * @name divide
 * @description Return the value of first decimal divided by second decimal.
 * @param {number|string|Decimal} alpha
 * @param {number|string|Decimal} beta
 * @returns {number}
 */
export function divide(alpha, beta) {
  const psi = new Decimal(alpha);
  const omega = new Decimal(beta);
  const result = psi.dividedBy(omega);
  return result.toNumber();
}
