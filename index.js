function TranslateElement(targetElement, positionElement, desiredDimensions) {

    //#region ParameterVerification
    if(typeof targetElement == 'string')
    {
        if(targetElement.charAt(0) == '#')
            targetElement = document.getElementById(targetElement.substring(1));
        else targetElement = document.querySelector(targetElement);
    }
    else if(typeof targetElement != 'object')
        throw new Error('targetElement must be a string or an object');

    if(typeof positionElement == 'string')
    {
        if(positionElement.charAt(0) == '#')
            positionElement = document.getElementById(positionElement.substring(1));
        else positionElement = document.querySelector(positionElement);
    }
    else if(typeof positionElement != 'object')
        throw new Error('positionElement must be a string or an object');

    let selectedDimensions = parseInt(desiredDimensions, 0);
    if(isNaN(selectedDimensions))
        throw new Error('desiredDimensions must be a number');
    else if(selectedDimensions < 0 || selectedDimensions > 3)
        throw new Error('desiredDimensions must be between 0 and 3');
    //#endregion
    //#region DebuggingInfo
    // console.log('targetElement', targetElement);
    // console.log('targetElementLeft', targetElement.getBoundingClientRect().left);
    // console.log('positionElementLeft', positionElement.getBoundingClientRect().left);
    // console.log('targetElementLeft', targetElement.getBoundingClientRect().left);
    // console.log('parentElementLeft', targetElement.parentElement.getBoundingClientRect().left);
    //#endregion

    let position = {
        x :  positionElement.getBoundingClientRect().left - targetElement.parentElement.getBoundingClientRect().left,
        y :  positionElement.getBoundingClientRect().top - targetElement.parentElement.getBoundingClientRect().top
    };
    switch(selectedDimensions)
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
    }
}