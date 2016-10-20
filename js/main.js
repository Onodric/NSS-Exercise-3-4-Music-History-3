// 5. The existing view - the combination of the filter form and the song list - will be referred to as the *List Music View*.
// 6. The *Add Music View* should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
// 7. When the user clicks on "Add Music" in the navigation bar, the *List Music View* should be hidden, and the *Add Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a0cf17f7b)).
// 8. When the user clicks on "List Music" in the navigation bar, the *Add Music View* should be hidden, and the *List Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a8d99d401)).
// 9. Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

// 1. Switch tabs
  // !!When switching "tabs", add .hidden to div.sidebar and #view-songs!!
    // 1.1 add event listener to header elements
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

// SAMPLE CARD FOLLOWS
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
*/