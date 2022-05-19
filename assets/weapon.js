"use strict";
function activateRanged() {
    console.log("ranged started");
    let checkedEras = getSelectElementValue("RANGED");
    let deactivate = (checkedEras === "NA");
    enableOrDisableElements({ disable: deactivate, className: "ranged_weapon" });
}
function createNewAttack() {
    let attackTable = document.getElementById("attacks");
    let tableBody = attackTable.tBodies[0];
    let rows = tableBody.rows.length;
    let newRow = tableBody.insertRow();
    let cell1 = newRow.insertCell();
    let sel = document.createElement("select");
    let blunt = createSelectOption("BLUNT", "Blunt");
    let edge = createSelectOption("EDGE", "Edge");
    sel.appendChild(blunt);
    sel.appendChild(edge);
    sel.name = `weaponType_${rows}`;
    sel.id = `weaponType_${rows}`;
    cell1.appendChild(sel);
    let cell2 = newRow.insertCell();
    let conArea = createNumberInput({ defaultValue: "0", inputMin: "0", elementName: `contactArea_${rows}`, elementID: `contactArea_${rows}` });
    cell2.appendChild(conArea);
    let cell3 = newRow.insertCell();
    let penSize = createNumberInput({ defaultValue: "0", inputMin: "0", elementName: `penitrationSize_${rows}`, elementID: `penitrationSize_${rows}` });
    cell3.appendChild(penSize);
    let cell4 = newRow.insertCell();
    let verb2 = createTextInput({ elementName: `verb2_${rows}`, elementID: `verb2_${rows}` });
    cell4.appendChild(verb2);
    let cell5 = newRow.insertCell();
    let verb3 = createTextInput({ elementName: `verb3_${rows}`, elementID: `verb3_${rows}` });
    cell5.appendChild(verb3);
    let cell6 = newRow.insertCell();
    let noun = createTextInput({ elementName: `noun_${rows}`, elementID: `noun_${rows}` });
    cell6.appendChild(noun);
    let cell7 = newRow.insertCell();
    let velMul = createNumberInput({ defaultValue: "1", inputMin: "1", elementName: `velocityMultiplyer_${rows}`, elementID: `velocityMultiplyer_${rows}` });
    cell7.appendChild(velMul);
    let cell8 = newRow.insertCell();
    let prepTime = createNumberInput({ defaultValue: "1", inputMin: "1", elementName: `preperationTime_${rows}`, elementID: `preperationTime_${rows}` });
    cell8.appendChild(prepTime);
    let cell9 = newRow.insertCell();
    let recTime = createNumberInput({ defaultValue: "1", inputMin: "1", elementName: `recoveryTime_${rows}`, elementID: `recoveryTime_${rows}` });
    cell9.appendChild(recTime);
    let cell10 = newRow.insertCell();
    let sel2 = document.createElement("select");
    let noMultiAttack = createSelectOption("ATTACK_FLAG_INDEPENDENT_MULTIATTACK", "ATTACK_FLAG_INDEPENDENT_MULTIATTACK - No multi-strike penalty");
    let standard = createSelectOption("NA", "Standard multi-strike penalty");
    let badMultiAttack = createSelectOption("ATTACK_FLAG_BAD_MULTIATTACK", "ATTACK_FLAG_BAD_MULTIATTACK - Multiple strikes not allowed");
    sel2.name = `attackFlag_${rows}`;
    sel2.id = `attackFlag_${rows}`;
    sel2.appendChild(noMultiAttack);
    sel2.appendChild(standard);
    sel2.appendChild(badMultiAttack);
    sel2.value = "NA";
    cell10.appendChild(sel2);
}
function deleteLastAttack() {
    let attackTable = document.getElementById("attacks");
    let tableBody = attackTable.tBodies[0];
    let rows = tableBody.rows.length;
    if (rows > 1) {
        tableBody.deleteRow(-1);
    }
}
function addUpAttacks(numberOfTabObjects) {
    let attackTable = document.getElementById("attacks");
    let tableBody = attackTable.tBodies[0];
    let tableRows = Array.from(tableBody.rows);
    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);
    for (let rows = 0; rows < tableRows.length; rows++) {
        const element = tableRows[rows];
        const verb2 = getInputElementValue(`verb2_${rows}`);
        const verb3 = getInputElementValue(`verb3_${rows}`);
        pushObject.pushTo.push(tabs, "[ATTACKS:", getInputElementValue(`contactArea_${rows}`), ":", getInputElementValue(`penitrationSize_${rows}`), ":", getInputElementValue(`verb2_${rows}`), ":", getInputElementValue(`verb3_${rows}`), ":");
        let noun = getInputElementValue(`noun_${rows}`);
        pushObject.pushTo.push((noun !== "" ? noun : "NO_SUB"), ":", getInputElementValue(`velocityMultiplyer_${rows}`), "]\n", tabs, pushObject.tabObject, "[ATTACK_PREPARE_AND_RECOVER:", getInputElementValue(`preperationTime_${rows}`), ":", getInputElementValue(`recoveryTime_${rows}`), "]\n");
        let attackFlag = getSelectElementValue(`attackFlag_${rows}`);
        if (attackFlag !== "NA") {
            pushObject.pushTo.push(tabs, pushObject.tabObject, "[", attackFlag, "]\n");
        }
    }
}
function createWeapon() {
    let weaponName = getInputElementValue("ITEM_WEAPON");
    errorObject.setErrorMessage();
    if (weaponName == "") {
        errorObject.errorThrown = true;
        errorObject.errorMessages.push("ERROR: The entry for ITEM_WEAPON cannot be blank");
    }
    pushObject.pushTo.push(pushObject.tabObject, "[ITEM_WEAPON:", weaponName, "]", "\n");
    let singular = getInputElementValue("singular");
    if (singular == "") {
        errorObject.errorThrown = true;
        errorObject.errorMessages.push("ERROR: The entry for 'NAME:singular' cannot be blank");
    }
    let plural = getInputElementValue("plural");
    if (plural == "") {
        errorObject.errorThrown = true;
        errorObject.errorMessages.push("ERROR: The entry for 'NAME:plural' cannot be blank");
    }
    pushObject.pushTo.push(pushObject.tabObject, pushObject.tabObject, "[NAME:", singular, ":", plural, "]\n");
    getMultipleInputs({
        inputIds: ["NAME", "SIZE", "TWO_HANDED", "MINIMUM_SIZE", "MATERIAL_SIZE"], numberOfTabObjects: 2
    });
    getMultipleCheckBoxes({
        inputIds: ["TRAINING", "CAN_STONE"], numberOfTabObjects: 2,
    });
    getSingleInput({ inputId: "SKILL", numberOfTabObjects: 2, ignoreIfDisabled: false });
    let ranged = getInputElementValue("RANGED");
    if (ranged != "NA") {
        let amno = getInputElementValue("amno");
        pushObject.pushTo.push(pushObject.tabObject, pushObject.tabObject, "[RANGED:", ranged, ":", amno, "]\n");
        getSingleInput({ inputId: "SHOOT_FORCE", numberOfTabObjects: 2, ignoreIfDisabled: false });
        getSingleInput({ inputId: "SHOOT_MAXVEL", numberOfTabObjects: 2, ignoreIfDisabled: false });
    }
    addUpAttacks(2);
    let div = document.getElementById("result");
    div.innerText = (errorObject.errorThrown ? errorObject.getErrorMessage() : pushObject.getText());
}
//# sourceMappingURL=weapon.js.map