function getData(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>
                <button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (next && !prev) {
        return `<button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (!next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
    }
}

function writeToDocument(url) {
    var tableRows = [];
    var el = document.getElementById("data");

    getData(url, function(data) {
        var pagination = "";

        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`;
    });
}

//In our last video, we saw how to get 10 rows of information being displayed.
//But what we need to do is implement some pagination in order to view the rest of the data that's being returned.
//So what I'm going to do in my wrtieToDocument() function is put an if statement.
//And if (data.next || data.previous) values exist, then we're going to generate some pagination buttons, some next and previous buttons.
//So we're going to create a function called generatePaginationButtons().
//And we're going to send in the values of data.next and data.previous.
//And I just need to create a pagination variable here as well.
//Okay, so we'll create a function now.
//That's going to be called generatePaginationButtons().
//It's going to take two arguments, next and previous.
//And what we want to do is generate next and previous buttons.
//I'm going to say that if there is a value, a URL, for both next and previous, then I'm going to return a template literal that creates a next and a previous button.
//Now we won't always have a next and a previous value.
//If we're at the beginning, then it doesn't supply a previous value. If we're at the end, it won't supply a next value.
//So we're going to create some buttons.
//We're going to give them the onclick event of writeToDocument.
//And we want it to create the URL, so we'll put previous in here.
//And then we can close our button.
//So if the next and the previous values exist, then we want to return both next and previous buttons.
//So let's just create our next button here then.
//So this will get the value of the URL for next.
//And we'll have two buttons.
//Now we're going to put an else if.
//So in this instance, our data has just returned a next button. It has not returned a previous, so we're going to use not.
//So if next, but not previous, then all we want to do is return the next button.
//Let's return that as a template literal in between our two back quotes.
//Otherwise, if we have no next button, but we only have a previous button, that must mean that we're right at the end of our data set, and so we just want to return the link to previous.
//So we'll put in previous.
//I've just noticed there that I have been putting in previous instead of prev. That needs to match the arguments that we're passing through, so let's just change those.
//And now I just need to add my new pagination variable to the end of my table, so it will be displayed.
//If I just go ahead now and refresh the screen.
//Click on people. We can see I get my next button at the end there.
//I click on it, and it's not working.
//Let's just inspect that and see why.
//This often happens with code.
//And as we can see, what's actually happening is that the URL we want is been appended onto the base URL.
//So we need to change that functionality in our writeToDocument() function.
//So what I'm going to do is to change both the JavaScript and the HTML to account for this.
//The first thing we'll do is get rid of the base URL constant.
//And now we'll pass in full URLs each time.
//So now, rather than a type, I'm going to call it URL.
//And I need to change that too in my writeToDocument(). It's URL instead of type.
//Similarly, when I run the getData() function, I need to pass in URL instead of type.
//Okay, so now I need to update my HTML code.
//Instead of just passing in the type, I'm now going to send in the full URL to our API endpoint.
//So that's http://swapi.co/api/people
//I'm going to do the same for each of these.
//Save that.
//Refresh the page again.
//Let's have a look.
//We still seem to have an issue here, so let's inspect again.
//And type is not defined at main.js line 4.
//We can see that I'm still sending in the type here. We don't need that anymore. It literally is just a URL that we need, so I can get rid of that.
//So now I'll refresh my page.
//And there we go.
//My next button works.
//Just close that.
//So the next button works.
//We can go right to the end of our data set.
//The previous button works.
//And there we have it.
//Pagination is working for all of the different types of data that we have.
//There are still a few loose ends that need to be tied up, though, before this project is complete.
//So we'll do that in our next video.