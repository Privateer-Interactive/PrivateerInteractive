if (typeof WrappedFunction !== 'undefined') {
    console.log('WrappedFunction is loaded.');
} else {
    console.log('WrappedFunction is not loaded.');
    throw new Error('WrappedFunction.js must be loaded before AddContent.js');
}


// function ReturnFunctionParameters(func)
// {
//     // Does NOT handle default parameters or destructured parameters
//     // e.g. function example(a, b=2, {c, d}) {}
//     // would return ['a', 'b=2', '{c', 'd}']
//     // but should ideally return ['a', 'b', '{c, d}']
//     const funcStr = func.toString();
//     const params = funcStr.match(/\(([^)]*)\)/)[1];
//     return params.split(',').map(param => param.trim()).filter(Boolean);
// }


let validClassTypes = {
    '.Group' : [0,1,2,3,4],
     '.Container' : [0,2,3,4]
    };
let GroupOptionFunctions = {};
let ContainerOptionFunctions = {};

function CheckDOMValid(selectedDOM)
{
    let errorMSG = '';
    
    if(!selectedDOM) errorMSG = 'No DOM element selected.';
    else if(typeof selectedDOM == 'string')
    {
        if(document.querySelector(selectedDOM) == null) errorMSG = 'No DOM element matches the provided selector.';
        else selectedDOM = document.querySelector(selectedDOM); 
    }

    if(!(selectedDOM instanceof Element)) errorMSG = 'Selected DOM element is not valid.';

    return [
        errorMSG === '' ? true : false,
        new Error(errorMSG)
    ];
}

function AddEditorOptions(selectedDOM)
{
    let selectedDOMType = selectedDOM.className;
    let availableOptions = validClassTypes[selectedDOMType];
    if(!availableOptions) throw new Error('Selected DOM element is not a valid type for adding editor options.');

    
    let select = GenerateDOM(selectedDOM, 'select', null, 'EditorSelect', "EditorSelect#" + labelCount, null);
    GenerateDOM(selectedDOM, 'label', 'DO NOT SEE THIS', 'EditorLabel', "EditorLabel#" + labelCount, null).htmlFor = select.id;

    availableOptions.forEach(element => {
        let option = document.createElement('option');
        option.value = baseOptions[element];
        option.text = baseOptions[element];
        select.appendChild(option);
    });

    select.onchange = function() {
        let parameterList = null;
        baseFunctions[select.selectedIndex]();
        select.selectedIndex = 0;
    }
}

function AddGroup(parentDOM) {
    
    let checkResult = CheckDOMValid(parentDOM);
    if(!checkResult[0]) throw checkResult[1];

    let groupBase = GenerateDOM(parentDOM, 'div', null, 'Group', null, null);
    let editorGroup = GenerateDOM(groupBase, 'div', null, 'OverlaySpace', null, null);
    
    const labelCount = document.querySelectorAll('.EditorLabel').length;
    

    // let label = GenerateDOM(editorGroup, 'label', 'DO NOT SEE THIS', 'EditorLabel', "EditorLabel#" + labelCount, null);
    // let select = GenerateDOM(editorGroup, 'select', null, 'EditorSelect', "EditorSelect#" + labelCount, null);
    // label.htmlFor = select.id;


    {
        // let options = ['+','Rotate', 'Add Container', 'Change Side'];
        // let optionFuncs = [
        //     () => { console.log('Rotate action'); },
        //     () => 
        //         { 
        //             console.log('Add Container action');
        //             let containerElement = groupBase.appendChild(GenerateDOM(groupBase, 'div', null, 'Container', null, null));
        //         },
        //     () => { console.log('Change Side action'); },
        //     // () => { 
                
        //     // }
        // ];
        // if(parentDOM.className === 'MainBody') {
        //     options.push('Add Group');
        //     optionFuncs.push(() => { AddGroup(groupBase); });
        // }

        // options.push('Remove THIS Group');
        // optionFuncs.push(() => {
        //     if(confirm('Are you sure you want to remove this group? This action cannot be undone.')) {
        //         groupBase.remove();
        //     }
        // });

        // options.forEach(text => {
        //     let option = document.createElement('option');
        //     option.value = text;
        //     option.text = text;
        //     select.appendChild(option);
        // });

        // select.onchange = function() {
        //     let index = select.selectedIndex - 1;
        //     if(index < options.length) optionFuncs[index]();
        //     select.selectedIndex = 0;
        // }
    }

    return groupBase;
}

function AddContainer(parentDOM)
{

}

let AddThis = new WrappedFunction(
    // Add function for editing content
    (parentDOM, validClassType) => {
        console.log('Add This');
        CheckDOMValid(parentDOM);
        if(parentDOM.className !== '.MainBody' && !Object.values(validClassTypes).includes(validClassType)) 
            throw new Error('Invalid class type provided. Valid types are: ' + Object.keys(validClassTypes).join(', ')); 

        let primaryDOM = GenerateDOM(parentDOM, 'div', null, validClassType, null, null);
        if(validClassType !== '.MainBody')
            AddEditorOptions(GenerateDOM(primaryDOM, 'div', null, 'OverlaySpace', null, null));
    },
    '+'
);
let EditFunctionArray = [
    AddThis
];

console.log(EditFunctionArray.length + ' Edit Functions loaded.');
console.log(typeof EditFunctionArray[0] === 'function' ? 'EditFunctionArray[0] is a function.' : 'EditFunctionArray[0] is not a function.');
console.log(typeof EditFunctionArray[0]);
console.log(EditFunctionArray[0] instanceof WrappedFunction ? 'EditFunctionArray[0] is a WrappedFunction.' : 'EditFunctionArray[0] is not a WrappedFunction.');
