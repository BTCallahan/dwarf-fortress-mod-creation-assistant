function createTrap() {

    clearPastResults("spaces");

    getSingleInput({inputId:"ITEM_TRAP", numberOfTabObjects:2, ignoreIfBlank:false});

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
    getMultipleInputs({inputIds:["ADJECTIVE", "SIZE", "MATERIAL_SIZE", "HITS"], numberOfTabObjects:2});

    getMultipleCheckBoxes({inputClass:"checks", useClassInPlaceOfId:true, numberOfTabObjects:2});

    addUpAttacks(2, false);
    
    printResults();
}