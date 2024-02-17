let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // setting the test text
    document.getElementById('inputText').value = testText;

    // reset the result and time;
    document.getElementById('output').value = "";
    startTime = new Date().getTime();

    // change button text and functionality
    var button = document.getElementById('btn');
    button.innerHTML = "End Test";
    button.onclick = endTest;

}

function endTest() {
    endTime = new Date().getTime();
    // disable user input
    document.getElementById('userInput').readOnly = true;

    // calculate time elapsed and words per minute(wpm)
    var timeElapsed = (endTime - startTime) / 1000 // in seconds
    var userTypedText = document.getElementById('userInput').value;

    // split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;

    var wpm = 0; // default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed)*60);
    }

    // Display the results;
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<h2>Typing test Results:</h2>"+"<p>Words Typed: "+typedWords+"</p>"
    +"<p>Time Elapsed: "+timeElapsed.toFixed(2)+" Seconds</p>"
    +"<p>Words Per Minute(wpm): "+wpm+"</p>"

    // reset the button
    var button = document.getElementById('btn');
    button.innerHTML = 'Start Test';
    button.onclick = startTest;
}