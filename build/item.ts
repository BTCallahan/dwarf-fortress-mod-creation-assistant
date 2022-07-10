
var enableDisableDictionary:Map<string, string[]> = new Map<string, string[]>();

enableDisableDictionary.set("ITEM_TOY", ["ITEM_FOOD", "ITEM_SIEGEAMMO"]);
enableDisableDictionary.set("ITEM_FOOD", ["ITEM_TOY", "ITEM_SIEGEAMMO"]);
enableDisableDictionary.set("ITEM_SIEGEAMMO", ["ITEM_TOY", "ITEM_FOOD"]);

function hideElementsByItemType()
{
    let it = getSelectElementValue("ITEM_TYPE");

    let hideItems = enableDisableDictionary.get(it) as string[];

    hideAndUnhideElements({unhideClassNames:[it], hideClassNames:hideItems});

    let req = <HTMLInputElement><any> document.getElementById(it);

    req.required = true;

    hideItems.forEach(element => {

        let notReq = <HTMLInputElement><any> document.getElementById(element);

        notReq.required = false;
    })
}

function createItem() {

    clearPastResults("spaces");

    pushObject.pushTo.push("[OBJECT:ITEM]\n\n");

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
        getMultipleCheckBoxesByClass({inputClass:"materials", elementType:PrefixValueType.id, appendClassInFrontOfId:false, numberOfTabObjects:2, ignoreIfDisabled:true});
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
