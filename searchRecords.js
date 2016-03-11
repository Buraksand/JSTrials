/**
 * Created by burak_sandiraz on 10.3.2016.
 */

function printHTML(htmlText){
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = htmlText;
}

while (true){
    var search = prompt("find").toLowerCase();
    if (search == "quit"){
        break;
    } else {
        var htm = "";
        var isResultFound = false;
        for (var i = 0; i< students.length; i++){
            if (students[i].name.toLowerCase() == search){
                isResultFound = true;
                htm += "<h3><b>Name: "+students[i].name+"</b></h3>";
                htm += "<p>Track: "+students[i].track +"</p>";
                htm += "<p>Achievements: "+students[i].achievements +"</p>";
                htm += "<p>Points: "+students[i].points +"</p>";
                //in case of more than one occurrances of a name, loop is not broken
                //break;
            }
            console.log(students[i].name);
        }
        if (!isResultFound){
            htm += "<p>No results found</p>";
        }
        printHTML(htm);
    }
}