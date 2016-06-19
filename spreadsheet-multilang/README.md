Spreadsheet Multi Language
==========================

Multilanguage Google Spreadsheet for generate and manage json by language.

### Setup

This library is already published as an Apps Script, making it easy to include
in your project. To add it to your script, do the following in the Apps Script
code editor:

1. Click on the menu item "Resources > Libraries..."
2. In the "Find a Library" text box, enter the project key
   `1PTLE8IOkoLWFUXkFpKaxZePKndWN88A2xQozJOG9rm2fK6yC1Ii0TUUz` and click the "Select" button.
3. Choose a version in the dropdown box (usually best to pick the latest
   version).
4. Click the "Save" button.
5. Add into your script project.

```
function onOpen() {
  	// Library ID: onOpen method
    ymedlopmultilang.onOpen();
};

function showJSON() {
	// Library ID: showJSON method
    ymedlopmultilang.showJSON();
}

function downloadJSON() {
	// Library ID: downloadJSON method
    ymedlopmultilang.downloadJSON();
}
```

Alternatively, you can copy and paste the files in the [`/src`](src) directory
directly into your script project.

### The Spreadsheet

[![alt text][2]][1]

  [1]: https://storage.googleapis.com/ymedlop-sandbox.appspot.com/google-apps-scripts/spreadsheet-lang/lang.png
  [2]: https://storage.googleapis.com/ymedlop-sandbox.appspot.com/google-apps-scripts/spreadsheet-lang/lang.png (hover text)

### Spreadsheet Lang Options

[![alt text][4]][3]

  [3]: https://storage.googleapis.com/ymedlop-sandbox.appspot.com/google-apps-scripts/spreadsheet-lang/lang1.png
  [4]: https://storage.googleapis.com/ymedlop-sandbox.appspot.com/google-apps-scripts/spreadsheet-lang/lang1.png (hover text)

* **JSON Generator**: It's option generate a zip file into our Drive unit with every lang json file.
    
* **JSON Show**: It's option open a sidebar with a link to every lang json.

Technology
----------

* [Google Apps Scripts](https://developers.google.com/apps-script/): Apps Script makes it easy to create and publish add-ons in an online store for Google Sheets, Docs, and Forms.
* [lodash](https://gist.github.com/afiedler/261a20ac4c7e7befc40e): Lodash 3.5.0 (Modern build) modified to not throw exceptions on when used in Google App Script

License
-------

See the [LICENSE file](../LICENSE) for license text and copyright information.
