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

function clearPastResults(elementName:string) 
{
    errorObject.errorThrown = false;
    errorObject.errorMessages = newEmptyStringArray();
    pushObject.pushTo = newEmptyStringArray();
    let spaces = <HTMLInputElement><any> document.getElementById(elementName);

    let numberOfSpaces = ((spaces.value as unknown) as number);

    pushObject.tabObject = (spaces.value == "0" ? "\t" : " ".repeat(numberOfSpaces));
}

function printResults()
{
    let warning = <HTMLParagraphElement><any> document.getElementById("warnings");

    warning.innerText = (errorObject.errorThrown ? errorObject.errorMessages.join("\n") : "");

    let div = <HTMLParagraphElement><any> document.getElementById("result");

    div.innerText = pushObject.pushTo.join("");
}

enum PrefixValueType{
    id,
    name,
    class,
    value
}

function valueIsValid(value:any)
{
    return (value !== undefined && value !== null)
}

function createNumberInput({
    defaultValue, inputMin, inputMax, elementName, elementID, elementClass, titleText}:{
        defaultValue?:string, inputMin?:string, inputMax?:string, elementName?:string, elementID?:string, elementClass?:string, titleText?:string
    })
{
    let conArea = document.createElement("input");

    conArea.type = "number";

    if (valueIsValid(inputMin))
    {
        conArea.min = inputMin as string;
    }
    if (valueIsValid (defaultValue))
    {
        conArea.value = defaultValue as string;
    }
    if (valueIsValid(inputMax))
    {
        conArea.max = inputMax as string;
    }
    if (valueIsValid(elementName))
    {
        conArea.name = elementName as string;
    }
    if (valueIsValid(elementID))
    {
        conArea.id = elementID as string;
    }
    if (valueIsValid(elementClass))
    {
        conArea.className = elementClass as string;
    }
    if (valueIsValid(titleText))
    {
        conArea.title = titleText as string;
    }
    conArea.step = "1";

    return conArea;
}

function createTextInput({
    defaultValue, elementName, elementID, elementClass, titleText, maxLength
}:{defaultValue?:string, elementName?:string, elementID?:string, elementClass?:string, titleText?:string, maxLength?:number
})
{
    let textInput = document.createElement("input");

    textInput.type = "text";

    if (valueIsValid(defaultValue))
    {
        textInput.value = defaultValue as string;
    }
    if (valueIsValid(elementName))
    {
        textInput.name = elementName as string;
    }
    if (valueIsValid(elementID))
    {
        textInput.id = elementID as string;
    }
    if (valueIsValid(elementClass))
    {
        textInput.className = elementClass as string;
    }
    if (valueIsValid(titleText))
    {
        textInput.title = titleText as string;
    }
    if (valueIsValid(maxLength))
    {
        textInput.maxLength = maxLength as number;
    }
    return textInput;
}

function createCheckbox({
    value, isActive=false, elementName, elementId, elementClass, titleText
}:{
    value?:string, isActive?:boolean, elementId?:string, elementName?:string, elementClass?:string, titleText?:string
    })
{
    let ckbox = document.createElement("input");

    ckbox.type = "checkbox";

    if (valueIsValid(value))
    {
        ckbox.value = value as string;
    }
    if (valueIsValid(elementId))
    {
        ckbox.id = elementId as string;
    }
    if (valueIsValid(elementName))
    {
        ckbox.name = elementName as string;
    }
    if (valueIsValid(elementClass))
    {
        ckbox.className = elementClass as string;
    }
    if (valueIsValid(titleText))
    {
        ckbox.title = titleText as string;
    }
    ckbox.checked = isActive;

    return ckbox;
}

function createSelect({elementName, elementID, elementClass, titleText}:{elementName?:string, elementID?:string, elementClass?:string, titleText?:string})
{
    let select = document.createElement("select");

    if (valueIsValid(elementID))
    {
        select.id = elementID as string;
    }
    if (valueIsValid(elementName))
    {
        select.name = elementName as string;
    }
    if (valueIsValid(elementClass))
    {
        select.className = elementClass as string;
    }
    if (valueIsValid(titleText))
    {
        select.title = titleText as string;
    }
    return select;
}

function createSelectOption({value, text}:{value:string, text:string})
{
    let blunt = document.createElement("option");

    blunt.value = value;

    blunt.innerText = text;

    return blunt;
}

function addOptionToSelect({value, text, select}:{value:string, text:string, select:HTMLSelectElement}) 
{
    let blunt = document.createElement("option");

    blunt.value = value;

    blunt.innerText = text;
    
    select.appendChild(blunt);
}

