import { Decimal } from "./Decimal";

/**
 * @name diff
 * @description Return the value of first decimal minus second decimal.
 * @param {number|string|Decimal} alpha
 * @param {number|string|Decimal} beta
 * @returns {number}
 */
export function diff(alpha, beta) {
  const psi = new Decimal(alpha);
  const omega = new Decimal(beta);
  const result = psi.minus(omega);
  return result.toNumber();
}
