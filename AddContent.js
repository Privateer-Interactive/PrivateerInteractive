function GenerateContainer(mainBody)
{
    if (typeof mainBody !== 'string') {
        mainBody = document.querySelector(mainBody);
    }

    if(mainBody instanceof Element) {
        // mainBody is a DOM element
        
    }
    else throw new console.warn("mainBody is not a valid DOM element or selector string");
    
}



/* #region AddContent_OnClick */
function CheckIfClass(DOMElement, stringName)
{
    if(DOMElement === undefined || stringName === undefined) throw new console.error("DOMElement or stringName is undefined");
    if(DOMElement instanceof Element)
    {
        if(DOMElement.className !== stringName)
        {
            return false;
        }
        else return true;
    }
    else return false;
}
// NEEDS WORK - NOT FUNCTIONAL
function DOMCheck(DOMElement)
{
    if(DOMElement === undefined) throw new console.error("DOMElement is undefined");
    if(DOMElement instanceof Element) return true;
    else return false;
}

function ClassExists(ClassName)
{
    if(typeof ClassName === 'string')
    {
        return document.getElementsByClassName(ClassName).length > 0;
    }
    else throw new console.error("ClassName is not a valid string");
}

function GenerateSection(MainBodyElement)
{

    

    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'Section';
    MainBodyElement.appendChild(sectionDiv);
}
function GenerateDOM(ParentDOM, newDOMTypeName, newDOMClassName = null)
{
    if(ParentDOM === undefined || newDOMTypeName === undefined) throw new console.error("ParentDOM or newDOMTypeName is undefined");
    if(!(ParentDOM instanceof Element) || typeof ParentDOM !== 'string') throw new console.error("ParentDOM is not a valid DOM element or selector string");
}
function GenerateContainer(SectionElement)
{
    if(!CheckIfClass(SectionElement, "Section")) throw new console.error("SectionElement is not a valid Section class element");

    const containerDiv = document.createElement('div');
    containerDiv.className = 'Container';
    SectionElement.appendChild(containerDiv);
}

function OrientContainer(DOMElement)
{
    if(CheckIfClass(DOMElement, "Container")) throw new console.error("DOMElement is not a valid Container class element");
    
}
/* #endregion */