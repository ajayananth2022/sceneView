function boxClicked(boxNum){           

    thirdRTs[curTrial] = Date.now() - startRT; 
    document.getElementById("inputRT3_" + (curTrial + 1)).value = thirdRTs[curTrial]; 

    //so boxNum will be 1 if the first box (regular image) is clicked
    //boxNum will be 2 if the second box (zoomed in image) is clicked

    //zoomedIn[curTrial] == 0 means that the image shown initially was zoomed in
    //zoomedIn[curTrial] == 1 means that the image shown initially was regular
    
    //regular or zoomed in match 

    //first, hide the boxes. 
    document.getElementById("box").style.display = "none"; 
    document.getElementById("box2").style.display = "none"; 

    if ((boxNum ==1 && zoomedIn[curTrial] == 1) || (boxNum ==2 && zoomedIn[curTrial] == 0)) {
        //display correct
        $('#correct').show();
        setTimeout(function() {
        $('#correct').hide(); //hide second part of trial
        },500);

        manMadeBools[curTrial] = "correct";

    }

    else {
        //display WRONG message. 

        $('#wrong').show(); //hide second part of trial
        setTimeout(function() {
        $('#wrong').hide(); //hide second part of trial
        },500);

        manMadeBools[curTrial] = "wrong";

    }

    document.getElementById("inputSceneCateg_" + (curTrial + 1)).value = manMadeBools[curTrial];
    EndTrial(1200); 
}