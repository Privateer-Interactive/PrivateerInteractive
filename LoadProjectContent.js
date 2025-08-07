    let filePathBase = window.location.href;
    filePathBase = filePathBase.substring(0, filePathBase.lastIndexOf('/'));
    let filePathData = filePathBase + '/Data/';

    //console.log(`File path base: ${filePathBase}`);
    //console.log(`File path data: ${filePathData}`);

    let page = {SectionA : "", SectionB : ""}
    let projectStructure = {
        pages : []
    };

    let allModifiers = "\n\n\n|\n\n|[|]|s|e|b|i|u";

    let contentModifiers = {
        PageBreak : "\n\n\n", SectionBreak : "\n\n",
        TextModIDstart : '[', TextModIDend : ']', StartTextMod : 's', EndTextMod : 'e',
        Bold : 'b', Italics : 'i', Underline : 'u',
    };
    function DeserializeStringContent(content)
    {
        let modifiedContent = content;
        // console.log(content);
        // Split by multiple separators using regex
        //modifiedContent = modifiedContent.split(/\n{2,3}/);

        // splits the content by three new lines, which represents a "page break"
        // this "page break" represents a new group of sections (for now, this means just two sections)
        modifiedContent = modifiedContent.split(contentModifiers.PageBreak);
        let pageSections = [];//modifiedContent.split(contentModifiers.PageBreak);
        modifiedContent.forEach((element) => {
            let sectionBreaks = element.split(contentModifiers.SectionBreak);
            pageSections.push(sectionBreaks);
        });
        //console.log(pageSections);
        let contentSections = [];
        pageSections.forEach(element => {
            element.forEach(secondElement => {
                contentSections.push(secondElement.split('\n\n'));
            });
        });
        console.log(contentSections);
        // console.log(contentArray);
        // // contentArray.forEach(element => {
        // //     console.log(element); 
        // // });
        // contentArray.forEach(element => {
        //     let modifierSeparations = element.split(/[\[\]]/);
        //     console.log(modifierSeparations);
        // });


    }

    let totaltext = GetDataFromPath('/ProjA/Content.txt').then(content => {
        DeserializeStringContent(content);
    });
 