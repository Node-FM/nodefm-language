const { readdirSync } = require('fs');
const path = require('path');

let folders = [];

readdirSync(path.resolve(__dirname)).filter(fldrs => fldrs.includes('-')).forEach(f => {
    folders.push(f);
});

/**
 * @type {Array}
 * @returns Folder names
 */
module.exports = folders;