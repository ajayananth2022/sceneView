
function createBoard(){
    board = new Array(40); //--> why do you define the array here and not globally?

    for (var i = 0; i < board.length; i++) {  //creates the board object
    // all items are zero
        board[i] = new Array(8); 

        for (var j= 0; j < 8; j++) { 
            board[i][j] = new Array(8);

            for (var k= 0; k < 8; k++) {
                board[i][j][k] = 0; 
            }
        } 
    }  
    
    //here we set were the target and distractors are going to be
    var counter = 0; 
    var masterCount = 0; 

    while (masterCount<40){

        var xCoorTarget = getRandomInt(1, 6);  
        var yCoorTarget; 

          
        if (STDirection[masterCount] == 0){  //0 is a up. 
            yCoorTarget = getRandomInt(0, 3); //upper field random y coordinate
        }
        else{ //STDirection[masterCount] will equal 1 (down)
            yCoorTarget = getRandomInt(4, 7);  //lower field random y coordinate 
        }
        
        while (counter<16){ //////////////////------> cannot  understand this loop, 
        // why does counter < 16 here? 
            
            if (counter==0){ 
                board[masterCount][xCoorTarget][yCoorTarget]=2;   //this is the target   
                counter = counter + 1; 
                targetSquare[masterCount] = ((8 * xCoorTarget) + yCoorTarget + 1);    //this is the corresponding square that the target will be located. I need this for the click task. 
                // --> but why +1???
            }
            
            
            //make them random, but not like the current xCoorTarget or yCoorTarget
            //----> not very elegant but it might work, 
            xCoorDistract = getRandomInt(0, 7); 
            yCoorDistract = getRandomInt(0, 7); 

            if ((xCoorDistract != xCoorTarget) && (yCoorDistract != yCoorTarget) && (board[masterCount][xCoorDistract][yCoorDistract] != 1)){
            //these are the distractors, = 16
                    board[masterCount][xCoorDistract][yCoorDistract] = 1; 
                    counter = counter + 1; 
                }   
            }
        masterCount++;
        counter = 0;
    }
    return board;
}


function showBoard(searchTaskNum) { 

    if (searchTaskNum == 1 && tooSlow == false){
        boardIndex++;              //everytime this loop is called you are going to the next board
    }
    else if (searchTaskNum == 2) {
        $('body').css('cursor', 'auto');
    }

    document.getElementById('searchDisplay').style.visibility = "visible"; 
  
    var j; 
    var k; 

    //loops over all 64 squares in the search task grid

    for (var i = 0; i < 64; i = i + 1) {
        j = parseInt(i/8);
        k = i%8; 
        var col = i % 8;
        var row = Math.floor(i / 8);
        var pt2obj = document.getElementById('pt2-object-' + (i+1)).style;
        //if searchTaskNum ==2, only show secondSearchTask (masked board)
        if (searchTaskNum == 2){ 
            //if the particular square in the grid is not empty (or in 
            //other words, if it had either a target or distractor), then show a masked square 
            if (board[boardIndex - 1][j][k] != 0){ 
                pt2obj.visibility = "visible";
                pt2obj.top = (43 + 43 * row - 40) + 'px';
                pt2obj.left = (100 + 43 * col - 95)+ 'px'; 
                }
        }
        else {
            //hide all masks for part 1 of search task
            pt2obj.visibility = "hidden"; 
            var distractorObj = document.getElementById('distractor-object-' + (i+1)).style;
            var targetObj = document.getElementById('target-object').style;
            if (board[boardIndex - 1][j][k] == 0) {
                distractorObj.visibility = "hidden"; 
            }
            //1 means a distractor 
            else if (board[boardIndex - 1][j][k] == 1){
            //   document.getElementsByClassName('distractor object')[i].style.background = "black";
                distractorObj.visibility = "visible"; 
                distractorObj.top = (43 + 43 * row - 40) + 'px';
                distractorObj.left = (100 + 43 * col - 95)+ 'px'; 
            }
            //2 means a target
            else if (board[boardIndex - 1][j][k] == 2){
            //  document.getElementsByClassName('distractor object')[i].style.background = "yellow";
            //50 is square size
            //object size was 40
            //search display was 400
            //45 and 36  so 40? 
            //previous: (50 + 50 * row - 45) + 'px'; 
                targetObj.visibility = "visible"; 
                targetObj.top = (43 + 43 * row - 40) + 'px';
                targetObj.left = (100 + 43 * col - 95)+ 'px'; 
            }
        }
    }
    partTwoTaskShown = Date.now(); 
}

function clearBoard() {     
    var targetObj = document.getElementById('target-object');
    targetObj.style.visibility = "hidden"

    for (var i = 0; i < 64; i = i + 1) {

        var distractorObj = document.getElementById('distractor-object-' + (i+1));
        var pt2obj = document.getElementById('pt2-object-' + (i+1));

        distractorObj.style.visibility = "hidden"
        pt2obj.style.visibility = "hidden"

    }
}