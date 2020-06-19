function clicked(circleNum){                                    //should be called squareClicked to make more descriptive

    clickedSquare[curTrial] = circleNum; 
    document.getElementById("inputClickedSq_" + (curTrial + 1)).value = clickedSquare[curTrial]; 

    secondRTs[curTrial] = Date.now() - partTwoTaskShown; 

    //WARNING: below line only works for version sceneView_11.html and up
    document.getElementById("inputRT2_" + (curTrial + 1)).value = secondRTs[curTrial]; 

    //right now, I didn't set a timeOut. 
    document.getElementById('searchDisplay').style.visibility = "hidden";       //hide second part of trial
    clearBoard(); 
    document.getElementById("backgroundCircle").style.display = "none"; 


    //console.log(circleNum); 
   // console.log(targetSquare: ' targetSquare[0]); 

    //right now, I am not doing a timeout warning for this function. 

    if (circleNum == targetSquare[boardIndex - 1]){ // ---> you can make this shorter, byt eliminating repeating information

        var ErrorDur = 1000;

        $('#correct').show();

        setTimeout(function() {
        $('#correct').hide(); //hide second part of trial
        
        askManMade(curTrial) 
        },ErrorDur);
    }

    else { // if it is not target...
        var ErrorDur = 3000;
        //delay three seconds
        $('#wrong').show(); //hide second part of trial

        setTimeout(function() {
        $('#wrong').hide(); //hide second part of trial
        askManMade(curTrial) 
        },ErrorDur);    
    }  

    setTimeout(function() {
        },ErrorDur);  
    }