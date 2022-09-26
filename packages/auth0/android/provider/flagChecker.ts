export class FlagChecker {
	/**
	 * Helper method to check that a given value contains a specific flag.
	 *
	 * @param value       the value to check
	 * @param flagToCheck the required flag
	 * @return true if the flag is present in the value, false otherwise.
	 */
	public static hasFlag(value: number, flagToCheck: number): boolean {
		return (value & flagToCheck) === flagToCheck;
	}
}
