var plantTypeMap = new Map<string, string[]>();

plantTypeMap.set("TREE_TYPE", ["GRASS_TYPE", "SHRUB_TYPE"]);
plantTypeMap.set("GRASS_TYPE", ["TREE_TYPE", "SHRUB_TYPE"]);
plantTypeMap.set("SHRUB_TYPE", ["GRASS_TYPE", "TREE_TYPE"]);

function checkPlantType() {

    let plantType = <HTMLSelectElement><any> document.getElementById("plantType");

    let hide = plantTypeMap.get(plantType.value) as string[];

    let show = <HTMLFieldSetElement><any> document.getElementById(plantType.value);

    show.hidden = false;

    hide.forEach(element => {

        let v = <HTMLFieldSetElement><any> document.getElementById(element);

        v.hidden = true;
    });
}

function createGrowth() 
{
    let growth = <HTMLParagraphElement><any> document.getElementById("growth");

    let growthchildren = growth.children.length;

    growth.appendChild(
        createParagraph({
                elementId:`GROWTH_set_${growthchildren}`,
                elementsToAppend:[
                    createParagraph({elementsToAppend:[
                        createLabel({targetId:`GROWTH_${growthchildren}`, labelText:"GROWTH:"}),
                        createTextInput({
                            elementID:`GROWTH_${growthchildren}`, elementName:"GROWTH", 
                            titleText:"The name of growth. This should have only capital letter and underscores",
                            pattern:"/[A-Z0-9_]/"
                        })
                    ]}),
                    createParagraph({innerText:"GROWTH_NAME:", elementsToAppend:[
                        createTextInput({
                            elementID:`GROWTH_NAME_singular_${growthchildren}`, titleText:"The singular name for this growth", elementClass:"GROWTH_NAME"
                        }),
                        createTextInput({elementID:`GROWTH_NAME_plural_${growthchildren}`, elementClass:"GROWTH_NAME",
                            titleText:"The plural name for this growth. If lenk blank, 'STP' will be used instead", mouseonchange:() => {
                                
                                let growth = <HTMLInputElement><any> document.getElementById(`GROWTH_NAME_plural_${growthchildren}`);

                                if (growth.value === "")
                                {
                                    growth.value = "STP";
                                }
                            },
                        })
                    ]}),
                    createParagraph({innerText:"GROWTH_ITEM:", elementsToAppend:[
                        createTextInput({
                            elementID:`growthItem_${growthchildren}`, defaultValue:"PLANT_GROWTH", 
                            titleText:"Item token. I don't quite understand how this works, so you should probably not change the default value", 
                            
                            elementClass:`GROWTH_ITEM_${growthchildren} GROWTH_ITEM`
                        }),
                        createTextInput({
                            elementID:`growthMaterial_${growthchildren}`, defaultValue:"NONE", 
                            titleText:"Material token. I don't quite understand how this works, so you should propably not change the default value", 
                            elementClass:`GROWTH_ITEM_${growthchildren} GROWTH_ITEM`
                        }),
                        createTextInput({
                            elementID:`localMater_${growthchildren}`,
                            defaultValue:"LOCAL_PLANT_MAT", titleText:"The local material token",
                            elementClass:`GROWTH_ITEM_${growthchildren} GROWTH_ITEM`
                        }),
                        createTextInput({
                            elementID:`plantPart_${growthchildren}`, 
                            titleText:"This should be one of the following: 'LEAF', 'HEART', 'FLOWER', 'FRUIT', or 'STRUCTURAL'",
                            elementClass:`GROWTH_ITEM_${growthchildren} GROWTH_ITEM`
                        })
                    ]}),
                    createFieldset({fieldsetId:`GROWTH_HOST_TILE_fs_${growthchildren}`, legendText:"Growth Host Tiles", elementsToAppend:[
                        createParagraph({elementId:`GROWTH_HOST_TILE_${growthchildren}`}),
                        createButton({innerText:"Create Growth Host Tile", mouseonclick:() => {
                            let a = <HTMLParagraphElement><any> document.getElementById(`GROWTH_HOST_TILE_${growthchildren}`);
                    
                            let numberOfChildren = a.children.length;

                            createParagraph({
                                elementToAppendParagraphTo:a,
                                elementId:`GROWTH_HOST_TILE_para_${growthchildren}_${numberOfChildren}`,
                                elementsToAppend:[
                                    createSelect({elementName:"GROWTH_HOST_TILE", elementClass:"GROWTH_HOST_TILE", 
                                    elementID:`GROWTH_HOST_TILE_${growthchildren}_${numberOfChildren}`,
                                    titleText:"This determins on which part the growth appears",
                                    options:[
                                        createSelectOption({value:"TWIGS", text:"TWIGS"}),
                                        createSelectOption({value:"BRANCHES_AND_TWIGS", text:"BRANCHES_AND_TWIGS"}),
                                        createSelectOption({value:"LIGHT_BRANCHES_AND_TWIGS", text:"LIGHT_BRANCHES_AND_TWIGS"}),
                                        createSelectOption({value:"ALL_BRANCHES_AND_TWIGS", text:"ALL_BRANCHES_AND_TWIGS"}),
                                        createSelectOption({value:"BRANCHES", text:"BRANCHES"}),
                                        createSelectOption({value:"LIGHT_BRANCHES", text:"LIGHT_BRANCHES"}),
                                        createSelectOption({value:"HEAVY_BRANCHES", text:"HEAVY_BRANCHES"}),
                                        createSelectOption({value:"DIRECTED_BRANCHES", text:"DIRECTED_BRANCHES"}),
                                        createSelectOption({value:"HEAVY_BRANCHES_AND_TRUNK", text:"HEAVY_BRANCHES_AND_TRUNK"}),
                                        createSelectOption({value:"DIRECTED_BRANCHES_AND_TRUNK", text:"DIRECTED_BRANCHES_AND_TRUNK"}),
                                        createSelectOption({value:"TRUNK", text:"TRUNK"}),
                                        createSelectOption({value:"ROOTS", text:"ROOTS"}),
                                        createSelectOption({value:"CAP", text:"CAP"}),
                                        createSelectOption({value:"SAPLING", text:"SAPLING"})], defualtValue:"TWIGS", 
                                    }),
                                    createLabel({targetId:`GROWTH_HOST_TILE_${growthchildren}_${numberOfChildren}`, labelText:"GROWTH_HOST_TILE:"})
                                ]
                            });
                        }}),
                        createButton({innerText:"Delete Last Growth Host Tile", mouseonclick: function () {

                            let a = <HTMLParagraphElement><any> document.getElementById(`GROWTH_HOST_TILE_${growthchildren}`);

                            let numberOfChildren = a.children.length;

                            let g = <HTMLParagraphElement><any> document.getElementById(`GROWTH_HOST_TILE_para_${growthchildren}_${numberOfChildren - 1}`);

                            g.remove();
                        }})
                    ]}),
                    createParagraph({innerText:"GROWTH_TRUNK_HEIGHT_PERC:",elementsToAppend:[
                        createNumberInput({
                            elementID:`GROWTH_TRUNK_HEIGHT_PERC_A_${growthchildren}`,
                            elementClass:`GROWTH_TRUNK_HEIGHT_PERC_${growthchildren} GROWTH_TRUNK_HEIGHT_PERC`,
                            titleText:"This value is only used with palm and date palm trees, and with a value of 100"
                        }),
                        createNumberInput({
                            elementID:`GROWTH_TRUNK_HEIGHT_PERC_B_${growthchildren}`,
                            elementClass:`GROWTH_TRUNK_HEIGHT_PERC_${growthchildren} GROWTH_TRUNK_HEIGHT_PERC`,
                            titleText:"This value is only used with palm and date palm trees, and with a value of -1"
                        })
                    ]}),
                    createParagraph({innerText:"GROWTH_TIMING:",elementsToAppend:[
                        createNumberInput({
                            inputMin:"0", inputMax:"403200", elementID:`GROWTH_TIMING_A_${growthchildren} GROWTH_TIMING`, 
                            titleText:"This determins the begining of the range of a year in which this growth will exist. For example, flowers will bloom from 60000 to 119999, fruit will rippen from 120000 to 200000, and deciduous leaves will show from 0 to 300000"
                        }),
                        createNumberInput({
                            inputMin:"0", inputMax:"403200", elementID:`GROWTH_TIMING_B_${growthchildren} GROWTH_TIMING`, 
                            titleText:"This determins the end of the range of a year in which this growth will exist. For example, flowers will bloom from 60000 to 119999, fruit will rippen from 120000 to 200000, and deciduous leaves will show from 0 to 300000"
                        })
                    ]}),
                    createFieldset({
                        fieldsetId:`GROWTH_PRINT_fs_${growthchildren}`,
                        legendText:"Growth Prints",
                        elementsToAppend:[
                            createParagraph({
                                innerText:"This handels how the growth is displayed during diffrent stages. It can be used for leaves changing color in fall, or for fruits that ripen"
                            }),
                            createTable({elementId:`GROWTH_PRINT_${growthchildren}`, headerTextItems:[
                                "Growth print tile", "Growth print item tile", "Foreground", "Background", 
                                "Brightness", "Growth time start", "Growth time end", "Priority"
                            ]}),
                            createParagraph({
                                innerText:"GROWTH_PRINT:",
                                elementId:`GROWTH_PRINT_${growthchildren}`,
                            }),
                            createButton({
                                innerText:"Create Growth Print",
                                mouseonclick:function () {

                                    let gt = <HTMLTableElement><any> document.getElementById(`GROWTH_PRINT_${growthchildren}`);

                                    let bod = gt.tBodies[0];

                                    let numberOfRows = bod.rows.length;

                                    let row = bod.insertRow();

                                    let c1 = row.insertCell();

                                    c1.appendChild(createNumberInput({
                                            inputMin:"0", inputMax:"255", elementClass:"ch3", elementID:`GROWTH_PRINT_tile_${growthchildren}_${numberOfRows}`, 
                                            titleText:"This is the tile used to represent this growth print in the overworld"
                                    }));
                                    let c2 = row.insertCell();

                                    c2.appendChild(createNumberInput({
                                            inputMin:"0", inputMax:"255", elementClass:"ch3", elementID:`GROWTH_PRINT_itemtile_${growthchildren}_${numberOfRows}`,
                                            titleText:"This is the tile used to represent this growth print as an item"
                                    }))
                                    let c3 = row.insertCell();

                                    c3.appendChild(createNumberInput({
                                        inputMin:"0", inputMax:"7", elementClass:"ch1", elementID:`GROWTH_PRINT_fg_${growthchildren}_${numberOfRows}`,
                                        titleText:"This is the foreground value for the growth print"
                                    }));
                                    let c4 = row.insertCell();

                                    c4.appendChild(createNumberInput({
                                        inputMin:"0", inputMax:"7", elementClass:"ch1", elementID:`GROWTH_PRINT_bg_${growthchildren}_${numberOfRows}`,
                                        titleText:"This is the background value for the growth print"
                                    }));
                                    let c5 = row.insertCell();

                                    c5.appendChild(createNumberInput({
                                        inputMin:"-1", inputMax:"403200", elementClass:"ch1", elementID:`GROWTH_PRINT_start_${growthchildren}_${numberOfRows}`,
                                        titleText:"This is the start time value for the growth print. If this value is -1, then ALL will be used as the value for "
                                    }));
                                    let c6 = row.insertCell();

                                    c6.appendChild(createNumberInput({
                                        inputMin:"0", inputMax:"403200", elementClass:"ch1", elementID:`GROWTH_PRINT_end_${growthchildren}_${numberOfRows}`,
                                        titleText:"This is the end time value for the growth print"
                                    }));
                                    let c7 = row.insertCell();

                                    c7.appendChild(createNumberInput({
                                        inputMin:"0", elementID:`GROWTH_PRINT_prior_${growthchildren}_${numberOfRows}`,
                                        titleText:"This is the priority for the growth print"
                                    }));

                                }
                            }),
                            createButton({
                                innerText:"Delete Last Growth Print",
                                mouseonclick:function () {
                                    let gt = <HTMLTableElement><any> document.getElementById(`GROWTH_PRINT_${growthchildren}`);

                                    let bod = gt.tBodies[0];

                                    //let numberOfRows = bod.rows.length;

                                    bod.deleteRow(-1);
                                    // todo
                                }
                            })
                        ]
                    }),
                    createParagraph({elementsToAppend:[
                            createCheckbox({
                                elementId:`GROWTH_HAS_SEED_${growthchildren}`, elementName:"GROWTH_HAS_SEED", value:"GROWTH_HAS_SEED",
                                titleText:"If this growth is eaten raw, it will leave behind a seed. Useful for fruits"
                            }),
                            createLabel({
                                targetId:`GROWTH_HAS_SEED_${growthchildren}`, labelText:"GROWTH_HAS_SEED"
                            })
                    ]}),
                    createParagraph({elementsToAppend:[
                        createSelect({elementID:`growthDropOff_${growthchildren}`, defualtValue:"NODROP", options:[
                            createSelectOption({value:"NODROP", text:"This growth will not drop off the plant"}),
                            createSelectOption({value:"GROWTH_DROPS_OFF", text:"GROWTH_DROPS_OFF - This growth will eventually fall off the plant and create a cloud of items"}),
                            createSelectOption({value:"GROWTH_DROPS_OFF_NO_CLOUD", text:"GROWTH_DROPS_OFF_NO_CLOUD - This growth will eventually fall off the plant"})
                        ], titleText:"GROWTH_DROPS_OFF can be used for deciduous leaves and some flowers, while GROWTH_DROPS_OFF_NO_CLOUD can be used for fruits"}),
                        createLabel({targetId:`growthDropOff_${growthchildren}`, labelText:"Growth drop off:"})
                    ]})
                ]
            }
        )
    )   
}

