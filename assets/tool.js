"use strict";
function deleteLastDescription() {
    let des = document.getElementById("desc");
    let allDes = des.getElementsByClassName("DESCRIPTION");
    let num = allDes.length;
    if (num > 0) {
        des.children[num - 1].remove();
    }
}
function addNewDescription() {
    let des = document.getElementById("desc");
    let allDes = des.getElementsByClassName("DESCRIPTION");
    let num = allDes.length;
    let newDes = createTextInput({ elementID: `DESCRIPTION_${num}`, elementName: `DESCRIPTION_${num}`, elementClass: "DESCRIPTION" });
    newDes.maxLength = 325;
    return newDes;
}
//# sourceMappingURL=tool.js.map