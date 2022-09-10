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

        let numberOfSpaces = Number.parseInt(spaces.value);

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

    let div = <HTMLPreElement><any> document.getElementById("result");

    div.innerText = pushObject.pushTo.join("");
}

enum PrefixValueType{
    id,
    name,
    class,
    classCon,
    value
}

/**
 * Checks if the value is not undefined or is not null
 * @param value The value to evaluated
 * @returns true if the value is not undefined or null, false if it is undefined or null
 */
function valueIsValid(value:any)
{
    return (value !== undefined && value !== null)
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
function createNumberInput({
    defaultValue, inputMin, inputMax, elementName, elementID, elementClass, titleText, required=false, isDisabeled=false, mouseonchange}:{
        defaultValue?:string, inputMin?:string, inputMax?:string, elementName?:string, elementID?:string, elementClass?:string, titleText?:string, 
        required?:boolean, isDisabeled?:boolean, mouseonchange?:(this:GlobalEventHandlers, ev:Event) => any
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
    if (valueIsValid(mouseonchange))
    {
        conArea.onchange = mouseonchange as (this:GlobalEventHandlers, ev:Event) => any;
    }
    conArea.step = "1";

    conArea.required = required

    return conArea;
}

function removeLastChild<T extends HTMLElement>(parentElementId:string, dontRemoveIfOnlyOne:boolean)
{
    let parentElement = <T><any> document.getElementById(parentElementId);

    let children = parentElement.children.length;

    if (children > (dontRemoveIfOnlyOne ? 1 : 0))
    {
        parentElement.children[children - 1].remove();
    }
}

function getArrayOfElements<T extends HTMLElement>({parentElement, className}:{parentElement?:HTMLElement, className:string})
{
    let elements = (valueIsValid(parentElement) ? parentElement?.getElementsByClassName(className) : document.getElementsByClassName(className));

    return Array.from(elements as HTMLCollectionOf<T>);
}

function getArrayOfElementValues({parentElement, className}:{parentElement?:HTMLElement, className:string})
{
    let elements = (valueIsValid(parentElement) ? parentElement?.getElementsByClassName(className) : document.getElementsByClassName(className));

    let a = Array.from(elements as HTMLCollectionOf<HTMLInputElement | HTMLSelectElement>);

    return a.map((element: HTMLInputElement | HTMLSelectElement) => {

        return element.value;
    });
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
function createTextInput({
    defaultValue, elementName, elementID, elementClass, titleText, pattern, maxLength, required=false, isDisabeled=false, mouseonchange
}:{
    defaultValue?:string, elementName?:string, elementID?:string, elementClass?:string, titleText?:string, pattern?:string, 
    maxLength?:number, required?:boolean, isDisabeled?:boolean, mouseonchange?:(this:GlobalEventHandlers, ev:Event) => any
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
    if (valueIsValid(pattern))
    {
        textInput.pattern = pattern as string;
    }
    if (valueIsValid(maxLength))
    {
        textInput.maxLength = maxLength as number;
    }
    if (valueIsValid(mouseonchange))
    {
        textInput.onchange = mouseonchange as (this:GlobalEventHandlers, ev:Event) => any;
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
function createCheckbox({
    value, isActive=false, isDisabeled=false, elementName, elementId, elementClass, titleText, mouseonclick
}:{
    value?:string, isActive?:boolean, isDisabeled?:boolean, elementId?:string, elementName?:string, elementClass?:string, titleText?:string, 
    mouseonclick?:(this:GlobalEventHandlers, ev:MouseEvent) => any
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
    if (valueIsValid(mouseonclick))
    {
        ckbox.onclick = mouseonclick as (this:GlobalEventHandlers, ev:MouseEvent) => any;
    }
    ckbox.checked = isActive;

    ckbox.disabled = isDisabeled;

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
function createSelect({
    elementName, elementID, elementClass, titleText, options, defualtValue, isDisabeled=false, mouseonchange
}:{
    elementName?:string, elementID?:string, elementClass?:string, titleText?:string, options?:HTMLOptionElement[]|HTMLOptGroupElement[], 
    defualtValue?:string, isDisabeled?:boolean, mouseonchange?:(this:GlobalEventHandlers, ev:Event) => any
})
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
    if (valueIsValid(options))
    {
        options?.forEach(element => {
            select.appendChild(element);
        });
        if (valueIsValid(defualtValue))
        {
            select.value = defualtValue as string;
        }
    }
    if (valueIsValid(mouseonchange))
    {
        select.onchange = mouseonchange as (this:GlobalEventHandlers, ev:Event) => any;
    }
    select.disabled = isDisabeled;

    return select;
}

function createSelectOptionGroup({label, options}:{label:string, options:HTMLOptionElement[]})
{
    let og = document.createElement("optgroup");

    og.label = label;

    options.forEach(element => {
        og.appendChild(element);
    });
    return og;
}

function createSelectOption({value, text}:{value:string, text:string})
{
    let blunt = document.createElement("option");

    blunt.value = value;

    blunt.innerText = text;

    return blunt;
}

function* createArrayOfOptionsFromStringArray(stringArray:string[])
{
    for (let index = 0; index < stringArray.length; index++) {
        let element = stringArray[index];
        
        yield createSelectOption({text:element, value:element});
    }
}

/**
 * Creates a HTMLOptionElement object and appends it to a HTMLSelectElement
 * @param param0 A destructable object containing three fields
 * value - A string that will be assigned to the value field of the new option
 * text - A string that will be assigned to the innerText field of the new option
 * select - The HTMLSelectElement that the option will be appended to
 */
function addOptionToSelect({value, text, select}:{value:string, text:string, select:HTMLSelectElement}) 
{
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
function createLabel({targetId, labelText}:{targetId:string, labelText:string})
{
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
function createButton({
    value, innerText, elementName, elementId, elementClass, titleText, isDisabeled=false, mouseonclick
}:{
    value?:string, innerText:string, elementName?:string, elementId?:string, elementClass?:string, titleText?:string, 
    isDisabeled?:boolean, mouseonclick?:(this:GlobalEventHandlers, ev:MouseEvent) => any
}) {
    let button = document.createElement("button");

    button.innerText = innerText;

    if (valueIsValid(mouseonclick))
    {
        button.onclick = mouseonclick as (this:GlobalEventHandlers, ev:MouseEvent) => any;
    }
    if (valueIsValid(value))
    {
        button.value = value as string;
    }
    if (valueIsValid(elementId))
    {
        button.id = elementId as string;
    }
    if (valueIsValid(elementName))
    {
        button.name = elementName as string;
    }
    if (valueIsValid(elementClass))
    {
        button.className = elementClass as string;
    }
    if (valueIsValid(titleText))
    {
        button.title = titleText as string;
    }
    button.disabled = isDisabeled;

    return button;
}

function createOrderedList(listItems:string[])
{
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
 function createFieldset({
    fieldsetId, legendText, elementsToAppend, elementToAppendTo, innerText
}:{
    fieldsetId?:string, legendText?:string, elementsToAppend?:HTMLElement[], elementToAppendTo?:HTMLElement, innerText?:string
    })
 {
    let fieldset = document.createElement("fieldset");

    if (valueIsValid(innerText))
    {
        fieldset.innerText = innerText as string;
    }
    if (valueIsValid(fieldsetId))
    {
        fieldset.id = fieldsetId as string;
    }
    if (valueIsValid(legendText))
    {
        let legend = document.createElement("legend");
 
        legend.innerText = legendText as string;
 
        fieldset.appendChild(legend);
    }
    if (valueIsValid(elementsToAppend))
    {
        elementsToAppend?.forEach(element => {
            fieldset.appendChild(element);
        });
    }
    if (valueIsValid(elementToAppendTo))
    {
        elementToAppendTo?.appendChild(fieldset);
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
function createParagraph({
    elementId, className, innerText, elementsToAppend, elementToAppendParagraphTo
}:{
    elementId?:string, className?:string, innerText?:string, elementsToAppend?:HTMLElement[], elementToAppendParagraphTo?:HTMLElement})
{
    let p = document.createElement("p");

    if (valueIsValid(elementId))
    {
        p.id = elementId as string;
    }
    if (valueIsValid(className))
    {
        p.className = className as string;
    }
    if (valueIsValid(innerText))
    {
        p.innerText = innerText as string;
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

/**
 * Creates and returns a HTMLDivElement
 * @param param0 A destructable object containing four fields, all optional
 * elementId - A string that will be assigned to the id field of the HTMLDivElement
 * className - A string that will be assigned to the className field of the HTMLDivElement
 * elementsToAppend - A HTMLElement array. The individual elements will be appended to the HTMLDivElement
 * elementToAppendParagraphTo - A HTMLElement. The created HTMLDivElement will be appended to elementToAppendParagraphTo
 * @returns a HTMLDivElement
 */
 function createDiv({
    elementId, className, innerText, elementsToAppend, elementToAppendDivTo
}:{
    elementId?:string, className?:string, innerText?:string, elementsToAppend?:HTMLElement[], elementToAppendDivTo?:HTMLElement})
{
    let p = document.createElement("div");

    if (valueIsValid(elementId))
    {
        p.id = elementId as string;
    }
    if (valueIsValid(className))
    {
        p.className = className as string;
    }
    if (valueIsValid(innerText))
    {
        p.innerText = innerText as string;
    }
    if (valueIsValid(elementsToAppend))
    {
        elementsToAppend?.forEach((element) => {
            p.appendChild(element);
        })
    }
    if (valueIsValid(elementToAppendDivTo))
    {
        elementToAppendDivTo?.appendChild(p);
    }
    return p;
}

function createTable({elementId, headerTextItems}:{elementId:string, headerTextItems:string[]})
{
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
function enableOrDisableElements({
    disable, className, parentElement, parentElementId}:{disable:boolean, className:string, parentElement?:HTMLElement, parentElementId?:string
}){
    let doc = (parentElement || document.getElementById(parentElementId as string)) || document;

    let ranged = <HTMLCollection><any> doc.getElementsByClassName(className);

    let ranged2 = <HTMLInputElement[]> Array.from(ranged);

    console.log(ranged2);

    ranged2.forEach(element => {
        element.disabled = disable;
    });
}

function hideOrUnhideSingleElement<T extends HTMLElement>({hide, id}:{hide:boolean, id:string})
{
    let toHide = <T><any> document.getElementById(id);

    toHide.hidden = hide;
}

function hideOrUnhideElements({
    hide, className, parentElement, parentElementId}:{hide:boolean, className:string, parentElement?:HTMLElement, parentElementId?:string
}){
    let doc = (parentElement || document.getElementById(parentElementId as string)) || document;

    let ranged = <HTMLCollection><any> doc.getElementsByClassName(className);

    let ranged2 = <HTMLInputElement[]> Array.from(ranged);

    console.log(ranged2);

    ranged2.forEach(element => {
        element.hidden = hide;
    });
}

function hideAndUnhideElements({
    hideClassNames, unhideClassNames, parentElement, parentElementId
}:{
    hideClassNames:string[], unhideClassNames:string[], parentElement?:HTMLElement, parentElementId?:string
}){
    let parent = (parentElement || document.getElementById(parentElementId as string)) || document;

    hideClassNames.forEach(element => {
        
        let ele = <HTMLCollection><any> parent.getElementsByClassName(element);

        let elea = Array.from(ele) as HTMLElement[];

        elea.forEach((e)=>{
            e.hidden = true;
        });
    });
    unhideClassNames.forEach(element => {
        
        let ele = <HTMLCollection><any> parent.getElementsByClassName(element);

        let elea = Array.from(ele) as HTMLElement[];

        elea.forEach((e)=>{
            e.hidden = false;
        });
    });
}

function ifInputElementValueIsBlankSetValue(elementId:string, newValue:string)
{
    let element = <HTMLInputElement><any> document.getElementById(elementId);

    if (element.value === "")
    {
        element.value = newValue;
    }
}

function getInputElementValue(inputId:string) 
{
    let input = <HTMLInputElement><any> document.getElementById(inputId);

    return input.value;
}

function getCheckBoxIsChecked(inputId:string)
{
    let checkbox = <HTMLInputElement><any> document.getElementById(inputId);

    return checkbox.checked;
}

function getSelectElementValue(inputId:string) 
{
    let input = <HTMLSelectElement><any> document.getElementById(inputId);

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
function getSingleInput({
    inputId, numberOfTabObjects, ignoreIfDisabled=true, ignoreIfBlank=true, prefixType=PrefixValueType.id, valueThatWillBeIgnored
}:{
    inputId:string, numberOfTabObjects:number, ignoreIfDisabled?:boolean, ignoreIfBlank?:boolean, prefixType?:PrefixValueType, valueThatWillBeIgnored?:string
})
{
    let input_ = <HTMLInputElement><any> document.getElementById(inputId);

    if ((!ignoreIfDisabled || !input_.disabled) && (!ignoreIfBlank || input_.value !== "") && (!valueIsValid(valueThatWillBeIgnored) || input_.value !== valueThatWillBeIgnored))
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

/**
 * Pushes the value of multiple elements to the pushObject.pushTo array. The value will be preceded by a prefix
 * @param param0 A destructable object containing nine fields
 * inputIds - A string array representing the id of the objects. Optional. If useClassInPlaceOfId is false, and inputIds is undefined, an error will be thrown
 * numberOfTabObjects - A number used to determin the number of tabs that are place before the text that is pushed
 * ignoreIfDisabled - Boolean. If true, and the field is disabled, it will be ignored. Optional, defualts to true
 * ignoreIfBlank - Boolean. If true, and the field has a value of "", nothing will be pushed to the array
 * prefixType - An PrefixValueType enum. This determins the if the prefix that is appended before the element value will be the elements id, name, or class
 */
 function getMultipleInputsById({
    inputIds, 
        numberOfTabObjects, ignoreIfDisabled=true, ignoreIfBlank=true, prefixType=PrefixValueType.id
}:{inputIds:string[], 
        numberOfTabObjects:number, ignoreIfDisabled?:boolean, ignoreIfBlank?:boolean, prefixType?:PrefixValueType})
{
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);

    let classElements:HTMLInputElement[] = inputIds.map(element => {
        return document.getElementById(element) as HTMLInputElement;
    });
    if (ignoreIfDisabled)
    {
        let t = classElements.filter( (value:HTMLInputElement) => {
            return !value.disabled;
        });
        classElements = t;
    }
    if (ignoreIfBlank)
    {
        let t = classElements.filter( (value:HTMLInputElement) => {
            return value.value !== "";
        });
        classElements = t;
    }
    let prefixes:string[] = (prefixType === PrefixValueType.name ? 
        classElements.map((value:HTMLInputElement) => {
            return `${value.name}:${value.value}`;
        }) : classElements.map((value:HTMLInputElement) => {
            return `${value.id}:${value.value}`;
        })
    );
    prefixes.forEach(element => {
        pushObject.pushTo.push(tabs, "[", element, "]\n");
    })
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
function getMultipleInputs({
    inputIds, inputClass, useClassInPlaceOfId=false, appendClassInFrontOfId=false, parentElement,
        numberOfTabObjects, ignoreIfDisabled=true, ignoreIfBlank=true, prefixType=PrefixValueType.id
}:{inputIds?:string[], inputClass?:string, 
        useClassInPlaceOfId?:boolean, appendClassInFrontOfId?:boolean, parentElement?:HTMLElement,
        numberOfTabObjects:number, ignoreIfDisabled?:boolean, ignoreIfBlank?:boolean, prefixType?:PrefixValueType})
{
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);

    let classElements:HTMLInputElement[] = [];

    if (useClassInPlaceOfId)
    {
        if (!valueIsValid(inputClass) )
        {
            throw new ReferenceError("The value for input.inputClass is undefined");
        }
        let temp =(valueIsValid(parentElement) ? 
        <HTMLCollection><any> document.getElementsByClassName(inputClass as string) : 
        <HTMLCollection><any> parentElement?.getElementsByClassName(inputClass as string));

        classElements = Array.from(temp) as HTMLInputElement[];
    }
    else
    {
        if (!valueIsValid(inputIds))
        {
            throw new ReferenceError("The value for input.inputIds is undefined");
        }
        inputIds?.forEach(element => {

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
    if (ignoreIfBlank)
    {
        let t = classElements.filter( (value:HTMLInputElement) => {
            return value.value !== "";
        });

        classElements = t;
    }
    if (prefixType === PrefixValueType.class)
    {
        classElements.forEach((element) => {

            pushObject.pushTo.push(tabs, "[", inputClass as string, ":", element.value, "]\n" );
        });
    }
    else
    {
        let prefixes:string[] = (prefixType === PrefixValueType.name ? 
            classElements.map((value:HTMLInputElement) => {
                return `${value.name}:${value.value}`;
            }) : classElements.map((value:HTMLInputElement) => {
                return `${value.id}:${value.value}`;
            })
        );
        if (appendClassInFrontOfId)
        {
            prefixes.forEach((element) => {
    
                pushObject.pushTo.push(tabs, "[", inputClass as string, ":", element, "]\n" );
            });
        }
        else
        {
            prefixes.forEach((element) => {
    
                pushObject.pushTo.push(tabs, "[", element, "]\n" );
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
 */
function getMultipleInputsByClass({
    inputClass, parentElement, numberOfTabObjects, ignoreIfDisabled=true, ignoreIfBlank=true, appendClassInFrontOfId=false, requireNoBlanks=false,
    prefixType=PrefixValueType.id, valueThatWillBeIgnored
}:{inputClass:string, parentElement?:HTMLElement,
    numberOfTabObjects:number, ignoreIfDisabled?:boolean, ignoreIfBlank?:boolean, appendClassInFrontOfId?:boolean, requireNoBlanks?:boolean,
    prefixType?:PrefixValueType, valueThatWillBeIgnored?:string})
{
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);

    let classElements:HTMLInputElement[] = Array.from(valueIsValid(parentElement) ? 
    <HTMLCollection><any> parentElement?.getElementsByClassName(inputClass) : 
    <HTMLCollection><any> document.getElementsByClassName(inputClass)) as HTMLInputElement[];

    if(ignoreIfDisabled)
    {
        let temp = classElements.filter(element => {
            return !element.disabled;
        });

        classElements = temp;
    }
    if (ignoreIfBlank)
    {
        let temp = classElements.filter(element => {
            return element.value !== "";
        });

        classElements = temp;
    }
    if (valueIsValid(valueThatWillBeIgnored))
    {
        let temp = classElements.filter(element => {
            return element.value !== valueThatWillBeIgnored;
        });

        classElements = temp;
    }
    if (prefixType === PrefixValueType.class)
    {
        classElements.forEach((element) => {

            pushObject.pushTo.push(tabs, "[", inputClass as string, ":", element.value, "]\n" );
        });
    }
    else if (prefixType === PrefixValueType.classCon)
    {
        let prefixes = classElements.map(value => {
            return value.value;
        });
        if (!requireNoBlanks || prefixes.every(element => {
            return element !== "";
        }))
        {
            if (appendClassInFrontOfId)
            {  
                pushObject.pushTo.push(tabs, "[", inputClass, ":", prefixes.join(":"), "]\n");
            }
            else
            {
                pushObject.pushTo.push(tabs, "[", prefixes.join(":"), "]\n");
            }
        }
    }
    else
    {
        let prefixes:string[] = (prefixType === PrefixValueType.name ? 
            classElements.map((value:HTMLInputElement) => {
                return `${value.name}:${value.value}`;
            }) : classElements.map((value:HTMLInputElement) => {
                return `${value.id}:${value.value}`;
            })
        );
        if (appendClassInFrontOfId)
        {
            prefixes.forEach((element) => {
    
                pushObject.pushTo.push(tabs, "[", inputClass as string, ":", element, "]\n" );
            });
        }
        else
        {
            prefixes.forEach((element) => {
    
                pushObject.pushTo.push(tabs, "[", element, "]\n" );
            });
        }
    }
}

function getMultipleCheckBoxesById(
    {inputIds, numberOfTabObjects, 
        ignoreIfDisabled=true, elementType=PrefixValueType.id
    }:{inputIds:string[],  
    numberOfTabObjects:number, ignoreIfDisabled?:boolean, elementType?:PrefixValueType})
{
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);

    let classElements:HTMLInputElement[] = inputIds.map(element => {
        return document.getElementById(element) as HTMLInputElement;
    });
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

    let ck:string[] = [];

    switch (elementType) {
        case PrefixValueType.id:
            ck = checked.map((element:HTMLInputElement) => {
                return element.id;
            });
            break;
        case PrefixValueType.value:
            ck = checked.map((element:HTMLInputElement) => {
                return element.value;
            });
            break;
        default:
            ck = ck = checked.map((element:HTMLInputElement) => {
                return element.name;
            });
            break;
    }
    ck.forEach(element => {
        pushObject.pushTo.push(tabs, "[", element, "]\n" );
    });
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

function getMultipleCheckBoxesByClass(
    {inputClass, parentElement, appendClassInFrontOfId=false, numberOfTabObjects, 
        ignoreIfDisabled=true, elementType=PrefixValueType.id
    }:{inputClass:string, parentElement?:HTMLElement,
    appendClassInFrontOfId?:boolean, 
    numberOfTabObjects:number, ignoreIfDisabled?:boolean, elementType?:PrefixValueType})
{
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);

    let classElements:HTMLInputElement[] = Array.from(valueIsValid(parentElement) ? 
    <HTMLCollection><any> parentElement?.getElementsByClassName(inputClass) : 
    <HTMLCollection><any> document.getElementsByClassName(inputClass)) as HTMLInputElement[];

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
    if (appendClassInFrontOfId)
    {
        let ck:string[] = [];

        switch (elementType) {
            case PrefixValueType.id:
                ck = checked.map((element:HTMLInputElement) => {
                    return element.id;
                });
                break;
            case PrefixValueType.name:
                ck = checked.map((element:HTMLInputElement) => {
                    return element.name;
                });
                break;
            default:
                ck = checked.map((element:HTMLInputElement) => {
                    return element.value;
                });
                break;
        }
        ck.forEach(element => {
            pushObject.pushTo.push(tabs, "[", inputClass as string, ":", element, "]\n" );
        });
    }
    else
    {
        let ck:string[] = [];

        switch (elementType) {
            case PrefixValueType.id:
                ck = checked.map((element:HTMLInputElement) => {
                    return element.id;
                });
                break;
            case PrefixValueType.name:
                ck = checked.map((element:HTMLInputElement) => {
                    return element.name;
                });
                break;
            case PrefixValueType.value:
                ck = checked.map((element:HTMLInputElement) => {
                    return element.value;
                });
                break;
            default:
                ck = checked.map((element:HTMLInputElement) => {
                    return inputClass;
                });
                break;
        }
        ck.forEach(element => {
            pushObject.pushTo.push(tabs, "[", element, "]\n" );
        })
    }
}

function appendColor<T extends HTMLElement>({
    className, foregroundId, backgroundId, brightnessId, required=false, parentElement
}:{
    className:string, prefText?:string, foregroundId:string, backgroundId:string, brightnessId:string, required?:boolean, parentElement:T
}){

    parentElement.appendChild(createNumberInput({
        elementID:foregroundId, inputMax:"7", inputMin:"0", elementClass:`ch1 foreground ${className}`, required:required, 
        titleText:"The foreground value for this color. Ranges from 0 to 7"
    }));
    parentElement.appendChild(createNumberInput({
        elementID:backgroundId, inputMax:"7", inputMin:"0", elementClass:`ch1 background ${className}`, required:required,
        titleText:"The background value for this color. Ranges from 0 to 7"
    }));
    parentElement.appendChild(createNumberInput({
        elementID:brightnessId, inputMax:"1", inputMin:"0", elementClass:`ch1 brightness ${className}`, required:required,
        titleText:"The brigntness value for this color. The only choices are 0 and 1"
    }));
    
    return parentElement;
}

function createColor({
    className, prefText, foregroundId, backgroundId, brightnessId, required=false
}:{
    className:string, prefText?:string, foregroundId:string, backgroundId:string, brightnessId:string, required?:boolean
}){
    let pf = prefText || `${className}:`;
    
    let par = createParagraph({elementId:className, innerText:pf, elementsToAppend:[
        createNumberInput({
            elementID:foregroundId, inputMax:"7", inputMin:"0", elementClass:`ch1 foreground ${className}`, required:required, 
            titleText:"The foreground value for this color. Ranges from 0 to 7"
        }),
        createNumberInput({
            elementID:backgroundId, inputMax:"7", inputMin:"0", elementClass:`ch1 background ${className}`, required:required,
            titleText:"The background value for this color. Ranges from 0 to 7"
        }),
        createNumberInput({
            elementID:brightnessId, inputMax:"1", inputMin:"0", elementClass:`ch1 brightness ${className}`, required:required,
            titleText:"The brigntness value for this color. The only choices are 0 and 1"
        })
    ]});
    return par;
}

function getColorByContainerId({
    colorContainterId, numberOfTabObjects, itemOrder=0
}:{colorContainterId:string, numberOfTabObjects:number, itemOrder?:number
}){
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);

    let p = <HTMLParagraphElement><any> document.getElementById(colorContainterId);

    let fg = p.getElementsByClassName("foreground");
    let bg = p.getElementsByClassName("background");
    let br = p.getElementsByClassName("brightness");

    let fg2 = <HTMLInputElement><any> fg.item(itemOrder);
    let bg2 = <HTMLInputElement><any> bg.item(itemOrder);
    let br2 = <HTMLInputElement><any> br.item(itemOrder);

    if (fg2.value !== "" && bg2.value !== "" && br2.value !== "")
    {
        pushObject.pushTo.push(
            tabs, "[", colorContainterId, ":", fg2.value, ":", bg2.value, ":", br2.value, "]\n"
        );
    }
}

/**
 * Do not use
 * @param param0 
 */
function getColorByClassName({
    parentElement, className, numberOfTabObjects, itemOrder=0
}:{parentElement?:HTMLElement, className:string, numberOfTabObjects:number, itemOrder?:number
}){
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);

    let doc = parentElement || document;

    let c = doc.getElementsByClassName(className);

    
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
