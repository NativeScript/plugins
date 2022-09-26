import { AuthTransaction } from './authTransaction';

/// Keeps track of current Auth Transaction
export class TransactionStore {
	public static shared = new TransactionStore();

	private _current?: AuthTransaction;

	public get current(): AuthTransaction {
		return this._current;
	}

	public resume(url: NSURL, options: NSDictionary<string, any>): boolean {
		let resumed = this._current != null ? this._current.resume(url, options) : false;
		if (resumed != null) {
			this._current = undefined;
		}
		return resumed;
	}

	public store(transaction: AuthTransaction) {
		if (this._current != null) {
			this._current.cancel();
		}
		this._current = transaction;
	}

	public cancel(transaction: AuthTransaction) {
		transaction.cancel();
		if (this._current != null && this._current.state === transaction.state) {
			this._current = undefined;
		}
	}

	public clear() {
		this._current = undefined;
	}
}
