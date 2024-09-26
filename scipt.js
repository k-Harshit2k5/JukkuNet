function createbubble(){
    const section =document.querySelector("body");
    const createElement=document.createElement("span");
    let size = Math.random()*40;

    createElement.style.width=size+"px";
    createElement.style.height=size+"px";
    createElement.style.left=Math.random()*innerWidth+"px";
    section.appendChild(createElement);
    
    setInterval(() => {
        createElement.remove();
    }, 15000);

    console.log("1");
    
}
setInterval(createbubble,90)
    let object=document.querySelector(".object");
    let headPannel=document.querySelector(".head-pannel");
    
    let myAudioElement=document.getElementById("audio");
    let button=document.querySelector("button");
    button.addEventListener("click",()=>{
         myAudioElement.volume=0.2;
         myAudioElement.play();
         button.style.display="none";
         headPannel.style.visibility="visible"
         object.style.visibility="visible";
    })


