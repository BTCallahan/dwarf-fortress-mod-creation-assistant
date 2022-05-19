const enableDisableDictionary = {
    "ITEM_TOY" : ["ITEM_FOOD", "ITEM_SIEGEAMMO"],
    "ITEM_FOOD" : ["ITEM_TOY", "ITEM_SIEGEAMMO"],
    "ITEM_SIEGEAMMO" : ["ITEM_TOY", "ITEM_FOOD"]
}

function createItem() {

    pushObject.setText();
    errorObject.setErrorMessage();

    let itemType = getSelectElementValue("ITEM_TYPE");

    if (itemType === "ITEM_TOY")
    {
        getSingleInput({inputId:"ITEM_TOY", numberOfTabObjects:2});

        let singular = getInputElementValue("singular");
        let plural = getInputElementValue("plural");

        if (singular === "")
        {
            errorObject.errorThrown = true;
            errorObject.errorMessages.push( "ERROR: The entry for 'NAME:singular' cannot be blank");
        }
        if (plural == "")
        {
            errorObject.errorThrown = true;
            errorObject.errorMessages.push( "ERROR: The entry for 'NAME:plural' cannot be blank");
        }
        pushObject.pushTo.push(
            pushObject.tabObject, pushObject.tabObject, "[NAME:", singular, ":", plural, "]\n"
        );

        getMultipleCheckBoxes({inputClass:"materials", useClassInPlaceOfId:true, appendClassInFrontOfId:false, numberOfTabObjects:2, ignoreIfDisabled:true});
    }
    else if (itemType === "ITEM_FOOD")
    {
        getSingleInput({inputId:"ITEM_TOY", numberOfTabObjects:2});

        let singular = getInputElementValue("singular");
        let plural = getInputElementValue("plural");

        if (singular === "")
        {
            errorObject.errorThrown = true;
            errorObject.errorMessages.push( "ERROR: The entry for 'NAME:singular' cannot be blank");
        }
        if (plural == "")
        {
            errorObject.errorThrown = true;
            errorObject.errorMessages.push( "ERROR: The entry for 'NAME:plural' cannot be blank");
        }
        pushObject.pushTo.push(
            pushObject.tabObject, pushObject.tabObject, "[NAME:", singular, ":", plural, "]\n"
        );

        getSingleInput({inputId:"LEVEL", numberOfTabObjects:2});
    }
    else
    {
        getSingleInput({inputId:"ITEM_SIEGEAMMO", numberOfTabObjects:2});

        let singular = getInputElementValue("singular");
        let plural = getInputElementValue("plural");

        if (singular === "")
        {
            errorObject.errorThrown = true;
            errorObject.errorMessages.push( "ERROR: The entry for 'NAME:singular' cannot be blank");
        }
        if (plural == "")
        {
            errorObject.errorThrown = true;
            errorObject.errorMessages.push( "ERROR: The entry for 'NAME:plural' cannot be blank");
        }
        pushObject.pushTo.push(
            pushObject.tabObject, pushObject.tabObject, "[NAME:", singular, ":", plural, "]\n"
        );

        pushObject.pushTo.push(pushObject.tabObject, "[CLASS:BALLISTA]\n");

        let div = <HTMLDivElement><any> document.getElementById("result");

        div.innerText = (errorObject.errorThrown ? errorObject.getErrorMessage() : pushObject.getText());
    }
    
}