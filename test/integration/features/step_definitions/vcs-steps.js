import {Given} from '@cucumber/cucumber';

Given('the project is hosted on {string}', async function (host) {
  this.vcs = {host, owner: 'foo', name: 'bar'};
});
