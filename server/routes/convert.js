var mammoth = require("mammoth");
const {Tabletojson: tabletojson} = require('tabletojson');
const fs = require('fs');

//Convert into JSON
const convert = mammoth.convertToHtml({path: "./uploads/document.docx"})
    .then(function(result){
        const html = result.value; // The generated HTML
        const converted =tabletojson.convert(html);
        const content = converted[0];
        fs.writeFile('Content.json', JSON.stringify(content) , function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        var messages = result.messages; // Any messages, such as warnings during conversion
    }).done();

const document_path = "./uploads/document.docx";
try {
  if (fs.existsSync( document_path)) {
    module.exports = convert;
  } else {
    console.log("File does not exist.")
  }
} catch(err) {
  console.error(err)
}

