import {loadPackageJson} from '@form8ion/javascript-core';

export default async function lift({projectRoot}) {
  const {name: packageName} = await loadPackageJson({projectRoot});

  return {
    badges: {
      status: {
        socket: {
          img: `https://badge.socket.dev/npm/package/${packageName}/latest`,
          link: `https://socket.dev/npm/package/${packageName}/overview`,
          text: 'Socket'
        }
      }
    }
  };
}
