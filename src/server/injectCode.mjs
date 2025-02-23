import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexFile = path.join(__dirname, '..', '..', 'static/', 'index');
const cssFile = path.join(__dirname, '..', '..', 'static/', 'css/', 'main.css');
const openingString = '<!-- inject css -->';
const cssFileString = fs.readFileSync(cssFile, 'utf8', (err, fileData)=> {
    if (err) {
        console.log(err);
    }
    return fileData;

});
const exportStr = `export {
  dynamicFunctions
};`

const newStr = openingString + '\r\n' + '<style>\r\n'  + cssFileString + '</style>\r\n';

fs.readFile(`${indexFile}-tmp.html`, 'utf8', (err, fileData) => {
    if (err) { 
        console.log(err);
    }
    const cssReplace = fileData.replace(openingString, newStr);
    const finalReplace = cssReplace.replace(exportStr, '');
    
    fs.writeFile(`${indexFile}.html`, finalReplace, 'utf8', (err) => {
        if (err) {
            console.log(err);
        }
        removeFile();
        console.log('Finished');
    });
});

const removeFile = () => {
    const fileToRemove = `${indexFile}-tmp.html`;
    fs.unlink(fileToRemove, err => {
        if (err) {
            console.log(`Error deleting file ${err}`);
        }
        console.log(`File to remove from cleanup: ${fileToRemove}`);
    });
    // process.exit(0);
};