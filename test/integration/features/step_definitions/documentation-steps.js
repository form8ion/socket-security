import {Then} from '@cucumber/cucumber';
import assert from 'node:assert';

Then('the socket badge is defined', async function () {
  assert.deepEqual(this.result.badges.status.socket, {
    img: `https://badge.socket.dev/npm/package/${this.packageName}/latest`,
    link: `https://socket.dev/npm/package/${this.packageName}/overview`,
    text: 'Socket'
  });
});
