var good = document.getElementById("good").checked;
var fast = document.getElementById('fast').checked;
var cheap = document.getElementById('cheap').checked;
function getCheckStatus(){
    good = document.getElementById("good").checked;
    fast = document.getElementById('fast').checked;
    cheap = document.getElementById('cheap').checked;
}
function goodClick() {
    getCheckStatus()
    if(cheap === true && fast === true){
        document.getElementById("cheap").checked = false;
    }
}
function fastClick(){
    getCheckStatus()
    if(cheap === true && good === true){
        document.getElementById("good").checked = false;
    }
}
function cheapClick(){
    getCheckStatus()
    if(good === true && fast === true){
        document.getElementById("fast").checked = false;
    }
}


// else if(fast === true && cheap === true){
//     document.getElementById("good").checked = false
// }else if(cheap === true && good === true){
//     document.getElementById("fast").checked = false
// }
