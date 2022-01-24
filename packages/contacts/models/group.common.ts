export abstract class GroupCommon {
	id: string;
	name: string;

	abstract initializeFromNative(nativeData): void;
	abstract save(useDefault): void;
	abstract delete(): void;
	abstract addMember(contact): void;
	abstract removeMember(contact): void;
}