function createFieldset({fieldsetId, legendText}:{fieldsetId:string, legendText?:string})
{
    let fieldset = document.createElement("fieldset");

    fieldset.id = fieldsetId;

    if (valueIsValid(legendText))
    {
        let legend = document.createElement("legend");

        legend.innerText = legendText as string;

        fieldset.appendChild(legend);
    }
    return fieldset;
}

function createLabel({targetId, labelText}:{targetId:string, labelText:string})
{
    let label = document.createElement("label");

    label.htmlFor = targetId;

    label.innerText = labelText;

    return label;
}

function createParagraph({
    elementId, elementsToAppend, elementToAppendParagraphTo
}:{
    elementId?:string, elementsToAppend?:HTMLElement[], elementToAppendParagraphTo?:HTMLElement})
{
    let p = document.createElement("p");

    if (valueIsValid(elementId))
    {
        p.id = elementId as string;
    }
    if (valueIsValid(elementsToAppend))
    {
        elementsToAppend?.forEach((element) => {
            p.appendChild(element);
        })
    }
    if (valueIsValid(elementToAppendParagraphTo))
    {
        elementToAppendParagraphTo?.appendChild(p);
    }
    return p;
}

function enableOrDisableElements({disable, className}:{disable:boolean, className:string}) 
{
    let ranged = <HTMLCollection><any> document.getElementsByClassName(className);

    let ranged2 = <HTMLInputElement[]> Array.from(ranged);

    console.log(ranged2);

    ranged2.forEach(element => {
        element.disabled = disable;
    });
}

function hideOrUnhideElements({hideClassNames, unhideClassNames}:{hideClassNames:string[], unhideClassNames:string[]})
{
    hideClassNames.forEach(element => {
        
        let ele = <HTMLCollection><any> document.getElementsByClassName(element);

        let elea = Array.from(ele) as HTMLElement[];

        elea.forEach((e)=>{
            e.hidden = true;
        });
    });
    unhideClassNames.forEach(element => {
        
        let ele = <HTMLCollection><any> document.getElementsByClassName(element);

        let elea = Array.from(ele) as HTMLElement[];

        elea.forEach((e)=>{
            e.hidden = true;
        });
    });
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

function getSingleInput({inputId, numberOfTabObjects, ignoreIfDisabled=true, ignoreIfBlank, prefixType=PrefixValueType.id}:{
    inputId:string, numberOfTabObjects:number, ignoreIfDisabled?:boolean, ignoreIfBlank:boolean, prefixType?:PrefixValueType})
{
    let input_ = <HTMLInputElement><any> document.getElementById(inputId);

    if ((!ignoreIfDisabled || !input_.disabled) && (!ignoreIfBlank || input_.value !== ""))
    {
        let prefix;

        if (prefixType === PrefixValueType.id)
        {
            prefix = input_.id;
        }
        else 
        {
            prefix = (prefixType === PrefixValueType.name ? input_.name : input_.className);
        }
        pushObject.pushTo.push(pushObject.tabObject.repeat(numberOfTabObjects), "[", prefix, ":", input_.value, "]\n" );
    }
    return input_;
}

function getSingleCheckBox({
    inputId, numberOfTabObjects, ignoreIfDisabled=true, prefixType=PrefixValueType.id
}:{
    inputId:string, numberOfTabObjects:number, ignoreIfDisabled?:boolean, prefixType?:PrefixValueType})
{
    let input_ = <HTMLInputElement><any> document.getElementById(inputId);

    if ((!ignoreIfDisabled || !input_.disabled) && input_.checked)
    {
        let prefix;

        if (prefixType === PrefixValueType.id)
        {
            prefix = input_.id;
        }
        else if (prefixType === PrefixValueType.value)
        {
            prefix = input_.value;
        }
        else 
        {
            prefix = (prefixType === PrefixValueType.name ? input_.name : input_.className);
        }
        pushObject.pushTo.push(pushObject.tabObject.repeat(numberOfTabObjects), "[", prefix, "]\n" );
    }
    return input_.checked;
}

function getMultipleInputs({
    inputIds, inputClass, useClassInPlaceOfId=false, appendClassInFrontOfId=false, 
        numberOfTabObjects, ignoreIfDisabled=false
}:{inputIds?:string[], inputClass?:string, 
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

            let el = document.getElementById(element) as HTMLInputElement;

            classElements.push(el);
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

function uncheckCheckbox({uncheckTarget, targetId}:{uncheckTarget:boolean, targetId:string})
{
    if (uncheckTarget)
    {
        let target = <HTMLInputElement><any> document.getElementById(targetId);
        target.checked = false;
    }
}
