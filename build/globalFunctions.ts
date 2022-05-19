const onlyCapLettersNumbersUnderscores = "/[A-Z0-9_]/"

function newEmptyStringArray()
{
    let a:string[] = [];

    return a;
}

var pushObject = {

    pushTo:newEmptyStringArray(),
    tabObject:"",

    setTabObject(elementName:string) 
    {
        let spaces = <HTMLInputElement><any> document.getElementById(elementName);

        let numberOfSpaces = ((spaces.value as unknown) as number);

        this.tabObject = (spaces.value == "0" ? "\t" : " ".repeat(numberOfSpaces));
    },
    setText()
    {
        this.pushTo = newEmptyStringArray();
    },
    getText()
    {
        return this.pushTo.join("");
    }
}

var errorObject = {
    errorThrown:false,
    errorMessages:newEmptyStringArray(),

    setErrorMessage()
    {
        this.errorThrown = false;
        this.errorMessages = newEmptyStringArray();
    },
    getErrorMessage()
    {
        return this.errorMessages.join("\n");
    }
}

function valueIsValid(value:any)
{
    return (value !== undefined && value !== null)
}

function createNumberInput(input:{defaultValue?:string, inputMin?:string, inputMax?:string, elementName?:string, elementID?:string, elementClass?:string})
{
    let conArea = document.createElement("input");

    conArea.type = "number";

    if (valueIsValid(input.inputMin))
    {
        conArea.min = input.inputMin as string;
    }
    if (valueIsValid (input.defaultValue))
    {
        conArea.value = input.defaultValue as string;
    }
    if (valueIsValid(input.inputMax))
    {
        conArea.max = input.inputMax as string;
    }
    if (valueIsValid(input.elementName))
    {
        conArea.name = input.elementName as string;
    }
    if (valueIsValid(input.elementID))
    {
        conArea.id = input.elementID as string;
    }
    if (valueIsValid(input.elementClass))
    {
        conArea.className = input.elementClass as string;
    }
    conArea.step = "1";

    return conArea;
}

function createTextInput(input:{defaultValue?:string, elementName?:string, elementID?:string, elementClass?:string})
{
    let textInput = document.createElement("input");

    textInput.type = "text";

    if (valueIsValid(input.defaultValue))
    {
        textInput.value = input.defaultValue as string;
    }
    if (valueIsValid(input.elementName))
    {
        textInput.name = input.elementName as string;
    }
    if (valueIsValid(input.elementID))
    {
        textInput.id = input.elementID as string;
    }
    if (valueIsValid(input.elementClass))
    {
        textInput.className = input.elementClass as string;
    }
    return textInput;
}

function createCheckbox(input:{value?:string, isActive:boolean, elementName?:string, elementClass?:string})
{
    let ckbox = document.createElement("input");

    ckbox.type = "checkbox";

    if (valueIsValid(input.value))
    {
        ckbox.value = input.value as string;
    }
    if (valueIsValid(input.elementName))
    {
        ckbox.name = input.elementName as string;
    }
    if (valueIsValid(input.elementClass))
    {
        ckbox.className = input.elementClass as string;
    }
    ckbox.checked = input.isActive;

    return ckbox;
}

function createSelectOption(value:string, text:string)
{
    let blunt = document.createElement("option");

    blunt.value = value;

    blunt.innerText = text;

    return blunt;
}

function enableOrDisableElements(input:{disable:boolean, className:string}) {

    let ranged = <HTMLCollection><any> document.getElementsByClassName(input.className);

    let ranged2 = <HTMLInputElement[]> Array.from(ranged);

    console.log(ranged2);

    ranged2.forEach(element => {
        element.disabled = input.disable
    });
}

function hideOrUnhideElements({hideClassNames, unhideClassNames}:{hideClassNames:string[], unhideClassNames:string[]})
{
    hideClassNames.forEach(element => {
        
        let ele = <HTMLElement><any> document.getElementsByClassName(element);

        ele.hidden = true;
    });
    unhideClassNames.forEach(element => {
        
        let ele = <HTMLElement><any> document.getElementsByClassName(element);

        ele.hidden = false;
    })
}

function getInputElementValue(inputId:string) 
{
    let input = <HTMLInputElement><any> document.getElementById(inputId);

    return input.value;
}

function getSelectElementValue(inputId:string) 
{
    let input = <HTMLSelectElement><any> document.getElementById(inputId);

    return input.value;
}

function getSingleInput({inputId, numberOfTabObjects, ignoreIfDisabled=true}:{
    inputId:string, numberOfTabObjects:number, ignoreIfDisabled?:boolean})
{
    let input_ = <HTMLInputElement><any> document.getElementById(inputId);

    if (!ignoreIfDisabled || !input_.disabled)
    {
        pushObject.pushTo.push(pushObject.tabObject.repeat(numberOfTabObjects), "[", inputId, ":", input_.value, "]\n" );
    }
    return input_;
}

