import { Result } from './result';

export interface Requestable<T> {
	start(callback: (result: Result<T>) => void);
}
