//CREATING CLASSES
//creating classes:
//class decleration: class Name{}
//OR
//class expression: const Name=class{}



class BackPack{
    constructor(
        //defines parameters to be passed in:
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ){  //defines properties:
        this.name=name;
        this.volume=volume;
        this.color=color;
        this.pocketNum=pocketNum;
        this.strapLengthL={
            left:strapLengthL,
            right: strapLengthR
        };
        this.lidOpen= lidOpen;
    }
    //add methods like normal functions:
    toggleLid(lidStatus){
        this.lidOpen= lidStatus;
    }
    newStrapLength(lengthleft, lengthright){
        this.strapLength.left=lengthleft;
        this.strapLength.right=lengthright
    }
}

export {BackPack};