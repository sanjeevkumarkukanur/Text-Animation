let text = document.querySelector(".Fancy");
let strText = text.textContent;
let splitText = strText.split("");
text.textContent = "";

for(let i = 0; i<splitText.length; i++){
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(function onTick(){
  let span = text.querySelectorAll('span')[char];
  span.classList.add("fade");
  char++;
  if(char === splitText.length){
    complete();
    return;
  }
}, 50);


function complete(){
  clearInterval(timer)
  timer = null;
}