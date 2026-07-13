import {writePackageJson} from '@form8ion/javascript-core';

import {Given} from '@cucumber/cucumber';
import any from '@travi/any';

Given('the project publishes an npm package', async function () {
  this.packageName = any.word();

  await writePackageJson({projectRoot: this.projectRoot, config: {name: this.packageName}});
});
