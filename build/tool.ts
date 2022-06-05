function deleteLastDescription()
{
    let des = <HTMLDivElement><any> document.getElementById("desc");

    let allDes = des.getElementsByClassName("DESCRIPTION");

    let num = allDes.length;

    if (num > 0)
    {
        des.children[num - 1].remove();
    }
}

function addNewDescription()
{
    let des = <HTMLDivElement><any> document.getElementById("desc");

    let allDes = des.getElementsByClassName("DESCRIPTION");

    let num = allDes.length;

    des.appendChild(createParagraph({
        elementsToAppend:[createTextInput({elementID:`DESCRIPTION_${num}`, elementName:`DESCRIPTION_${num}`, elementClass:"DESCRIPTION", maxLength:325})]
    }));
}

function createTool()
{
    clearPastResults("spaces");

    getSingleInput({inputId:"ITEM_TOOL", ignoreIfBlank:false, numberOfTabObjects:1});

    let singular = getInputElementValue("singular");

    if (singular == "")
    {
        errorObject.errorThrown = true;
        errorObject.errorMessages.push( "ERROR: The entry for 'NAME:singular' cannot be blank");
    }
    let plural = getInputElementValue("plural");

    if (plural == "")
    {
        errorObject.errorThrown = true;
        errorObject.errorMessages.push( "ERROR: The entry for 'NAME:plural' cannot be blank");
    }
    pushObject.pushTo.push(
        pushObject.tabObject, pushObject.tabObject, "[NAME:", singular, ":", plural, "]\n"
    );
    getMultipleInputsByClass({inputClass:"DESCRIPTION", numberOfTabObjects:2, prefixType:PrefixValueType.class, ignoreIfBlank:true});

    getMultipleInputsById({inputIds:["SIZE", "MATERIAL_SIZE", "VALUE", "TILE"], numberOfTabObjects:2});

    getMultipleCheckBoxesById({inputIds:["INVERTED_TILE", "NO_DEFAULT_JOB", "FURNITURE"], numberOfTabObjects:2});

    getSingleInput({inputId:"SHAPE_CATEGORY", ignoreIfBlank:false, numberOfTabObjects:2});

    getMultipleCheckBoxesByClass({inputClass:"TOOL_USE", numberOfTabObjects:2, ignoreIfDisabled:true});

    getSingleCheckBox({inputId:"HARD_MAT", numberOfTabObjects:2});

    getMultipleCheckBoxesByClass({inputClass:"HARD_MAT", numberOfTabObjects:2, ignoreIfDisabled:true});

    getSingleCheckBox({inputId:"SOFT_MAT", numberOfTabObjects:2});

    getMultipleCheckBoxesByClass({inputClass:"SOFT_MAT", numberOfTabObjects:2, ignoreIfDisabled:true});

    getSingleInput({inputId:"CONTAINER_CAPACITY", numberOfTabObjects:2, ignoreIfBlank:true, valueThatWillBeIgnored:"0"});

    getSingleCheckBox({inputId:"UNIMPROVABLE", numberOfTabObjects:2});

    printResults();
}
