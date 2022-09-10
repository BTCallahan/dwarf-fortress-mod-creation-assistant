function setColorElement()
{
    let r = <HTMLInputElement><any> document.getElementById("R");
    let g = <HTMLInputElement><any> document.getElementById("G");
    let b = <HTMLInputElement><any> document.getElementById("B");

    let rnum = parseInt(r.value);
    let gnum = parseInt(g.value);
    let bnum = parseInt(b.value);

    let col = <HTMLInputElement><any> document.getElementById("col");

    col.value = `#${rnum.toString(16).padStart(2, "0")}${gnum.toString(16).padStart(2, "0")}${bnum.toString(16).padStart(2, "0")}`
}

function setIndividualElements()
{
    let col = <HTMLInputElement><any> document.getElementById("col");

    let rv = parseInt(col.value.slice(1,3), 16);
    let gv = parseInt(col.value.slice(3,5), 16);
    let bv = parseInt(col.value.slice(5,7), 16);

    let r = <HTMLInputElement><any> document.getElementById("R");
    let g = <HTMLInputElement><any> document.getElementById("G");
    let b = <HTMLInputElement><any> document.getElementById("B");

    r.value = rv.toString();
    g.value = gv.toString();
    b.value = bv.toString();
}

function createDesColor()
{
    clearPastResults("spaces");

    pushObject.pushTo.push("[OBJECT:DESCRIPTOR_COLOR]\n\n");

    let color = <HTMLInputElement><any> document.getElementById("COLOR");

    let name = <HTMLInputElement><any> document.getElementById("NAME");

    let word = <HTMLInputElement><any> document.getElementById("WORD");

    let r = <HTMLInputElement><any> document.getElementById("R");
    let g = <HTMLInputElement><any> document.getElementById("G");
    let b = <HTMLInputElement><any> document.getElementById("B");

    getSingleInput({inputId:"COLOR", numberOfTabObjects:0, ignoreIfBlank:false, ignoreIfDisabled:false});

    getSingleInput({inputId:"NAME", numberOfTabObjects:1, ignoreIfBlank:false, ignoreIfDisabled:false});

    getSingleInput({inputId:"WORD", numberOfTabObjects:1, ignoreIfBlank:false, ignoreIfDisabled:false});

    getMultipleInputsByClass({
        inputClass:"RGB", numberOfTabObjects:1, ignoreIfBlank:false, ignoreIfDisabled:false, requireNoBlanks:true, appendClassInFrontOfId:true, 
        prefixType:PrefixValueType.classCon
    });
    printResults();
}
