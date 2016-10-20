
// 8. When the user clicks on "List Music" in the navigation bar, the *Add Music View* should be hidden, and the *List Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a8d99d401)).
document.getElementById("viewSongs").addEventListener("click", function(){
  console.log("Viewer: ", event.target);
  event.target.parentElement.parentElement.children[0].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[1].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[2].children[0].classList.remove("selected");
  event.target.classList.toggle("selected");
  document.getElementById("chooser").classList.remove("hidden");
  document.getElementById("view-songs").classList.remove("hidden");
  document.getElementById("user-profile").classList.remove("hidden");
  document.getElementById("user-profile").classList.add("hidden");
  document.getElementById("song-adder").classList.remove("hidden");
  document.getElementById("song-adder").classList.add("hidden");
});

// 7. When the user clicks on "Add Music" in the navigation bar, the *List Music View* should be hidden, and the *Add Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a0cf17f7b)).
document.getElementById("addSongs").addEventListener("click", function(){
  console.log("Adder: ", event.target);
  event.target.parentElement.parentElement.children[0].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[1].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[2].children[0].classList.remove("selected");
  event.target.classList.toggle("selected");
  document.getElementById("chooser").classList.remove("hidden");
  document.getElementById("chooser").classList.add("hidden");
  document.getElementById("view-songs").classList.remove("hidden");
  document.getElementById("view-songs").classList.add("hidden");
  document.getElementById("user-profile").classList.remove("hidden");
  document.getElementById("user-profile").classList.add("hidden");
  document.getElementById("song-adder").classList.remove("hidden");
});

document.getElementById("userProfile").addEventListener("click", function(){
  console.log("Profile: ", event.target);
  event.target.parentElement.parentElement.children[0].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[1].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[2].children[0].classList.remove("selected");
  event.target.classList.toggle("selected");
  document.getElementById("chooser").classList.remove("hidden");
  document.getElementById("chooser").classList.add("hidden");
  document.getElementById("view-songs").classList.remove("hidden");
  document.getElementById("view-songs").classList.add("hidden");
  document.getElementById("user-profile").classList.remove("hidden");
  document.getElementById("song-adder").classList.remove("hidden");
  document.getElementById("song-adder").classList.add("hidden");
});

// 9. Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.
var insertPlace = document.getElementById("view-songs");
var newSong = '';

document.getElementById("add-btn").addEventListener("click", function(){
// SAMPLE CARD FOLLOWS
  event.preventDefault();
  console.log("Current innerHTML: ", insertPlace.innerHTML);
  newSong = '<article class="card"><h2 class="song-title">'
  newSong += document.getElementById("add-title").value;
  newSong += '</h2><h5 class="duration">';
  newSong += document.getElementById("add-duration").value;
  newSong += '</h5><ul><li class="descriptor">';
  newSong += document.getElementById("add-artist").value;
  newSong += '</li><li class="descriptor">';
  newSong += document.getElementById("add-album").value;
  newSong += '</li><li class="descriptor">';
  newSong += document.getElementById("add-genre").value;
  newSong += '</li></ul></article>';
  console.log("newSong String: ", newSong);
  console.log("Going to: ", insertPlace);
  insertPlace.innerHTML += newSong;
});

// Now populate the list and with these songs + more

/*
<article class="card">
  <h2 class="song-title">You Enjoy Myself</h2>
  <h5 class="duration">Duration</h5>
  <ul>
      <li class="descriptor">Phish</li>
      <li class="descriptor">Junta</li>
      <li class="descriptor">Jazz</li>
  </ul>      
</article>
<article class="card">
  <h2 class="song-title">Verbal</h2>
  <h5 class="duration">Duration</h5>
  <ul>
      <li class="descriptor">Amon Tobin</li>
      <li class="descriptor">Out From Out Where</li>
      <li class="descriptor">Jazz</li>
  </ul>      
</article>
<article class="card">
  <h2 class="song-title">Taxman</h2>
  <h5 class="duration">Duration</h5>
  <ul>
      <li class="descriptor">The Beatles</li>
      <li class="descriptor">Revolver</li>
      <li class="descriptor">Rock</li>
  </ul>      
</article>
<article class="card">
  <h2 class="song-title">Whatcha Want</h2>
  <h5 class="duration">Duration</h5>
  <ul>
      <li class="descriptor">Beastie Boys</li>
      <li class="descriptor">Check Your Head</li>
      <li class="descriptor">Hip-Hop</li>
  </ul>      
</article>
*/

// And now populate the sidebar filters appropriately