console.log('lets write java script');

async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/Spotify_clone/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push("/Spotify_clone/songs/"+element.getAttribute("href"));
        }
    }
    return songs


}

const playMusic = (track)=>{
    let audio = new Audio("Spotify_clone/songs/" + track)
}
async function main() {
    let currsong;
    // get the list of all the songs
    let songs = await getsongs()
    console.log(songs)
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) {
        let name = song.trim().split("/").pop().replaceAll("%20", " ");
        name = name.replace("CSpotify_clone", " ");
        name = name.replace("Csongs", " ");
        name = name.replace("C", " ");
        songUL.innerHTML = songUL.innerHTML + `<li>
          ${name.replaceAll("%5", " ")}
          </li>`;
    }

    // attach an event listner
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.firstElementChild.innerHTML)
            playMusic(e.firstElementChild.innerHTML.trim())
        })

    })



}

main()