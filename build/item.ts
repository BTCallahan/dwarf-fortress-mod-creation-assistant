
var enableDisableDictionary:Map<string, string[]> = new Map<string, string[]>();

enableDisableDictionary.set("ITEM_TOY", ["ITEM_FOOD", "ITEM_SIEGEAMMO"]);
enableDisableDictionary.set("ITEM_FOOD", ["ITEM_TOY", "ITEM_SIEGEAMMO"]);
enableDisableDictionary.set("ITEM_SIEGEAMMO", ["ITEM_TOY", "ITEM_FOOD"]);

function hideElementsByItemType()
{
    let it = getSelectElementValue("ITEM_TYPE");

    hideOrUnhideElements({unhideClassNames:[it], hideClassNames:enableDisableDictionary.get(it) as string[]})
}

function createItem() {

    clearPastResults("spaces");

    let itemType = getSelectElementValue("ITEM_TYPE");

    getSingleInput({inputId:itemType, numberOfTabObjects:2, ignoreIfBlank:false});

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

    if (itemType === "ITEM_TOY")
    {
        getMultipleCheckBoxes({inputClass:"materials", useClassInPlaceOfId:true, appendClassInFrontOfId:false, numberOfTabObjects:2, ignoreIfDisabled:true});
    }
    else if (itemType === "ITEM_FOOD")
    {
        getSingleInput({inputId:"LEVEL", numberOfTabObjects:2, ignoreIfBlank:false});
    }
    else
    {
        pushObject.pushTo.push(pushObject.tabObject, "[CLASS:BALLISTA]\n");
    }
    printResults();
}
