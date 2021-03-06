import config from './base-config';

export default Object.assign({}, config, {
  entry: 'home-assistant-js/demo_data/expose_window.js',
  targets: [
    { dest: 'build-temp/demo_data.js', format: 'iife' },
  ],
});
