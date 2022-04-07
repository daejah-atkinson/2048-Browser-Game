//GAMEPLAY PSEUDOCODE

//1. Game boared is composed of 16 tiles that are aligned 4x4.
// We need our gameboard to create 16 total cells, that are 4x4
//Code to create grid using javascript instead of css courtesy of https://code-boxx.com/create-grid-javascript/

let cells = [];

function createGameboard (){
    for (let i=0; i < 16; i++){
        let container = document.getElementById('gameboard');
        let cell = document.createElement('div');
        cell.innerHTML = 0
        container.appendChild(cell)
        cells.push(cell);    
    } 
} 
createGameboard ();

//2. Game board starts out with two number 2 tiles
//Create a function that randomly generates the number 2 on the board.
//This function needs to randomly generate a positioning on the board (Number between1-16). It need to determine if that position is open (not already containing a number) If that position is open it need to place a number 2 tile.
function randomGenerate() {
    let position = Math.floor(Math.random()* 16);

        if(cells[position].innerHTML == 0){
            cells[position].innerHTML = 2
            console.log(cells[position])
            cells[position].classList.remove('hidden') 
    }  else {
        randomGenerate ();
    }  
}
//In order for two number 2 tiles to start on the board function is invoked twice
randomGenerate();
randomGenerate();


