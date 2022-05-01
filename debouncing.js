/*
Debouncing - 
1. Most useful concept for performance optimization by limiting function calls on different events 
(typing events, scroll event, resize event, on other keyboard / mouse events)
2. very very common frontend interview question.
3. mann lo hamne event handler kisi input par lgaya and user kuch type karta hai to vo bar bar call hota hai, 
   uss chij ko limit karne ke liye ham debouncing ka use karte hai.   

Topics =
1. keyup vs input vs change input events 
2. this.value vs e.target.value 
3. what is debouncing ?
4. what are decorator function ?
5. implement debouncing.
6. understanding debouncing in depth. 

1. keyup vs input vs change input events
ans - 


*/

// const myInput = document.getElementById("input-event");

// keyup,keypress,keydown  
// change 
// input //! this one is important in these all event  
// teeno event same work karte hai but input vala event hi hame apne project me use karna hai 

// myInput ek object hai jiske pass ek property hai and ek or property hai value 

//TODO:1
// myInput.addEventListener("input", () => {
//     // console.log("function called");
//     console.log(myInput.value);
// });

//TODO:2
// myInput.addEventListener("input", (e) => {
//     console.log(e.target.value);  // e.target means ye jo input event hai ye konse element par trigger hua hai(myInput element par trigger hua hai ) 
// });

//TODO:3
// myInput.addEventListener("input", function(e){
//     console.log(this.value);  // yha this myInput element ko point karega  
// });                           // this ki value ek object ke equal hoti hai, arrow function ke case me this ki value window object ke equal ho jati hai that's why we don't use this inside arrow function 


//TODO:4 - Let's understand debouncing
// input event ke case me jitni bar input field me value change hogi utni bar function call hoga jo ki nhi hona chahiye  
// agar user ke input field me type karne me 1sec. ka gap aa jaye uske baad hi function call ho, us case me ham use karenge debouncing

// const myInput = document.getElementById("input-event");
// function findSuggestions(e){
//     console.log("suggestions for ", e.target.value);
// }
// myInput.addEventListener('input',findSuggestions);

//TODO: Ab dekhenge debouncing kam kaise karti hai 
// debounce ek function hota hai //! Debounce ek decorator function hai 
// debounce function kehta hai mujhe tum ek function(findSuggestions) dedo or mujhe dedo delay time (1sec. = 1000ms) as a input 
// yha hame debouncing implement karne se pehle hame decorator function ke bare me pta hona chahiye.

//TODO: Decorator Function 
//! agar hame kisi function ki functionality ko bdana hai but uska code nhi change karna hai to uske liye ham decorator function ka use karenge. 
// 1. Decorator function apne andar ek function lega as a input 
// 2. Then ye apne andar ek function create kar lega and iss function ke andar jo hamne function pass kiya tha usse call kar dega and sath me kuch extra kam kar dega.
// 3. uske baad ye ek function return karega jo decorator ne kud create kiya tha, jise ham decorated function bolenge  



