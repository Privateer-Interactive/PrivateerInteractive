// let contentA = GetDataFromPath('ProjA/Content/Intro.txt');
// contentA.then((text) => {
//     console.log(text);
// });
function GetDataFromPath(filePath)
{
    console.log('filePathBase: ' + filePathBase + filePath);
    return new Promise((resolve, reject) => {
        let completePath = filePathBase + filePath;
        fetch(completePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(text => {
                resolve(text);
            })
            .catch(error => {
                console.error('Failed to fetch file', error);
                reject(error);
            });
    });
}

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

// React, Angular, or Vue.js