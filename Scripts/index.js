
function TranslateElementToElement(targetElement, endElement, dimensions)
{
    targetElement = GetDOMElement(targetElement);
    endElement = GetDOMElement(endElement);

    let targetRect = targetElement.parentElement.getBoundingClientRect();
    let endRect = endElement.getBoundingClientRect();

    let position = {
        x: endRect.left - targetRect.left,
        y: endRect.top - targetRect.top
    };
    switch(dimensions)
    {
        case 0:
            targetElement.style.transform = 'translate(' + position.x + 'px, ' + position.y + 'px)';
            break;
        case 1:
            targetElement.style.transform = 'translateX(' + position.x + 'px)';
            break;
        case 2:
            targetElement.style.transform = 'translateY(' + position.y + 'px)';
            break;
        default:
            throw new Error('dimensions must be 0, 1, or 2');
    }
}

function GetDOMElement(elementToCheck)
{
    if(elementToCheck instanceof HTMLElement) return elementToCheck;
    else if(typeof elementToCheck == 'string')
    {
        let firstChar = elementToCheck.charAt(0);
        let targetElement;
        switch(firstChar)
        {
            case '#':
                targetElement = document.getElementById(elementToCheck.substring(1));
                break;
            case '.':
                targetElement = document.querySelector(elementToCheck);
                break;
            default:
                throw new Error('elementToCheck must be a valid CSS selector');
        }

        if(targetElement == null)
            throw new Error('Entered value does NOT exist in the DOM');
        else return targetElement;
    }
    else throw new Error('elementToCheck must be a string or an HTMLElement');
}
console.log("***MY VERSION *** 0.0.2***");


/* #region DOM_Management */

/**
 * Creates and appends a new DOM element to a specified parent element.
 *
 * @param {Element|string} parentDOM - The parent DOM element or a selector string to append the new element to.
 * @param {string} [DOMtype='div'] - The type of DOM element to create (e.g., 'div', 'span').
 * @param {string|null} [content=null] - The HTML content to set inside the new element.
 * @param {string|null} [classType=null] - The class name(s) to assign to the new element.
 * @param {string|null} [idType=null] - The ID to assign to the new element.
 * @param {string|null} [typeType=null] - The value to assign to the 'type' property of the new element.
 * @returns {Element} The newly created DOM element.
 * @throws {Error} If the DOM type is invalid or the parentDOM is not a valid element.
 */
function GenerateDOM(parentDOM, DOMtype = 'div', content = null, classType = null, idType = null, typeType = null)
{
    let newDOMElement = document.createElement(DOMtype);
    if(newDOMElement == null) throw new Error('DOMtype is not a valid HTML element type');

    if(classType) newDOMElement.className = classType;
    if(idType) newDOMElement.id = idType;
    if(content) newDOMElement.innerHTML = content;
    newDOMElement.type = typeType;

    if(typeof parentDOM === 'string') parentDOM = document.querySelector(parentDOM);
    if(parentDOM instanceof Element) parentDOM.appendChild(newDOMElement);
    else throw new Error('parentDOM must be an instance of Element');

    return newDOMElement;
}

/* #endregion */