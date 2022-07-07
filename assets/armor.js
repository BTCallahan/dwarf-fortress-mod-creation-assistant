"use strict";
var armorMap = new Map();
armorMap.set("ITEM_ARMOR", ["ITEM_PANTS", "ITEM_GLOVES", "ITEM_SHOES", "ITEM_SHIELD"]);
armorMap.set("ITEM_PANTS", ["ITEM_ARMOR", "ITEM_GLOVES", "ITEM_SHOES", "ITEM_SHIELD"]);
armorMap.set("ITEM_GLOVES", ["ITEM_ARMOR", "ITEM_PANTS", "ITEM_SHOES", "ITEM_SHIELD"]);
armorMap.set("ITEM_SHOES", ["ITEM_ARMOR", "ITEM_PANTS", "ITEM_GLOVES", "ITEM_SHIELD"]);
armorMap.set("ITEM_SHIELD", ["ITEM_ARMOR", "ITEM_PANTS", "ITEM_GLOVES", "ITEM_SHOES"]);
function onArmorChange() {
    let armorType = getSelectElementValue("armorType");
    let req = document.getElementById(armorType);
    req.required = true;
    let notReqItems = armorMap.get(armorType);
    notReqItems.forEach(element => {
        let notReq = document.getElementById(element);
        notReq.required = false;
    });
}
function createArmor() {
    clearPastResults("spaces");
    let sel = getSelectElementValue("armorType");
    getSingleInput({ inputId: sel, numberOfTabObjects: 2, ignoreIfBlank: false });
    let singular = getInputElementValue("singular");
    let plural = getInputElementValue("plural");
    if (singular === "") {
        errorObject.errorThrown = true;
        errorObject.errorMessages.push("ERROR: The entry for 'NAME:singular' cannot be blank");
    }
    if (plural == "") {
        errorObject.errorThrown = true;
        errorObject.errorMessages.push("ERROR: The entry for 'NAME:plural' cannot be blank");
    }
    pushObject.pushTo.push(pushObject.tabObject, pushObject.tabObject, "[NAME:", singular, ":", plural, "]\n");
    getSingleInput({ inputId: "ADJECTIVE", ignoreIfBlank: true, numberOfTabObjects: 2 });
    getSingleInput({ inputId: "MATERIAL_SIZE", ignoreIfBlank: false, numberOfTabObjects: 2 });
    getSingleInput({ inputId: "ARMORLEVEL", ignoreIfBlank: false, numberOfTabObjects: 2 });
    let se = new Set(["ITEM_GLOVES", "ITEM_SHOES", "ITEM_SHIELD"]);
    let ap = new Set(["ITEM_ARMOR", "ITEM_PANTS"]);
    if (se.has(sel)) {
        let upstep = getInputElementValue("UPSTEP");
        if (upstep !== "0") {
            pushObject.pushTo.push("[UPSTEP:", (upstep === "-1" ? "MAX" : upstep), "]\n");
        }
        if (sel === "ITEM_SHIELD") {
            getSingleInput({ inputId: "BLOCKCHANCE", numberOfTabObjects: 2, ignoreIfBlank: false });
        }
    }
    else if (ap.has(sel)) {
        getSingleInput({ inputId: "PREPLURAL", ignoreIfBlank: true, numberOfTabObjects: 2 });
        getSingleInput({ inputId: "MATERIAL_PLACEHOLDER", ignoreIfBlank: true, numberOfTabObjects: 2 });
        let lbsteb = getInputElementValue("LBSTEP");
        if (lbsteb !== "0") {
            pushObject.pushTo.push("[LBSTEP:", (lbsteb === "-1" ? "MAX" : lbsteb), "]\n");
        }
        if (sel === "ITEM_ARMOR") {
            let ubstep = getInputElementValue("UBSTEP");
            if (ubstep !== "0") {
                pushObject.pushTo.push("[UBSTEP:", (ubstep === "-1" ? "MAX" : ubstep), "]\n");
            }
        }
    }
    if (sel !== "ITEM_SHIELD") {
        getMultipleCheckBoxesByClass({ inputClass: "CKNS", numberOfTabObjects: 2 });
        getMultipleInputsByClass({ inputClass: "INNS", numberOfTabObjects: 2 });
        getSingleInput({ inputId: "LAYER", ignoreIfBlank: false, numberOfTabObjects: 2 });
    }
    printResults();
}
//# sourceMappingURL=armor.js.map