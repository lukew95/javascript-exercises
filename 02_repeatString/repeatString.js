const repeatString = function(mesg, numOfTimes) {
    if (numOfTimes >= 0){
        let newMesg = ""
        for(i = 0; i < numOfTimes; i++){
            newMesg = newMesg + mesg
        }
        return newMesg
    } else {
        return "ERROR"
    }
  
};

// Do not edit below this line
module.exports = repeatString;
