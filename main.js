/**
 * Created by burak_sandiraz on 7.3.2016.
 */
var questions = [
    ["Capital city of Turkey", "ankara"],
    ["Capital city of England", "london"],
    ["Capital city of France", "paris"],
    ["Capital city of Italy", "rome"]
];
var trueQuests = [];
var falseQuests = [];

function printHTML(){
    var htmlTxt = "<p>You got " + trueQuests.length +" question(s) right</p>";
    htmlTxt += "<ol>";
    for (var i = 0; i<trueQuests.length; i++){
        htmlTxt += "<li>"+ questions[trueQuests[i]][0] +"</li>"
    }
    htmlTxt += "</ol>";
    htmlTxt += "<p>You got " + falseQuests.length +" question(s) false</p>";
    htmlTxt += "<ol>";
    for (var j = 0; j<falseQuests.length; j++){
        htmlTxt += "<li>"+ questions[falseQuests[j]][0] +"</li>"
    }
    htmlTxt += "</ol>";
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = htmlTxt;
}

for (var i = 0; i<questions.length; i++){
    var answer = prompt (questions[i][0]);
    if (answer.toLowerCase() === questions[i][1]){
        trueQuests.push(i);
    }else {
        falseQuests.push(i);
    }
}

printHTML();
