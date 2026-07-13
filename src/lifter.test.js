import {loadPackageJson} from '@form8ion/javascript-core';

import {describe, it, expect, vi} from 'vitest';
import {when} from 'vitest-when';
import any from '@travi/any';

import lift from './lifter.js';

vi.mock('@form8ion/javascript-core');

describe('lifter', () => {
  it('should define the badge based on the npm package name', async () => {
    const projectRoot = any.string();
    const packageName = any.word();
    when(loadPackageJson).calledWith({projectRoot}).thenResolve({name: packageName});

    const result = await lift({projectRoot});

    expect(result).toEqual({
      badges: {
        status: {
          socket: {
            img: `https://badge.socket.dev/npm/package/${packageName}/latest`,
            link: `https://socket.dev/npm/package/${packageName}/overview`,
            text: 'Socket'
          }
        }
      }
    });
  });
});
