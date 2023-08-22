

let waitbox = document.querySelector(".waitbox")
let loadingpageTime = document.querySelector(".loadingpageTime")
let obitobox1 = document.querySelector(".obitobox1")
let obitointro = document.querySelector(".obitointro")
let obitobox = document.querySelector(".obitobox")
let topIndro = document.querySelector("#topIndro")
let blurbox = document.querySelector(".blurbox")
let popupmessagebox = document.querySelector(".popupmessagebox")
let cancel = document.querySelector("#cancel")
let visitorsName = document.querySelector("#visitorsName")
let accept = document.querySelector("#accept")


let namelistbox = []
let loadIndex = 0;
let loadingText = ["Server Is loadings...", "Wait For 3 Seconds...", "Successfully Completed."]
let textAnimation1 = ["T","T","o","b","i","h","a","r","a","_","U","c","h","i","h","a",]
let textAnimation2 = ["M","M","u","s","i","c","s"]
let textAnimation3 = ["S","S","u","b","s","c","r","i","b","e"]
let uhichaText = ["H","E","L","L","O",".",".",".","  ","I","'M","  ","I","T","A","C","H","I","   ","U","C","H","I","H","A","  ","I","   ","T","H","I","N","K","  ","Y","O","U","  ","A","R","E","  ","N","E","W","  ","V","I","S","I","T","E","R",".","  ","","","","","   ","","  ","","","","  ","","","","","   ","Y","O","  ","Y","O","O","👋","  ","PAGE","."]
let uchihaText2 = ["WE","  ", "INVENTED", "  " , "MANY", "   ", "FEATURES", "   ","IN", "  ","THIS", "  ", "WEBSITE", "  ","INCLUDES", ",","  ", "SLIDING", "   ","IMAGES", "  ","TO", "   ", "FORWARD AND BACKWARD","  ","AND","  " ,"MUSICS", "  ","MENU", "  ","", "."]
let topIndroIndex = 0;
let topIndroIndex1 = 0;
let topIndroIndex2 = 0;
fristAnime()
function fristAnime(){
setInterval(function() {
topIndroIndex++
  if(15 >= topIndroIndex) {
    topIndro.innerHTML += textAnimation1[topIndroIndex];
  }
  if(topIndroIndex == 100){
    topIndro.innerHTML = "";
    topIndroIndex1= 0;
    secondAnime()
  }
}, 200);
}

 function secondAnime(){
   setInterval(function() {
     topIndroIndex1++
     if(5 >= topIndroIndex1){
       topIndro.innerHTML += textAnimation2[topIndroIndex1];
     }
     if(topIndroIndex1 == 100){
     topIndro.innerHTML = "";
     topIndroIndex2 = 0;
       thirdanime()
     }
   }, 200);
 }
function thirdanime(){
  setInterval(function() {
    topIndroIndex2++
    if(9 >= topIndroIndex2){
      topIndro.innerHTML += textAnimation3[topIndroIndex2];
      if(topIndroIndex2 == 50){
       topIndroIndex = 0; 
      fristAnime()
      popupbox1()
      }
    }
  }, 200);
}


setInterval(function() {
  waitbox.innerHTML = `${loadingText[loadIndex]}`
  loadIndex++
  if(loadIndex == 4 ){
loadingpageTime.style.display = "none"
setTimeout(function() {
blurbox.style.display = "flex";
obitointro.style.left = "45%"
obitobox.style.top = "85%"}, 1000);
let uhichaTextindex = 0;
setInterval(function() {
 // console.log(uhichaText.length)
  if(76 >= uhichaTextindex){
   obitobox1.innerHTML += uhichaText[uhichaTextindex];
   uhichaTextindex++
  }
 if(76 ===uhichaTextindex) {
   let textindex = 0;
   let clickedIndex = 0;
obitobox1.addEventListener("click", () => {
obitobox1.innerHTML ="";
obitointro.style.left = "60%"
setInterval(function() {
console.log(uchihaText2)
  if(uchihaText2.length -1 >= textindex){
    obitobox1.innerHTML += uchihaText2[textindex];
textindex++;

  }
}, 200);
clickedIndex++;
if(clickedIndex == 2){
  obitointro.style.left = "100%";
  obitobox.style.top = "100%";
  blurbox.style.display = "none";
}

})

 }
}, 100);

}
}, 3000);

function popupbox1(){
  popupmessagebox.style.display = "flex";
  cancel.addEventListener("click",() => {
 popupmessagebox.style.display = "none";
 blurbox.style.display = "none";
  })
 accept.addEventListener("click", () => {
popupmessagebox.style.display = "none";
 blurbox.style.display = "none";
 })
}
console.log(JSON.parse(localStorage.getItem("data")))
