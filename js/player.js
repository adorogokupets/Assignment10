class Jukebox {
    constructor() {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const albumsArray = [
    { artist: 'Operation Ivy', title: 'Energy' },
    { artist: 'Blink 182', title: 'Dude Ranch' },
    { artist: 'New Found Glory', title: 'Sticks and Stones' }
]

albumsArray.forEach(albumData => {
    let album = new Album(albumData.artist, albumData.title)
    jbox.addAlbum(album)
    let option = document.createElement('option')
    option.value = album.title
    option.text = `${album.artist} - ${album.title}`
    document.getElementById('albumSelect').appendChild(option)
})

document.getElementById('playButton').addEventListener('click', function() {
    let selectedAlbumTitle = document.getElementById('albumSelect').value
    let selectedAlbum = jbox.albums.find(album => album.title === selectedAlbumTitle)
    if (selectedAlbum) {
        selectedAlbum.play()
    }
})

document.getElementById('showFavoriteButton').addEventListener('click', function() {
    let favoriteAlbum = jbox.favoriteAlbum()
    document.getElementById('favoriteAlbum').textContent = `Your favorite album is: ${favoriteAlbum}`
})