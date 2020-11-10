
//purpose: counterbalances object, scene pairs randomly such that out of the 20 trials, there are
//an equal amount of each object, scene category pair. There will be: 
//5 upObject,up scene trials
//5 upObject,down scene trials
//5 downObject,up scene trials
//5 downObject,down scene trials
// --------------------------------
//input: in a array containing order of objects to be presented
//returns: a array containing order of scene numbers
function balanceTrials(objectsOrder) {
    
    //scenesOrder will be populated with order of scenes to be presented
    var scenesOrder = []
    //scenes are numbered 1-20, remmember.
    //below vars is what will get pushed to scenes order
    //below vars will get incremented each time they are pushed
    var scenesUpTracker = 0; 
    var scenesUp = shuffle([1,2,3,4,5,6,7,8,9,10]); 

    var scenesDownTracker = 0; 
    var scenesDown = shuffle([11,12,13,14,15,16,17,18,19,20]); 


    //array that keeps track of current number of object/scene assignments. 
    //element 0: up Obj, up Scene, element 1: up Obj, down Scene,
    //element 2: down Obj, up Scene, element 3: down Obj, down Scene,
    var objectSceneTracker = [0, 0, 0, 0];

    //generate randInt: 
    var randInt = 0; 
    var sceneAdded; 

    for (var i = 0; i<objectsOrder.length; i++) {
        
        sceneAdded = false; 


        //0: pair object with up scene
        //1: pair object with down scene
        randInt = getRandomInt(0, 1); 


        //if the object is a 'up' object
        if (objectsOrder[i] > 0 && objectsOrder[i] <=10) {
            
            //if randInt is 0, check to see if we can pair object with up scene
            if (randInt == 0 && objectSceneTracker[0] <5) {
                scenesOrder.push(scenesUp[scenesUpTracker]); 
                scenesUpTracker++; 
                objectSceneTracker[0]++; 
                sceneAdded = true; 
            }
            //if randInt is 1, check to see if we can pair object with down scene
            else if (randInt == 1 && objectSceneTracker[1] <5){
                scenesOrder.push(scenesDown[scenesDownTracker]); 
                scenesDownTracker++; 
                objectSceneTracker[1]++; 
                sceneAdded = true; 
            }
        }

        //if the object is a 'down' object
        else if (objectsOrder[i] > 10 && objectsOrder[i] <=20) {

            //if randInt is 0, check to see if we can pair object with up scene
            if (randInt == 0 && objectSceneTracker[2] <5) {
                scenesOrder.push(scenesUp[scenesUpTracker]); 
                scenesUpTracker++; 
                objectSceneTracker[2]++; 
                sceneAdded = true; 
            }
            //if randInt is 1, check to see if we can pair object with down scene
            else if (randInt == 1 && objectSceneTracker[3] <5){
                scenesOrder.push(scenesDown[scenesDownTracker]); 
                scenesDownTracker++; 
                objectSceneTracker[3]++; 
                sceneAdded = true; 
            }
        }



        //thhis below if statement is kindof a smart fix, im proud of this one
        //but the rest of this code is so clunky there is definetely a better way to do this lol. 
        //basically, for every element of the objects array, you want to assign a corresponding scene. this below line achieves that. 
        if (sceneAdded == false) {
            i--; 
        }
    
        //console.log('/////////////////////////'); 
        //console.log(sceneAdded); 
        //console.log('objectOrder')
        //console.log(objectsOrder[i])
        //console.log('i'); 
        //console.log(i); 
        //console.log('randInt')
        //console.log(randInt)
        //console.log("scenesUpTracker"); 
        //console.log(scenesUpTracker); 
        //console.log("scenesDownTracker"); 
        //console.log(scenesDownTracker); 
        //console.log("objectSceneTracker"); 
        //console.log(objectSceneTracker); 
        //console.log('/////////////////////////'); 
    }

    return scenesOrder; 
}
