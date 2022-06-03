function createPrefstring() {

    let prefs = <HTMLParagraphElement><any> document.getElementById("PREFSTRING");

    let l = prefs.children.length;

    let d = createDiv({elementId:`PREFSTRING_div_${l}`, elementsToAppend:[
        createTextInput({elementID:`PREFSTRING_${l}`, elementName:"PREFSTRING", elementClass:"PREFSTRING"})
    ]});

    prefs.appendChild(d);
}

function deletePrefstring() {
    
    let prefs = <HTMLParagraphElement><any> document.getElementById("PREFSTRING");

    let l = prefs.children.length;

    prefs.children[l - 1].remove();
}
