

function counterBalance() {

    var upManUp = upManDown = downManUp = downManDown = upNatUp = upNatDown = downNatUp = downNatDown = 0; 
    var randNum; 

    //didn't Cat say this function can be greatly simplified...
    for (var i =0; i <=39; i++) {

        randNum = getRandomInt(0, 1); //0 : up search task and 1: down search task

        //console.log("i: " + i + " randNum: " + randNum);
        //console.log("upManUp: " + upManUp + " upManDown: " + upManDown + " downManUp: " + downManUp+ " downManDown: " + downManDown);
        //console.log("upNatUp: " + upNatUp + " upNatDown: " + upNatDown + " downNatUp: " + downNatUp+ " downNatDown: " + downNatDown)
        
        //current image is upMan
        if (trialOrder[i]>20 && trialOrder[i]<=30) {
            if (randNum == 0) {
                if (upManUp < 5) {
                    STDirection.push(0);
                    upManUp++;  
                    //console.log("REACHD: Up man up");
                }
                else if (upManDown < 5) {
                    STDirection.push(1); 
                    upManDown++;
                }
            }
            else if (randNum == 1) {
                if (upManDown < 5){
                     STDirection.push(1); 
                     upManDown++; 
                     //console.log("REACHD: Up man down");
                }
                else if (upManUp < 5) {
                    STDirection.push(0); 
                    upManUp++;
                }
            }
        }
        //current image is downMan
        else if (trialOrder[i]>0 && trialOrder[i]<=10) {
            if (randNum == 0) {
                if (downManUp < 5) {
                    STDirection.push(0);
                    downManUp++;  
                    //console.log("REACHD: Down man up");
                }
                else if (downManDown < 5) {
                    STDirection.push(1); 
                    downManDown++;
                }
            }
            else if (randNum == 1) {
                if (downManDown < 5){
                     STDirection.push(1); 
                     downManDown++; 
                     //console.log("REACHD: Up man down");
                }
                else if (downManUp < 5) {
                    STDirection.push(0); 
                    downManUp++;
                }
            }
        }
        //current image is upNat
        else if (trialOrder[i]>30 && trialOrder[i]<=40) {
            if (randNum == 0) {
                if (upNatUp < 5) {
                    STDirection.push(0);
                    upNatUp++;  
                    //console.log("REACHD: Down man up");
                }
                else if (upNatDown < 5) {
                    STDirection.push(1); 
                    upNatDown++;
                }
            }
            else if (randNum == 1) {
                if (upNatDown < 5){
                     STDirection.push(1); 
                     upNatDown++; 
                     //console.log("REACHD: Up man down");
                }
                else if (upNatUp < 5) {
                    STDirection.push(0); 
                    upNatUp++;
                }
            }
        }
        //current image is downNat
        else if (trialOrder[i]>10 && trialOrder[i]<=20) {
            if (randNum == 0) {
                if (downNatUp < 5) {
                    STDirection.push(0);
                    downNatUp++;  
                    //console.log("REACHD: Down man up");
                }
                else if (downNatDown < 5) {
                    STDirection.push(1); 
                    downNatDown++;
                }
            }
            else if (randNum == 1) {
                if (downNatDown < 5){
                     STDirection.push(1); 
                     downNatDown++; 
                     //console.log("REACHD: Up man down");
                }
                else if (downNatUp < 5) {
                    STDirection.push(0); 
                    downNatUp++;
                }
            }
        }
        //console.log("------");
    }
}