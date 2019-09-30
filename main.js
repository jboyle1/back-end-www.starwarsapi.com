// XMLHttpRequest object is an inbuilt object that JavaScript provides to allow us to consume APIs. So this gives us the method to open connections, to send connections, and close them.
var xhr = new XMLHttpRequest();

// onreadystatechange function. whenever the state changes of our xhr object, we want to run a check. If the ready state is equal to 4 and the status is 200, then what we want to do is use JavaScript to do document.getElementByID() and retrieve our data div. And then we're going to change the innerHTML to be equal to the response text that comes back from our xhr object.
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

//I parse in the GET() method, which is what we want to use. And then I parse in the URL, which in this case is "http://www.swapi.co/api/". And now I use xhr.send().
xhr.open("GET", "https://swapi.co/api/");

xhr.send();