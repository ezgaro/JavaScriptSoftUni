function gramophone(bandName , albumName , songName) {
    //(albumName.length * bandName.length) * song-name.length / 2
    //`The plate was rotated {rotations} times.`

    let duration = (albumName.length * bandName.length) * songName.length / 2;
    console.log(`The plate was rotated ${Math.ceil(duration / 2.5)} times.`);

}
gramophone('Black Sabbath', 'Paranoid','War Pigs');