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
/**
 * Checks if the value is not undefined or is not null
 * @param value The value to evaluated
 * @returns true if the value is not undefined or null, false if it is undefined or null
 */
function valueIsValid(value) {
    return (value !== undefined && value !== null);
}
/**
 * Creates and returns a number HTMLInputElement object
 * @param param0 A destructable object containing several fields, all optional.
 * defaultValue - A string that is assigned to the value field. Must be int parsable
 * inputMin - A string that is assigned to the min field. Must be int parsable
 * inputMax - A string that is assigned to the max field. Must be int parsable
 * elementName - A string that is assigned to the name field
 * elementID - A string that is assigned to the id field
 * elementClass - A string that is assigned to the className field
 * titleText - A string that is assigned to the title field
 * @returns A HTMLInputElement object
 */
function createNumberInput({ defaultValue, inputMin, inputMax, elementName, elementID, elementClass, titleText, mouseonchange }) {
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
    if (valueIsValid(mouseonchange)) {
        conArea.onchange = mouseonchange;
    }
    conArea.step = "1";
    return conArea;
}
/**
 * Creates and returns a text HTMLInputElement object
 * @param param0 A destructable object containing several fields, all optional.
 * defaultValue - A defualt string value that will be assigned to the value field
 * elementName - A string that is assigned to the name field
 * elementID - A string that is assigned to the id field
 * elementClass - A string that is assigned to the className field
 * titleText - A string that is assigned to the title field
 * maxLength - A number that will be assigned to the maxLength field
 * @returns A HTMLInputElement object
 */
function createTextInput({ defaultValue, elementName, elementID, elementClass, titleText, pattern, maxLength, required = false }) {
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
    if (valueIsValid(pattern)) {
        textInput.pattern = pattern;
    }
    if (valueIsValid(maxLength)) {
        textInput.maxLength = maxLength;
    }
    textInput.required = required;
    return textInput;
}
/**
 * Creates and returns a checkbox HTMLInputElement object
 * @param param0 A destructable object containing several fields, all optional.
 * value - A string value that will be assigne to the checkbox
 * isActive - A boolean. If true, the new checkbox will be checked
 * elementName - A string that is assigned to the name field
 * elementID - A string that is assigned to the id field
 * elementClass - A string that is assigned to the className field
 * titleText - A string that is assigned to the title field
 * @returns A HTMLInputElement object
 */
function createCheckbox({ value, isActive = false, elementName, elementId, elementClass, titleText, mouseonclick }) {
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
    if (valueIsValid(mouseonclick)) {
        ckbox.onclick = mouseonclick;
    }
    ckbox.checked = isActive;
    return ckbox;
}
/**
 * Creates and returns a HTMLSelectElement object
 * @param param0 A destructable object containing several fields, all optional.
 * value - A string value that will be assigne to the checkbox
 * isActive - A boolean. If true, the new checkbox will be checked
 * elementName - A string that is assigned to the name field
 * elementID - A string that is assigned to the id field
 * elementClass - A string that is assigned to the className field
 * @returns A HTMLSelectElement object
 */
function createSelect({ elementName, elementID, elementClass, titleText, options, defualtValue, mouseonchange }) {
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
    if (valueIsValid(options)) {
        options === null || options === void 0 ? void 0 : options.forEach(element => {
            select.appendChild(element);
        });
        if (valueIsValid(defualtValue)) {
            select.value = defualtValue;
        }
    }
    if (valueIsValid(mouseonchange)) {
        select.onchange = mouseonchange;
    }
    return select;
}
function createSelectOption({ value, text }) {
    let blunt = document.createElement("option");
    blunt.value = value;
    blunt.innerText = text;
    return blunt;
}
/**
 * Creates a HTMLOptionElement object and appends it to a HTMLSelectElement
 * @param param0 A destructable object containing three fields
 * value - A string that will be assigned to the value field of the new option
 * text - A string that will be assigned to the innerText field of the new option
 * select - The HTMLSelectElement that the option will be appended to
 */
function addOptionToSelect({ value, text, select }) {
    let blunt = document.createElement("option");
    blunt.value = value;
    blunt.innerText = text;
    select.appendChild(blunt);
}
/**
 * Creates and returns a HTMLLabelElement
 * @param param0 A destructable object containing two fields
 * targetId - A string that will be assigned to the htmlFor field of the label
 * labelText - A string that will be assigned to the innerText field of the label
 * @returns A HTMLLabelElement
 */
