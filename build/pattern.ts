const stripesOrMotteled = new Set(["STRIPES", "MOTTLED"]);

function addNewPatternColor() 
{
    let colors = <HTMLParagraphElement><any> document.getElementById("colors");

    let cc = colors.children.length;

    let ccd = createDiv({
        elementsToAppend:[
            createLabel({targetId:`COLOR_${cc}`, labelText:"COLOR:"}),
            createTextInput({elementID:`COLOR_${cc}`, elementClass:"COLOR", pattern:"/[A-Z0-9_]/", 
            titleText:"This should be a color value that is defined in 'descriptor_color_standard.txt' on in another file"})
            
        ], elementToAppendDivTo:colors
    });
}

function deletePatternColor() 
{
    let colors = <HTMLParagraphElement><any> document.getElementById("colors");

    let cc = colors.children.length;

    if (cc > (stripesOrMotteled.has(getSelectElementValue("PATTERN")) ? 0 : 1))
    {
        colors.children[cc - 1].remove();
    }
}

function createPattern() 
{
    clearPastResults("spaces");

    getSingleInput({inputId:"COLOR_PATTERN", numberOfTabObjects:2, ignoreIfDisabled:false, ignoreIfBlank:false});

    getSingleInput({inputId:"PATTERN", numberOfTabObjects:2, ignoreIfDisabled:false, ignoreIfBlank:false});

    getMultipleInputsByClass({
        inputClass:"COLOR", numberOfTabObjects:3, ignoreIfDisabled:true, prefixType:PrefixValueType.class
    });
    printResults();
}
