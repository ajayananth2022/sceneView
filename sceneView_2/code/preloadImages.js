
//the below code is copy and pasted from @Neha's code: 0A-binomials.js
/*************************
*   Pre-loading Images   *
**************************/

var imageList = [];
var imageDict = {};
var imageCounter = 0;

function makeImageList(numTrials) {
    for (var x = 1; x < numTrials + 1; x++) {
      imageList = imageList.concat('../Round3_images/Blurred_bw/object_' + x + '.jpg');
      imageList = imageList.concat('../scenes_images/scene_' + x + '.jpg');
    }
}

//////////
// image pre-loading functions
// see:
// https://codepen.io/The-Builder/pen/WvqXdV

function preloadImages(callback) {
  for (var ii = 0; ii < imageList.length; ii++) {
    preloadImage(ii);
  }
  waitForImagesToPreload(callback);
}

function waitForImagesToPreload(callback) {
  if (imageCounter < imageList.length) {
    // console.log('Checking for image preloading...');
    setTimeout(function() {waitForImagesToPreload(callback)}, 50);
  } else {
    console.log('Image preloading complete.');
    // load trial
    callback();
  }
}

function preloadImage(ii) {
  loadImage(imageList[ii]).then((img) => {
    // console.log("Preloading:", img);
    imageDict[imageList[ii]] = img;
    imageCounter++;
    pcntLoaded = Math.round(100 * (imageCounter / imageList.length));
    // console.log('Image preloading progress: ' + pcntLoaded + '%');
    // change preload text
    $('#preloadStatus').html('Image loading progress: ' + pcntLoaded + '%');
  })
}

function loadImage(src) {
  return new Promise((resolve, reject)=> {
    var img = new Image();
    img.onload = ()=> resolve(img);
    img.src = src;
  });
}