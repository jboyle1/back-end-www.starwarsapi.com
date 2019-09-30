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
        var tableRows = [];
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                dataRow.push(`<td>${item[key]}</td>`);
            });
            tableRows.push(dataRow)
        });

        el.innerHTML = `<table>${tableHeaders}</table>`;
    });
}

//In our last video, we put our table headers in place.
//Now let's start adding tabular data to the rest of our table.
//To do this, we're going to create a new row of data for every record in the array.
//So what I'm going to do at the top of my writeToDocument() function is I'm going to create a new empty array called tableRows.
//and tableRows will house each row of data for us.
//So we'll just create that as an empty array.
//And then following the table heading, I'm going to add that into a template literal here, tableRows.
//So we'll have our heading, and then we'll have rows of data.
//And now in our forEach() function here, what we need to do is create an empty array, first of all, for each individual row.
//and then we're going to iterate over our keys again.
//So using the same method as before, object.keys(item)
//Use the farEach() method.
//The function inside that is going to push each element onto our data row.
//And what I want to do is create a new 'td', or tableCell element, for each of these items.
//So we'll do that in our template literal here.
//And what we do is we have {$item}, and then we pass in [key] as the index, so this will actually get us the data that's in each individual key. Rather than just the key name itself, we'll get the value.
//Okay, so that's creating an individual row.
//When that row is created then, after it's iterated over, we need to push that row into our tableRows array.
//So let's do that now: tableRows.push().
//And we want to push dataRow into our tableRows array.
//So I'll save that.
//And let's see what we get.
//So if I click on films, it doesn't quite work there.
//That's because of the $.
//I have the $ in the wrong place.
//I just need to switch it.
//Okay, let's try that again.
//Click on films.
//And now we can see that we have the data being displayed.
//Now, it's not terribly pretty, but it's tabular data nonetheless.
//In our next video, we're going to have a look at how we can clean this up a little bit because, as we can see, it's not presented very nicely.
//But for now, it's functional.
//We'll take a look at the form in our next video.