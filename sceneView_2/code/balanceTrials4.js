
//TODO: write a description!


function balanceTrials(versionNum) {


    //UP scenes AND UP objects are ALWAYS numbered 1 through 10. 

    //DOWN scenes AND DOWN objects are ALWAYS numbered 11 through 20. 



    var upScenes = shuffle([1,2,3,4,5,6,7,8,9,10]);
    var downScenes = shuffle([11,12,13,14,15,16,17,18,19,20]);

    var upScene_set1 = []; 
    var upScene_set2 = []; 

    var downScene_set1 = []; 
    var downScene_set2 = []; 

    var TRIAL_LENGTH = 20; 

    for (var i=0;i<TRIAL_LENGTH;i++) {

        //when TRIAL_LENGTH is less than 11, we are on UP objects

        if (i <5) {
            upScene_set1.push(upScenes[i]);
        } else if (i < 10) {
            upScene_set2.push(upScenes[i]);
        } else if (i < 15) {
            downScene_set1.push(downScenes[i - 10]);
        } else {
            downScene_set2.push(downScenes[i - 10]);
        }
    }

    console.log(upScene_set1); 
    console.log(upScene_set2); 
    console.log(downScene_set1); 
    console.log(downScene_set2); 

    var v1Scenes = []; 
    var v2Scenes = []; 

    for (var i=0;i<TRIAL_LENGTH;i++) {


        if (i <5) {
            v1Scenes.push(upScene_set1[i]);
            v2Scenes.push(downScene_set1[i]); 
        } 
        else if (i < 10) {
            v1Scenes.push(downScene_set1[i - 5]);
            v2Scenes.push(upScene_set1[i - 5]); 
        }
        else if (i < 15) {
            v1Scenes.push(upScene_set2[i - 10]);
            v2Scenes.push(downScene_set2[i - 10]); 
        }
        else if (i < 20) {
            v1Scenes.push(downScene_set2[i - 15]);
            v2Scenes.push(upScene_set2[i - 15]); 
        }
    }

    //console.log(v1Scenes); 
    //console.log(v2Scenes); 

    var v1Orders = [];
    var v2Orders = [];

    for (var i = 0; i <= 19; i++) {
        v1Orders.push([i + 1, v1Scenes[i]]); 
        v2Orders.push([i + 1, v2Scenes[i]]); 
    }

    if (versionNum == 1) {
        return v1Orders; 
    }
    return v2Orders; 
}
