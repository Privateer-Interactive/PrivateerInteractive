function AddGroup(parentDOM) {
    if(typeof GenerateDOM !== 'function') throw new Error('GenerateDOM function not found. Ensure that the index.js script is loaded before this script.');
    if(typeof parentDOM === 'string') parentDOM = document.querySelector(parentDOM);
    else if(!(parentDOM instanceof Element)) throw new Error('parentDOM must be an instance of Element or a valid CSS selector string');
    // IDEA
    // Create normal div, create overlay inside div with position absolute. Add buttons to overlay div (position relative?).
    // Use display none/block to show/hide menu items in overlay div.
    let groupBase = GenerateDOM(parentDOM, 'div', null, 'Group', null, null);
    let editorGroup = GenerateDOM(groupBase, 'div', null, 'OverlaySpace', null, null);
    //let editButton = GenerateDOM(editorGroup, 'button', '+', 'AddCButton', null, 'button');
    
    const labelCount = document.querySelectorAll('.EditorLabel').length;
    

    let label = GenerateDOM(editorGroup, 'label', 'DO NOT SEE THIS', 'EditorLabel', "EditorLabel#" + labelCount, null);
    let select = GenerateDOM(editorGroup, 'select', null, 'EditorSelect', "EditorSelect#" + labelCount, null);
    label.htmlFor = select.id;

    {
        let options = ['+','Rotate', 'Add Container', 'Change Side', 'Remove THIS Group'];
        let optionFuncs = [
            () => { console.log('Rotate action'); },
            () => { console.log('Add Container action'); },
            () => { console.log('Change Side action'); },
            () => { 
                if(confirm('Are you sure you want to remove this group? This action cannot be undone.')) {
                    groupBase.remove();
                }
            }
        ];
        options.forEach(text => {
            let option = document.createElement('option');
            option.value = text;
            option.text = text;
            select.appendChild(option);
        });

        select.onchange = function() {
            let index = select.selectedIndex - 1;
            if(index < options.length) optionFuncs[index]();
            select.selectedIndex = 0;
        }
    }

    return groupBase;
}