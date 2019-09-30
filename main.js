//The very first thing that we do on line 1 is to create a new instance of the XMLHttpRequest object.XML stands for Extensible Markup Language, which is similar to HTML in the way it structures its data, and it's a precursor to JSON.
// XMLHttpRequest object is an inbuilt object that JavaScript provides to allow us to consume APIs. So this gives us the method to open connections, to send connections, and close them.
var xhr = new XMLHttpRequest();

//I parse in the GET() method, which is what we want to use. And then I parse in the URL, which in this case is "http://www.swapi.co/api/". And now I use xhr.send().
//Then we have the xhr.open() method, and the first argument that we parse in is "GET". Now there are several different methods that we can use to communicate with a web server. The two that you're going to use most often are GET and POST. The GET method is used when we're retrieving data from the server. This is a standard one that a browser users when retrieving a web page. POST is used when we're sending data to the server, such as an uploaded file or form data. Since in this instance we want to retrieve data from the Star Wars API, then we're going to use the GET method. The second argument is the URL that we want to retrieve. So, in this case, it's "http://swapi.co/api/". We're making a request to the Star Wars API. 
xhr.open("GET", "https://swapi.co/api/");

//And then we do xhr.send() to send the request.
xhr.send();

// onreadystatechange function. whenever the state changes of our xhr object, we want to run a check. If the ready state is equal to 4 and the status is 200, then what we want to do is use JavaScript to do document.getElementByID() and retrieve our data div. And then we're going to change the innerHTML to be equal to the response text that comes back from our xhr object.
// The main chunk of what's going on in this piece of code is in this onreadystatechange() function. The xhr object maintains an internal state as it's completing various parts of our request operation. And "readyState = 4" means that the operation has been completed. So if we go to Google and type in xhr readyState, we can see that in the Mozilla Developer Network, we have some documentation. That lists the five different states. 0 means that open() has not been called yet. 1 means that the open() method has been called. A readyState of 2 is that send() has been called. 3 means that the responseText now has some data in it. And 4, the one that we are checking for, is that the entire operation is complete. So in our code, we're checking to see that everything has completed. Then we're looking at an HTTP status code. The HTTP status code of 200 means "OK". Other common HTTP status codes can be seen here. 301 for instance, means moved permanently. 401 is "Unauthorized". 403, "Forbidden". 404, one of the most common ones that we see, is "Page not found". The page that we're looking for doesn't exist at this location. And 500, which we can often see, is "Internal server error", where something has gone wrong with the server. So the HTTP status code of 200 means "request succeeded, content delivered'. That's what we're checking for in our function here.
// So once everything is okay, we then use some JavaScript to getElementById() from the DOM and change its innerHTML to the response text that comes back from our xhr object.
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

