var movies = new XMLHttpRequest ();
var display = document.getElementById("result");
var movieData;
var output = "";

movies.open("GET", "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD", true);
movies.send();

movies.onreadystatechange = function () {
    if (movies.readyState === 4 && movies.status === 200){
        movieData = (JSON.parse(movies.responseText).data);
        movieData.forEach(checkLocation);
        display.innerHTML = output;
    }
}


console.log(movieData);
 function checkLocation (element, index, array) {
     if (element[10] === "Golden Gate Bridge") {
         output += "<p>Title: </p>" + element[8];
         output += " <p>Release year:</p> " + element[9];
         output += " <p>Production company: </p>" + element[12] + "</br>";
     }

 }
