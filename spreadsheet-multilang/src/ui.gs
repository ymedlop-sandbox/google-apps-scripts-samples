function onOpen() {
 SpreadsheetApp
     .getUi()
     .createMenu('Apps Languages')
     .addItem('JSON Generator', 'downloadJSON')
     .addItem('JSON Show', 'showJSON')
     .addToUi();
};

function showJSON() {

  var documents = genJSON();
  var url = "";

  for (var item in documents) {
    url += '<li><a href = "https://www.jsoneditoronline.org?json=' + encodeURIComponent(JSON.stringify(documents[item])) + '" target="_parent">' + item + '</a></li>'
  }

  var template = HtmlService.createTemplate("<ul>" + url + "</ul>");
  var page = template.evaluate();

  SpreadsheetApp.getUi().showSidebar(page);
}