function readGrowth()
{
    let growth = <HTMLParagraphElement><any> document.getElementById("growth");

    let tabs = pushObject.tabObject.repeat(2);

    for (let index = 0; index < growth.children.length; index++) {

        let element = growth.children[index] as HTMLParagraphElement;

        getSingleInput({inputId:`GROWTH_${index}`, ignoreIfBlank:false, numberOfTabObjects:1, prefixType:PrefixValueType.id});

        getMultipleInputsByClass({
            parentElement:element,inputClass:"GROWTH_NAME", numberOfTabObjects:2, appendClassInFrontOfId:true, ignoreIfBlank:false, prefixType:PrefixValueType.classCon
        });
        getMultipleInputsByClass({
            parentElement:element, inputClass:"GROWTH_ITEM", numberOfTabObjects:2, appendClassInFrontOfId:true, ignoreIfBlank:false, prefixType:PrefixValueType.classCon
        });
        getMultipleInputsByClass({
            parentElement:element, inputClass:"GROWTH_HOST_TILE", numberOfTabObjects:2, ignoreIfBlank:true, prefixType:PrefixValueType.class
        });
        let growthTrunkHeightPercentsArrayValues = Array.from(<HTMLCollectionOf<HTMLInputElement>><any> element.getElementsByClassName("GROWTH_TRUNK_HEIGHT_PERC")).map(value => {
            return value.value;
        });
        if (growthTrunkHeightPercentsArrayValues.every(value => {
            return value !== "";
        }))
        {
            pushObject.pushTo.push(tabs, "[GROWTH_TRUNK_HEIGHT_PERC:", growthTrunkHeightPercentsArrayValues.join(":"), "]\n");
        }
        let growthTimingArrayValues = Array.from(<HTMLCollectionOf<HTMLInputElement>><any> element.getElementsByClassName("GROWTH_TIMING")).map(value => {
            return value.value;
        });
        if (growthTimingArrayValues.every(value => {
            return value !== "";
        }))
        {
            pushObject.pushTo.push(tabs, "[GROWTH_TIMING:", growthTimingArrayValues.join(":"), "]\n");
        }
        let growthPrintTable = <HTMLTableElement><any> document.getElementById(`GROWTH_PRINT_${index}`);

        let tableBodyRows = growthPrintTable.tBodies[0].rows;

        for (let r = 0; r < tableBodyRows.length; r++)
        {
            let currentRow = tableBodyRows[r];

            let cellInputValues = Array.from(currentRow.cells).map(value => {

                let valueChild = value.children[0] as HTMLInputElement;

                return valueChild.value;
            });
            if (cellInputValues.every(value => {
                
                return value !== "";
            }))
            {
                pushObject.pushTo.push(tabs, "GROWTH_PRINT:", cellInputValues.join(":"), "]\n");
            }
        }
        getSingleCheckBox({inputId:`GROWTH_HAS_SEED_${index}`, numberOfTabObjects:2, prefixType:PrefixValueType.name});

        let dropOff = (<HTMLSelectElement><any> document.getElementById(`growthDropOff_${index}`)).value;

        if (dropOff !== "NODROP")
        {
            pushObject.pushTo.push(tabs, "[", dropOff, "]\n");
        }
    }
}

