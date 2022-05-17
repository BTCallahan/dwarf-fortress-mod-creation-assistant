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
function valueIsValid(value) {
    return (value !== undefined && value !== null);
}
function createNumberInput(input) {
    let conArea = document.createElement("input");
    conArea.type = "number";
    if (valueIsValid(input.inputMin)) {
        conArea.min = input.inputMin;
    }
    if (valueIsValid(input.defaultValue)) {
        conArea.value = input.defaultValue;
    }
    if (valueIsValid(input.inputMax)) {
        conArea.max = input.inputMax;
    }
    if (valueIsValid(input.elementName)) {
        conArea.name = input.elementName;
    }
    if (valueIsValid(input.elementID)) {
        conArea.id = input.elementID;
    }
    if (valueIsValid(input.elementClass)) {
        conArea.className = input.elementClass;
    }
    conArea.step = "1";
    return conArea;
}
function createTextInput(input) {
    let textInput = document.createElement("input");
    textInput.type = "text";
    if (valueIsValid(input.defaultValue)) {
        textInput.value = input.defaultValue;
    }
    if (valueIsValid(input.elementName)) {
        textInput.name = input.elementName;
    }
    if (valueIsValid(input.elementID)) {
        textInput.id = input.elementID;
    }
    if (valueIsValid(input.elementClass)) {
        textInput.className = input.elementClass;
    }
    return textInput;
}
function createCheckbox(input) {
    let ckbox = document.createElement("input");
    ckbox.type = "checkbox";
    if (valueIsValid(input.value)) {
        ckbox.value = input.value;
    }
    if (valueIsValid(input.elementName)) {
        ckbox.name = input.elementName;
    }
    if (valueIsValid(input.elementClass)) {
        ckbox.className = input.elementClass;
    }
    ckbox.checked = input.isActive;
    return ckbox;
}
function createSelectOption(value, text) {
    let blunt = document.createElement("option");
    blunt.value = value;
    blunt.innerText = text;
    return blunt;
}
function enableOrDisableElements(input) {
    let ranged = document.getElementsByClassName(input.className);
    let ranged2 = Array.from(ranged);
    console.log(ranged2);
    ranged2.forEach(element => {
        element.disabled = input.disable;
    });
}
function hideOrUnhideElements(input) {
    input.hideClassNames.forEach(element => {
        let ele = document.getElementsByClassName(element);
        ele.hidden = true;
    });
    input.unhideClassNames.forEach(element => {
        let ele = document.getElementsByClassName(element);
        ele.hidden = false;
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
function getSingleInput(input) {
    let input_ = document.getElementById(input.inputId);
    pushObject.pushTo.push(pushObject.tabObject.repeat(input.numberOfTabObjects), "[", input.inputId, ":", input_.value, "]\n");
    return input_;
}
function getSingleCheckBox(inputId, numberOfTabObjects) {
    let input = document.getElementById(inputId);
    if (input.checked) {
        pushObject.pushTo.push(pushObject.tabObject.repeat(numberOfTabObjects), "[", inputId, ":", input.value, "]\n");
    }
    return input.checked;
}
function getMultipleInputs(input) {
    let tabs = pushObject.tabObject.repeat(input.numberOfTabObjects);
    input.inputIds.forEach(element => {
        let input_ = document.getElementById(element);
        pushObject.pushTo.push(tabs, "[", element, ":", input_.value, "]\n");
    });
}
function getMultipleCheckBoxes(input) {
    let tabs = pushObject.tabObject.repeat(input.numberOfTabObjects);
    if (input.useClassInPlaceOfId) {
        if (input.inputClass === undefined) {
            throw new ReferenceError("The value for input.inputClass is undefined");
        }
        let classElements = document.getElementsByClassName(input.inputClass);
        let classArray = Array.from(classElements);
        if (input.appendClassInFrontOfId) {
            classArray.forEach(element => {
                pushObject.pushTo.push(tabs, "[", input.inputClass, ":", element.id, "]\n");
            });
        }
        else {
            classArray.forEach(element => {
                pushObject.pushTo.push(tabs, "[", element.id, "]\n");
            });
        }
    }
    else {
        if (input.inputIds === undefined) {
            throw new ReferenceError("The value for input.inputIds is undefined");
        }
        input.inputIds.forEach(element => {
            let input_ = document.getElementById(element);
            if (input_.checked) {
                pushObject.pushTo.push(tabs, "[", element, "]\n");
            }
        });
    }
}
function isCheckboxChecked(inputId) {
    let input_ = document.getElementById(inputId);
    return input_.checked;
}
function uncheckCheckbox(input) {
    if (input.uncheckTarget) {
        let target = document.getElementById(input.targetId);
        target.checked = false;
    }
}
//# sourceMappingURL=globalFunctions.js.map