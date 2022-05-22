function createNewAttack(hasPrepRecoveryAndFlags:boolean) 
{
    let attackTable = <HTMLTableElement><any> document.getElementById("attacks");

    let tableBody = attackTable.tBodies[0];

    let rows = tableBody.rows.length;

    let newRow = tableBody.insertRow();

    let cell1 = newRow.insertCell();

    let sel = createSelect({elementID:`weaponType_${rows}`, elementName:`weaponType_${rows}`})

    addOptionToSelect({value:"BLUNT", text:"Blunt", select:sel});
    addOptionToSelect({value:"EDGE", text:"Edge", select:sel});

    sel.value = "BLUNT";

    cell1.appendChild(sel);

    let cell2 = newRow.insertCell();

    let conArea = createNumberInput({defaultValue:"0", inputMin:"0", elementName:`contactArea_${rows}`, elementID:`contactArea_${rows}`});

    cell2.appendChild(conArea);

    let cell3 = newRow.insertCell();

    let penSize = createNumberInput({defaultValue:"0", inputMin:"0", elementName:`penitrationSize_${rows}`, elementID:`penitrationSize_${rows}`});

    cell3.appendChild(penSize);

    let cell4 = newRow.insertCell();

    let verb2 = createTextInput({elementName:`verb2_${rows}`, elementID:`verb2_${rows}`});

    cell4.appendChild(verb2);
    
    let cell5 = newRow.insertCell();

    let verb3 = createTextInput({elementName:`verb3_${rows}`, elementID:`verb3_${rows}`});

    cell5.appendChild(verb3);
    
    let cell6 = newRow.insertCell();

    let noun = createTextInput({elementName:`noun_${rows}`, elementID:`noun_${rows}`});

    cell6.appendChild(noun);

    let cell7 = newRow.insertCell();

    let velMul = createNumberInput({defaultValue:"1", inputMin:"1", elementName:`velocityMultiplyer_${rows}`, elementID:`velocityMultiplyer_${rows}`});

    cell7.appendChild(velMul);

    if (hasPrepRecoveryAndFlags)
    {
        let cell8 = newRow.insertCell();

        let prepTime = createNumberInput({defaultValue:"1", inputMin:"1", elementName:`preperationTime_${rows}`, elementID:`preperationTime_${rows}`});
    
        cell8.appendChild(prepTime);
    
        let cell9 = newRow.insertCell();
    
        let recTime = createNumberInput({defaultValue:"1", inputMin:"1", elementName:`recoveryTime_${rows}`, elementID:`recoveryTime_${rows}`});
    
        cell9.appendChild(recTime)
    
        let cell10 = newRow.insertCell();
    
        let sel2 = createSelect({elementID:`attackFlag_${rows}`, elementName:`attackFlag_${rows}`});
    
        addOptionToSelect({value:"ATTACK_FLAG_INDEPENDENT_MULTIATTACK", text:"ATTACK_FLAG_INDEPENDENT_MULTIATTACK - No multi-strike penalty", select:sel2});
        addOptionToSelect({value:"NA", text:"Standard multi-strike penalty", select:sel2});
        addOptionToSelect({value:"ATTACK_FLAG_BAD_MULTIATTACK", text:"ATTACK_FLAG_BAD_MULTIATTACK - Multiple strikes not allowed", select:sel2});
    
        sel2.value = "NA";
    
        cell10.appendChild(sel2);
    }
}

function deleteLastAttack()
{
    let attackTable = <HTMLTableElement><any> document.getElementById("attacks");

    let tableBody = attackTable.tBodies[0];

    let rows = tableBody.rows.length;

    if (rows > 1)
    {
        tableBody.deleteRow(-1);
    }
}

function addUpAttacks(numberOfTabObjects:number, hasPrepRecoveryAndFlags:boolean)
{
    let attackTable = <HTMLTableElement><any> document.getElementById("attacks");

    let tableBody = attackTable.tBodies[0];

    let tableRows = Array.from(tableBody.rows)

    let tabs = pushObject.tabObject.repeat(numberOfTabObjects);

    for (let rows = 0; rows < tableRows.length; rows++) 
    {
        const element = tableRows[rows];
        
        const verb2 = getInputElementValue(`verb2_${rows}`);
        const verb3 = getInputElementValue(`verb3_${rows}`);

        pushObject.pushTo.push(
            tabs, 
            "[ATTACKS:", 
            getInputElementValue(`contactArea_${rows}`), ":", 
            getInputElementValue(`penitrationSize_${rows}`), ":",
            getInputElementValue(`verb2_${rows}`), ":",
            getInputElementValue(`verb3_${rows}`), ":"
        );
        let noun = getInputElementValue(`noun_${rows}`);

        pushObject.pushTo.push(
            (noun !== "" ? noun : "NO_SUB"), ":",
            getInputElementValue(`velocityMultiplyer_${rows}`), "]\n"
        );
        if (hasPrepRecoveryAndFlags)
        {
            pushObject.pushTo.push(
                tabs, pushObject.tabObject, 
                "[ATTACK_PREPARE_AND_RECOVER:",
                getInputElementValue(`preperationTime_${rows}`), ":",
                getInputElementValue(`recoveryTime_${rows}`), "]\n"
            );
            let attackFlag =  getSelectElementValue(`attackFlag_${rows}`);
        
            if (attackFlag !== "NA")
            {
                pushObject.pushTo.push(
                    tabs, pushObject.tabObject, 
                    "[", attackFlag, "]\n"
                );
            }
        }
    }
}