function createLabel({ targetId, labelText }) {
    let label = document.createElement("label");
    label.htmlFor = targetId;
    label.innerText = labelText;
    return label;
}
/**
 * Creates and returns a HTMLButtonElement
 * @param param0 A destructable object containing seven fields
 * value - A string that will be assigned to the value field of the button. Optional
 * innerText - A string that will be assigned to the innerText field of the button
 * elementName - A string that will be assigned to the name field of the button. Optional
 * elementId - A string that will be assigned to the id field of the button. Optional
 * elementClass - A string that will be assigned to the className field of the button. Optional
 * titleText - A string that will be assigned to the title field of the button. Optional
 * mouseonclick - A function that will be assigned to the onclick field of the button
 * @returns HTMLButtonElement
 */
function createButton({ value, innerText, elementName, elementId, elementClass, titleText, mouseonclick }) {
    let button = document.createElement("button");
    button.innerText = innerText;
    if (valueIsValid(mouseonclick)) {
        button.onclick = mouseonclick;
    }
    if (valueIsValid(value)) {
        button.value = value;
    }
    if (valueIsValid(elementId)) {
        button.id = elementId;
    }
    if (valueIsValid(elementName)) {
        button.name = elementName;
    }
    if (valueIsValid(elementClass)) {
        button.className = elementClass;
    }
    if (valueIsValid(titleText)) {
        button.title = titleText;
    }
    return button;
}
function createOrderedList(listItems) {
    let ol = document.createElement("ol");
    listItems.forEach(element => {
        let li = document.createElement("li");
        ol.appendChild(li);
        li.innerText = element;
    });
    return ol;
}
/**
 * Creates and returns a HTMLFieldsetElement. If legendText is defined, a HTMLLegendElement will also be created and appended to the HTMLFieldsetElement
 * @param param0 A destructable object containing two fields
 * fieldsetId - A string that will be assigned to the id field
 * legendText - A string that will be assigned to the innertext field of the HTMLLegendElement. Optional, if undefined, the HTMLLegendElement will not be created
 * elementsToAppend - A HTMLElement array of elements that will be appended to the HTMLFieldsetElement
 * @returns A HTMLFieldsetElement
 */
function createFieldset({ fieldsetId, legendText, elementsToAppend, elementToAppendTo, innerText }) {
    let fieldset = document.createElement("fieldset");
    if (valueIsValid(innerText)) {
        fieldset.innerText = innerText;
    }
    if (valueIsValid(fieldsetId)) {
        fieldset.id = fieldsetId;
    }
    if (valueIsValid(legendText)) {
        let legend = document.createElement("legend");
        legend.innerText = legendText;
        fieldset.appendChild(legend);
    }
    if (valueIsValid(elementsToAppend)) {
        elementsToAppend === null || elementsToAppend === void 0 ? void 0 : elementsToAppend.forEach(element => {
            fieldset.appendChild(element);
        });
    }
    if (valueIsValid(elementToAppendTo)) {
        elementToAppendTo === null || elementToAppendTo === void 0 ? void 0 : elementToAppendTo.appendChild(fieldset);
    }
    return fieldset;
}
/**
 * Creates and returns a HTMLParagraphElement
 * @param param0 A destructable object containing four fields, all optional
 * elementId - A string that will be assigned to the id field of the HTMLParagraphElement
 * className - A string that will be assigned to the className field of the HTMLParagraphElement
 * elementsToAppend - A HTMLElement array. The individual elements will be appended to the HTMLParagraphElement
 * elementToAppendParagraphTo - A HTMLElement. The created HTMLParagraphElement will be appended to elementToAppendParagraphTo
 * @returns a HTMLParagraphElement
 */
