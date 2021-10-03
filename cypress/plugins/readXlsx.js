const xlsx = require('xlsx'); 
const fs = require('fs'); // for file

const read = ({file,sheet}) => {
    const buf = fs.readFileSync(file)
    const workbook = xlsx.read(buf, {type:'buffer'})
    const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheet])
    return rows
}

module.exports = {
    read,
}