function getSingleCheckBox({inputId, numberOfTabObjects, ignoreIfDisabled=true}:{inputId:string, numberOfTabObjects:number, ignoreIfDisabled?:boolean})
{
    let input_ = <HTMLInputElement><any> document.getElementById(inputId);

    if ((!ignoreIfDisabled || !input_.disabled) && input_.checked)
    {
        pushObject.pushTo.push(pushObject.tabObject.repeat(numberOfTabObjects), "[", inputId, ":", input_.value, "]\n" );
    }
    return input_.checked;
}

function getMultipleInputs(
    {inputIds, inputClass, useClassInPlaceOfId=false, appendClassInFrontOfId=false, 
        numberOfTabObjects, ignoreIfDisabled=false}:{inputIds?:string[], inputClass?:string, 
        useClassInPlaceOfId?:boolean, appendClassInFrontOfId?:boolean, 
        numberOfTabObjects:number, ignoreIfDisabled?:boolean})
{
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);

    let classElements:HTMLInputElement[] = [];

    if (useClassInPlaceOfId)
    {
        if (inputClass === undefined)
        {
            throw new ReferenceError("The value for input.inputClass is undefined");
        }
        let temp = <HTMLCollection><any> document.getElementsByClassName(inputClass);

        classElements = Array.from(temp) as HTMLInputElement[];
    }
    else
    {
        if (inputIds === undefined)
        {
            throw new ReferenceError("The value for input.inputIds is undefined");
        }
        inputIds.forEach(element => {
            classElements.push(
                document.getElementById(element) as HTMLInputElement
            );
        });
    }
    if (ignoreIfDisabled)
    {
        let t = classElements.filter( (value:HTMLInputElement) => {
            return !value.disabled;
        });

        classElements = t;
    }
    if (appendClassInFrontOfId)
    {
        classElements.forEach((element) => {

            pushObject.pushTo.push(tabs, "[", inputClass as string, ":", element.value, "]\n" );
        });
    }
    else
    {
        classElements.forEach((element) => {

            pushObject.pushTo.push(tabs, "[", element.id, ":", element.value, "]\n" );
        });
    }
}

function getMultipleCheckBoxes(
    {inputIds=undefined, inputClass=undefined, useClassInPlaceOfId=false, appendClassInFrontOfId=false, numberOfTabObjects, 
        ignoreIfDisabled=true, useElementValueInsteadOfId=false
    }:{inputIds?:string[], inputClass?:string, 
    useClassInPlaceOfId?:boolean, appendClassInFrontOfId?:boolean, 
    numberOfTabObjects:number, ignoreIfDisabled?:boolean, useElementValueInsteadOfId?:boolean})
{
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);

    let classElements:HTMLInputElement[] = [];

    if (useClassInPlaceOfId)
    {
        if (inputClass === undefined)
        {
            throw new ReferenceError("The value for input.inputClass is undefined");
        }
        let temp = <HTMLCollection><any> document.getElementsByClassName(inputClass);

        classElements = Array.from(temp) as HTMLInputElement[];
    }
    else
    {
        if (inputIds === undefined)
        {
            throw new ReferenceError("The value for input.inputIds is undefined");
        }
        inputIds.forEach(element => {
            classElements.push(
                document.getElementById(element) as HTMLInputElement
            );
        });
    }
    if (ignoreIfDisabled)
    {
        let t = classElements.filter( (value:HTMLInputElement) => {
            return !value.disabled;
        });

        classElements = t;
    }
    let checked = classElements.filter((value:HTMLInputElement) => {
        return value.checked;
    });

    let ck:string[] = (useElementValueInsteadOfId ? checked.map((element:HTMLInputElement) => {
        return element.value;
    }) : checked.map((element:HTMLInputElement) => {
        return element.id;
    }));

    if (appendClassInFrontOfId)
    {
        ck.forEach(element => {
            pushObject.pushTo.push(tabs, "[", inputClass as string, ":", element, "]\n" );
        })
    }
    else
    {
        ck.forEach(element => {
            pushObject.pushTo.push(tabs, "[", element, "]\n" );
        })
    }
}

function isCheckboxChecked(inputId:string)
{
    let input_ = <HTMLInputElement><any> document.getElementById(inputId);

    return input_.checked;
}

function uncheckCheckbox(input:{uncheckTarget:boolean, targetId:string})
{
    if (input.uncheckTarget)
    {
        let target = <HTMLInputElement><any> document.getElementById(input.targetId);
        target.checked = false;
    }
}
