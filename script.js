
let lineContainer;
let test;
let element;
let test1;
let hover1;
let input;
let lineToBeRemoved;
let imgArray;
let elementsToBeErased;
let icons;
let color;
let clearGrid;


function sizePrompt(){
    clearCurrentBoard();
    input = prompt("Number of squares on each size of grid?");
    clearCurrentBoard();
    drawBoard(input);
  

}

function clearCurrentBoard(){
    while (document.querySelector('#container').firstChild) {
        document.querySelector('#container').removeChild(document.querySelector('#container').firstChild);
      }

  
   
}

function drawClear(){
    hover1 =  document.querySelectorAll('.item div');
    hover1.forEach((square)=>square.classList.remove('hover'));
    
}

function drawBoard(size){
    for(let j=0;j<size;j++){
        lineContainer = document.createElement('div');
        lineContainer.classList.add('item');
        lineContainer.setAttribute('id',`lol${j}`);
        test = document.querySelector('#container');
        test.appendChild(lineContainer);
    }
    
    for(let x= 0;x<size;x++){
        for(let i =0;i<size;i++){
            element = document.createElement('div');
            test1 = document.getElementById(`lol${x}`);
            test1.appendChild(element);
        }
    }
}

function hoverFade(square){
    square.addEventListener('mouseleave',function(e){

        setTimeout(function(){
            square.classList.remove('hover')},2000);
    })
      
     
       
   }


function hover(){
    hover1 =  document.querySelectorAll('.item div');
    hover1.forEach((square)=>square.addEventListener('click',function(e){
             
                    square.classList.add('hover');

                
            }));
        
}

function eraser(){
    elementsToBeErased =document.querySelectorAll('.item div');
    elementsToBeErased.forEach((square)=>square.addEventListener('click',function(e){
        square.classList.remove('hover');


}));
}


function select(){
    icons = document.querySelectorAll('button');
    icons.forEach((button) => button.addEventListener('click', function(e){
        console.log(e);
        icons.forEach((button) => button.classList.remove('selected'));
        button.classList.add('selected');
    }));
}
select();


function clearGridLines(){
    clearGrid =   document.querySelectorAll('.item div');
    
    clearGrid.forEach((square) => square.setAttribute('id','clearGrid'));


}
function changeColor(){
    
   color = document.getElementById('color').value;
    console.log(color);
   //document.querySelector('.item hover').style.backgroud


}






