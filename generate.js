var path = require("path");
var url = require("url");

var output = [];

var addOnPrefix = "http://jplayer.org/latest/dist/add-on/";
var skinPrefix = "http://jplayer.org/latest/dist/skin/";
var jplayerPrefix = "http://jplayer.org/latest/dist/jplayer/";
var popcomPrefix = "http://jplayer.org/latest/dist/popcorn/";

// JPlayer files
[
    "jquery.jplayer.min.js",
    "jquery.jplayer.swf"
].forEach(function(jplayer) {
    output.push({
      file: path.join("./jplayer/", jplayer),
      url: url.resolve(jplayerPrefix, jplayer)
    });
});

// Skin files
output.push({
    file: "jplayer.blue.monday.min.css",
    url: url.resolve(urlPrefix, "blue.monday/css/jplayer.blue.monday.min.css")
});
output.push({
    file: "jplayer.blue.monday.jpg",
    url: url.resolve(urlPrefix, "blue.monday/image/jplayer.blue.monday.jpg")
});
output.push({
    file: "jplayer.blue.monday.seeking.gif",
    url: url.resolve(urlPrefix, "blue.monday/image/jplayer.blue.monday.seeking.gif")
});
output.push({
    file: "jplayer.blue.monday.video.play.png",
    url: url.resolve(urlPrefix, "blue.monday/image/jplayer.blue.monday.video.play.png")
});
output.push({
    file: "jplayer.blue.monday.audio.playlist.html",
    url: url.resolve(urlPrefix, "blue.monday/mustache/jplayer.blue.monday.audio.playlist.html")
});
output.push({
    file: "jplayer.blue.monday.audio.single.html",
    url: url.resolve(urlPrefix, "blue.monday/mustache/jplayer.blue.monday.audio.single.html")
});
output.push({
    file: "jplayer.blue.monday.audio.stream.html",
    url: url.resolve(urlPrefix, "blue.monday/mustache/jplayer.blue.monday.audio.stream.html")
});
output.push({
    file: "jplayer.blue.monday.video.playlist.html",
    url: url.resolve(urlPrefix, "blue.monday/mustache/jplayer.blue.monday.video.playlist.html")
});
output.push({
    file: "jplayer.blue.monday.video.single.html",
    url: url.resolve(urlPrefix, "blue.monday/mustache/jplayer.blue.monday.video.single.html")
});
output.push({
    file: "jplayer.pink.flag.jpg",
    url: url.resolve(urlPrefix, "pink.flag/image/jplayer.pink.flag.jpg")
});
output.push({
    file: "jplayer.pink.flag.seeking.gif",
    url: url.resolve(urlPrefix, "pink.flag/image/jplayer.pink.flag.seeking.gif")
});
output.push({
    file: "jplayer.pink.flag.video.play.png",
    url: url.resolve(urlPrefix, "pink.flag/image/jplayer.pink.flag.video.play.png")
});
output.push({
    file: "jplayer.pink.flag.audio.playlist.html",
    url: url.resolve(urlPrefix, "pink.flag/mustache/jplayer.pink.flag.audio.playlist.html")
});
output.push({
    file: "jplayer.pink.flag.audio.single.html",
    url: url.resolve(urlPrefix, "pink.flag/mustache/jplayer.pink.flag.audio.single.html")
});
output.push({
    file: "jplayer.pink.flag.audio.stream.html",
    url: url.resolve(urlPrefix, "pink.flag/mustache/jplayer.pink.flag.audio.stream.html")
});
output.push({
    file: "jplayer.pink.flag.video.playlist.html",
    url: url.resolve(urlPrefix, "pink.flag/mustache/jplayer.pink.flag.video.playlist.html")
});
output.push({
    file: "jplayer.pink.flag.video.single.html",
    url: url.resolve(urlPrefix, "pink.flag/mustache/jplayer.pink.flag.video.single.html")
});

// addOn files
[
    "jplayer.playlist.min.js",
    "jquery.jplayer.inspector.min.js"
].forEach(function(addon) {
    output.push({
      file: path.join("./add-on/", addon),
      url: url.resolve(urlPrefix, path.join(themePrefix, "", img))
    });
});
console.log(JSON.stringify(output, null, "    "));
