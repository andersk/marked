const path = require('path');
const fs = require('fs');

describe('ReDOS tests', () => {
  const files = fs.readdirSync(path.resolve(__dirname, '../redos/'));
  files.forEach(file => {
    if (!file.match(/\.js$/)) {
      return;
    }

    it(file, () => {
      const spec = require(path.resolve(__dirname, '../redos', file));
      expect(spec).toRender(spec.html);
    });
  });
});
