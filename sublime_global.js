

function SublimeOnTabClose(objHtmlDocument, objWizDocument) {
    //
    if (objWizDocument)
        return;
    //
    if (!objHtmlDocument)
        return;
    //
    try {
        objHtmlDocument.defaultView.eval("if (onBeforeCloseTab_Sublime) onBeforeCloseTab_Sublime();");
    }
    catch (err) {
    }

};

eventsTabClose.add(SublimeOnTabClose);
