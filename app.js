//GAMEPLAY PSEUDOCODE

//1. Game boared is composed of 16 tiles that are aligned 4x4.
// We need our gameboard to create 16 total cells, that are 4x4
//Code to create grid using javascript instead of css courtesy of https://code-boxx.com/create-grid-javascript/

let cells = [];
let score = [];

function createGameboard(){
    for (let i=0; i < 16; i++){
        let container = document.getElementById('gameboard');
        let cell = document.createElement('div');
        cell.innerHTML = 0
        container.appendChild(cell)
        cells.push(cell);    
    } 
} 
createGameboard();

//2. Game board starts out with two number 2 tiles
//Create a function that randomly generates the number 2 on the board.
//This function needs to randomly generate a positioning on the board (Number between1-16). It need to determine if that position is open (not already containing a number) If that position is open it need to place a number 2 tile.
function randomGenerate() {
    let position = Math.floor(Math.random()* 16);

        if(cells[position].innerHTML == 0){
            cells[position].innerHTML = 2;
            cells[position].classList.remove('hidden');
            changeColors()
    }  else {
        randomGenerate();
        changeColors()
    } 
}
//In order for two number 2 tiles to start on the board function is invoked twice
randomGenerate();
randomGenerate();


//Hide zeros
function hideZero(){
    for (let i=0; i < cells.length; i++){
        if (cells[i].innerHTML == 0 || cells[i].innerHTML == undefined){
            cells[i].classList.add('hidden');
        }
    }
} hideZero();

////////////////////////////////////////////////////////////

//3. Player uses the arrow keys to slide the tiles on the board
    // Up arrow --> slides tiles up (keycode: 38)
    // Down arrow --> slides tiles down (keycode: 40)
    //Left arrow --> slides tiles to the left (keycode: 37)
    //Right arrow --> slides tiles to the right (keycode: 39)


