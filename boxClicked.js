function boxClicked(boxNum){           

    thirdRTs[curTrial] = Date.now() - startRT; 

    //so boxNum will be 1 if the first box (regular image that was initially dislayed) is clicked
    //boxNum will be 2 if the second box (zoomed in OR zoomed out image) is clicked

    //zoomedIn[curTrial] == 0 means that the image shown along with the 'regular' image will be zoomed in (relatively)
    //zoomedIn[curTrial] == 1 means that the image shown along with the 'regular' image will be zoomed out (relatively)
    
    //regular or zoomed in match 

    //first, hide the boxes. 
    document.getElementById("box").style.display = "none"; 
    document.getElementById("box2").style.display = "none"; 

    if (boxNum == 1) {
        //display correct
        $('#correct').show();
        setTimeout(function() {
        $('#correct').hide(); //hide second part of trial
        },500);

        zoomIdentify[curTrial] = "correct";
    }

    else {
        //display WRONG message. 

        $('#wrong').show(); //hide second part of trial
        setTimeout(function() {
        $('#wrong').hide(); //hide second part of trial
        },500);

        zoomIdentify[curTrial] = "wrong";

    }

    EndTrial(1200); 
}