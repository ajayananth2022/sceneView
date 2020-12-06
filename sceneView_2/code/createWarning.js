//createsWarningID
function createWarning() {

    //how long we are waiting before displaying the warning and restarting the trial. 
    warningTime = 5000; 

    lateWarning = setTimeout(function() {   //timer for 5 seconds to identify MC object!

        console.log("late warning reached"); 

        $('#title').hide();

        //if he takes more than 5 seconds, skip to next trial

        //hide the answer choices. 
        document.getElementById("answerChoices").style.display = "none"; 

        //show warning
        document.getElementById("lateWarning").style.display = "block"; 

        //late trial will have no selection or reaction time, by definition. 
        userSelections.push(["NO SELECTION: LATE", null])
        mcRTs.push(null); 

        lateWarning = setTimeout(function() { 
            $('#lateWarning').hide(); 
            
            //edge case: reached if user is 'late' on last trial
            if (curTrial == 1) {
                document.getElementById("answerChoices").style.display = "none"; 
                EndTrial(); 
            } else {
                //shows next trial 
                ShowScene();
            }            

        } ,5000);  

    },warningTime);  
}

