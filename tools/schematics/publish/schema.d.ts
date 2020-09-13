export interface Schema {
	/**
	 * The packages to publish
	 */
  name?: string;
  /**
   * The version to publish
   */
  version?: string;
  /**
   * Verify check
   */
  verify?: boolean;
}