function removeGrowth() 
{
    let growth = <HTMLParagraphElement><any> document.getElementById("growth");

    let growthchildren = growth.children.length;

    if (growthchildren > 0)
    {
        growth.children[growthchildren-1].remove();
    }
}

function createMaterialTemplate() {

    let materialTemplates = <HTMLParagraphElement><any> document.getElementById("materialTemplates");

    let numberOfTemplates = materialTemplates.children.length;

    materialTemplates.appendChild(
        createParagraph({elementId:`USE_MATERIAL_TEMPLATE_${numberOfTemplates}`, elementsToAppend:[
            createParagraph({innerText:"USE_MATERIAL_TEMPLATE:", elementsToAppend:[
                createSelect({elementID:`templateType_${numberOfTemplates}`, options:[
                    createSelectOption({value:"STRUCTURAL", text:"STRUCTURAL - Used for the plant's structure"}),
                    createSelectOption({value:"DRINK", text:"DRINK - Used for drinks made from this plant"}),
                    createSelectOption({value:"MILL", text:"MILL - Used for products milled from this plant"}),
                    createSelectOption({value:"LEAF", text:"LEAF - Used for this plant's leaves"}),
                    createSelectOption({value:"SEED", text:"SEED - Used for this plant's seeds"}),
                    createSelectOption({value:"FLOWER", text:"FLOWER - Used for this plant's seeds"}),
                    createSelectOption({value:"OIL", text:"OIL - Used for plant oils"}),
                    createSelectOption({value:"SOAP", text:"SOAP - Used for this soaps made from this plant"}),
                ], defualtValue:"STRUCTURAL"}),
                createTextInput({
                    elementID:`matTemplate_${numberOfTemplates}`, 
                    titleText:"The effects of using any template aside from 'STRUCTURAL_PLANT_TEMPLATE' are unkown",  
                    defaultValue:"STRUCTURAL_PLANT_TEMPLATE"}),
            ]}),
            createParagraph({ elementsToAppend:[
                createNumberInput({
                    inputMin:"0", defaultValue:"0", elementID:`MATERIAL_VALUE_${numberOfTemplates}`, elementName:"MATERIAL_VALUE",
                    titleText:"The value of this material"
                }),
                createLabel({targetId:`MATERIAL_VALUE_${numberOfTemplates}`, labelText:"MATERIAL_VALUE"})
            ]}),
            createParagraph({elementsToAppend:[
                createCheckbox({elementId:`EDIBLE_VERMIN_${numberOfTemplates}`, elementName:"EDIBLE_VERMIN", value:"EDIBLE_VERMIN", elementClass:"EDIBLE", titleText:""}),
                createLabel({targetId:`EDIBLE_VERMIN_${numberOfTemplates}`, labelText:"EDIBLE_VERMIN"})
            ]}),
            createParagraph({elementsToAppend:[
                createCheckbox({elementId:`EDIBLE_RAW_${numberOfTemplates}`, elementName:"EDIBLE_RAW", value:"EDIBLE_RAW", elementClass:"EDIBLE", titleText:""}),
                createLabel({targetId:`EDIBLE_RAW_${numberOfTemplates}`, labelText:"EDIBLE_RAW"})
            ]}),
            createParagraph({elementsToAppend:[
                createCheckbox({elementId:`EDIBLE_COOKED_${numberOfTemplates}`, elementName:"EDIBLE_COOKED", value:"EDIBLE_COOKED", elementClass:"EDIBLE", titleText:""}),
                createLabel({targetId:`EDIBLE_COOKED_${numberOfTemplates}`, labelText:"EDIBLE_COOKED"})
            ]}),
            createParagraph({innerText:"DISPLAY_COLOR", elementsToAppend:[
                createNumberInput({
                    inputMin:"0", inputMax:"7", elementClass:"ch1 DISPLAY_COLOR", elementID:`DISPLAY_COLOR_fg_${numberOfTemplates}`, 
                    titleText:"This is the foreground value for the display color"
                }),
                createNumberInput({
                    inputMin:"0", inputMax:"7", elementClass:"ch1 DISPLAY_COLOR", elementID:`DISPLAY_COLOR_bg_${numberOfTemplates}`,
                    titleText:"This is the background value for the display color"
                }),
                createNumberInput({
                    inputMin:"0", inputMax:"1", elementClass:"ch1 DISPLAY_COLOR", elementID:`DISPLAY_COLOR_br_${numberOfTemplates}`,
                    titleText:"This is the brightness value for the display color"
                }),
            ]}),
            createParagraph({innerText:"STATE_COLOR:", elementsToAppend:[
                createSelect({elementID:`whichColor_${numberOfTemplates}`, options:[
                    createSelectOption({value:"ALL_SOLID", text:"ALL_SOLID"}),
                    createSelectOption({value:"ALL", text:"ALL"}),
                    createSelectOption({value:"SOLID", text:"SOLID"}),
                    createSelectOption({value:"LIQUID", text:"LIQUID"}),
                    createSelectOption({value:"GAS", text:"GAS"}),
                    createSelectOption({value:"POWDER", text:"POWDER"}),
                    createSelectOption({value:"PASTE", text:"PASTE"}),
                    createSelectOption({value:"PRESSED", text:"PRESSED"})
                ], defualtValue:"ALL_SOLID"}),
                createTextInput({elementID:`descriptorColor_${numberOfTemplates}`, titleText:"This should be one of the defined color tokens. If left blank, this will be ignored"})
            ]}),
        ]})
    )
}

