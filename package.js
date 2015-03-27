Package.describe({
  name: "jackyqiu:meteor-jplayer",
  summary: "jPlayer is a jQuery/Zepto plugin for playing media",
  version: "2.9.2",
  git: "https://github.com/qunxyz/meteor-jquery-nicescroll.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");

  api.use('jquery', 'client');

  api.use("mizzao:build-fetcher@0.2.0", 'client');

  api.add_files('jplayer.fetch.json', 'client');
});