//Moving COLUMN ITEMS
//Hard coding columns because the indexes are varying
    let columnOne = [cells[0], cells [4], cells[8], cells[12]];
    let columnTwo = [cells[1], cells [5], cells[9], cells[13]];
    let columnThree = [cells[2], cells [6], cells[10], cells[14]];
    let columnFour = [cells[3], cells [7], cells[11], cells[15]];
    
    document.addEventListener('keydown', keyUp);

    function keyUp (event){
        if (event.keyCode === 38){
            slideUp();
            randomGenerate();
        } 
        scoring()
        changeColors();
        winCondition();
        loseCondition();
    }

    function slideUp1(){
        for (let i=0; i < columnOne.length; i++) {
           if (columnOne[0].innerHTML == 0){
               columnOne[0].innerHTML = columnOne[1].innerHTML;
               columnOne[1].innerHTML = 0;
               if (columnOne[0].innerHTML !=0 || columnOne[0].innerHTML != undefined){
                   columnOne[0].classList.remove('hidden');
               }
            } 
            if (columnOne[1].innerHTML == 0) {
                columnOne[1].innerHTML = columnOne[2].innerHTML;
                columnOne[2].innerHTML = 0;
                if (columnOne[1].innerHTML !=0 || columnOne[1].innerHTML !=undefined){
                    columnOne[1].classList.remove('hidden');
                }
            }
            if (columnOne[2].innerHTML == 0) {
                columnOne[2].innerHTML = columnOne[3].innerHTML;
                columnOne[3].innerHTML = 0;
                if (columnOne[2].innerHTML !=0 || columnOne[2].innerHTML !=undefined){
                    columnOne[2].classList.remove('hidden');
                }
            }  if (columnOne[3].innerHTML == 0 || columnOne[3].innerHTML ==undefined) {
                    hideZero();
            } combineColumn1();
            }
        } 

        function slideUp2(){
            for (let i=0; i < columnTwo.length; i++) {
               if (columnTwo[0].innerHTML == 0){
                   columnTwo[0].innerHTML = columnTwo[1].innerHTML;
                   columnTwo[1].innerHTML = 0;
                   if (columnTwo[0].innerHTML !=0 || columnTwo[0].innerHTML != undefined){
                       columnTwo[0].classList.remove('hidden');
                   }
                } 
                if (columnTwo[1].innerHTML == 0) {
                    columnTwo[1].innerHTML = columnTwo[2].innerHTML;
                    columnTwo[2].innerHTML = 0;
                    if (columnTwo[1].innerHTML !=0 || columnTwo[1].innerHTML !=undefined){
                        columnTwo[1].classList.remove('hidden');
                    }
                }
                if (columnTwo[2].innerHTML == 0) {
                    columnTwo[2].innerHTML = columnTwo[3].innerHTML;
                    columnTwo[3].innerHTML = 0;
                    if (columnTwo[2].innerHTML !=0 || columnTwo[2].innerHTML !=undefined){
                        columnTwo[2].classList.remove('hidden');
                    }
                }  if (columnTwo[3].innerHTML == 0 || columnTwo[3].innerHTML ==undefined) {
                        hideZero();
                } combineColumn2();
                }
            } 

            function slideUp3(){
                for (let i=0; i < columnThree.length; i++) {
                   if (columnThree[0].innerHTML == 0){
                       columnThree[0].innerHTML = columnThree[1].innerHTML;
                       columnThree[1].innerHTML = 0;
                       if (columnThree[0].innerHTML !=0 || columnThree[0].innerHTML != undefined){
                           columnThree[0].classList.remove('hidden');
                       }
                    } 
                    if (columnThree[1].innerHTML == 0) {
                        columnThree[1].innerHTML = columnThree[2].innerHTML;
                        columnThree[2].innerHTML = 0;
                        if (columnThree[1].innerHTML !=0 || columnThree[1].innerHTML !=undefined){
                            columnThree[1].classList.remove('hidden');
                        }
                    }
                    if (columnThree[2].innerHTML == 0) {
                        columnThree[2].innerHTML = columnThree[3].innerHTML;
                        columnThree[3].innerHTML = 0;
                        if (columnThree[2].innerHTML !=0 || columnThree[2].innerHTML !=undefined){
                            columnThree[2].classList.remove('hidden');
                        }
                    }  if (columnThree[3].innerHTML == 0 || columnThree[3].innerHTML ==undefined) {
                            hideZero();
                    } combineColumn3();
                    }
                } 
    
                function slideUp4(){
                    for (let i=0; i < columnFour.length; i++) {
                       if (columnFour[0].innerHTML == 0){
                           columnFour[0].innerHTML = columnFour[1].innerHTML;
                           columnFour[1].innerHTML = 0;
                           if (columnFour[0].innerHTML !=0 || columnFour[0].innerHTML != undefined){
                               columnFour[0].classList.remove('hidden');
                           }
                        } 
                        if (columnFour[1].innerHTML == 0) {
                            columnFour[1].innerHTML = columnFour[2].innerHTML;
                            columnFour[2].innerHTML = 0;
                            if (columnFour[1].innerHTML !=0 || columnFour[1].innerHTML !=undefined){
                                columnFour[1].classList.remove('hidden');
                            }
                        }
                        if (columnFour[2].innerHTML == 0) {
                            columnFour[2].innerHTML = columnFour[3].innerHTML;
                            columnFour[3].innerHTML = 0;
                            if (columnFour[2].innerHTML !=0 || columnFour[2].innerHTML !=undefined){
                                columnFour[2].classList.remove('hidden');
                            }
                        }  if (columnFour[3].innerHTML == 0 || columnFour[3].innerHTML ==undefined) {
                                hideZero();
                        } combineColumn4 ();
                        }
                    } 
            
    

    function slideUp(){
        slideUp1();
        slideUp2();  
        slideUp3();
        slideUp4();
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

    document.addEventListener('keydown', keyDown)

    function keyDown (event){
        if (event.keyCode === 40){
            slideDown();
            randomGenerate();
        } 
        scoring();
        changeColors();
        winCondition();
        loseCondition();
    }

    function slideDown1(){
        for (let i=0; i < columnOne.length; i++) {
           if (columnOne[3].innerHTML == 0){
               columnOne[3].innerHTML = columnOne[2].innerHTML;
               columnOne[2].innerHTML = 0;
               if (columnOne[3].innerHTML !=0 || columnOne[3].innerHTML != undefined){
                   columnOne[3].classList.remove('hidden');
               }
            } 
            if (columnOne[2].innerHTML == 0) {
                columnOne[2].innerHTML = columnOne[1].innerHTML;
                columnOne[1].innerHTML = 0;
                if (columnOne[2].innerHTML !=0 || columnOne[2].innerHTML !=undefined){
                    columnOne[2].classList.remove('hidden');
                }
            }
            if (columnOne[1].innerHTML == 0) {
                columnOne[1].innerHTML = columnOne[0].innerHTML;
                columnOne[0].innerHTML = 0;
                if (columnOne[1].innerHTML !=0 || columnOne[1].innerHTML !=undefined){
                    columnOne[1].classList.remove('hidden');
                }
            }  if (columnOne[0].innerHTML == 0 || columnOne[0].innerHTML ==undefined) {
                    hideZero();
            } combineColumn1();
            }
        } 

        function slideDown2(){
            for (let i=0; i < columnTwo.length; i++) {
               if (columnTwo[3].innerHTML == 0){
                   columnTwo[3].innerHTML = columnTwo[2].innerHTML;
                   columnTwo[2].innerHTML = 0;
                   if (columnTwo[3].innerHTML !=0 || columnTwo[3].innerHTML != undefined){
                       columnTwo[3].classList.remove('hidden');
                   }
                } 
                if (columnTwo[2].innerHTML == 0) {
                    columnTwo[2].innerHTML = columnTwo[1].innerHTML;
                    columnTwo[1].innerHTML = 0;
                    if (columnTwo[2].innerHTML !=0 || columnTwo[2].innerHTML !=undefined){
                        columnTwo[2].classList.remove('hidden');
                    }
                }
                if (columnTwo[1].innerHTML == 0) {
                    columnTwo[1].innerHTML = columnTwo[0].innerHTML;
                    columnTwo[0].innerHTML = 0;
                    if (columnTwo[1].innerHTML !=0 || columnTwo[1].innerHTML !=undefined){
                        columnTwo[1].classList.remove('hidden');
                    }
                }  if (columnTwo[0].innerHTML == 0 || columnTwo[0].innerHTML ==undefined) {
                        hideZero();
                } combineColumn2();
                }
            } 

            function slideDown3(){
                for (let i=0; i < columnThree.length; i++) {
                   if (columnThree[3].innerHTML == 0){
                       columnThree[3].innerHTML = columnThree[2].innerHTML;
                       columnThree[2].innerHTML = 0;
                       if (columnThree[3].innerHTML !=0 || columnThree[3].innerHTML != undefined){
                           columnThree[3].classList.remove('hidden');
                       }
                    } 
                    if (columnThree[2].innerHTML == 0) {
                        columnThree[2].innerHTML = columnThree[1].innerHTML;
                        columnThree[1].innerHTML = 0;
                        if (columnThree[2].innerHTML !=0 || columnThree[2].innerHTML !=undefined){
                            columnThree[2].classList.remove('hidden');
                        }
                    }
                    if (columnThree[1].innerHTML == 0) {
                        columnThree[1].innerHTML = columnThree[0].innerHTML;
                        columnThree[0].innerHTML = 0;
                        if (columnThree[1].innerHTML !=0 || columnThree[1].innerHTML !=undefined){
                            columnThree[1].classList.remove('hidden');
                        }
                    }  if (columnThree[0].innerHTML == 0 || columnThree[0].innerHTML ==undefined) {
                            hideZero();
                    } combineColumn3();
                    }
                } 

                function slideDown4(){
                    for (let i=0; i < columnFour.length; i++) {
                       if (columnFour[3].innerHTML == 0){
                           columnFour[3].innerHTML = columnFour[2].innerHTML;
                           columnFour[2].innerHTML = 0;
                           if (columnFour[3].innerHTML !=0 || columnFour[3].innerHTML != undefined){
                               columnFour[3].classList.remove('hidden');
                           }
                        } 
                        if (columnFour[2].innerHTML == 0) {
                            columnFour[2].innerHTML = columnFour[1].innerHTML;
                            columnFour[1].innerHTML = 0;
                            if (columnFour[2].innerHTML !=0 || columnFour[2].innerHTML !=undefined){
                                columnFour[2].classList.remove('hidden');
                            }
                        }
                        if (columnFour[1].innerHTML == 0) {
                            columnFour[1].innerHTML = columnFour[0].innerHTML;
                            columnFour[0].innerHTML = 0;
                            if (columnFour[1].innerHTML !=0 || columnFour[1].innerHTML !=undefined){
                                columnFour[1].classList.remove('hidden');
                            }
                        }  if (columnFour[0].innerHTML == 0 || columnFour[0].innerHTML ==undefined) {
                                hideZero();
                        } combineColumn4();
                        }
                    } 

    function slideDown(){
        slideDown1();
        slideDown2();  
        slideDown3();
        slideDown4();
    }
   //////////////////////////////////////////////////////////////////////////////////////

    let rowOne = [];
    let rowTwo = [];
    let rowThree = [];
    let rowFour = [];

    function row (){
        for(let i=0; i <cells.length; i++) {
            if (i <= 3){
                rowOne.push(cells[i]);
            } if (i <= 7 && i >=4) {
                rowTwo.push(cells[i]);
            } if (i <=11 && i >= 8){
                rowThree.push(cells[i]);
            } if (i <=15 && i >=12) {
                rowFour.push(cells[i]);
            }     
        } 
    } row();

    //SLIDE LEFT FUNCTION AT LEFT ARROW KEY

    document.addEventListener('keydown', keyLeft);

    function keyLeft (event){
        if (event.keyCode === 37){
            slideLeft();
            randomGenerate();
        } 
        scoring()
        changeColors();
        winCondition();
        loseCondition();
    }

    function slideLeft1(){
        for (let i=0; i < rowOne.length; i++) {
           if (rowOne[0].innerHTML == 0){
               rowOne[0].innerHTML = rowOne[1].innerHTML;
               rowOne[1].innerHTML = 0;
               if (rowOne[0].innerHTML !=0 || rowOne[0].innerHTML != undefined){
                   rowOne[0].classList.remove('hidden');
               }
            } 
            if (rowOne[1].innerHTML == 0) {
                rowOne[1].innerHTML = rowOne[2].innerHTML;
                rowOne[2].innerHTML = 0;
                if (rowOne[1].innerHTML !=0 || rowOne[1].innerHTML !=undefined){
                    rowOne[1].classList.remove('hidden');
                }
            }
            if (rowOne[2].innerHTML == 0) {
                rowOne[2].innerHTML = rowOne[3].innerHTML;
                rowOne[3].innerHTML = 0;
                if (rowOne[2].innerHTML !=0 || rowOne[2].innerHTML !=undefined){
                    rowOne[2].classList.remove('hidden');
                }
            }  if (rowOne[3].innerHTML == 0 || rowOne[3].innerHTML ==undefined) {
                    hideZero();
            } combineRow1();
            }
        } 
    
        function slideLeft2(){
            for (let i=0; i < rowTwo.length; i++) {
               if (rowTwo[0].innerHTML == 0){
                   rowTwo[0].innerHTML = rowTwo[1].innerHTML;
                   rowTwo[1].innerHTML = 0;
                   if (rowTwo[0].innerHTML !=0 || rowTwo[0].innerHTML != undefined){
                       rowTwo[0].classList.remove('hidden');
                   }
                } 
                if (rowTwo[1].innerHTML == 0) {
                    rowTwo[1].innerHTML = rowTwo[2].innerHTML;
                    rowTwo[2].innerHTML = 0;
                    if (rowTwo[1].innerHTML !=0 || rowTwo[1].innerHTML !=undefined){
                        rowTwo[1].classList.remove('hidden');
                    }
                }
                if (rowTwo[2].innerHTML == 0) {
                    rowTwo[2].innerHTML = rowTwo[3].innerHTML;
                    rowTwo[3].innerHTML = 0;
                    if (rowTwo[2].innerHTML !=0 || rowTwo[2].innerHTML !=undefined){
                        rowTwo[2].classList.remove('hidden');
                    }
                }  if (rowTwo[3].innerHTML == 0 || rowTwo[3].innerHTML ==undefined) {
                        hideZero();
                } combineRow2();
                }
            } 
        
            function slideLeft3(){
                for (let i=0; i < rowThree.length; i++) {
                   if (rowThree[0].innerHTML == 0){
                       rowThree[0].innerHTML = rowThree[1].innerHTML;
                       rowThree[1].innerHTML = 0;
                       if (rowThree[0].innerHTML !=0 || rowThree[0].innerHTML != undefined){
                           rowThree[0].classList.remove('hidden');
                       }
                    } 
                    if (rowThree[1].innerHTML == 0) {
                        rowThree[1].innerHTML = rowThree[2].innerHTML;
                        rowThree[2].innerHTML = 0;
                        if (rowThree[1].innerHTML !=0 || rowThree[1].innerHTML !=undefined){
                            rowThree[1].classList.remove('hidden');
                        }
                    }
                    if (rowThree[2].innerHTML == 0) {
                        rowThree[2].innerHTML = rowThree[3].innerHTML;
                        rowThree[3].innerHTML = 0;
                        if (rowThree[2].innerHTML !=0 || rowThree[2].innerHTML !=undefined){
                            rowThree[2].classList.remove('hidden');
                        }
                    }  if (rowThree[3].innerHTML == 0 || rowThree[3].innerHTML ==undefined) {
                            hideZero();
                    } combineRow3();
                    }
                } 
            
                function slideLeft4(){
                    for (let i=0; i < rowFour.length; i++) {
                       if (rowFour[0].innerHTML == 0){
                           rowFour[0].innerHTML = rowFour[1].innerHTML;
                           rowFour[1].innerHTML = 0;
                           if (rowFour[0].innerHTML !=0 || rowFour[0].innerHTML != undefined){
                               rowFour[0].classList.remove('hidden');
                           }
                        } 
                        if (rowFour[1].innerHTML == 0) {
                            rowFour[1].innerHTML = rowFour[2].innerHTML;
                            rowFour[2].innerHTML = 0;
                            if (rowFour[1].innerHTML !=0 || rowFour[1].innerHTML !=undefined){
                                rowFour[1].classList.remove('hidden');
                            }
                        }
                        if (rowFour[2].innerHTML == 0) {
                            rowFour[2].innerHTML = rowFour[3].innerHTML;
                            rowFour[3].innerHTML = 0;
                            if (rowFour[2].innerHTML !=0 || rowFour[2].innerHTML !=undefined){
                                rowFour[2].classList.remove('hidden');
                            }
                        }  if (rowFour[3].innerHTML == 0 || rowFour[3].innerHTML ==undefined) {
                                hideZero();
                        } combineRow4();
                        }
                    } 
                
                      
        
    function slideLeft(){
        slideLeft1();
        slideLeft2();  
        slideLeft3();
        slideLeft4();
    }

    //In order for the tiles to move to the right with key press in the cells array cell[i] need to +1 until it reaches the end of the row [3], [7], [11], [15]


    document.addEventListener('keydown', keyRight);

    function keyRight (event) {
    if (event.keyCode === 39) {
        slideRight ();
        randomGenerate ();  
        }  
        scoring();
        changeColors();
        winCondition();
        loseCondition();
    }

    function slideRight1 (){
    for (let i=0; i < rowOne.length; i++) {
       if (rowOne[3].innerHTML == 0){
           rowOne[3].innerHTML = rowOne[2].innerHTML;
           rowOne[2].innerHTML = 0;
           if (rowOne[3].innerHTML !=0 || rowOne[3].innerHTML != undefined){
               rowOne[3].classList.remove('hidden')
           } 
        } 
        if (rowOne[2].innerHTML == 0) {
            rowOne[2].innerHTML = rowOne[1].innerHTML;
            rowOne[1].innerHTML = 0;
            if (rowOne[2].innerHTML !=0 || rowOne[2].innerHTML !=undefined){
                rowOne[2].classList.remove('hidden')
            }
        }
        if (rowOne[1].innerHTML == 0) {
            rowOne[1].innerHTML = rowOne[0].innerHTML;
            rowOne[0].innerHTML = 0;
            if (rowOne[1].innerHTML !=0 || rowOne[1].innerHTML !=undefined){
                rowOne[1].classList.remove('hidden')
            }
        }  if (rowOne[0].innerHTML == 0 || rowOne[0].innerHTML ==undefined) {
                hideZero ()
        } combineRow1 ();
        } 
    } 

    function slideRight2(){
        for (let i=0; i < rowTwo.length; i++) {
           if (rowTwo[3].innerHTML == 0){
               rowTwo[3].innerHTML = rowTwo[2].innerHTML;
               rowTwo[2].innerHTML = 0;
               if (rowTwo[3].innerHTML !=0 || rowTwo[3].innerHTML != undefined){
                   rowTwo[3].classList.remove('hidden');
               }
            } 
            if (rowTwo[2].innerHTML == 0) {
                rowTwo[2].innerHTML = rowTwo[1].innerHTML;
                rowTwo[1].innerHTML = 0;
                if (rowTwo[2].innerHTML !=0 || rowTwo[2].innerHTML !=undefined){
                    rowTwo[2].classList.remove('hidden');
                }
            }
            if (rowTwo[1].innerHTML == 0) {
                rowTwo[1].innerHTML = rowTwo[0].innerHTML;
                rowTwo[0].innerHTML = 0;
                if (rowTwo[1].innerHTML !=0 || rowTwo[1].innerHTML !=undefined){
                    rowTwo[1].classList.remove('hidden');
                }
            }  if (rowTwo[0].innerHTML == 0 || rowTwo[0].innerHTML ==undefined) {
                hideZero();
            } combineRow2();
            }
        } 

        function slideRight3(){
            for (let i=0; i < rowThree.length; i++) {
               if (rowThree[3].innerHTML == 0){
                   rowThree[3].innerHTML = rowThree[2].innerHTML;
                   rowThree[2].innerHTML = 0;
                   if (rowThree[3].innerHTML !=0 || rowThree[3].innerHTML != undefined){
                       rowThree[3].classList.remove('hidden');
                   }
                } 
                if (rowThree[2].innerHTML == 0) {
                    rowThree[2].innerHTML = rowThree[1].innerHTML;
                    rowThree[1].innerHTML = 0;
                    if (rowThree[2].innerHTML !=0 || rowThree[2].innerHTML !=undefined){
                        rowThree[2].classList.remove('hidden');
                    }
                }
                if (rowThree[1].innerHTML == 0) {
                    rowThree[1].innerHTML = rowThree[0].innerHTML;
                    rowThree[0].innerHTML = 0;
                    if (rowThree[1].innerHTML !=0 || rowThree[1].innerHTML !=undefined){
                        rowThree[1].classList.remove('hidden');
                    }
                }  if (rowThree[0].innerHTML == 0 || rowThree[0].innerHTML ==undefined) {
                    hideZero ();
                } combineRow3();
                }
            } 
 
            function slideRight4 (){
                for (let i=0; i < rowFour.length; i++) {
                   if (rowFour[3].innerHTML == 0){
                       rowFour[3].innerHTML = rowFour[2].innerHTML;
                       rowFour[2].innerHTML = 0;
                       if (rowFour[3].innerHTML !=0 || rowFour[3].innerHTML != undefined){
                           rowFour[3].classList.remove('hidden');
                       }
                    } 
                    if (rowFour[2].innerHTML == 0) {
                        rowFour[2].innerHTML = rowFour[1].innerHTML;
                        rowFour[1].innerHTML = 0;
                        if (rowFour[2].innerHTML !=0 || rowFour[2].innerHTML !=undefined){
                            rowFour[2].classList.remove('hidden');
                        }
                    }
                    if (rowFour[1].innerHTML == 0) {
                        rowFour[1].innerHTML = rowFour[0].innerHTML;
                        rowFour[0].innerHTML = 0;
                        if (rowFour[1].innerHTML !=0 || rowFour[1].innerHTML !=undefined){
                            rowFour[1].classList.remove('hidden');
                        }
                    }  if (rowFour[0].innerHTML == 0 || rowFour[0].innerHTML ==undefined) {
                        hideZero();
                    } combineRow4();
                    } 
                } 
    
function slideRight(){
    slideRight1();
    slideRight2();  
    slideRight3();
    slideRight4();
}

//4. If two matching tiles are slid together they combine to create a single new tiles with the sum of the two numbers combined
    
    function combineRow1() {
        for (let i=0; i < 3; i++){
            if (rowOne[i].innerHTML === rowOne[i+1].innerHTML){
                let total = parseInt(rowOne[i].innerHTML) + parseInt(rowOne[i+1].innerHTML)
                rowOne[i].innerHTML = total
                rowOne[i+1].innerHTML = 0
                score.push(total);
            }
        }
    }

    function combineRow2() {
        for (let i=0; i < 3; i++){
            if (rowTwo[i].innerHTML === rowTwo[i+1].innerHTML){
                let total = parseInt(rowTwo[i].innerHTML) + parseInt(rowTwo[i+1].innerHTML)
                rowTwo[i].innerHTML = total
                rowTwo[i+1].innerHTML = 0
                score.push(total);
            }
        }
    }

    function combineRow3() {
        for (let i=0; i < 3; i++){
            if (rowThree[i].innerHTML === rowThree[i+1].innerHTML){
                let total = parseInt(rowThree[i].innerHTML) + parseInt(rowThree[i+1].innerHTML)
                rowThree[i].innerHTML = total
                rowThree[i+1].innerHTML = 0
                score.push(total);
            }
        }
    }

    function combineRow4() {
        for (let i=0; i < 3; i++){
            if (rowFour[i].innerHTML === rowFour[i+1].innerHTML){
                let total = parseInt(rowFour[i].innerHTML) + parseInt(rowFour[i+1].innerHTML)
                rowFour[i].innerHTML = total
                rowFour[i+1].innerHTML = 0
                score.push(total);
            }
        }
    }
   
    //Combine columns//////////////////////////////////////

    function combineColumn1() {
        for (let i=0; i < 3; i++){
            if (columnOne[i].innerHTML === columnOne[i+1].innerHTML){
                let total = parseInt(columnOne[i].innerHTML) + parseInt(columnOne[i+1].innerHTML)
                columnOne[i].innerHTML = total
                columnOne[i+1].innerHTML = 0
                score.push(total);
            }
        }
    }

    function combineColumn2() {
        for (let i=0; i < 3; i++){
            if (columnTwo[i].innerHTML === columnTwo[i+1].innerHTML){
                let total = parseInt(columnTwo[i].innerHTML) + parseInt(columnTwo[i+1].innerHTML)
                columnTwo[i].innerHTML = total
                columnTwo[i+1].innerHTML = 0
                score.push(total);
            }
        }
    }

    function combineColumn3() {
        for (let i=0; i < 3; i++){
            if (columnThree[i].innerHTML === columnThree[i+1].innerHTML){
                let total = parseInt(columnThree[i].innerHTML) + parseInt(columnThree[i+1].innerHTML)
                columnThree[i].innerHTML = total
                columnThree[i+1].innerHTML = 0
                score.push(total);
            }
        }
    }
    
    function combineColumn4() {
        for (let i=0; i < 3; i++){
            if (columnFour[i].innerHTML === columnFour[i+1].innerHTML){
                let total = parseInt(columnFour[i].innerHTML) + parseInt(columnFour[i+1].innerHTML)
                columnFour[i].innerHTML = total
                columnFour[i+1].innerHTML = 0
                score.push(total);
            }
        }
    }

    // CHANGE COLORS WITH NUMBER REPRESENTED
    function changeColors(){
    for(let i=0; i<cells.length; i++){
        if (cells[i].innerHTML == 0){
            cells[i].classList.add("zero")
            cells[i].classList.remove("two")
            cells[i].classList.remove("four")
            cells[i].classList.remove("eight")
            cells[i].classList.remove("sixteen")
            cells[i].classList.remove("thirty-two")
            cells[i].classList.remove("sixty-four")
            cells[i].classList.remove("one-twenty-eight")
            cells[i].classList.remove("two-fifty-six")
            cells[i].classList.remove("five-twelve")
            cells[i].classList.remove("one-zero-two-four")
            cells[i].classList.remove("twenty-forty-eight")
        }
        if (cells[i].innerHTML == 2){
            cells[i].classList.add("two")
            cells[i].classList.remove("zero")
            cells[i].classList.remove("four")
            cells[i].classList.remove("eight")
            cells[i].classList.remove("sixteen")
            cells[i].classList.remove("thirty-two")
            cells[i].classList.remove("sixty-four")
            cells[i].classList.remove("one-twenty-eight")
            cells[i].classList.remove("two-fifty-six")
            cells[i].classList.remove("five-twelve")
            cells[i].classList.remove("one-zero-two-four")
            cells[i].classList.remove("twenty-forty-eight")
        }
        if (cells[i].innerHTML == 4){
            cells[i].classList.add("four")
            cells[i].classList.remove("two")
            cells[i].classList.remove("zero")
            cells[i].classList.remove("eight")
            cells[i].classList.remove("sixteen")
            cells[i].classList.remove("thirty-two")
            cells[i].classList.remove("sixty-four")
            cells[i].classList.remove("one-twenty-eight")
            cells[i].classList.remove("two-fifty-six")
            cells[i].classList.remove("five-twelve")
            cells[i].classList.remove("one-zero-two-four")
            cells[i].classList.remove("twenty-forty-eight")
        }
        if (cells[i].innerHTML == 8){
            cells[i].classList.add("eight")
            cells[i].classList.remove("two")
            cells[i].classList.remove("four")
            cells[i].classList.remove("zero")
            cells[i].classList.remove("sixteen")
            cells[i].classList.remove("thirty-two")
            cells[i].classList.remove("sixty-four")
            cells[i].classList.remove("one-twenty-eight")
            cells[i].classList.remove("two-fifty-six")
            cells[i].classList.remove("five-twelve")
            cells[i].classList.remove("one-zero-two-four")
            cells[i].classList.remove("twenty-forty-eight")
        }
        if (cells[i].innerHTML == 16){
            cells[i].classList.add("sixteen")
            cells[i].classList.remove("two")
            cells[i].classList.remove("four")
            cells[i].classList.remove("eight")
            cells[i].classList.remove("zero")
            cells[i].classList.remove("thirty-two")
            cells[i].classList.remove("sixty-four")
            cells[i].classList.remove("one-twenty-eight")
            cells[i].classList.remove("two-fifty-six")
            cells[i].classList.remove("five-twelve")
            cells[i].classList.remove("one-zero-two-four")
            cells[i].classList.remove("twenty-forty-eight")
        } 
        if (cells[i].innerHTML == 32){
            cells[i].classList.add("thirty-two")
            cells[i].classList.remove("two")
            cells[i].classList.remove("four")
            cells[i].classList.remove("eight")
            cells[i].classList.remove("zero")
            cells[i].classList.remove("sixteen")
            cells[i].classList.remove("sixty-four")
            cells[i].classList.remove("one-twenty-eight")
            cells[i].classList.remove("two-fifty-six")
            cells[i].classList.remove("five-twelve")
            cells[i].classList.remove("one-zero-two-four")
            cells[i].classList.remove("twenty-forty-eight")
        }
        if (cells[i].innerHTML == 64){
            cells[i].classList.remove("zero")
            cells[i].classList.remove("two")
            cells[i].classList.remove("four")
            cells[i].classList.remove("eight")
            cells[i].classList.remove("sixteen")
            cells[i].classList.remove("thirty-two")
            cells[i].classList.add("sixty-four")
            cells[i].classList.remove("one-twenty-eight")
            cells[i].classList.remove("two-fifty-six")
            cells[i].classList.remove("five-twelve")
            cells[i].classList.remove("one-zero-two-four")
            cells[i].classList.remove("twenty-forty-eight")

        }
        if (cells[i].innerHTML == 128){
            cells[i].classList.remove("zero")
            cells[i].classList.remove("two")
            cells[i].classList.remove("four")
            cells[i].classList.remove("eight")
            cells[i].classList.remove("sixteen")
            cells[i].classList.remove("thirty-two")
            cells[i].classList.remove("sixty-four")
            cells[i].classList.add("one-twenty-eight")
            cells[i].classList.remove("two-fifty-six")
            cells[i].classList.remove("five-twelve")
            cells[i].classList.remove("one-zero-two-four")
            cells[i].classList.remove("twenty-forty-eight")

        }
        if (cells[i].innerHTML == 256) {
            cells[i].classList.remove("zero")
            cells[i].classList.remove("two")
            cells[i].classList.remove("four")
            cells[i].classList.remove("eight")
            cells[i].classList.remove("sixteen")
            cells[i].classList.remove("thirty-two")
            cells[i].classList.remove("sixty-four")
            cells[i].classList.remove("one-twenty-eight")
            cells[i].classList.add("two-fifty-six")
            cells[i].classList.remove("five-twelve")
            cells[i].classList.remove("one-zero-two-four")
            cells[i].classList.remove("twenty-forty-eight")

        }
        if (cells[i].innerHTML == 512){
            cells[i].classList.remove("zero")
            cells[i].classList.remove("two")
            cells[i].classList.remove("four")
            cells[i].classList.remove("eight")
            cells[i].classList.remove("sixteen")
            cells[i].classList.remove("thirty-two")
            cells[i].classList.remove("sixty-four")
            cells[i].classList.remove("one-twenty-eight")
            cells[i].classList.remove("two-fifty-six")
            cells[i].classList.add("five-twelve")
            cells[i].classList.remove("one-zero-two-four")
            cells[i].classList.remove("twenty-forty-eight")

        }
        if (cells[i].innerHTML == 1024){
            cells[i].classList.remove("zero")
            cells[i].classList.remove("two")
            cells[i].classList.remove("four")
            cells[i].classList.remove("eight")
            cells[i].classList.remove("sixteen")
            cells[i].classList.remove("thirty-two")
            cells[i].classList.remove("sixty-four")
            cells[i].classList.remove("one-twenty-eight")
            cells[i].classList.remove("two-fifty-six")
            cells[i].classList.remove("five-twelve")
            cells[i].classList.add("one-zero-two-four")
            cells[i].classList.remove("twenty-forty-eight")
            
        }
        if (cells[i].innerHTML == 2048){
            cells[i].classList.remove("zero")
            cells[i].classList.remove("two")
            cells[i].classList.remove("four")
            cells[i].classList.remove("eight")
            cells[i].classList.remove("sixteen")
            cells[i].classList.remove("thirty-two")
            cells[i].classList.remove("sixty-four")
            cells[i].classList.remove("one-twenty-eight")
            cells[i].classList.remove("two-fifty-six")
            cells[i].classList.remove("five-twelve")
            cells[i].classList.remove("one-zero-two-four")
            cells[i].classList.add("twenty-forty-eight")

        }
    }
} 


//Total score with each move
    let scoreboard = document.querySelector('.score')

    function scoring() {
        let sum = 0
    for (let i=0; i<score.length; i++){
        sum +=score[i]
    } scoreboard.innerHTML = `Score ${sum}`
    return sum;
}

//5. This continues until player reaches tile 2048 
    //If the player reaches tile 2048 the game stops and winning message pops up

    let winner = document.querySelector('.winner')

    function winCondition() {
        for(let i=0; i<cells.length; i++){
            if (cells[i].innerHTML == 2048){
                winner.classList.add('show')
                winner.classList.remove('winner')
                document.removeEventListener('keydown', keyUp)
                document.removeEventListener('keydown', keyRight)
                document.removeEventListener('keydown', keyDown)
                document.removeEventListener('keydown', keyLeft)
            } 
        } 
    }
//6. When game board is full and no more moves can be made
    //if the gameboard is full and no more moves can be made losing message appears

    let loser = document.querySelector('.loser')
    let keepGoing = true;

    function loseCondition(){
        let tiles =0;
        for(let i=0; i< cells.length; i++){
            if(cells[i].innerHTML == 0){
                tiles++
            }
        } if (tiles == 0 && keepGoing == true){
                keepGoing = false;
            for(let i=0; i<3; i++){
                if (rowOne[i].innerHTML == rowOne[i+1].innerHTML){
                    keepGoing = true;
                } if (rowTwo[i].innerHTML == rowTwo[i+1].innerHTML){
                   keepGoing = true;
                }  if (rowThree[i].innerHTML == rowThree[i+1].innerHTML){
                   keepGoing = true;
                }  if (rowFour[i].innerHTML == rowFour[i+1].innerHTML){
                   keepGoing = true;
                }  if (columnOne[i].innerHTML == columnOne[i+1].innerHTML){
                    keepGoing = true;
                }  if (columnTwo[i].innerHTML == columnTwo[i+1].innerHTML){
                    keepGoing = true;
                }  if (columnThree[i].innerHTML == columnThree[i+1].innerHTML){
                    keepGoing = true;
                }  if (columnFour[i].innerHTML == columnFour[i+1].innerHTML){
                    keepGoing = true;
           } 
    } 

    } else if (keepGoing === false){
        loser.classList.add('show');
        loser.classList.remove('loser');
        document.removeEventListener('keydown', keyUp)
        document.removeEventListener('keydown', keyRight)
        document.removeEventListener('keydown', keyDown)
        document.removeEventListener('keydown', keyLeft)
        return;
      } 
}

//New Game Button
let newGame = document.querySelector('button')

newGame.addEventListener('click', () => {
    for (let i=0; i < cells.length; i++) {
    cells[i].innerHTML = 0
    cells[i].classList.remove("zero")
    }   
        loser.classList.remove('show');
        loser.classList.add('loser');
        winner.classList.add('winner')
        document.addEventListener('keydown', keyUp)
        document.addEventListener('keydown', keyRight)
        document.addEventListener('keydown', keyDown)
        document.addEventListener('keydown', keyLeft)
        keepGoing = true;
        hideZero()
        randomGenerate()
        randomGenerate()
        score = [];
        sum = 0;
        scoreboard.innerHTML = `Score ${sum}`;
})

//Disable arrow key courtesy of stack overflow
//https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

//How to play

let howToPlay = document.querySelector('.play')
let box = document.querySelector('#how-to-play')

    howToPlay.addEventListener('click', () => {
        box.classList.toggle('transition')
    })