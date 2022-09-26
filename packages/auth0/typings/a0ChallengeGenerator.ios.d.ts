declare class A0SHA256ChallengeGenerator extends NSObject {
	static alloc(): A0SHA256ChallengeGenerator; // inherited from NSObject

	static new(): A0SHA256ChallengeGenerator; // inherited from NSObject

	readonly challenge: string;

	readonly method: string;

	readonly verifier: string;

	constructor(o: { verifier: NSData });

	initWithVerifier(verifier: NSData): this;
}
