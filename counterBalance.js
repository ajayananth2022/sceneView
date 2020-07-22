
//counterBalance function WITH respect to up/down search task

function counterBalance() {

    var upManUp = upManDown = downManUp = downManDown = upNatUp = upNatDown = downNatUp = downNatDown = 0; 
    var randNum; 

    //Cat said this function can be greatly simplified...
        for (var i =0; i <=47; i++) {

        randNum = getRandomInt(0, 1); //0 : up search task and 1: down search task

        //console.log("i: " + i + " randNum: " + randNum);
        //console.log("upManUp: " + upManUp + " upManDown: " + upManDown + " downManUp: " + downManUp+ " downManDown: " + downManDown);
        //console.log("upNatUp: " + upNatUp + " upNatDown: " + upNatDown + " downNatUp: " + downNatUp+ " downNatDown: " + downNatDown)
        
        //current image is upMan
        if (trialOrder[i]>24 && trialOrder[i]<=36) {
            if (randNum == 0) {
                if (upManUp < 6) {
                    STDirection.push(0);
                    upManUp++;  
                    //console.log("REACHD: Up man up");
                }
                else if (upManDown < 6) {
                    STDirection.push(1); 
                    upManDown++;
                    //console.log("REACHD");

                }
            }
            else if (randNum == 1) {
                if (upManDown < 6){
                     STDirection.push(1); 
                     upManDown++; 
                     //console.log("REACHD: Up man down");
                }
                else if (upManUp < 6) {
                    STDirection.push(0); 
                    upManUp++;
                    //console.log("REACHD");

                }
            }
        }
        //current image is downMan
        else if (trialOrder[i]>0 && trialOrder[i]<=12) {
            if (randNum == 0) {
                if (downManUp < 6) {
                    STDirection.push(0);
                    downManUp++;  
                    //console.log("REACHD: Down man up");
                }
                else if (downManDown < 6) {
                    STDirection.push(1); 
                    downManDown++;
                    //console.log("REACHD");

                }
            }
            else if (randNum == 1) {
                if (downManDown < 6){
                     STDirection.push(1); 
                     downManDown++; 
                     //console.log("REACHD: Up man down");
                }
                else if (downManUp < 6) {
                    STDirection.push(0); 
                    downManUp++;
                    //console.log("REACHD");

                }
            }
        }

        //current image is upNat
        else if (trialOrder[i]>36 && trialOrder[i]<=48) {
            if (randNum == 0) {
                if (upNatUp < 6) {
                    STDirection.push(0);
                    upNatUp++;  
                    //console.log("REACHD: Down man up");
                }
                else if (upNatDown < 6) {
                    STDirection.push(1); 
                    upNatDown++;
                    //console.log("REACHD");

                }
            }
            else if (randNum == 1) {
                if (upNatDown < 6){
                     STDirection.push(1); 
                     upNatDown++; 
                     //console.log("REACHD: Up man down");
                }
                else if (upNatUp < 6) {
                    STDirection.push(0); 
                    upNatUp++;
                    //console.log("REACHD");

                }
            }
        }

        //current image is downNat
        else if (trialOrder[i]>12 && trialOrder[i]<=24) {
            if (randNum == 0) {
                if (downNatUp < 6) {
                    STDirection.push(0);
                    downNatUp++;  
                    //console.log("REACHD: Down nat up");
                }
                else if (downNatDown < 6) {
                    STDirection.push(1); 
                    downNatDown++;
                    //console.log("REACHD");

                }
            }
            else if (randNum == 1) {
                if (downNatDown < 6){
                     STDirection.push(1); 
                     downNatDown++; 
                     //console.log("REACHD: down nat down");
                }
                else if (downNatUp < 6) {
                    STDirection.push(0); 
                    downNatUp++;
                    //console.log("REACHD: Up man down");

                }
            }
        }
        //console.log("------");
    }
}