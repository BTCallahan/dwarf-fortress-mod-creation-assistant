function deleteLastDescription()
{
    let des = <HTMLDivElement><any> document.getElementById("desc");

    let allDes = des.getElementsByClassName("DESCRIPTION");

    let num = allDes.length;

    if (num > 0)
    {
        des.children[num - 1].remove();
    }
}

function addNewDescription()
{
    let des = <HTMLDivElement><any> document.getElementById("desc");

    let allDes = des.getElementsByClassName("DESCRIPTION");

    let num = allDes.length;

    let newDes = createTextInput({elementID:`DESCRIPTION_${num}`, elementName:`DESCRIPTION_${num}`, elementClass:"DESCRIPTION"});

    newDes.maxLength = 325;

    return newDes;
}
