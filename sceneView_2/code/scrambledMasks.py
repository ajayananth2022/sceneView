from PIL import Image
import random
import os


#parameter: takes in number of squares horizontally, and vertically.
def createRandomizedList(numSquaresHoriz, numSquaresVert):

    randList = list(range(1, numSquaresHoriz * numSquaresVert + 1))
    random.shuffle(randList)
    return randList

def findX(squareNum, numSquaresHoriz): 
    #edge case where x coord is at rightmost edge of image
    if (squareNum % numSquaresHoriz == 0):
        return numSquaresHoriz
    else: 
        return squareNum % numSquaresHoriz

def findY(squareNum, numSquaresHoriz): 

    #edge case of finding y coord when x coord is at the rightmost edge of image
    if (squareNum % numSquaresHoriz == 0): 
        return (squareNum // numSquaresHoriz)
    else: 
        return (squareNum // numSquaresHoriz) + 1

#parameter: current 'position' square of scrambled Image to be filled in. 
#returns: cropped image of a random 'position' of the original, determined by shuffledSquaresList
def randSquareCrop(im, shuffledSqList, curIter, numSquaresHoriz, squareLength): 
    squareToCrop = shuffledSqList[curIter - 1]

    xCoor = findX(squareToCrop, numSquaresHoriz)
    yCoor = findY(squareToCrop, numSquaresHoriz)

    horPos = (xCoor-1) * squareLength
    vertPos = (yCoor - 1) * squareLength

    croppedIm =  im.crop((horPos, vertPos, horPos + squareLength, vertPos + squareLength))

    #in addition to shuffling the 'squares', lets rotate the 'squares' randomly at either 0, 90, 180, or 270 degrees
    randNum = random.randint(0,3)
    return croppedIm.rotate(randNum * 90)
    
def main(): 

    # path of the folder containing the raw images 
    inPath ="/Users/ajayananthakrishnan/Documents/sceneView/sceneView_2/scenes_images"
  
    # path of the folder that will contain the scrambled images (masks)
    outPath ="/Users/ajayananthakrishnan/Documents/sceneView/sceneView_2/scenes_images_scrambled"


    for imagePath in os.listdir(inPath): 

        #apparently os.listdir() gives you every single file in directory including hidden .DS files, which we need to ignore in this case
        if  imagePath.startswith('.'):
            continue

        inputPath = os.path.join(inPath, imagePath) 
        im = Image.open(inputPath) 
        #im = Image.open("/Users/ajayananthakrishnan/Documents/sceneView/sceneView_2/scenes_images/scene_1.jpg")


        scrambledImage = Image.new('RGB', (600, 400))

        #how big each 'pixel' is going to be
        #smaller squareLength = more 'finely' scrambled
        squareLength = 20

        numSquaresHoriz = 600 // squareLength
        numSquaresVert = 400 // squareLength

        shuffledSquaresList = createRandomizedList(numSquaresHoriz, numSquaresVert)

        #for every row
        for i in range(1,numSquaresVert + 1): 
            #for every column
            for j in range (1,numSquaresHoriz + 1): 
                shuffledSqIm = randSquareCrop(im, shuffledSquaresList, numSquaresHoriz * (i - 1) + j, numSquaresHoriz, squareLength)
                scrambledImage.paste(shuffledSqIm, ((j - 1) * squareLength, (i - 1) * squareLength))


        fullOutPath = os.path.join(outPath, 'mask_'+imagePath)
        scrambledImage.save(fullOutPath)

main()