function readMaterialTemplate()
{
    let tabspaces = pushObject.tabObject.repeat(2);

    let materialTemplates = <HTMLParagraphElement><any> document.getElementById("materialTemplates");

    for (let index = 0; index < materialTemplates.children.length; index++) 
    {
        let element = materialTemplates.children[index] as HTMLElement;

        let templateType = <HTMLSelectElement><any> document.getElementById(`templateType_${index}`);

        let matTemplate = <HTMLInputElement><any> document.getElementById(`matTemplate_${index}`);
        
        pushObject.pushTo.push(tabspaces, "[USE_MATERIAL_TEMPLATE:", templateType.value, ":", matTemplate.value, "]\n");

        getSingleInput({inputId:`MATERIAL_VALUE_${index}`, ignoreIfBlank:true, numberOfTabObjects:2, prefixType:PrefixValueType.name});

        getMultipleCheckBoxesByClass({parentElement:element, inputClass:"EDIBLE", numberOfTabObjects:2, elementType:PrefixValueType.name});

        let displayColors = Array.from(<HTMLCollectionOf<HTMLInputElement>><any> element.getElementsByClassName("DISPLAY_COLOR")).map(value => {
            return value.value;
        });
        if (displayColors.every(value => {
            return value !== "";
        }))
        {
            pushObject.pushTo.push(tabspaces, "[DISPLAY_COLOR:", displayColors.join(":"), "]\n");
        }
        let stateColor = getInputElementValue(`descriptorColor_${index}`);

        if (stateColor !== "")
        {
            pushObject.pushTo.push(tabspaces, "[STATE_COLOR:", getSelectElementValue(`whichColor_${index}`), ":", stateColor, "]\n");
        }
    }
}

