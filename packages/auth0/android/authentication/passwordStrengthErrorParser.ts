import TextUtils = android.text.TextUtils;

export class PasswordStrengthErrorParser {
	private static readonly RULE_TYPE_LENGTH_AT_LEAST: string = 'lengthAtLeast';
	private static readonly RULE_TYPE_CONTAINS_AT_LEAST: string = 'containsAtLeast';
	private static readonly RULE_TYPE_SHOULD_CONTAIN: string = 'shouldContain';
	private static readonly RULE_TYPE_IDENTICAL_CHARS: string = 'identicalChars';

	private static readonly KEY_RULES: string = 'rules';
	private static readonly KEY_CODE: string = 'code';
	private static readonly KEY_VERIFIED: string = 'verified';
	private static readonly KEY_FORMAT: string = 'format';
	private static readonly KEY_ITEMS: string = 'items';
	private static readonly KEY_MESSAGE: string = 'message';

	private description: string;

	constructor(descriptionMap: { [key: string]: any }) {
		const rules = descriptionMap[PasswordStrengthErrorParser.KEY_RULES] as Array<{ [key: string]: any }>;
		this.parseRules(rules);
	}

	public getDescription(): string {
		return this.description;
	}

	private parseRules(rules: Array<{ [key: string]: any }>) {
		const items: string[] = [];
		for (const rule of rules) {
			const isVerified = rule[PasswordStrengthErrorParser.KEY_VERIFIED] as boolean;
			if (isVerified) {
				continue;
			}
			const code: string = rule[PasswordStrengthErrorParser.KEY_CODE];
			switch (code) {
				case PasswordStrengthErrorParser.RULE_TYPE_LENGTH_AT_LEAST:
					items.push(this.asLengthAtLeast(rule));
					break;
				case PasswordStrengthErrorParser.RULE_TYPE_IDENTICAL_CHARS:
					items.push(this.asIdenticalChars(rule));
					break;
				case PasswordStrengthErrorParser.RULE_TYPE_CONTAINS_AT_LEAST:
				case PasswordStrengthErrorParser.RULE_TYPE_SHOULD_CONTAIN:
					items.push(this.asContainsCharset(rule));
					break;
			}
		}

		this.description = items.join('; ');
	}

	private asLengthAtLeast(rule: { [key: string]: any }): string {
		const length = rule[PasswordStrengthErrorParser.KEY_FORMAT] as number[];
		const message: string = rule[PasswordStrengthErrorParser.KEY_MESSAGE];
		return java.lang.String.format(message, [length[0]]);
	}

	private asContainsCharset(rule: { [key: string]: any }): string {
		const itemsList = rule[PasswordStrengthErrorParser.KEY_ITEMS] as Array<{ [key: string]: any }>;
		const items: string[] = [];
		for (const i of itemsList) {
			items.push(i[PasswordStrengthErrorParser.KEY_MESSAGE]);
		}
		const requiredItems: string = items.join(', ');
		let message: string = rule[PasswordStrengthErrorParser.KEY_MESSAGE];

		if (rule.containsKey(PasswordStrengthErrorParser.KEY_FORMAT)) {
			const quantity = rule[PasswordStrengthErrorParser.KEY_FORMAT] as number[];
			message = java.lang.String.format(message, [quantity[0], quantity[1]]);
		}

		return java.lang.String.format(message, [requiredItems]);
	}

	private asIdenticalChars(rule: { [key: string]: any }): string {
		const example = rule[PasswordStrengthErrorParser.KEY_FORMAT] as any[];
		const count = example[0] as number;
		const message: string = rule[PasswordStrengthErrorParser.KEY_MESSAGE];
		return java.lang.String.format(message, [count, example[1]]);
	}
}
