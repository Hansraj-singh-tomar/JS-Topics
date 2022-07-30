function throttle(){
    document.getElementById("myid").disabled=false;
    console.log("User Clicked!!!");
}
function myThrottle(fun,d){
    return function(...args){
        document.getElementById("myid").disabled=true;
        setTimeout(() => {
            fun();
        }, d);
    }
}
const newFun = myThrottle(throttle,2000);
