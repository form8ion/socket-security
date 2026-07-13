// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffold, lift} from './lib/index.js';

// remark-usage-ignore-next
stubbedFs({'package.json': JSON.stringify({name: 'example-package'})});

// #### Execute

(async () => {
  const projectRoot = process.cwd();

  await scaffold({projectRoot});

  await lift({projectRoot});
})();
