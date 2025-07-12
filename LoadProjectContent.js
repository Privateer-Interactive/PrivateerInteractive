    let filePathBase = window.location.href;
    filePathBase = filePathBase.substring(0, filePathBase.lastIndexOf('/'));
    filePathBase = filePathBase + '/Data/';

    console.log(`File path base: ${filePathBase}`);

    let page = {SectionA : "", SectionB : ""}
    let projectStructure = {
        pages : []
    };
    
