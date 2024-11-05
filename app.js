let boxes=document.querySelectorAll(".box");//9 boxes
let reset=document.querySelector("#reset");//accessing reset button
let newBtn =document.querySelector("#new");//accessing new btn
let msgContainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
let count=0;//to track draw

let turnO = true;//playerX,playerO;//starting of game
//2d array
const winPatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


//1.Event on click box (adding value)
boxes.forEach((box) =>{
    box.addEventListener("click",( )=>{
        console.log("Box was clicked");
        if(turnO){//turn of player O is true
            box.innerText ="O";
            turnO=false;
           
        }
        else{//turn of player X
            box.innerText="X";
            box.style.color="green";
            turnO=true;
            
        }
        box.disabled=true;//so that the assigned value does not change on double-click
        count++;
        
        let isWinner=checkWinner();
        if (count === 9 && !isWinner) {
        gameDraw();
      }
    });
  });
  
  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
  };
        

       


//2.Check for winner and compare with winning pattern
//arrow function
const checkWinner=()=>{
    for(let pattern of winPatterns){
     let pos1Val=boxes[pattern[0]].innerText;
     let pos2Val=boxes[pattern[1]].innerText;
     let pos3Val=boxes[pattern[2]].innerText;
     
     if(pos1Val!= "" && pos2Val!="" && pos3Val!="")//checking for empty condition
        { 
        if(pos1Val ===pos2Val && pos2Val ===pos3Val)
            {
            showWinner(pos1Val);
            }
        }
    }
};
//disable the boxes
const disabledBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

//#3.Display Winner
const showWinner=(winner) =>{
    msg.innerText=`Congratulations,Winner is ${winner}`
    msgContainer.classList.remove("hide");//removing the hide class 
    disabledBoxes();//so that games stop after winning
}

//4.Reset the game
const resetGame=() =>{
    turnO=true;
    count=0;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
//enable boxes
const enabledBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

     