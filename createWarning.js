
//createsWarningID
//parameter warningNum: 
//warningNum = 0: creates warningID1, warningNum = 1: creates warningID2
function createWarning(warningNum) {

    lateWarning = setTimeout(function() {   //timer for 5 seconds to find object!

        tooSlow = true; 
        $(document).unbind("keypress.respond"); // stop waiting for spacebar in this case)
        //if he takes more than 5 seconds, make him do the trial all over again
        if (warningNum == 0) {
            document.getElementById('searchDisplay').style.visibility = "hidden";
            document.getElementById("backgroundCircle").style.display = "none"; 
            clearBoard();
        }
        else { 
            $('#manMadeOrNot').hide(); 
        }

        clearBoard(); 
        $('#warning').show(); //show warning

        $(document).bind("keypress.respond", function(e) {
        if (e.which==49) {     //1 
             $(document).unbind("keypress.respond"); // stop waiting for key
            $('#warning').hide(); 
            ShowImage();                    //shows same trial again 
            } 
       });
    },5000);  
}