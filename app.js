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
    // for (let i=0; i < cells.length; i++) {
        if(cells[position].innerHTML == 0){
            cells[position].innerHTML = 2
        // } 
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

    function slideUp () {
        document.addEventListener('keydown', up);
        function up (event) {
             if (event.keyCode === 38) 
                    console.log('up')        
        }

    } slideUp ();
    

    function slideDown () {
        document.addEventListener('keydown', down);
        function down (event) {
             if (event.keyCode === 40) 
                    console.log('down')        
        }
        
    } slideDown ();

    //moving ROW ITEMS

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

    function slideLeft () {
        document.addEventListener('keydown', left);
        function left (event) {
             if (event.keyCode === 37) 
                    console.log('left')        
        }
        
    } slideLeft ();

    //In order for the tiles to move to the right with key press in the cells array cell[i] need to +1 until it reaches the end of the row [3], [7], [11], [15]


    document.addEventListener('keydown', keyRight);


    function keyRight (event) {
    if (event.keyCode === 39) {
        console.log('right')        
        }  slideRight1 ()  
    } 

    function slideRight1 (){
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
            
        }
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
