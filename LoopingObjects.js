/**
 * Created by burak_sandiraz on 10.3.2016.
 */

function printHTML(htmlText){
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = htmlText;
}

function buildHTML(arr){
    var htm = "";
    for (var i=0; i<arr.length; i++){
        htm += "<h3><b>Name: "+arr[i].name+"</b></h3>";
        htm += "<p>Track: "+arr[i].track +"</p>";
        htm += "<p>Achievements: "+arr[i].achievements +"</p>";
        htm += "<p>Points: "+arr[i].points +"</p>";

    }
    printHTML(htm);
}

buildHTML(students);