
/*==================================
BABBAGE POS AUTH ENGINE
==================================*/


function getCurrentUser(){

return JSON.parse(
localStorage.getItem(
"currentUser"
)
);

}
 const thisUser =getCurrentUser();


/*==================================
PERMISSION CHECK
==================================*/

function hasAccess(...allowedRoles){

const currentUser =
getCurrentUser();

if(!currentUser){

alert(
"Session expired. Please login again."
);

window.location =
"login.html";

return false;

}


const userAccess =

String(
currentUser.access || ""
)

.toLowerCase()

.trim();


return allowedRoles.some(

role =>

userAccess ===

String(role)

.toLowerCase()

.trim()

);

}



/*==================================
ADMIN CHECK
==================================*/

function isAdmin(){

return hasAccess(

"Administrator",
"Admin"

);

}


/*==================================
ACTION PROTECTION
==================================*/

function requirePermission(
actionText,
...allowedRoles
){

if(

!hasAccess(
...allowedRoles
)

){

alert(

`Access denied.\nYou do not have permission to ${actionText}.`

);

return false;

}

return true;

}

