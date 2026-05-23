let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let restart=document.querySelector("#restart");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;//player1,player2
const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
];
boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        if(turno){
            box.innerText="0";
            box.classList.add("colour0");
            turno=false;
        }else{
            box.innerText="X";
            box.classList.add("colourX");
            turno=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
         box.classList.remove("colour0");
         box.classList.remove("colourX");
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
   msg.innerText=`congratulations,the winner is ${winner}`;
   msgContainer.classList.remove("hide");
}

const checkWinner=()=>{
    for(let pattern of winPattern){
           console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText//;
        if(pos1val!==""&&pos2val!==""&&pos3val!=="")
        {
            if(pos1val===pos2val&&pos2val===pos3val)
            {
                 showWinner(pos1val);
                disableBoxes();
            }
        }
    }
}
restart.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);