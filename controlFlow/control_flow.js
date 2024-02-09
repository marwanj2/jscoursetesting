let userRole = "manager";
let accessLevel; 

if ( userRole === "admin") {
    accessLevel = "Full Access Granted!"
} else if (userRole === "manager") {
    accessLevel = "Limited Access Granted!"
} else {
    accessLevel = "No Access Granted! "
}

console.log("Access level: ", accessLevel)

let isLoggedin = true;
let userMessage;

if (isLoggedin) {
    if ( userRole === "admin") {
        userMessage="Welcome, Admin!"
    } else {
        userMessage="Welcome, User!"
    }
} else {
    "You need to log in to access the system"
}

console.log("User Message: ", userMessage);


let userType = "manager";
let userCategory;

switch (userType) {
    case "admin": 
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default: 
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory)