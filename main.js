/**
 * Created by burak_sandiraz on 7.3.2016.
 */

function findRandomBetween(minNum, maxNum){
    if (isNaN(minNum) || isNaN(maxNum)){
        throw new Error("Only numbers can be entered");
    } else {
        var diff = maxNum - minNum;
        return (Math.floor(Math.random() * (diff + 1) + minNum));
    }

}
var randomNumber = findRandomBetween(12,15);
alert(randomNumber.toString());