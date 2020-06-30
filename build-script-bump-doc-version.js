let pjson = require('./package.json');
let version = pjson.version
console.log(version)
const replace = require('replace-in-file');
const options = {
  files: 'README.md',
  // example of what regex does regexr.com/57k2e
  from: /(\@)(\d+)\.(\d+)\.(\d+)/g,
  to: "@"+version,
};

try {
    const results = replace.sync(options);
    console.log('Replacement results:', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }