"use strict";
function createAdjective() {
    let adje = document.getElementById("adje");
    let a = adje.children.length;
    adje.appendChild(createDiv({
        elementsToAppend: [
            createTextInput({ elementClass: "ADJ", elementID: `ADJ_${a}`, titleText: "An adjective to describe this shape, for example " }),
            createLabel({ targetId: `ADJ_${a}`, labelText: "ADJ:" })
        ]
    }));
}
function removeAdjective() {
    let adje = document.getElementById("adje");
    let a = adje.children.length;
    if (a > 0) {
        adje.children[a - 1].remove();
    }
}
function checkAdj() {
    let adje = document.getElementById("adje");
    let a = adje.children.length;
    let useAdj = document.getElementById("GEMS_USE_ADJ");
    let useAdjNoun = document.getElementById("GEMS_USE_ADJ_NOUN");
    let check = (a == 0);
    useAdj.disabled = check;
    useAdjNoun.disabled = check;
}
function createCategory() {
    let adje = document.getElementById("cate");
    let a = adje.children.length;
    adje.appendChild(createDiv({
        elementsToAppend: [
            createTextInput({ elementClass: "CATEGORY", elementID: `CATEGORY_${a}`,
                titleText: "A category that this shape falls under. 'SIMPLE', 'PLATONIC', amd 'DICE' are the mains ones, " }),
            createLabel({ targetId: `CATEGORY_${a}`, labelText: "CATEGORY:" })
        ]
    }));
}
function removeCategory() {
    let adje = document.getElementById("cate");
    let a = adje.children.length;
    if (a > 0) {
        adje.children[a - 1].remove();
    }
}
function createShape() {
    clearPastResults("spaces");
    getSingleInput({ inputId: "SHAPE", numberOfTabObjects: 1, ignoreIfBlank: false, ignoreIfDisabled: false });
    pushObject.pushTo.push(pushObject.tabObject, pushObject.tabObject, "[NAME:", getInputElementValue("singular"), ":", getInputElementValue("plural"), "]\n");
    getSingleInput({ inputId: "WORD", ignoreIfBlank: true, numberOfTabObjects: 2 });
    getSingleInput({ inputId: "TILE", ignoreIfBlank: false, numberOfTabObjects: 2 });
    getSingleInput({ inputId: "FACES", valueThatWillBeIgnored: "0", numberOfTabObjects: 2, ignoreIfBlank: true });
    getMultipleInputsByClass({ inputClass: "ADJ", numberOfTabObjects: 2, ignoreIfBlank: true, prefixType: PrefixValueType.class });
    getMultipleInputsByClass({ inputClass: "CATEGORY", numberOfTabObjects: 2, ignoreIfBlank: true, prefixType: PrefixValueType.class });
    getMultipleCheckBoxesByClass({ inputClass: "GEM", numberOfTabObjects: 2, ignoreIfDisabled: true });
    printResults();
}
//# sourceMappingURL=shape.js.map