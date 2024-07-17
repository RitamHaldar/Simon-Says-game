let gameseq=[];
let userseq=[];
let btns=["red","yellow","green","violet"];
let started=false;
let lev=0;
let h2=document.querySelector("h2");
document.addEventListener("keydown",()=>{
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
    else{
        reset();
    }
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },300);
}
function levelup(){
    userseq=[];
    lev++;
    h2.innerText=`Level ${lev}`;
    let raninx=Math.floor(Math.random()*3); // getting random index
    let ranclor=btns[raninx] //selecting a colour from the randomly generated index
    let randbtn=document.querySelector(`.${ranclor}`);
    gameseq.push(ranclor);
    btnflash(randbtn);
}
function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length== gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Your Higest Score is level <b>${lev} </b> <br> Press any key to continue`;

    }
}
function btnpress(){
    let btn=this;
    btnflash(btn);
    let usrclr=btn.getAttribute("id");
    userseq.push(usrclr);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);
} 
function reset(){
    h2.innerText="Press Any Key To Start The Game";
    started=false;
    gameseq=[];
    userseq=[];
    lev=0;
}