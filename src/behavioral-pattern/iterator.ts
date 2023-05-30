interface CustomIterator<T> {
  next(): T;
  hasNext(): boolean;
}

interface CustomIterableCollection<T> {
  getIterator(): CustomIterator<T>;
}

class Song {
  constructor(
    public name: string,
    public playlist: string,
    public position: string,
  ) {}

  printSongInfo(): void {
    console.log(
      `Name: ${this.name} Playlist: ${this.playlist} Position: ${this.position}`,
    );
  }
}

class SongIterator implements CustomIterator<Song> {
  private index = 0;

  constructor(private songs: Song[]) {}

  hasNext(): boolean {
    return this.index < this.songs.length;
  }

  next(): Song {
    if (!this.hasNext()) {
      throw new Error("No more songs");
    }

    return this.songs[this.index++];
  }
}

class Playlist implements CustomIterableCollection<Song> {
  constructor(private songs: Song[]) {}

  getIterator(): CustomIterator<Song> {
    return new SongIterator(this.songs);
  }
}

function iteratorClient(): void {
  const songs = [
    new Song("Song 1", "Playlist A", "1"),
    new Song("Song 2", "Playlist A", "2"),
    new Song("Song 3", "Playlist A", "3"),
  ];

  const playlist = new Playlist(songs);
  const iterator = playlist.getIterator();

  while (iterator.hasNext()) {
    iterator.next().printSongInfo();
  }
}

iteratorClient();
