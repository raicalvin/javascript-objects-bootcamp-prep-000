var playlist = {
  'Selena Gomez': 'The Heart Wants What it Wants'
};

function updatePlaylist(obj, artist, song) {
  obj[artist] = song;
  return playlist;
}

function removeFromPlaylist(obj, artist) {
  delete obj.artist;
  return obj;
}
