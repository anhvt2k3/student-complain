const Papa = require('papaparse');
const fs = require('fs');

const csvFilePath = './Datasetprojpowerbi.csv';

const csvFile = fs.readFileSync(csvFilePath, 'utf-8');

const parsedData = Papa.parse(csvFile, {
  header: true,
  dynamicTyping: true,
}).data;

const transformedData = parsedData.map((row) => ({
  Institution: row.Institution,
  Reports: row.Reports,
  Age: row.Age,
  Gpa: row.Gpa,
  Year: row.Year,
  Count: row.Count,
  Gender: row.Gender,
}));

const data = 'export default ' + JSON.stringify(transformedData)
fs.writeFile('./src/data.js', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})

console.log(data);
// console.log(JSON.stringify(transformedData));
