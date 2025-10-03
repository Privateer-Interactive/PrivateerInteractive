if (typeof StoredFunction !== 'undefined') {
    console.log('StoredFunction is loaded.');
} else {
    console.log('StoredFunction is not loaded.');
    throw new Error('StoredFunction.js must be loaded before AddContent.js');
}


let validClassTypes = {
    '.Group' : { // class type
         // Parameter
    },
     '.Container' : {

     }
    };

function CheckDOMValid(selectedDOM)
{   
    if(!selectedDOM) throw new Error('No DOM element selected.');
    else if(typeof selectedDOM == 'string')
    {
        if(document.querySelector(selectedDOM) == null) throw new Error('No DOM element matches the provided selector.');
        else selectedDOM = document.querySelector(selectedDOM);
    }

    if(!(selectedDOM instanceof Element)) throw new Error('Selected DOM element is not valid.');

    return selectedDOM;
}

function AddEditorOptions(selectedDOM)
{
    let overlaySpace = GenerateDOM(selectedDOM, 'div', null, 'OverlaySpace', null, null);
    let availableOptions = validClassTypes[selectedDOM.className];
    if(!availableOptions) throw new Error('Selected DOM element is not a valid type for adding editor options.');

    
    let select = GenerateDOM(overlaySpace, 'select', null, 'EditorSelect', "EditorSelect#" + labelCount, null);
    GenerateDOM(overlaySpace, 'label', 'DO NOT SEE THIS', 'EditorLabel', "EditorLabel#" + labelCount, null).htmlFor = select.id;

    availableOptions.forEach(element => {
        let option = document.createElement('option');
        theText = element;
        option.value = option.text = theText; 
        
        select.appendChild(option);
    });

    select.onchange = function() {


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
ContentEditFunctions = 
{
    '+' : // Add This
    (parentDOM, validClassType) => {
        console.log('Add This');
        parentDOM = CheckDOMValid(parentDOM);
        if(parentDOM.className !== 'MainBody' && !Object.values(validClassTypes).includes(validClassType)) 
            throw new Error('Invalid class type provided. Valid types are: ' + Object.keys(validClassTypes).join(', ')); 

        let primaryDOM = GenerateDOM(parentDOM, 'div', null, validClassType, null, null);
        if(validClassType !== 'MainBody')
            AddEditorOptions(primaryDOM);
    },
    '-' : // Remove This
    (selectedDOM) => {
        selectedDOM = CheckDOMValid(selectedDOM);
        if(selectedDOM.className === 'MainBody') 
            throw new Error('Cannot remove the MainBody element.');
        
    }

};

let AddThis = new StoredFunction(
    // Add function for editing content
    (parentDOM, validClassType) => {
        console.log('Add This');
        parentDOM = CheckDOMValid(parentDOM);
        if(parentDOM.className !== 'MainBody' && !Object.values(validClassTypes).includes(validClassType)) 
            throw new Error('Invalid class type provided. Valid types are: ' + Object.keys(validClassTypes).join(', ')); 

        let primaryDOM = GenerateDOM(parentDOM, 'div', null, validClassType, null, null);
        if(validClassType !== 'MainBody')
            AddEditorOptions(primaryDOM);
    },
    null,
    '+'
);

let EditFunctionArray = [
    AddThis,            // 0
];

console.log(EditFunctionArray.length + ' Edit Functions loaded.');
console.log(typeof EditFunctionArray[0] === 'function' ? 'EditFunctionArray[0] is a function.' : 'EditFunctionArray[0] is not a function.');
console.log(typeof EditFunctionArray[0]);
console.log(EditFunctionArray[0] instanceof StoredFunction ? 'EditFunctionArray[0] is a StoredFunction.' : 'EditFunctionArray[0] is not a StoredFunction.');
