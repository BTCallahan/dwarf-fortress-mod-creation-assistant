"use strict";
function calcRelsize() {
    let relsize = Number.parseInt(getInputElementValue("relsize"));
    let relsizes = getArrayOfElementValues({ className: "bpRelsize" }).map(value => {
        return Number.parseInt(value);
    });
    let bpNumbers = getArrayOfElementValues({ className: "bpNumber" }).map(value => {
        return Number.parseInt(value);
    });
    let relTotal = relsizes.reduce((p, c, i) => {
        let n = bpNumbers[i];
        return p + (c * n);
    });
    let percentagesPerPart = relsizes.map((value) => {
        return (value / relTotal) * relsize;
    });
    let percentagesTotal = percentagesPerPart.map((value, index) => {
        let v = bpNumbers[index];
        return value * v;
    });
    let bpSizesPerArray = Array.from(document.getElementsByClassName("bpSizePer"));
    let bpSizesArray = Array.from(document.getElementsByClassName("bpSize"));
    for (let index = 0; index < percentagesPerPart.length; index++) {
        let ajustedSizePer = percentagesPerPart[index];
        let bpSizePer = bpSizesPerArray[index];
        bpSizePer.innerText = ajustedSizePer.toFixed(0);
        let ajustedSize = percentagesTotal[index];
        let bpSize = bpSizesArray[index];
        bpSize.innerText = ajustedSize.toFixed(0);
    }
}
function addNewBodyPart() {
    let relsizeTable = document.getElementById("relsizeTable");
    let body = relsizeTable.tBodies[0];
    let numberOfRows = body.rows.length;
    let row = body.insertRow();
    let cell0 = row.insertCell();
    cell0.appendChild(createSelect({ elementID: `select_${numberOfRows}`, options: [
            createSelectOption({ value: "HEAD-300-1", text: "Head" }),
            createSelectOption({ value: "NECK-150-1", text: "Neck" }),
            createSelectOption({ value: "BODY_UPPER-1000-1", text: "Upper Body" }),
            createSelectOption({ value: "BODY_LOWER-1000-1", text: "Lower Body" }),
            createSelectOption({ value: "ARM_UPPER-200-2", text: "Upper Arm (2)" }),
            createSelectOption({ value: "ARM_LOWER-200-2", text: "Lower Arm (2)" }),
            createSelectOption({ value: "HAND-80-2", text: "Hand (2)" }),
            createSelectOption({ value: "LEG_UPPER-500-2", text: "Upper Leg (2)" }),
            createSelectOption({ value: "LEG_LOWER-400-2", text: "Lower Leg (2)" }),
            createSelectOption({ value: "FOOT-120-2", text: "Foot/Hoof (2)" }),
            createSelectOption({ value: "FOOT-120-4", text: "Foot/Hoof (4)" }),
            createSelectOption({ value: "LEG-900-4", text: "Leg (4)" }),
            createSelectOption({ value: "WING-500-4", text: "Wing (2)" }),
            createSelectOption({ value: "TAIL-100-1", text: "Tail" }),
            createSelectOption({ value: "TAIL_STANCE-400-1", text: "Tail (Stance)" }),
            createSelectOption({ value: "TAIL_STINGER-400-1", text: "Tail (Stinger)" }),
            createSelectOption({ value: "PINCER-300-2", text: "Pincer (2)" }),
        ], mouseonchange: () => {
            //let relsizeTable_ = <HTMLTableElement><any> document.getElementById("relsizeTable");
            //let body_ = relsizeTable_.tBodies[0];
            //let numberOfRows_ = body_.rows;
            let sel = getSelectElementValue(`select_${numberOfRows}`);
            let strArray = sel.split("-");
            let bpName = document.getElementById(`bpName_${numberOfRows}`);
            bpName.value = strArray[0];
            let relsize = document.getElementById(`bpRelsize_${numberOfRows}`);
            relsize.value = strArray[1];
            let bpNumber = document.getElementById(`bpNumber_${numberOfRows}`);
            bpNumber.value = strArray[2];
        } }));
    let cell1 = row.insertCell();
    cell1.appendChild(createTextInput({
        elementID: `bpName_${numberOfRows}`,
        titleText: "This is a text input for the name of the body part. It is completely optional, and serves as a reminder to the user"
    }));
    let cell2 = row.insertCell();
    cell2.appendChild(createNumberInput({
        elementID: `bpNumber_${numberOfRows}`, defaultValue: "1", inputMin: "1", required: true, elementClass: "bpNumber",
        titleText: "This is the number of instances of the corresponding body part"
    }));
    let cell3 = row.insertCell();
    cell3.appendChild(createNumberInput({
        elementID: `bpRelsize_${numberOfRows}`, inputMin: "0", elementClass: "bpRelsize", required: true, defaultValue: "1",
        titleText: "Here, you should enter the relative size of the body part"
    }));
    let cell4 = row.insertCell();
    cell4.appendChild(createDiv({ elementId: `bpSize_${numberOfRows}`, className: "bpSize" }));
    let cell5 = row.insertCell();
    cell5.appendChild(createDiv({ elementId: `bpSizePer_${numberOfRows}`, className: "bpSizePer" }));
}
function removeLastBodyPart() {
    let relsizeTable = document.getElementById("relsizeTable");
    let body = relsizeTable.tBodies[0];
    body.deleteRow(-1);
}
//# sourceMappingURL=relsizeCalculator.js.map