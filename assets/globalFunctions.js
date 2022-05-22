"use strict";
const onlyCapLettersNumbersUnderscores = "/[A-Z0-9_]/";
function newEmptyStringArray() {
    let a = [];
    return a;
}
var pushObject = {
    pushTo: newEmptyStringArray(),
    tabObject: "",
    setTabObject(elementName) {
        let spaces = document.getElementById(elementName);
        let numberOfSpaces = spaces.value;
        this.tabObject = (spaces.value == "0" ? "\t" : " ".repeat(numberOfSpaces));
    },
    setText() {
        this.pushTo = newEmptyStringArray();
    },
    getText() {
        return this.pushTo.join("");
    }
};
var errorObject = {
    errorThrown: false,
    errorMessages: newEmptyStringArray(),
    setErrorMessage() {
        this.errorThrown = false;
        this.errorMessages = newEmptyStringArray();
    },
    getErrorMessage() {
        return this.errorMessages.join("\n");
    }
};
function clearPastResults(elementName) {
    errorObject.errorThrown = false;
    errorObject.errorMessages = newEmptyStringArray();
    pushObject.pushTo = newEmptyStringArray();
    let spaces = document.getElementById(elementName);
    let numberOfSpaces = spaces.value;
    pushObject.tabObject = (spaces.value == "0" ? "\t" : " ".repeat(numberOfSpaces));
}
function printResults() {
    let warning = document.getElementById("warnings");
    warning.innerText = (errorObject.errorThrown ? errorObject.errorMessages.join("\n") : "");
    let div = document.getElementById("result");
    div.innerText = pushObject.pushTo.join("");
}
var PrefixValueType;
(function (PrefixValueType) {
    PrefixValueType[PrefixValueType["id"] = 0] = "id";
    PrefixValueType[PrefixValueType["name"] = 1] = "name";
    PrefixValueType[PrefixValueType["class"] = 2] = "class";
    PrefixValueType[PrefixValueType["value"] = 3] = "value";
})(PrefixValueType || (PrefixValueType = {}));
function valueIsValid(value) {
    return (value !== undefined && value !== null);
}
function createNumberInput({ defaultValue, inputMin, inputMax, elementName, elementID, elementClass, titleText }) {
    let conArea = document.createElement("input");
    conArea.type = "number";
    if (valueIsValid(inputMin)) {
        conArea.min = inputMin;
    }
    if (valueIsValid(defaultValue)) {
        conArea.value = defaultValue;
    }
    if (valueIsValid(inputMax)) {
        conArea.max = inputMax;
    }
    if (valueIsValid(elementName)) {
        conArea.name = elementName;
    }
    if (valueIsValid(elementID)) {
        conArea.id = elementID;
    }
    if (valueIsValid(elementClass)) {
        conArea.className = elementClass;
    }
    if (valueIsValid(titleText)) {
        conArea.title = titleText;
    }
    conArea.step = "1";
    return conArea;
}
function createTextInput({ defaultValue, elementName, elementID, elementClass, titleText, maxLength }) {
    let textInput = document.createElement("input");
    textInput.type = "text";
    if (valueIsValid(defaultValue)) {
        textInput.value = defaultValue;
    }
    if (valueIsValid(elementName)) {
        textInput.name = elementName;
    }
    if (valueIsValid(elementID)) {
        textInput.id = elementID;
    }
    if (valueIsValid(elementClass)) {
        textInput.className = elementClass;
    }
    if (valueIsValid(titleText)) {
        textInput.title = titleText;
    }
    if (valueIsValid(maxLength)) {
        textInput.maxLength = maxLength;
    }
    return textInput;
}
function createCheckbox({ value, isActive = false, elementName, elementId, elementClass, titleText }) {
    let ckbox = document.createElement("input");
    ckbox.type = "checkbox";
    if (valueIsValid(value)) {
        ckbox.value = value;
    }
    if (valueIsValid(elementId)) {
        ckbox.id = elementId;
    }
    if (valueIsValid(elementName)) {
        ckbox.name = elementName;
    }
    if (valueIsValid(elementClass)) {
        ckbox.className = elementClass;
    }
    if (valueIsValid(titleText)) {
        ckbox.title = titleText;
    }
    ckbox.checked = isActive;
    return ckbox;
}
function createSelect({ elementName, elementID, elementClass, titleText }) {
    let select = document.createElement("select");
    if (valueIsValid(elementID)) {
        select.id = elementID;
    }
    if (valueIsValid(elementName)) {
        select.name = elementName;
    }
    if (valueIsValid(elementClass)) {
        select.className = elementClass;
    }
    if (valueIsValid(titleText)) {
        select.title = titleText;
    }
    return select;
}
function createSelectOption({ value, text }) {
    let blunt = document.createElement("option");
    blunt.value = value;
    blunt.innerText = text;
    return blunt;
}
function addOptionToSelect({ value, text, select }) {
    let blunt = document.createElement("option");
    blunt.value = value;
    blunt.innerText = text;
    select.appendChild(blunt);
}
function createFieldset({ fieldsetId, legendText }) {
    let fieldset = document.createElement("fieldset");
    fieldset.id = fieldsetId;
    if (valueIsValid(legendText)) {
        let legend = document.createElement("legend");
        legend.innerText = legendText;
        fieldset.appendChild(legend);
    }
    return fieldset;
}
function createLabel({ targetId, labelText }) {
    let label = document.createElement("label");
    label.htmlFor = targetId;
    label.innerText = labelText;
    return label;
}
function createParagraph({ elementId, elementsToAppend, elementToAppendParagraphTo }) {
    let p = document.createElement("p");
    if (valueIsValid(elementId)) {
        p.id = elementId;
    }
    if (valueIsValid(elementsToAppend)) {
        elementsToAppend === null || elementsToAppend === void 0 ? void 0 : elementsToAppend.forEach((element) => {
            p.appendChild(element);
        });
    }
    if (valueIsValid(elementToAppendParagraphTo)) {
        elementToAppendParagraphTo === null || elementToAppendParagraphTo === void 0 ? void 0 : elementToAppendParagraphTo.appendChild(p);
    }
    return p;
}
function enableOrDisableElements({ disable, className }) {
    let ranged = document.getElementsByClassName(className);
    let ranged2 = Array.from(ranged);
    console.log(ranged2);
    ranged2.forEach(element => {
        element.disabled = disable;
    });
}
function hideOrUnhideElements({ hideClassNames, unhideClassNames }) {
    hideClassNames.forEach(element => {
        let ele = document.getElementsByClassName(element);
        let elea = Array.from(ele);
        elea.forEach((e) => {
            e.hidden = true;
        });
    });
    unhideClassNames.forEach(element => {
        let ele = document.getElementsByClassName(element);
        let elea = Array.from(ele);
        elea.forEach((e) => {
            e.hidden = true;
        });
    });
}
function getInputElementValue(inputId) {
    let input = document.getElementById(inputId);
    return input.value;
}
function getSelectElementValue(inputId) {
    let input = document.getElementById(inputId);
    return input.value;
}
function getSingleInput({ inputId, numberOfTabObjects, ignoreIfDisabled = true, ignoreIfBlank, prefixType = PrefixValueType.id }) {
    let input_ = document.getElementById(inputId);
    if ((!ignoreIfDisabled || !input_.disabled) && (!ignoreIfBlank || input_.value !== "")) {
        let prefix;
        if (prefixType === PrefixValueType.id) {
            prefix = input_.id;
        }
        else {
            prefix = (prefixType === PrefixValueType.name ? input_.name : input_.className);
        }
        pushObject.pushTo.push(pushObject.tabObject.repeat(numberOfTabObjects), "[", prefix, ":", input_.value, "]\n");
    }
    return input_;
}
function getSingleCheckBox({ inputId, numberOfTabObjects, ignoreIfDisabled = true, prefixType = PrefixValueType.id }) {
    let input_ = document.getElementById(inputId);
    if ((!ignoreIfDisabled || !input_.disabled) && input_.checked) {
        let prefix;
        if (prefixType === PrefixValueType.id) {
            prefix = input_.id;
        }
        else if (prefixType === PrefixValueType.value) {
            prefix = input_.value;
        }
        else {
            prefix = (prefixType === PrefixValueType.name ? input_.name : input_.className);
        }
        pushObject.pushTo.push(pushObject.tabObject.repeat(numberOfTabObjects), "[", prefix, "]\n");
    }
    return input_.checked;
}
function getMultipleInputs({ inputIds, inputClass, useClassInPlaceOfId = false, appendClassInFrontOfId = false, numberOfTabObjects, ignoreIfDisabled = false }) {
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);
    let classElements = [];
    if (useClassInPlaceOfId) {
        if (inputClass === undefined) {
            throw new ReferenceError("The value for input.inputClass is undefined");
        }
        let temp = document.getElementsByClassName(inputClass);
        classElements = Array.from(temp);
    }
    else {
        if (inputIds === undefined) {
            throw new ReferenceError("The value for input.inputIds is undefined");
        }
        inputIds.forEach(element => {
            let el = document.getElementById(element);
            classElements.push(el);
        });
    }
    if (ignoreIfDisabled) {
        let t = classElements.filter((value) => {
            return !value.disabled;
        });
        classElements = t;
    }
    if (appendClassInFrontOfId) {
        classElements.forEach((element) => {
            pushObject.pushTo.push(tabs, "[", inputClass, ":", element.value, "]\n");
        });
    }
    else {
        classElements.forEach((element) => {
            pushObject.pushTo.push(tabs, "[", element.id, ":", element.value, "]\n");
        });
    }
}
function getMultipleCheckBoxes({ inputIds = undefined, inputClass = undefined, useClassInPlaceOfId = false, appendClassInFrontOfId = false, numberOfTabObjects, ignoreIfDisabled = true, useElementValueInsteadOfId = false }) {
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);
    let classElements = [];
    if (useClassInPlaceOfId) {
        if (inputClass === undefined) {
            throw new ReferenceError("The value for input.inputClass is undefined");
        }
        let temp = document.getElementsByClassName(inputClass);
        classElements = Array.from(temp);
    }
    else {
        if (inputIds === undefined) {
            throw new ReferenceError("The value for input.inputIds is undefined");
        }
        inputIds.forEach(element => {
            classElements.push(document.getElementById(element));
        });
    }
    if (ignoreIfDisabled) {
        let t = classElements.filter((value) => {
            return !value.disabled;
        });
        classElements = t;
    }
    let checked = classElements.filter((value) => {
        return value.checked;
    });
    let ck = (useElementValueInsteadOfId ? checked.map((element) => {
        return element.value;
    }) : checked.map((element) => {
        return element.id;
    }));
    if (appendClassInFrontOfId) {
        ck.forEach(element => {
            pushObject.pushTo.push(tabs, "[", inputClass, ":", element, "]\n");
        });
    }
    else {
        ck.forEach(element => {
            pushObject.pushTo.push(tabs, "[", element, "]\n");
        });
    }
}
function isCheckboxChecked(inputId) {
    let input_ = document.getElementById(inputId);
    return input_.checked;
}
function uncheckCheckbox({ uncheckTarget, targetId }) {
    if (uncheckTarget) {
        let target = document.getElementById(targetId);
        target.checked = false;
    }
}
//# sourceMappingURL=globalFunctions.js.map