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


let isAuthentificated = true;
let authentificationStatus = isAuthentificated ? "Authentificated" : "Not Authentificated";

console.log(authentificationStatus);

let organization_role = "Employee";
let authorization;
let one_on_one_interaction = false;

switch (organization_role) {
    case "Employee":
        authorization = "Dietary Services";
        break;
    case "Enrolled Member":
        authorization = "Dietary Services";
        one_on_one_interaction = true;
        break;
    case "Subscriber":
        authorization = "Partial access only!";
        break;
    default:
        authorization = "Entroll or at least subscribe first to avail this facility";
        
}

console.log(organization_role, " : ", authorization, " . ", one_on_one_interaction)