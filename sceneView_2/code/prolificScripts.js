
//prolific functions
//copy and paste from lab wiki

//as well as countdown and submit functions. 


// get prolific info
function getProlificInfo() {
    let urlParams = new URLSearchParams(window.location.search);
    prolificPID = urlParams.get("PROLIFIC_PID");
    studyID = urlParams.get("STUDY_ID");
    sessionID = urlParams.get("SESSION_ID");
    if (prolificPID == null) {
      prolificPID = 'NO-SUBJ-ID';
    }
    return [prolificPID, studyID, sessionID];
  }
  
  function redirectToProlific() {
    // set url
    $('#urlProlific').text(urlProlific);
    $('#urlProlific').attr("href", urlProlific);
    // hide
    $('#submitText').hide();
    // show
    $('#redirectToProlific').show();
    // countdown
    $('#countDown').text((finalCountDownClock).toString());
    redirectTimer = setInterval(countDown, 1000);
  }
  
  // prolific redirect countdown
  function countDown () {
    finalCountDownClock--;
    if (finalCountDownClock == 0) {
      // clear countdown
      clearInterval(redirectTimer);
      // redirect
      window.location = urlProlific;
    } else {
      $('#countDown').text((finalCountDownClock).toString());
    }
  }
  
  function submitData(outDir) {
      // trialStruct is an object(array) holding the data; subjectID is the subject user id; outDir is the folder where to store the data
      // get data string from response array
      var dataString = JSON.stringify(trialStruct);
      // post response to server
    $.post("experiment_helperFunctions/logTrial.py", {
    subjectID: subjectID,
    dataString: dataString,
    outDir: outDir
    });
  }

  function clickSubmitRedirect() {
    // submit data to server
    submitData('../../Prolific_Data');
    // redirect back to prolific
    redirectToProlific();
  }
  