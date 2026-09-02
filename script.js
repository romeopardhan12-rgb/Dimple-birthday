const musicBtn=document.getElementById("musicBtn");
const song=document.getElementById("song");
let playing=false;

musicBtn.addEventListener("click", async ()=>{
  if(!song.getAttribute("src") && !song.querySelector("source")?.getAttribute("src")){
    alert("Add your legally obtained 'tum-se.mp3' file to the website folder first 🎵");
    return;
  }
  try{
    if(!playing){ await song.play(); musicBtn.textContent="⏸️ Pause our song"; playing=true; }
    else{ song.pause(); musicBtn.textContent="🎵 Play our song"; playing=false; }
  }catch(e){
    alert("Please add 'tum-se.mp3' to the website folder first 🎵");
  }
});
song.addEventListener("ended",()=>{playing=false;musicBtn.textContent="🎵 Play our song"});

const hearts=document.getElementById("hearts");
function heart(){
  const el=document.createElement("div");
  el.className="heart";
  el.textContent=["❤️","💕","💗","💖","✨"][Math.floor(Math.random()*5)];
  el.style.left=Math.random()*100+"vw";
  el.style.fontSize=(14+Math.random()*24)+"px";
  el.style.animationDuration=(4+Math.random()*3)+"s";
  hearts.appendChild(el);
  setTimeout(()=>el.remove(),7500);
}
setInterval(heart,700);

document.getElementById("surpriseBtn").addEventListener("click",()=>{
  const final=document.getElementById("finalMessage");
  final.classList.remove("hidden");
  document.getElementById("surpriseBtn").style.display="none";
  document.querySelector(".dont").style.display="none";
  for(let i=0;i<35;i++) setTimeout(heart,i*70);
  final.scrollIntoView({behavior:"smooth",block:"center"});
});
