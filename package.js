Package.describe({
  name: 'rainhaven:orbit',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Foundation for Apps Styling. Packed with Meteor Greatness.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('rainhaven:orbit.js');

    api.use('rainhaven:sass@1.0.1', ['client', 'server']);
  api.imply('rainhaven:sass@1.0.1', ['client', 'server']);

  // api.use('fourseven:scss', ['client', 'server']);
  // api.imply('fourseven:scss', ['client', 'server']);

  api.use('session');
  api.use('underscore');
  api.use(['templating', 'random'], 'client');

  // JS & HTML
  api.addFiles([
    'views/orbit.js',
    'views/view.js',
    'views/animations.js',

    'views/view/view.html',
    'views/view/view.js',

    'views/modal/modal.html',
    'views/modal/modal.js',

    'views/off-canvas/off-canvas.html',
    'views/off-canvas/off-canvas.js',

    'views/action-sheet/action-sheet.html',
    'views/action-sheet/action-sheet.js',

    'views/split-view/split-view.html',
    'views/split-view/split-view.js',

    'fonts/ionicons.eot',
    'fonts/ionicons.svg',
    'fonts/ionicons.ttf',
    'fonts/ionicons.woff',
    'css/ionicons.css'
  ], 'client');


  // Foundation for Apps SCSS
  api.addFiles([
    '_foundation.scss',
    '_settings.scss',

    'scss/foundation/foundation.scss',
    'scss/foundation/vendor/_normalize.scss',

    'scss/foundation/helpers/_functions.scss',
    'scss/foundation/helpers/_mixins.scss',
    'scss/foundation/helpers/_breakpoints.scss',
    'scss/foundation/helpers/_images.scss',

    'scss/foundation/_global.scss',

    'scss/foundation/components/_iconic.scss',
    'scss/foundation/components/_action-sheet.scss',
    'scss/foundation/components/_block-list.scss',
    'scss/foundation/components/_button.scss',
    'scss/foundation/components/_button-group.scss',
    'scss/foundation/components/_card.scss',
    'scss/foundation/components/_extras.scss',
    'scss/foundation/components/_forms.scss',
    'scss/foundation/components/_panel.scss',
    'scss/foundation/components/_grid.scss',
    'scss/foundation/components/_title-bar.scss',
    'scss/foundation/components/_label.scss',
    'scss/foundation/components/_list.scss',
    'scss/foundation/components/_menu-bar.scss',
    'scss/foundation/components/_modal.scss',
    'scss/foundation/components/_motion.scss',
    'scss/foundation/components/_notification.scss',
    'scss/foundation/components/_off-canvas.scss',
    'scss/foundation/components/_popup.scss',
    'scss/foundation/components/_switch.scss',
    'scss/foundation/components/_tabs.scss',
    'scss/foundation/components/_accordion.scss',
    'scss/foundation/components/_typography.scss',
    'scss/foundation/components/_utilities.scss',
  ], 'server');


  // Orbit SCSS
  api.addFiles([
    '_orbit.scss',
    'scss/orbit/orbit.scss',

    'scss/orbit/components/_modal.scss',
    'scss/orbit/components/_action-sheet.scss',
    'scss/orbit/components/_split-view.scss',
  ], 'server');

  // Export Name Space
  api.export('Orbit', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rainhaven:orbit');
  api.addFiles('rainhaven:orbit-tests.js');
});
