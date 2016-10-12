Package.describe({
  name: 'stratachat:custom-registration',
  version: '0.0.1',
  summary: 'Extend Rocket.Chat user registration with stratachat-specific fields',
  git: 'https://github.com/4thParty/strata.chat-custom-registration.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('ecmascript');
  api.use('templating');
  api.use('coffeescript');
  api.use('rocketchat:lib');
  api.use('aldeed:simple-schema@1.5.3');

  // Custom user fields schema
  api.addFiles('both/strataProfile.js');

  api.addFiles('both/streamer.coffee');

  // Custom user fields template fixes
  api.addFiles('client/details/customUserFields_fix.js', 'client');

});
