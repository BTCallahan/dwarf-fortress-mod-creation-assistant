function activateRanged() 
{   
    console.log("ranged started");

    let checkedEras = getSelectElementValue("RANGED");

    let deactivate = (checkedEras === "NA");

    enableOrDisableElements({disable:deactivate, className:"ranged_weapon"});
}

function createWeapon()
{
    clearPastResults("spaces");

    pushObject.pushTo.push("[OBJECT:ITEM]\n\n");

    let weaponName = getInputElementValue("ITEM_WEAPON");

    if (weaponName == "")
    {
        errorObject.errorThrown = true;
        errorObject.errorMessages.push("ERROR: The entry for ITEM_WEAPON cannot be blank");
    }
    pushObject.pushTo.push(
        pushObject.tabObject, "[ITEM_WEAPON:", weaponName, "]", "\n"
    );
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
    getSingleInput({inputId:"ADJECTIVE", ignoreIfBlank:true, numberOfTabObjects:2})

    getMultipleInputsById({
        inputIds:["SIZE", "TWO_HANDED", "MINIMUM_SIZE", "MATERIAL_SIZE"], numberOfTabObjects:2
    });

    getMultipleCheckBoxesById({
        inputIds:["TRAINING", "CAN_STONE"], numberOfTabObjects:2, 
    });

    getSingleInput({inputId:"SKILL", numberOfTabObjects:2, ignoreIfDisabled:false, ignoreIfBlank:false});

    let ranged = getInputElementValue("RANGED");

    if (ranged != "NA")
    {
        let amno = getInputElementValue("amno");

        pushObject.pushTo.push(
            pushObject.tabObject, pushObject.tabObject, "[RANGED:", ranged, ":", amno, "]\n"
        );

        getSingleInput({inputId:"SHOOT_FORCE", numberOfTabObjects:2, ignoreIfDisabled:false, ignoreIfBlank:false});

        getSingleInput({inputId:"SHOOT_MAXVEL", numberOfTabObjects:2, ignoreIfDisabled:false, ignoreIfBlank:false});
    }

    addUpAttacks("attacks", 2, true);

    printResults();
}