'use strict';
const BinBuild = require('bin-build');
const log = require('logalot');
const bin = require('.');

bin.run(['-version'], err => {
	if (err) {
		log.warn(err.message);
		log.warn('cwebp pre-build test failed');
		log.info('compiling from source');

    BinBuild.url('https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-0.6.1.tar.gz', [
      `cmake -DWEBP_BUILD_CWEBP="ON" -DCMAKE_INSTALL_PREFIX="${bin.dest()}"`,
      'make',
    	'make install'
    ]).then(() => {
    	console.log('cwebp built successfully');
    });
  }
});
