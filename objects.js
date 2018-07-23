var playlist = {
  artistName: 'Come and Get It'
};


function updatePlaylist(obj, artist, song) {
  obj[artist] = song;
  return playlist;
}

function removeFromPlaylist(obj, artistName) {
  delete obj.artistName;
  return obj;
}