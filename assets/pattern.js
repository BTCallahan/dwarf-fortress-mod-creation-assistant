"use strict";
const stripesOrMotteled = new Set(["STRIPES", "MOTTLED"]);
function addNewPatternColor() {
    let colors = document.getElementById("colors");
    let cc = colors.children.length;
    let ccd = createDiv({
        elementsToAppend: [
            createLabel({ targetId: `COLOR_${cc}`, labelText: "COLOR:" }),
            createTextInput({ elementID: `COLOR_${cc}`, elementClass: "COLOR", pattern: "/[A-Z0-9_]/",
                titleText: "This should be a color value that is defined in 'descriptor_color_standard.txt' on in another file" })
        ], elementToAppendDivTo: colors
    });
}
function deletePatternColor() {
    let colors = document.getElementById("colors");
    let cc = colors.children.length;
    if (cc > (stripesOrMotteled.has(getSelectElementValue("PATTERN")) ? 0 : 1)) {
        colors.children[cc - 1].remove();
    }
}
function createPattern() {
    clearPastResults("spaces");
    pushObject.pushTo.push("[OBJECT:DESCRIPTOR_PATTERN]\n\n");
    getSingleInput({ inputId: "COLOR_PATTERN", numberOfTabObjects: 0, ignoreIfDisabled: false, ignoreIfBlank: false });
    getSingleInput({ inputId: "PATTERN", numberOfTabObjects: 1, ignoreIfDisabled: false, ignoreIfBlank: false });
    getMultipleInputsByClass({
        inputClass: "COLOR", numberOfTabObjects: 1, ignoreIfDisabled: true, prefixType: PrefixValueType.class
    });
    printResults();
}
//# sourceMappingURL=pattern.js.map