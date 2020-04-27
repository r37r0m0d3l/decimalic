import { Decimal } from "./Decimal";

/**
 * @name multiply
 * @description Return the value of first decimal multiplied by second decimal.
 * @param {number|string|Decimal} alpha
 * @param {number|string|Decimal} beta
 * @returns {number}
 */
export function multiply(alpha, beta) {
  const psi = new Decimal(alpha);
  const omega = new Decimal(beta);
  const result = psi.times(omega);
  return result.toNumber();
}
