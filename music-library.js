var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    for (var key in library.playlists) {
      // console.log(key);
      var result = (key + ": " + library.playlists[key].name + " - " + library.playlists[key].tracks.length + " tracks")
      console.log(result);
    }
  },

  printTracks: function () {
    var tracks = library.tracks;
    // console.log(tracks);
    for (var key in tracks) {
      var result = (key + ": " + tracks[key].name + " by " + tracks[key].artist + " (" + tracks[key].album + ")");
      console.log(result);
    }
  },

  printPlaylist: function (playlistId) {
    var playlist = library.playlists[playlistId];
    var tracks = library.tracks;

    console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks")

    for (var i = 0; i < playlist.tracks.length; i++) {
      console.log(playlist.tracks[i] + ": " + tracks[playlist.tracks[i]].name + " by " + tracks[playlist.tracks[i]].artist + " (" + tracks[playlist.tracks[i]].album + ")");
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    var playlistTracks = library.playlists[playlistId].tracks;
    playlistTracks.push(trackId);
    return playlistTracks;
  },

  uid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    var trackID = uid();
    library.tracks.trackID = {
      id: trackID,
      name: name,
      artist: artist,
      album: album
    }
    return library.tracks.trackID;
  },

  addPlaylist: function (name) {
    var playlistID = uid();
    library.playlists[playlistID] = {
      id: playlistID,
      name: name,
      tracks: [uid()]
    }
    return library.playlists
  }           
}

// console.log(library);

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var key in library.playlists) {
    // console.log(key);
    var result = (key + ": " + library.playlists[key].name + " - " + library.playlists[key].tracks.length + " tracks")
    console.log(result);
  }
}
// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var tracks = library.tracks;
  // console.log(tracks);
  for (var key in tracks) {
    var result = (key + ": " + tracks[key].name + " by " + tracks[key].artist + " (" + tracks[key].album + ")");
    console.log(result);
  }
}
// printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlist = library.playlists[playlistId];
  var tracks = library.tracks;

  console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks")
  
  for (var i = 0; i < playlist.tracks.length; i++) {
    console.log(playlist.tracks[i] + ": " + tracks[playlist.tracks[i]].name + " by " + tracks[playlist.tracks[i]].artist + " (" + tracks[playlist.tracks[i]].album + ")");
  }
}
// printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var playlistTracks = library.playlists[playlistId].tracks;
  playlistTracks.push(trackId);
  return playlistTracks;
}
// console.log(addTrackToPlaylist("t03", "p01"));

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var trackID = uid();
  library.tracks.trackID = {
    id: trackID,
    name: name,
    artist: artist,
    album: album
  }
  return library.tracks.trackID;
}
// console.log(addTrack("a", "b", "c"));

// adds a playlist to the library

var addPlaylist = function (name) {
  var playlistID = uid();
  library.playlists[playlistID] = {
    id: playlistID,
    name: name,
    tracks: [uid()]
  }
  return library.playlists
}
// console.log(addPlaylist("space jazz"));

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}