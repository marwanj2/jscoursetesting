let count = 0; // initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // display the count 
    checkCountValue(); // check the count value and display message
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count; // display the count in the html
}

function checkCountValue() {
    if (count === 10) alert("Your Instagram post gained 10 followers! congrats!");
    else if (count ===20) alert("You instagram gained 20 followers!")
}