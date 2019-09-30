function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);

//  to talk about using callback functions.
//So what is a callback function?
//A good thing to remember in JavaScript is that everything is made of objects.
//And a function is also an object.
//Because of this, it can be parsed as a parameter, or argument, to another function.
//And at its simplest, that's what a callback is: a function that's parsed as a parameter to another function and executed inside that function.
//Callbacks are used a lot in JavaScript, especially in jQuery, which we'll come onto later.
//You've already seen examples of callback functions, too, when we were learning Jasmine.
//And we're going to write a callback function that will be called when our data variable contains response text.
//But why not just use timeouts like we did in our last video?
//Well, one of the problems with having to set timeouts in our code is that we'd have to tell our system to wait every time we wanted something to happen.
//And it could take different amounts of time depending on different circumstances, such as network speed.
//So let's take a look at a way we can get around that using a callback.
//So I'm going to take away my data variable, and, instead, I'm going to create a new function called "getData".
//Then I'm going to move all of the code that we use for our xhr request into that function.
//So I'll highlight it and then press ctrl+shift+B, or command+shift+B on the Mac, just to beautify our code and get the indents right.
//We can take out the "setTimeout" function here now too because we don't need it anymore.
//So I'm going to use the parameter here, the argument, of "cb".
//"cb" standing for callback, and this will be the function that we parse in.
//When I then use cb on line 9 here, that's going to actually run the function that we parse in as a callback.
//So for this to work, we need to invoke a getData method with a function.
//So let me write one here inside the parentheses. This is an anonymous function.
//And it's just going to say "console.log(data).
//So I also need to parse data in as a parameter inside the braces here.
//So when this runs, what it will do is parse itself in as a function.
//That function will be executed here with this as the data argument.
//So let's save this code now.
//And I'm just going to run it, and we'll see what happens.
//So as we can see, the data has been logged to the console, which is exactly what we would expect.
//Now the reason we don't need to set a timeout here is because we are explicitly invoking our getData function.
//We're checking to see if our readyState is 4 and the status is equal to 200.
//And at that stage, we're then invoking our callback function that we parsed through as an argument.
//So what this basically means is that when our script gets to this point, it's going to run the function that we parsed in to getData as an argument.
//And this just gives us more control within our code base.
//What we could also do instead of actually writing the function inside the brackets for getData, is we could write a separate function.
//So I'm going to create a new function called "printDataToConsole".
//Again, that's going to take in "data" as an argument.
//And as before, that's going to console.log the data.
//Now inside the brackets, when I'm calling my getData function, I'm going to parse in the "printDataToConsole" function as an argument.
//And notice I don't put the opening and closing brackets because I'm parsing in the actual function itself.
//Okay, let's try that.
//And on line 15, I have a colon instead of a semicolon. Let's just remove that.
//Run it.
//And there's our data once again.
//So as you can see, callback functions are very useful.
//They get around the problem of having to use timeouts.
//They still allow us full control over our data because they're only invoked when we actually want them to be.
//So in this unit, we've looked at how to speak to our API using JavaScript.
//We've seen how to get our response text back as a string and how to turn it into JSON format.
//We've looked at different readyStates and HTTP status codes.
//And finally, we've seen how to use both timeouts and callback functions to get our data displaying when we want it to.
//Now that we know how to get the data and how to parse it, let's start doing something useful with it.