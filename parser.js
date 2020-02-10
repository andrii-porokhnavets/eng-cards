const fs = require('fs');
const XLSX = require('xlsx');

const workBook = XLSX.readFile('./words.xlsx');
const sheetName = workBook.SheetNames[0];
const worksheet = workBook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);
const jsonData = JSON.stringify(data);

console.log(jsonData);

fs.writeFileSync('words.json', jsonData);