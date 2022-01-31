const { readdirSync } = require('fs');

let folders = [];

readdirSync('./').filter(fldrs => fldrs.includes('-')).forEach(f => {
    folders.push(f);
});

/**
 * @type {Array}
 * @returns Folder names
 */
module.exports = folders;