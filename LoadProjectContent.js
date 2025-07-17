    let filePathBase = window.location.href;
    filePathBase = filePathBase.substring(0, filePathBase.lastIndexOf('/'));
    let filePathData = filePathBase + '/Data/';

    //console.log(`File path base: ${filePathBase}`);
    //console.log(`File path data: ${filePathData}`);

    let page = {SectionA : "", SectionB : ""}
    let projectStructure = {
        pages : []
    };
    
    function DeserializeStringContent(content)
    {
        
    }