function deleteMaterialTemplate() 
{
    let materialTemplates = <HTMLParagraphElement><any> document.getElementById("materialTemplates");

    let numberOfTemplates = materialTemplates.children.length;

    materialTemplates.children[numberOfTemplates - 1].remove();
}

function createPlant()
{
    clearPastResults("spaces");

    getSingleInput({inputId:"PLANT", numberOfTabObjects:1, ignoreIfBlank:false});

    getMultipleCheckBoxesByClass({inputClass:"NAME", numberOfTabObjects:2, appendClassInFrontOfId:false, ignoreIfDisabled:true});

    getSingleInput({inputId:"ALL_NAMES", numberOfTabObjects:2, ignoreIfBlank:true});

    getMultipleCheckBoxesByClass({inputClass:"PREFSTRING", numberOfTabObjects:2, ignoreIfDisabled:true});

    readMaterialTemplate();

    let basicMat = getArrayOfElements<HTMLInputElement>({className:"BASIC_MAT"}).map(value => {
        return value.value;
    });
    getMultipleInputsByClass({inputClass:"BASIC_MAT", appendClassInFrontOfId:true, numberOfTabObjects:1, prefixType:PrefixValueType.classCon});

    readGrowth();

    let undergroundDepth = getArrayOfElements<HTMLInputElement>({className:"UNDERGROUND_DEPTH"}).map(value => {
        return value.value;
    });
    if (undergroundDepth.every(value => {
        value !== "";
    }))
    {
        pushObject.pushTo.push(pushObject.tabObject, "[UNDERGROUND_DEPTH:", undergroundDepth.join(":"), "]\n");
    }
    getMultipleCheckBoxesById({inputIds:["GOOD", "EVIL", "SAVAGE"], numberOfTabObjects:1, elementType:PrefixValueType.id});

    getSingleInput({inputId:"FREQUENCY", ignoreIfBlank:true, numberOfTabObjects:1});

    getMultipleCheckBoxesById({inputIds:["WET", "DRY"], numberOfTabObjects:1, elementType:PrefixValueType.id});

    let plantType = getSelectElementValue("plantType");

    switch (plantType) {
        case "TREE_TYPE":
            
            getSingleInput({inputId:"TREE", numberOfTabObjects:1, ignoreIfBlank:false});

            getMultipleInputsById({inputIds:["TREE_TILE", "DEAD_TREE_TILE", "SAPLING_TILE", "DEAD_SAPLING_TILE"], numberOfTabObjects:1});

            let tree_color = getArrayOfElementValues({className:"TREE_COLOR"});

            if (tree_color.every(element => {
                return element !== "";
            }))
            {
                pushObject.pushTo.push(pushObject.tabObject, "[TREE_COLOR:", tree_color.join(":"), "]\n");
            }
            let dead_tree_color = getArrayOfElementValues({className:"DEAD_TREE_COLOR"});

            if (dead_tree_color.every(element => {
                return element !== "";
            }))
            {
                pushObject.pushTo.push(pushObject.tabObject, "[DEAD_TREE_COLOR:", dead_tree_color.join(":"), "]\n");
            }
            let sapling_color = getArrayOfElementValues({className:"SAPLING_COLOR"});

            if (sapling_color.every(element => {
                return element !== "";
            }))
            {
                pushObject.pushTo.push(pushObject.tabObject, "[SAPLING_COLOR:", sapling_color.join(":"), "]\n");
            }
            let dead_sapling_color = getArrayOfElementValues({className:"DEAD_SAPLING_COLOR"});

            if (dead_sapling_color.every(element => {
                return element !== "";
            }))
            {
                pushObject.pushTo.push(pushObject.tabObject, "[DEAD_SAPLING_COLOR:", dead_sapling_color.join(":"), "]\n");
            }
            getMultipleInputsById({inputIds:["SAPLING_DROWN_LEVEL", "TREE_DROWN_LEVEL"], numberOfTabObjects:2});

            getMultipleCheckBoxesById({inputIds:["SAPLING", "STANDARD_TILE_NAMES"], numberOfTabObjects:1});

            getMultipleInputsById({inputIds:[
                "TRUNK_NAME", "MAX_TRUNK_HEIGHT", "MAX_TRUNK_DIAMETER", "TRUNK_PERIOD", "TRUNK_WIDTH_PERIOD", "TRUNK_BRANCHING", 
                "LIGHT_BRANCHES_NAME", "HEAVY_BRANCHES_NAME", "DIRECTED_BRANCHES_NAME", 
                "BRANCH_DENSITY", "LIGHT_BRANCHES_DENSITY", "HEAVY_BRANCH_DENSITY", "DIRECTED_BRANCHES_DENSITY",
                "BRANCH_RADIUS", "LIGHT_BRANCH_RADIUS", "HEAVY_BRANCH_RADIUS", "DIRECTED_BRANCH_RADIUS",
                "ROOT_NAME", "ROOT_RADIUS", "ROOT_DENSITY",
                "TWIGS_NAME", "TWIGS_SIDE_BRANCHES", "TWIGS_ABOVE_BRANCHES", "TWIGS_BELOW_BRANCHES", "TWIGS_SIDE_HEAVY_BRANCHES", "TWIGS_ABOVE_HEAVY_BRANCHES", "TWIGS_BELOW_HEAVY_BRANCHES",
                "TWIGS_SIDE_TRUNK", "TWIGS_ABOVE_TRUNK", "TWIGS_BELOW_TRUNK"
            ], numberOfTabObjects:1});

            break;
        case "SHRUB_TYPE":

            getMultipleCheckBoxesByClass({inputClass:"SEASONS", numberOfTabObjects:1});

            getMultipleInputsById({inputIds:[
                "GROWDUR", "CLUSTERSIZE", "PICKED_TILE", "DEAD_PICKED_TILE", "SHRUB_TILE", "DEAD_SHRUB_TILE"
            ], numberOfTabObjects:1});
            getColor({colorContainterId:"PICKED_COLOR", numberOfTabObjects:1});

            getColor({colorContainterId:"DEAD_PICKED_COLOR", numberOfTabObjects:1});

            getColor({colorContainterId:"SHRUB_COLOR", numberOfTabObjects:1});

            getColor({colorContainterId:"DEAD_SHRUB_COLOR", numberOfTabObjects:1});

            getSingleInput({inputId:"SHRUB_DROWN_LEVEL", numberOfTabObjects:1});

            break;
        default:
            break;
    }

    printResults();
}