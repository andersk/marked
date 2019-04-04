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
      const before = process.hrtime();
      expect(spec).toRender(spec.html);
      const elapsed = process.hrtime(before);
      if (elapsed[0] > 0) {
        const s = (elapsed[0] + elapsed[1] * 1e-9).toFixed(3);
        fail(`took too long: ${s}s`);
      }
    });
  });
});
