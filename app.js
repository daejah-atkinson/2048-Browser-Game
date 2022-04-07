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
    console.log(position)
    // for (let i=0; i < cells.length; i++) {
        if(cells[position].innerHTML == 0){
            cells[position].innerHTML = 2
        // } 
    }    
}
//In order for two number 2 tiles to start on the board function is invoked twice
randomGenerate();
randomGenerate();


//3. Player uses the arrow keys to slide the tiles on the board
    // Up arrow --> slides tiles up (keycode: 38)
    // Down arrow --> slides tiles down (keycode: 40)
    //Left arrow --> slides tiles to the left (keycode: 37)
    //Right arrow --> slides tiles to the right (keycode: 39)


    function log (){
        console.log("up")
    }
    document.addEventListener('keydown', log)

    // function slideUp () {
    //     document.addEventListener('keydown', event => {
    //         if (event.keyCode === 38) {
    //             console.log('up')
    //         }
    //     })
    // }

    function slideDown () {
        
    }

    function slideLeft () {
        document.addEventListener('keydown', event => {
            
        })
    }

    function slideRight () {
        document.addEventListener('keydown', event => {
            
        })
    }

//4. If two matching tiles are slid together they combine to create a single new tiles with the sum of the two numbers combined
    // If there are multiple matching tiles, for example four 2 tiles in a row, they will only be combined to create two 4 tiles.
//5. This continues until player reaches tile 2048 
    //If the player reaches tile 2048 the game stops and winning message pops up
//6. When game board is full and no more moves can be made
    //if the gameboard is full and no more moves can be made loosing message appears
