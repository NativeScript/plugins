const addTaggedAdditionalCSSRE = /addTaggedAdditionalCSS\(/g;
const removeTaggedAdditionalCSSRE = /addTaggedAdditionalCSS\(/g;
const removedFnName = `__noop_removed_by_theme_switcher_loader`;

module.exports = function loader(content, map) {
	// prettier-ignore
	const code = [
        `const ${removedFnName} = () => {}`,
        content
            .replace(addTaggedAdditionalCSSRE, `${removedFnName}(`)
            .replace(removeTaggedAdditionalCSSRE, `${removedFnName}(`)
    ].join('\n');

	this.callback(null, code, map);
};
