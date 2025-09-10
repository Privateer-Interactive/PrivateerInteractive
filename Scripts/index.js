
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



/* #region DOM_Management */

function GenerateDOM(parentDOM, DOMtype = 'div', classType = null, idType = null, typeType = null)
{
    let newDOMElement = document.createElement(DOMtype);
    if(newDOMElement == null) throw new Error('DOMtype is not a valid HTML element type');

    if(classType) newDOMElement.className = classType;
    if(idType) newDOMElement.id = idType;
    newDOMElement.type = typeType;

    if(typeof parentDOM === 'string') parentDOM = document.querySelector(parentDOM);
    if(parentDOM instanceof Element) parentDOM.appendChild(newDOMElement);
    else throw new Error('parentDOM must be an instance of Element');

    return newDOMElement;
}

/* #endregion */