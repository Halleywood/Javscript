class Book{
    constructor(
        title,
        coverColor,
        numberOfPages,
        type,
        dateStarted,
        status
    ){
        this.title= title;
        this.coverColor= coverColor;
        this.numberOfPages = numberOfPages;
        this.type = type    
        this.dateStarted = dateStarted
        this.status = status
    }
    daysRead(){
        let now = new Date();
        let started = new Date(this.dateStarted)
        let secondsReading = now - started
        let daysReading= secondsReading/ (1000*3600*24)
        return daysReading
    }
    doneReading(newStatus){
        this.status = newStatus
    }
}


export {Book};