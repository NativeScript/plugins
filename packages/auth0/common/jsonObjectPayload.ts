export interface JSONObjectPayload<T> {
	initWithJson(json: { [key: string]: any }): T;
}
