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

function GenerateSection()
{

}

function OrientContainer()
{

}