//Hide zeros
function hideZero (){
    for (let i=0; i < cells.length; i++){
        if (cells[i].innerHTML == 0 || cells[i].innerHTML == undefined){
            cells[i].classList.add('hidden')
        }
    }
} hideZero ()

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
    
    document.addEventListener('keydown', keyUp)

    function keyUp (event){
        if (event.keyCode === 38){
            slideUp ();
            randomGenerate ();
        }
    }

    function slideUp1 (){
        for (let i=0; i < columnOne.length; i++) {
           if (columnOne[0].innerHTML == 0){
               columnOne[0].innerHTML = columnOne[1].innerHTML;
               columnOne[1].innerHTML = 0;
               if (columnOne[0].innerHTML !=0 || columnOne[0].innerHTML != undefined){
                   columnOne[0].classList.remove('hidden')
               }
            } 
            if (columnOne[1].innerHTML == 0) {
                columnOne[1].innerHTML = columnOne[2].innerHTML;
                columnOne[2].innerHTML = 0;
                if (columnOne[1].innerHTML !=0 || columnOne[1].innerHTML !=undefined){
                    columnOne[1].classList.remove('hidden')
                }
            }
            if (columnOne[2].innerHTML == 0) {
                columnOne[2].innerHTML = columnOne[3].innerHTML;
                columnOne[3].innerHTML = 0;
                if (columnOne[2].innerHTML !=0 || columnOne[2].innerHTML !=undefined){
                    columnOne[2].classList.remove('hidden')
                }
            }  if (columnOne[3].innerHTML == 0 || columnOne[3].innerHTML ==undefined) {
                    hideZero ()
            } 
            }
        } 

        function slideUp2 (){
            for (let i=0; i < columnTwo.length; i++) {
               if (columnTwo[0].innerHTML == 0){
                   columnTwo[0].innerHTML = columnTwo[1].innerHTML;
                   columnTwo[1].innerHTML = 0;
                   if (columnTwo[0].innerHTML !=0 || columnTwo[0].innerHTML != undefined){
                       columnTwo[0].classList.remove('hidden')
                   }
                } 
                if (columnTwo[1].innerHTML == 0) {
                    columnTwo[1].innerHTML = columnTwo[2].innerHTML;
                    columnTwo[2].innerHTML = 0;
                    if (columnTwo[1].innerHTML !=0 || columnTwo[1].innerHTML !=undefined){
                        columnTwo[1].classList.remove('hidden')
                    }
                }
                if (columnTwo[2].innerHTML == 0) {
                    columnTwo[2].innerHTML = columnTwo[3].innerHTML;
                    columnTwo[3].innerHTML = 0;
                    if (columnTwo[2].innerHTML !=0 || columnTwo[2].innerHTML !=undefined){
                        columnTwo[2].classList.remove('hidden')
                    }
                }  if (columnTwo[3].innerHTML == 0 || columnTwo[3].innerHTML ==undefined) {
                        hideZero ()
                } 
                }
            } 

            function slideUp3 (){
                for (let i=0; i < columnThree.length; i++) {
                   if (columnThree[0].innerHTML == 0){
                       columnThree[0].innerHTML = columnThree[1].innerHTML;
                       columnThree[1].innerHTML = 0;
                       if (columnThree[0].innerHTML !=0 || columnThree[0].innerHTML != undefined){
                           columnThree[0].classList.remove('hidden')
                       }
                    } 
                    if (columnThree[1].innerHTML == 0) {
                        columnThree[1].innerHTML = columnThree[2].innerHTML;
                        columnThree[2].innerHTML = 0;
                        if (columnThree[1].innerHTML !=0 || columnThree[1].innerHTML !=undefined){
                            columnThree[1].classList.remove('hidden')
                        }
                    }
                    if (columnThree[2].innerHTML == 0) {
                        columnThree[2].innerHTML = columnThree[3].innerHTML;
                        columnThree[3].innerHTML = 0;
                        if (columnThree[2].innerHTML !=0 || columnThree[2].innerHTML !=undefined){
                            columnThree[2].classList.remove('hidden')
                        }
                    }  if (columnThree[3].innerHTML == 0 || columnThree[3].innerHTML ==undefined) {
                            hideZero ()
                    } 
                    }
                } 
    
                function slideUp4 (){
                    for (let i=0; i < columnFour.length; i++) {
                       if (columnFour[0].innerHTML == 0){
                           columnFour[0].innerHTML = columnFour[1].innerHTML;
                           columnFour[1].innerHTML = 0;
                           if (columnFour[0].innerHTML !=0 || columnFour[0].innerHTML != undefined){
                               columnFour[0].classList.remove('hidden')
                           }
                        } 
                        if (columnFour[1].innerHTML == 0) {
                            columnFour[1].innerHTML = columnFour[2].innerHTML;
                            columnFour[2].innerHTML = 0;
                            if (columnFour[1].innerHTML !=0 || columnFour[1].innerHTML !=undefined){
                                columnFour[1].classList.remove('hidden')
                            }
                        }
                        if (columnFour[2].innerHTML == 0) {
                            columnFour[2].innerHTML = columnFour[3].innerHTML;
                            columnFour[3].innerHTML = 0;
                            if (columnFour[2].innerHTML !=0 || columnFour[2].innerHTML !=undefined){
                                columnFour[2].classList.remove('hidden')
                            }
                        }  if (columnFour[3].innerHTML == 0 || columnFour[3].innerHTML ==undefined) {
                                hideZero ()
                        } 
                        }
                    } 
            
    

    function slideUp (){
        slideUp1 ();
        slideUp2 ();  
        slideUp3 ();
        slideUp4 ();
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

    document.addEventListener('keydown', keyDown)

    function keyDown (event){
        if (event.keyCode === 40){
            slideDown ();
            randomGenerate ();
        }
    }

    function slideDown1 (){
        for (let i=0; i < columnOne.length; i++) {
           if (columnOne[3].innerHTML == 0){
               columnOne[3].innerHTML = columnOne[2].innerHTML;
               columnOne[2].innerHTML = 0;
               if (columnOne[3].innerHTML !=0 || columnOne[3].innerHTML != undefined){
                   columnOne[3].classList.remove('hidden')
               }
            } 
            if (columnOne[2].innerHTML == 0) {
                columnOne[2].innerHTML = columnOne[1].innerHTML;
                columnOne[1].innerHTML = 0;
                if (columnOne[2].innerHTML !=0 || columnOne[2].innerHTML !=undefined){
                    columnOne[2].classList.remove('hidden')
                }
            }
            if (columnOne[1].innerHTML == 0) {
                columnOne[1].innerHTML = columnOne[0].innerHTML;
                columnOne[0].innerHTML = 0;
                if (columnOne[1].innerHTML !=0 || columnOne[1].innerHTML !=undefined){
                    columnOne[1].classList.remove('hidden')
                }
            }  if (columnOne[0].innerHTML == 0 || columnOne[0].innerHTML ==undefined) {
                    hideZero ()
            } 
            }
        } 

        function slideDown2 (){
            for (let i=0; i < columnTwo.length; i++) {
               if (columnTwo[3].innerHTML == 0){
                   columnTwo[3].innerHTML = columnTwo[2].innerHTML;
                   columnTwo[2].innerHTML = 0;
                   if (columnTwo[3].innerHTML !=0 || columnTwo[3].innerHTML != undefined){
                       columnTwo[3].classList.remove('hidden')
                   }
                } 
                if (columnTwo[2].innerHTML == 0) {
                    columnTwo[2].innerHTML = columnTwo[1].innerHTML;
                    columnTwo[1].innerHTML = 0;
                    if (columnTwo[2].innerHTML !=0 || columnTwo[2].innerHTML !=undefined){
                        columnTwo[2].classList.remove('hidden')
                    }
                }
                if (columnTwo[1].innerHTML == 0) {
                    columnTwo[1].innerHTML = columnTwo[0].innerHTML;
                    columnTwo[0].innerHTML = 0;
                    if (columnTwo[1].innerHTML !=0 || columnTwo[1].innerHTML !=undefined){
                        columnTwo[1].classList.remove('hidden')
                    }
                }  if (columnTwo[0].innerHTML == 0 || columnTwo[0].innerHTML ==undefined) {
                        hideZero ()
                } 
                }
            } 

            function slideDown3 (){
                for (let i=0; i < columnThree.length; i++) {
                   if (columnThree[3].innerHTML == 0){
                       columnThree[3].innerHTML = columnThree[2].innerHTML;
                       columnThree[2].innerHTML = 0;
                       if (columnThree[3].innerHTML !=0 || columnThree[3].innerHTML != undefined){
                           columnThree[3].classList.remove('hidden')
                       }
                    } 
                    if (columnThree[2].innerHTML == 0) {
                        columnThree[2].innerHTML = columnThree[1].innerHTML;
                        columnThree[1].innerHTML = 0;
                        if (columnThree[2].innerHTML !=0 || columnThree[2].innerHTML !=undefined){
                            columnThree[2].classList.remove('hidden')
                        }
                    }
                    if (columnThree[1].innerHTML == 0) {
                        columnThree[1].innerHTML = columnThree[0].innerHTML;
                        columnThree[0].innerHTML = 0;
                        if (columnThree[1].innerHTML !=0 || columnThree[1].innerHTML !=undefined){
                            columnThree[1].classList.remove('hidden')
                        }
                    }  if (columnThree[0].innerHTML == 0 || columnThree[0].innerHTML ==undefined) {
                            hideZero ()
                    } 
                    }
                } 

                function slideDown4 (){
                    for (let i=0; i < columnFour.length; i++) {
                       if (columnFour[3].innerHTML == 0){
                           columnFour[3].innerHTML = columnFour[2].innerHTML;
                           columnFour[2].innerHTML = 0;
                           if (columnFour[3].innerHTML !=0 || columnFour[3].innerHTML != undefined){
                               columnFour[3].classList.remove('hidden')
                           }
                        } 
                        if (columnFour[2].innerHTML == 0) {
                            columnFour[2].innerHTML = columnFour[1].innerHTML;
                            columnFour[1].innerHTML = 0;
                            if (columnFour[2].innerHTML !=0 || columnFour[2].innerHTML !=undefined){
                                columnFour[2].classList.remove('hidden')
                            }
                        }
                        if (columnFour[1].innerHTML == 0) {
                            columnFour[1].innerHTML = columnFour[0].innerHTML;
                            columnFour[0].innerHTML = 0;
                            if (columnFour[1].innerHTML !=0 || columnFour[1].innerHTML !=undefined){
                                columnFour[1].classList.remove('hidden')
                            }
                        }  if (columnFour[0].innerHTML == 0 || columnFour[0].innerHTML ==undefined) {
                                hideZero ()
                        } 
                        }
                    } 

    function slideDown (){
        slideDown1 ();
        slideDown2 ();  
        slideDown3 ();
        slideDown4 ();
    }
   //////////////////////////////////////////////////////////////////////////////////////

    let rowOne = [];
    let rowTwo = [];
    let rowThree = [];
    let rowFour = [];

    function row (){
        for(let i=0; i <cells.length; i++) {
            if (i <= 3){
                rowOne.push(cells[i])
            } if (i <= 7 && i >=4) {
                rowTwo.push(cells[i])
            } if (i <=11 && i >= 8){
                rowThree.push(cells[i])
            } if (i <=15 && i >=12) {
                rowFour.push(cells[i])
            }     
        } 
    } row ()

    //SLIDE LEFT FUNCTION AT LEFT ARROW KEY

    document.addEventListener('keydown', keyLeft)

    function keyLeft (event){
        if (event.keyCode === 37){
            slideLeft ();
            randomGenerate ();
        }
    }

    function slideLeft1 (){
        for (let i=0; i < rowOne.length; i++) {
           if (rowOne[0].innerHTML == 0){
               rowOne[0].innerHTML = rowOne[1].innerHTML;
               rowOne[1].innerHTML = 0;
               if (rowOne[0].innerHTML !=0 || rowOne[0].innerHTML != undefined){
                   rowOne[0].classList.remove('hidden')
               }
            } 
            if (rowOne[1].innerHTML == 0) {
                rowOne[1].innerHTML = rowOne[2].innerHTML;
                rowOne[2].innerHTML = 0;
                if (rowOne[1].innerHTML !=0 || rowOne[1].innerHTML !=undefined){
                    rowOne[1].classList.remove('hidden')
                }
            }
            if (rowOne[2].innerHTML == 0) {
                rowOne[2].innerHTML = rowOne[3].innerHTML;
                rowOne[3].innerHTML = 0;
                if (rowOne[2].innerHTML !=0 || rowOne[2].innerHTML !=undefined){
                    rowOne[2].classList.remove('hidden')
                }
            }  if (rowOne[3].innerHTML == 0 || rowOne[3].innerHTML ==undefined) {
                    hideZero ()
            } 
            }
        } 
    
        function slideLeft2 (){
            for (let i=0; i < rowTwo.length; i++) {
               if (rowTwo[0].innerHTML == 0){
                   rowTwo[0].innerHTML = rowTwo[1].innerHTML;
                   rowTwo[1].innerHTML = 0;
                   if (rowTwo[0].innerHTML !=0 || rowTwo[0].innerHTML != undefined){
                       rowTwo[0].classList.remove('hidden')
                   }
                } 
                if (rowTwo[1].innerHTML == 0) {
                    rowTwo[1].innerHTML = rowTwo[2].innerHTML;
                    rowTwo[2].innerHTML = 0;
                    if (rowTwo[1].innerHTML !=0 || rowTwo[1].innerHTML !=undefined){
                        rowTwo[1].classList.remove('hidden')
                    }
                }
                if (rowTwo[2].innerHTML == 0) {
                    rowTwo[2].innerHTML = rowTwo[3].innerHTML;
                    rowTwo[3].innerHTML = 0;
                    if (rowTwo[2].innerHTML !=0 || rowTwo[2].innerHTML !=undefined){
                        rowTwo[2].classList.remove('hidden')
                    }
                }  if (rowTwo[3].innerHTML == 0 || rowTwo[3].innerHTML ==undefined) {
                        hideZero ()
                } 
                }
            } 
        
            function slideLeft3 (){
                for (let i=0; i < rowThree.length; i++) {
                   if (rowThree[0].innerHTML == 0){
                       rowThree[0].innerHTML = rowThree[1].innerHTML;
                       rowThree[1].innerHTML = 0;
                       if (rowThree[0].innerHTML !=0 || rowThree[0].innerHTML != undefined){
                           rowThree[0].classList.remove('hidden')
                       }
                    } 
                    if (rowThree[1].innerHTML == 0) {
                        rowThree[1].innerHTML = rowThree[2].innerHTML;
                        rowThree[2].innerHTML = 0;
                        if (rowThree[1].innerHTML !=0 || rowThree[1].innerHTML !=undefined){
                            rowThree[1].classList.remove('hidden')
                        }
                    }
                    if (rowThree[2].innerHTML == 0) {
                        rowThree[2].innerHTML = rowThree[3].innerHTML;
                        rowThree[3].innerHTML = 0;
                        if (rowThree[2].innerHTML !=0 || rowThree[2].innerHTML !=undefined){
                            rowThree[2].classList.remove('hidden')
                        }
                    }  if (rowThree[3].innerHTML == 0 || rowThree[3].innerHTML ==undefined) {
                            hideZero ()
                    } 
                    }
                } 
            
                function slideLeft4 (){
                    for (let i=0; i < rowFour.length; i++) {
                       if (rowFour[0].innerHTML == 0){
                           rowFour[0].innerHTML = rowFour[1].innerHTML;
                           rowFour[1].innerHTML = 0;
                           if (rowFour[0].innerHTML !=0 || rowFour[0].innerHTML != undefined){
                               rowFour[0].classList.remove('hidden')
                           }
                        } 
                        if (rowFour[1].innerHTML == 0) {
                            rowFour[1].innerHTML = rowFour[2].innerHTML;
                            rowFour[2].innerHTML = 0;
                            if (rowFour[1].innerHTML !=0 || rowFour[1].innerHTML !=undefined){
                                rowFour[1].classList.remove('hidden')
                            }
                        }
                        if (rowFour[2].innerHTML == 0) {
                            rowFour[2].innerHTML = rowFour[3].innerHTML;
                            rowFour[3].innerHTML = 0;
                            if (rowFour[2].innerHTML !=0 || rowFour[2].innerHTML !=undefined){
                                rowFour[2].classList.remove('hidden')
                            }
                        }  if (rowFour[3].innerHTML == 0 || rowFour[3].innerHTML ==undefined) {
                                hideZero ()
                        } 
                        }
                    } 
                
                      
        
    function slideLeft (){
        slideLeft1 ();
        slideLeft2 ();  
        slideLeft3 ();
        slideLeft4 ();
    }

    //In order for the tiles to move to the right with key press in the cells array cell[i] need to +1 until it reaches the end of the row [3], [7], [11], [15]


    document.addEventListener('keydown', keyRight);


    function keyRight (event) {
    if (event.keyCode === 39) {
        slideRight ();
        randomGenerate ();     
        }  
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
        } 
        }
    } 

    function slideRight2 (){
        for (let i=0; i < rowTwo.length; i++) {
           if (rowTwo[3].innerHTML == 0){
               rowTwo[3].innerHTML = rowTwo[2].innerHTML;
               rowTwo[2].innerHTML = 0;
               if (rowTwo[3].innerHTML !=0 || rowTwo[3].innerHTML != undefined){
                   rowTwo[3].classList.remove('hidden')
               }
            } 
            if (rowTwo[2].innerHTML == 0) {
                rowTwo[2].innerHTML = rowTwo[1].innerHTML;
                rowTwo[1].innerHTML = 0;
                if (rowTwo[2].innerHTML !=0 || rowTwo[2].innerHTML !=undefined){
                    rowTwo[2].classList.remove('hidden')
                }
            }
            if (rowTwo[1].innerHTML == 0) {
                rowTwo[1].innerHTML = rowTwo[0].innerHTML;
                rowTwo[0].innerHTML = 0;
                if (rowTwo[1].innerHTML !=0 || rowTwo[1].innerHTML !=undefined){
                    rowTwo[1].classList.remove('hidden')
                }
            }  if (rowTwo[0].innerHTML == 0 || rowTwo[0].innerHTML ==undefined) {
                hideZero ()
            } 
            }
        } 

        function slideRight3 (){
            for (let i=0; i < rowThree.length; i++) {
               if (rowThree[3].innerHTML == 0){
                   rowThree[3].innerHTML = rowThree[2].innerHTML;
                   rowThree[2].innerHTML = 0;
                   if (rowThree[3].innerHTML !=0 || rowThree[3].innerHTML != undefined){
                       rowThree[3].classList.remove('hidden')
                   }
                } 
                if (rowThree[2].innerHTML == 0) {
                    rowThree[2].innerHTML = rowThree[1].innerHTML;
                    rowThree[1].innerHTML = 0;
                    if (rowThree[2].innerHTML !=0 || rowThree[2].innerHTML !=undefined){
                        rowThree[2].classList.remove('hidden')
                    }
                }
                if (rowThree[1].innerHTML == 0) {
                    rowThree[1].innerHTML = rowThree[0].innerHTML;
                    rowThree[0].innerHTML = 0;
                    if (rowThree[1].innerHTML !=0 || rowThree[1].innerHTML !=undefined){
                        rowThree[1].classList.remove('hidden')
                    }
                }  if (rowThree[0].innerHTML == 0 || rowThree[0].innerHTML ==undefined) {
                    hideZero ()
                } 
                }
            } 
 
            function slideRight4 (){
                for (let i=0; i < rowFour.length; i++) {
                   if (rowFour[3].innerHTML == 0){
                       rowFour[3].innerHTML = rowFour[2].innerHTML;
                       rowFour[2].innerHTML = 0;
                       if (rowFour[3].innerHTML !=0 || rowFour[3].innerHTML != undefined){
                           rowFour[3].classList.remove('hidden')
                       }
                    } 
                    if (rowFour[2].innerHTML == 0) {
                        rowFour[2].innerHTML = rowFour[1].innerHTML;
                        rowFour[1].innerHTML = 0;
                        if (rowFour[2].innerHTML !=0 || rowFour[2].innerHTML !=undefined){
                            rowFour[2].classList.remove('hidden')
                        }
                    }
                    if (rowFour[1].innerHTML == 0) {
                        rowFour[1].innerHTML = rowFour[0].innerHTML;
                        rowFour[0].innerHTML = 0;
                        if (rowFour[1].innerHTML !=0 || rowFour[1].innerHTML !=undefined){
                            rowFour[1].classList.remove('hidden')
                        }
                    }  if (rowFour[0].innerHTML == 0 || rowFour[0].innerHTML ==undefined) {
                        hideZero ()
                    } 
                    }
                } 
    
function slideRight (){
    slideRight1 ();
    slideRight2 ();  
    slideRight3 ();
    slideRight4 ();
}

//4. If two matching tiles are slid together they combine to create a single new tiles with the sum of the two numbers combined
    // If there are multiple matching tiles, for example four 2 tiles in a row, they will only be combined to create two 4 tiles.
    function combineTiles () {
        //if the tile to the right of the tile in the row is the same number that
    }
   


//5. This continues until player reaches tile 2048 
    //If the player reaches tile 2048 the game stops and winning message pops up
//6. When game board is full and no more moves can be made
    //if the gameboard is full and no more moves can be made loosing message appears
