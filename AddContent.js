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
function GenerateSection()
{

}

function GenerateContainer()
{

}

function OrientContainer(DOMElement)
{
    if(DOMElement instanceof Element)
    {
        if(DOMElement.className !== "Container")
        {
            throw new console.warn("DOMElement is not a valid Container element");
        }
    }
}
/* #endregion */