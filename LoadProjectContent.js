    let filePathBase = window.location.href;
    filePathBase = filePathBase.substring(0, filePathBase.lastIndexOf('/'));
    let filePathData = filePathBase + '/Data/';

    //console.log(`File path base: ${filePathBase}`);
    //console.log(`File path data: ${filePathData}`);

    let page = {SectionA : "", SectionB : ""}
    let projectStructure = {
        pages : []
    };
    let ContentModifiers = {
        SectionBreak : "\n\n\n", PageBreak : "\n\n",
        TextModIDstart : '[', TextModIDend : ']', StartTextMod : 's', EndTextMod : 'e',
        Bold : 'b', Italics : 'i', Underline : 'u',
        AllModifiers : 
            [SectionBreak, PageBreak, TextModIDstart, TextModIDend, StartTextMod, EndTextMod, Bold, Italics, Underline]
    };
    function DeserializeStringContent(content)
    {
        let contentArray = content.split(ContentModifiers.AllModifiers);
        contentArray.forEach(element => {
            console.log(element);
        });
    }

    let totaltext = GetDataFromPath('ProjA/Content.txt');
    DeserializeStringContent(totaltext);