function createParagraph({ elementId, className, innerText, elementsToAppend, elementToAppendParagraphTo }) {
    let p = document.createElement("p");
    if (valueIsValid(elementId)) {
        p.id = elementId;
    }
    if (valueIsValid(className)) {
        p.className = className;
    }
    if (valueIsValid(innerText)) {
        p.innerText = innerText;
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
/**
 * Creates and returns a HTMLDivElement
 * @param param0 A destructable object containing four fields, all optional
 * elementId - A string that will be assigned to the id field of the HTMLDivElement
 * className - A string that will be assigned to the className field of the HTMLDivElement
 * elementsToAppend - A HTMLElement array. The individual elements will be appended to the HTMLDivElement
 * elementToAppendParagraphTo - A HTMLElement. The created HTMLDivElement will be appended to elementToAppendParagraphTo
 * @returns a HTMLDivElement
 */
function createDiv({ elementId, className, innerText, elementsToAppend, elementToAppendDivTo }) {
    let p = document.createElement("div");
    if (valueIsValid(elementId)) {
        p.id = elementId;
    }
    if (valueIsValid(className)) {
        p.className = className;
    }
    if (valueIsValid(innerText)) {
        p.innerText = innerText;
    }
    if (valueIsValid(elementsToAppend)) {
        elementsToAppend === null || elementsToAppend === void 0 ? void 0 : elementsToAppend.forEach((element) => {
            p.appendChild(element);
        });
    }
    if (valueIsValid(elementToAppendDivTo)) {
        elementToAppendDivTo === null || elementToAppendDivTo === void 0 ? void 0 : elementToAppendDivTo.appendChild(p);
    }
    return p;
}
function createTable({ elementId, headerTextItems }) {
    let t = document.createElement("table");
    t.createTBody();
    t.id = elementId;
    let h = t.createTHead();
    let r = h.insertRow();
    headerTextItems.forEach(element => {
        let cell = r.insertCell();
        cell.innerText = element;
    });
    return t;
}
/**
 * Itterates over a HTMLInputElement array and sets the disabled field of them to true or false
 * @param param0 A destructable object containing two fields
 * disable - A boolean. If true, then all HTMLInputElements will be disabled. If false, all HTMLInputElements will be enabled
 * className - A string that will be used to in a getElementsByClassName function call to creae the array of HTMLInputElements that will be itterated over
 */
function enableOrDisableElements({ disable, className }) {
    let ranged = document.getElementsByClassName(className);
    let ranged2 = Array.from(ranged);
    console.log(ranged2);
    ranged2.forEach(element => {
        element.disabled = disable;
    });
}
function hideOrUnhideElements({ hide, className }) {
    let ranged = document.getElementsByClassName(className);
    let ranged2 = Array.from(ranged);
    console.log(ranged2);
    ranged2.forEach(element => {
        element.hidden = hide;
    });
}
function hideAndUnhideElements({ hideClassNames, unhideClassNames }) {
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
            e.hidden = false;
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
/**
 * Pushes the value of an element to the pushObject.pushTo array. The value will be preceded by a prefix
 * @param param0 A destructable object containing five fields
 * inputId - A string representing the id of the object
 * numberOfTabObjects - A number used to
 * ignoreIfDisabled - A boolean. If true, and the field is disabled, nothing will be pushed to the array. Optional, defualts to true
 * ignoreIfBlank - A boolean. If true, and the field has a value of "", nothing will be pushed to the array
 * prefixType - An PrefixValueType enum.
 * @returns
 */
function getSingleInput({ inputId, numberOfTabObjects, ignoreIfDisabled = true, ignoreIfBlank = true, prefixType = PrefixValueType.id, valueThatWillBeIgnored }) {
    let input_ = document.getElementById(inputId);
    if ((!ignoreIfDisabled || !input_.disabled) && (!ignoreIfBlank || input_.value !== "") && (!valueIsValid(valueThatWillBeIgnored) || input_.value !== valueThatWillBeIgnored)) {
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
/**
 * Pushes the value of multiple elements to the pushObject.pushTo array. The value will be preceded by a prefix
 * @param param0 A destructable object containing nine fields
 * inputIds - A string array representing the id of the objects. Optional. If useClassInPlaceOfId is false, and inputIds is undefined, an error will be thrown
 * numberOfTabObjects - A number used to determin the number of tabs that are place before the text that is pushed
 * ignoreIfDisabled - Boolean. If true, and the field is disabled, it will be ignored. Optional, defualts to true
 * ignoreIfBlank - Boolean. If true, and the field has a value of "", nothing will be pushed to the array
 * prefixType - An PrefixValueType enum. This determins the if the prefix that is appended before the element value will be the elements id, name, or class
 */
function getMultipleInputsById({ inputIds, numberOfTabObjects, ignoreIfDisabled = false, ignoreIfBlank = false, prefixType = PrefixValueType.id }) {
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);
    let classElements = inputIds.map(element => {
        return document.getElementById(element);
    });
    if (ignoreIfDisabled) {
        let t = classElements.filter((value) => {
            return !value.disabled;
        });
        classElements = t;
    }
    if (ignoreIfBlank) {
        let t = classElements.filter((value) => {
            return value.value !== "";
        });
        classElements = t;
    }
    let prefixes = (prefixType === PrefixValueType.name ?
        classElements.map((value) => {
            return `${value.name}:${value.value}`;
        }) : classElements.map((value) => {
        return `${value.id}:${value.value}`;
    }));
    prefixes.forEach(element => {
        pushObject.pushTo.push(tabs, "[", element, "]\n");
    });
}
/**
 * Pushes the value of multiple elements to the pushObject.pushTo array. The value will be preceded by a prefix
 * @param param0 A destructable object containing nine fields
 * inputIds - A string array representing the id of the objects. Optional. If useClassInPlaceOfId is false, and inputIds is undefined, an error will be thrown
 * useClassInPlaceOfId - Boolean. If true, a getElementsByClassName function call will be used instead of getElementById. Optional, defualts to false
 * parentElement - HTMLElement. If defined, and useClassInPlaceOfId is true, a parentElement.getElementsByClassName function call will be used instead of document.getElementsByClassName
 * inputClass - A string that will be used in a getElementsByClassName function call. Optional. If useClassInPlaceOfId is true, and inputClass is undefined, an error will be thrown
 * numberOfTabObjects - A number used to determin the number of tabs that are place before the text that is pushed
 * ignoreIfDisabled - Boolean. If true, and the field is disabled, it will be ignored. Optional, defualts to true
 * ignoreIfBlank - Boolean. If true, and the field has a value of "", nothing will be pushed to the array
 * prefixType - An PrefixValueType enum. This determins the if the prefix that is appended before the element value will be the elements id, name, or class
 * appendClassInFrontOfId - Boolean. If true, and prefixType is not PrefixValueType.class, the class will be appende infront of the prefix. Optional, defualts to false
 */
function getMultipleInputs({ inputIds, inputClass, useClassInPlaceOfId = false, appendClassInFrontOfId = false, parentElement, numberOfTabObjects, ignoreIfDisabled = false, ignoreIfBlank = false, prefixType = PrefixValueType.id }) {
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);
    let classElements = [];
    if (useClassInPlaceOfId) {
        if (!valueIsValid(inputClass)) {
            throw new ReferenceError("The value for input.inputClass is undefined");
        }
        let temp = (valueIsValid(parentElement) ?
            document.getElementsByClassName(inputClass) :
            parentElement === null || parentElement === void 0 ? void 0 : parentElement.getElementsByClassName(inputClass));
        classElements = Array.from(temp);
    }
    else {
        if (!valueIsValid(inputIds)) {
            throw new ReferenceError("The value for input.inputIds is undefined");
        }
        inputIds === null || inputIds === void 0 ? void 0 : inputIds.forEach(element => {
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
    if (ignoreIfBlank) {
        let t = classElements.filter((value) => {
            return value.value !== "";
        });
        classElements = t;
    }
    if (prefixType === PrefixValueType.class) {
        classElements.forEach((element) => {
            pushObject.pushTo.push(tabs, "[", inputClass, ":", element.value, "]\n");
        });
    }
    else {
        let prefixes = (prefixType === PrefixValueType.name ?
            classElements.map((value) => {
                return `${value.name}:${value.value}`;
            }) : classElements.map((value) => {
            return `${value.id}:${value.value}`;
        }));
        if (appendClassInFrontOfId) {
            prefixes.forEach((element) => {
                pushObject.pushTo.push(tabs, "[", inputClass, ":", element, "]\n");
            });
        }
        else {
            prefixes.forEach((element) => {
                pushObject.pushTo.push(tabs, "[", element, "]\n");
            });
        }
    }
}
/**
 * Pushes the value of multiple elements to the pushObject.pushTo array. The value will be preceded by a prefix
 * @param param0 A destructable object containing nine fields
 * inputClass - A string that will be used in a getElementsByClassName function call. Optional. If useClassInPlaceOfId is true, and inputClass is undefined, an error will be thrown
 * useClassInPlaceOfId - Boolean. If true, a getElementsByClassName function call will be used instead of getElementById. Optional, defualts to false
 * numberOfTabObjects - A number used to determin the number of tabs that are place before the text that is pushed
 * parentElement - HTMLElement. If defined, and useClassInPlaceOfId is true, a parentElement.getElementsByClassName function call will be used instead of document.getElementsByClassName
 * ignoreIfDisabled - Boolean. If true, and the field is disabled, it will be ignored. Optional, defualts to true
 * ignoreIfBlank - Boolean. If true, and the field has a value of "", nothing will be pushed to the array
 * prefixType - An PrefixValueType enum. This determins the if the prefix that is appended before the element value will be the elements id, name, or class
 * appendClassInFrontOfId - Boolean. If true, and prefixType is not PrefixValueType.class, the class will be appende infront of the prefix. Optional, defualts to false
 */
function getMultipleInputsByClass({ inputClass, parentElement, numberOfTabObjects, ignoreIfDisabled = false, ignoreIfBlank = true, appendClassInFrontOfId = false, concitrateInFrontOfClassName = false, prefixType = PrefixValueType.id, valueThatWillBeIgnored }) {
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);
    let classElements = Array.from(valueIsValid(parentElement) ?
        parentElement === null || parentElement === void 0 ? void 0 : parentElement.getElementsByClassName(inputClass) :
        document.getElementsByClassName(inputClass));
    if (ignoreIfDisabled) {
        let temp = classElements.filter(element => {
            return !element.disabled;
        });
        classElements = temp;
    }
    if (ignoreIfBlank) {
        let temp = classElements.filter(element => {
            return element.value !== "";
        });
        classElements = temp;
    }
    if (valueIsValid(valueThatWillBeIgnored)) {
        let temp = classElements.filter(element => {
            return element.value !== valueThatWillBeIgnored;
        });
        classElements = temp;
    }
    if (prefixType === PrefixValueType.class) {
        classElements.forEach((element) => {
            pushObject.pushTo.push(tabs, "[", inputClass, ":", element.value, "]\n");
        });
    }
    else {
        let prefixes = (prefixType === PrefixValueType.name ?
            classElements.map((value) => {
                return `${value.name}:${value.value}`;
            }) : classElements.map((value) => {
            return `${value.id}:${value.value}`;
        }));
        if (appendClassInFrontOfId) {
            if (concitrateInFrontOfClassName) {
                pushObject.pushTo.push(tabs, "[", prefixes.join(":"), "]\n");
            }
            else {
                prefixes.forEach((element) => {
                    pushObject.pushTo.push(tabs, "[", inputClass, ":", element, "]\n");
                });
            }
        }
        else {
            prefixes.forEach((element) => {
                pushObject.pushTo.push(tabs, "[", element, "]\n");
            });
        }
    }
}
function getMultipleCheckBoxesById({ inputIds, numberOfTabObjects, ignoreIfDisabled = true, elementType = PrefixValueType.id }) {
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);
    let classElements = inputIds.map(element => {
        return document.getElementById(element);
    });
    if (ignoreIfDisabled) {
        let t = classElements.filter((value) => {
            return !value.disabled;
        });
        classElements = t;
    }
    let checked = classElements.filter((value) => {
        return value.checked;
    });
    let ck = [];
    switch (elementType) {
        case PrefixValueType.id:
            ck = checked.map((element) => {
                return element.id;
            });
            break;
        case PrefixValueType.value:
            ck = checked.map((element) => {
                return element.value;
            });
            break;
        default:
            ck = ck = checked.map((element) => {
                return element.name;
            });
            break;
    }
    ck.forEach(element => {
        pushObject.pushTo.push(tabs, "[", element, "]\n");
    });
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
function getMultipleCheckBoxesByClass({ inputClass, appendClassInFrontOfId = false, numberOfTabObjects, ignoreIfDisabled = true, elementType = PrefixValueType.id }) {
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);
    let classElements = Array.from(document.getElementsByClassName(inputClass));
    ;
    if (ignoreIfDisabled) {
        let t = classElements.filter((value) => {
            return !value.disabled;
        });
        classElements = t;
    }
    let checked = classElements.filter((value) => {
        return value.checked;
    });
    if (appendClassInFrontOfId) {
        let ck = [];
        switch (elementType) {
            case PrefixValueType.id:
                ck = checked.map((element) => {
                    return element.id;
                });
                break;
            case PrefixValueType.name:
                ck = checked.map((element) => {
                    return element.name;
                });
                break;
            default:
                ck = checked.map((element) => {
                    return element.value;
                });
                break;
        }
        ck.forEach(element => {
            pushObject.pushTo.push(tabs, "[", inputClass, ":", element, "]\n");
        });
    }
    else {
        let ck = [];
        switch (elementType) {
            case PrefixValueType.id:
                ck = checked.map((element) => {
                    return element.id;
                });
                break;
            case PrefixValueType.name:
                ck = checked.map((element) => {
                    return element.name;
                });
                break;
            case PrefixValueType.value:
                ck = checked.map((element) => {
                    return element.value;
                });
                break;
            default:
                ck = checked.map((element) => {
                    return inputClass;
                });
                break;
        }
        ck.forEach(element => {
            pushObject.pushTo.push(tabs, "[", element, "]\n");
        });
    }
}
function getColor({ colorContainterId, numberOfTabObjects, itemOrder }) {
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);
    let p = document.getElementById(colorContainterId);
    let fg = p.getElementsByClassName("foreground");
    let bg = p.getElementsByClassName("background");
    let br = p.getElementsByClassName("brightness");
    let fg2 = fg.item(itemOrder);
    let bg2 = bg.item(itemOrder);
    let br2 = br.item(itemOrder);
    pushObject.pushTo.push(tabs, "[", colorContainterId, ":", fg2.value, ":", bg2.value, ":", br2.value, "]\n");
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