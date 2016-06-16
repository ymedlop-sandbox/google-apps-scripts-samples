var
    spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    ;

function flattenMessages(prefix, value) {

    var messages = {};
    var prefixedKey = "";

    prefix.map(function(item) {
        prefixedKey += "['" + item + "']";
        eval("messages" + prefixedKey + "= {}");
    });

    eval("messages" + prefixedKey + " = '" + value + "'");

    return messages;
}

function genJSON() {
    var
        messages = {},
        sheet = spreadsheet.getActiveSheet(),
        rows = sheet.getDataRange(),
        numRows = rows.getNumRows(),
        numCols = rows.getNumColumns();
    values = rows.getValues()
    ;

    for (var i = 1; i < numRows; i++) {
        for (var c = 1; c < numCols; c++) {

            var prefix = values[i][0].trim().split(".");
            var value = values[i][c].trim();

            messages[values[0][c]] = messages[values[0][c]] || {};
            _.merge(messages[values[0][c]], flattenMessages(prefix, value));
        }
    }

    return messages;
}

function downloadJSON() {
    var
        messages = genJSON(),
        sheet = spreadsheet.getActiveSheet(),
        rows = sheet.getDataRange(),
        numCols = rows.getNumColumns();
    values = rows.getValues(),
        blobs = []
    ;

    for (var c = 1; c < numCols; c++) {
        blobs.push(
            Utilities.newBlob(JSON.stringify(messages[values[0][c]]), 'application/json', values[0][c] + ".json")
        );
    }

    spreadsheet.show(
        HtmlService
            .createHtmlOutput('<a href = "' + DriveApp.createFile( Utilities.zip(blobs, spreadsheet.getName() + '.zip') ).getUrl() + '" target="_parent">Click Here</a>')
            .setTitle('Generating...')
            .setSandboxMode(HtmlService.SandboxMode.IFRAME)
            .setWidth(100)
            .setHeight(30)
    );
};