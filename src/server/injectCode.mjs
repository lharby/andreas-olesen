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

const newStr = openingString + '\r\n' + '<style>\r\n'  + cssFileString + '</style>\r\n';

fs.readFile(`${indexFile}-tmp.html`, 'utf8', (err, fileData) => {
    if (err) { 
        console.log(err);
    }
    const result = fileData.replace(openingString, newStr);
    fs.writeFile(`${indexFile}.html`, result, 'utf8', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Finished');
    });
});