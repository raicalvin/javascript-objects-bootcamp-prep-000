var playlist = {
  'Selena Gomez': 'The Heart Wants What it Wants'
};

function updatePlaylist(obj, artist, song) {
  playlist[artist] = song;
  return playlist;
}