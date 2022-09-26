import { DefaultLogger, Logger } from './logger';

export interface Loggable {
	logger: Logger | undefined;
}

export class LoggableExtension {
	/**
     Turn on Auth0.swift debug logging of HTTP requests and OAuth2 flow (iOS only) with a custom logger.

     - parameter logger: logger used to print log statements
     - note: By default all logging is **disabled**
     - important: Logging should be turned on/off **before** making request to Auth0 for the flag to take effect.
     */
	public static using(loggable: Loggable, logger: Logger): Loggable {
		loggable.logger = logger;
		return loggable;
	}

	/**
     Turn on/off Auth0.swift debug logging of HTTP requests and OAuth2 flow (iOS only).

     - parameter enabled: optional flag to turn on/off logging
     - note: By default all logging is **disabled**
     - important: Logging should be turned on/off **before** making request to Auth0 for the flag to take effect.
     */
	public static logging(loggable: Loggable, enabled: boolean): Loggable {
		if (enabled) {
			loggable.logger = new DefaultLogger();
		} else {
			loggable.logger = undefined;
		}
		return loggable;
	}
}
