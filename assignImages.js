function assignImages() {

    var upManB_ZI = upManB_ZO = upManS_ZI = upManS_ZO = downManB_ZI = downManB_ZO = downManS_ZI = downManS_ZO = 
    upNatT_ZI = upNatT_ZO = upNatR_ZI = upNatR_ZO = downNatT_ZI = downNatT_ZO = downNatR_ZI = downNatR_ZO = 0; 
    
    for (var i =0; i <=47; i++) {
        randNum = getRandomInt(0, 1); //0 : zoomed in and 1: regular

        //basically, repeat the above code block for all categories: upManB, upManS, downManB, downManS, upNatT, upNatR, downNatT, downNatR
        //zoomed in image

        //trialOrder[i]
        if (randNum == 0) {

            
            //upManB
            if (trialOrder[i]>24 && trialOrder[i]<=30) {
                if (upManB_ZI < 3) {
                    zoomedIn.push(randNum)
                    upManB_ZI++; 
                }
                else if (upManB_ZO < 3) {
                    zoomedIn.push(randNum)
                    upManB_ZO++; 
                }
            }

            //upManS
            else if (trialOrder[i]>30 && trialOrder[i]<=36) {
                if (upManS_ZI < 3) {
                    zoomedIn.push(randNum)
                    upManS_ZI++; 
                }
                else if (upManS_ZO < 3) {
                    zoomedIn.push(randNum)
                    upManS_ZO++; 
                }
            }

            //downManB
            else if (trialOrder[i]>0 && trialOrder[i]<=6) {
                if (downManB_ZI < 3) {
                    zoomedIn.push(randNum)
                    downManB_ZI++; 
                }
                else if (downManB_ZO < 3) {
                    zoomedIn.push(randNum)
                    downManB_ZO++; 
                }
            }

            //downManS
            else if (trialOrder[i]>6 && trialOrder[i]<=12) {
                if (downManS_ZI < 3) {
                    zoomedIn.push(randNum)
                    downManS_ZI++; 
                }
                else if (downManS_ZO < 3) {
                    zoomedIn.push(randNum)
                    downManS_ZO++; 
                }
            }

            //upNatT
            else if (trialOrder[i]>42 && trialOrder[i]<=48) {
                if (upNatT_ZI < 3) {
                    zoomedIn.push(randNum)
                    upNatT_ZI++; 
                }
                else if (upNatT_ZO < 3) {
                    zoomedIn.push(randNum)
                    upNatT_ZO++; 
                }
            }

            //upNatR
            else if (trialOrder[i]>36 && trialOrder[i]<=42) {
                if (upNatR_ZI < 3) {
                    zoomedIn.push(randNum)
                    upNatR_ZI++; 
                }
                else if (upNatR_ZO < 3) {
                    zoomedIn.push(randNum)
                    upNatR_ZO++; 
                }
            }

            //downNatT
            else if (trialOrder[i]>18 && trialOrder[i]<=24) {
                if (downNatT_ZI < 3) {
                    zoomedIn.push(randNum)
                    downNatT_ZI++; 
                }
                else if (downNatT_ZO < 3) {
                    zoomedIn.push(randNum)
                    downNatT_ZO++; 
                }
            }

            //image is downNatR
            else if (trialOrder[i]>12 && trialOrder[i]<=18){
                if (downNatR_ZI < 3) {
                    zoomedIn.push(randNum)
                    downNatR_ZI++; 
                }
                else if (downNatT_ZO < 3) {
                    zoomedIn.push(randNum)
                    downNatR_ZO++; 
                }
            }
        }
    
        //regular image
        else {

            //upManB
            if (trialOrder[i]>24 && trialOrder[i]<=30) {
                if (upManB_ZO < 3) {
                    zoomedIn.push(randNum)
                    upManB_ZO++; 
                }
                else if (upManB_ZI <3) {
                    zoomedIn.push(randNum)
                    upManB_ZI++; 
                }
            }

            //upManS
            else if (trialOrder[i]>30 && trialOrder[i]<=36) {
                if (upManS_ZO < 3) {
                    zoomedIn.push(randNum)
                    upManS_ZO++; 
                }
                else if (upManS_ZI < 3) {
                    zoomedIn.push(randNum)
                    upManS_ZI++; 
                }
            }

            //downManB
            else if (trialOrder[i]>0 && trialOrder[i]<=6) {
                if (downManB_ZO < 3) {
                    zoomedIn.push(randNum)
                    downManB_ZO++; 
                }
                else if (downManB_ZI < 3) {
                    zoomedIn.push(randNum)
                    downManB_ZI++; 
                }
            }

            //downManS
            else if (trialOrder[i]>6 && trialOrder[i]<=12) {
                if (downManS_ZO < 3) {
                    zoomedIn.push(randNum)
                    downManS_ZO++; 
                }
                else if (downManS_ZI < 3) {
                    zoomedIn.push(randNum)
                    downManS_ZI++; 
                }
            }

            //upNatT
            else if (trialOrder[i]>42 && trialOrder[i]<=48) {
                if (upNatT_ZO < 3) {
                    zoomedIn.push(randNum)
                    upNatT_ZO++; 
                }
                else if (upNatT_ZI < 3) {
                    zoomedIn.push(randNum)
                    upNatT_ZI++; 
                }
            }

            //upNatR
            else if (trialOrder[i]>36 && trialOrder[i]<=42) {
                if (upNatR_ZO < 3) {
                    zoomedIn.push(randNum)
                    upNatR_ZO++; 
                }
                else if (upNatR_ZI < 3) {
                    zoomedIn.push(randNum)
                    upNatR_ZI++; 
                }
            }

            //downNatT
            else if (trialOrder[i]>18 && trialOrder[i]<=24) {
                if (downNatT_ZO < 3) {
                    zoomedIn.push(randNum)
                    downNatT_ZO++; 
                }
                else if (downNatT_ZI < 3) {
                    zoomedIn.push(randNum)
                    downNatT_ZI++; 
                }
            }

            //image is downNatR
            else if (trialOrder[i]>12 && trialOrder[i]<=18) {
                if (downNatR_ZO < 3) {
                    zoomedIn.push(randNum)
                    downNatR_ZO++; 
                }
                else if (downNatT_ZI < 3) {
                    zoomedIn.push(randNum)
                    downNatR_ZI++; 
                }
            }
        }
    }
}