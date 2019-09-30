const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            // el.innerHTML += "<p>" + item.name + "</p>";
        });

        el.innerHTML = `<table>${tableHeaders}</table>`;
    });
}

//As well as getting our films button working, what we'd really like to do is be able to display the data nicely and neatly in a table format.
//And that's what we're going to start doing in this video.
//Now in order to do this, JavaScript allows us to iterate over all of the keys.
//Remember that the data is stored in key-value pairs; keys such as "name", and values such as Luke Skywalker, Obi-Wan Kenobi, so on and so forth.
//So if I do "object.keys", and then I pass in "item" here inside our forEach loop.
//And do another forEach loop inside.
//Then I can actually iterate over each of these keys.
//And I'm going to put a function inside here again, just like we have with our first forEach loop.
//And I'm just going to "console.log" each key.
//Okay, so if I save that, go over to my browser, click on films, then you'll see that it gives me a list of all of the keys.
//And we can see that the problem is films doesn't have a key called "name".
//It has "title" instead, which becomes a problem because we're dealing specifically with a name.
//But what we want to do is use this kind of approach to iterate over the keys to build ourselves a table full of data without actually explicitly specifying a property.
//And we can allow JavaScript to do that for us.
//So we're going to create a new function called "getTableHeaders".
//And this is going to take in a single object, we'll just call it "obj".
//And then we're going to create a new array called "tableHeaders", which we're going to initialize as an empty array.
//After that, we're going to use the same code again.
//We're going to take our object and iterate over the keys.
//So we'll do a forEach function once again.
//The function inside this is going to iterate over each key and push it to our tableHeaders array.
//Now, we're not just going to push the key.
//We want this to be formatted nicely, so we're going to send in a <td> to create a new table cell.
//Then the key.
//And then we're going to close our table cell.
//And what we're going to do is add each of those to a row.
//Notice I'm using this backtick, or back quote, formation here. Those are not standard single quotes.
//This is something called a template literal, which allows us to interpolate variables and strings like this.
//Okay, so I'm going to return the tableHeaders.
//Back inside our writeToDocument function, we now need to invoke that function where we're calling our getTableHeaders.
//So once we've retrieved our data, we'll call the getTableHeaders function.
//Now we're going to pass through the first object in the array.
//And just for now, we're going to go down to the end and set the innerHTML of "el" to our table headers.
//So I'll just comment out the other one and just set the innerHTML.
//And we're going to use the template literal again to send in a table.
//And then we're going to write the tableHeaders variable in there.
//No, I actually haven't created the tableHeaders variable yet on line 32, so I'll go back and correct that in a second.
//Close the table.
//Semicolon
//And I'm going to call this "tableHeaders".
//"var tableHeaders = getTableHeaders(data[0])"
//So now if I refresh the page and click on films, we can see I have a table row that contains each of the keys from a film object.
//So that's good.
//We don't have to specify name or any of the properties that are contained in our data. It's going to build the table for us.
//In our next video, we're going to add to this table and get some more data displaying on screen.//