const opt1 = document.getElementById("Edu-head");
const ans1 = document.getElementById("Education-list");
let arr1 = false;
opt1.addEventListener('click', () => {
    // console.log(x)
    if (arr1 == false) {
        ans1.setAttribute("style", "display: block");
        opt1.setAttribute("style", "border-bottom: 2px solid white");
    }
    else {
        ans1.setAttribute("style", "display: none");
        opt1.setAttribute("style", "border-bottom:none");
    }
    arr1 = ~arr1;
})


const opt2 = document.getElementById("Skill-head");
const ans2 = document.getElementById("Skill-list");
let arr2 = false;
opt2.addEventListener('click', () => {
    // console.log(x)
    if (arr2 == false) {
        ans2.setAttribute("style", "display: flex");
        opt2.setAttribute("style", "border-bottom: 2px solid white");
    }
    else {
        ans2.setAttribute("style", "display: none");
        opt2.setAttribute("style", "border-bottom:none");
    }
    arr2 = ~arr2;
})


const opt3 = document.getElementById("Project-head");
const ans3 = document.getElementById("Project-list");
let arr3 = false;
opt3.addEventListener('click', () => {
    // console.log(x)
    if (arr3 == false) {
        ans3.setAttribute("style", "display: block");
        opt3.setAttribute("style", "border-bottom: 2px solid white");
    }
    else {
        ans3.setAttribute("style", "display: none");
        opt3.setAttribute("style", "border-bottom:none");
    }
    arr3 = ~arr3;
})


const opt4 = document.getElementById("Achievements-head");
const ans4 = document.getElementById("Achievement-list");
let arr4 = false;
opt4.addEventListener('click', () => {
    // console.log(x)
    if (arr4 == false) {
        ans4.setAttribute("style", "display: block");
        opt4.setAttribute("style", "border-bottom: 2px solid white");
    }
    else {
        ans4.setAttribute("style", "display: none");
        opt4.setAttribute("style", "border-bottom:none");
    }
    arr4 = ~arr4;
})


const opt5 = document.getElementById("Profiles-head");
const ans5 = document.getElementById("Profile-list");
let arr5 = false;
opt5.addEventListener('click', () => {
    // console.log(x)
    if (arr5 == false) {
        ans5.setAttribute("style", "display: block");
        opt5.setAttribute("style", "border-bottom: 2px solid white");
    }
    else {
        ans5.setAttribute("style", "display: none");
        opt5.setAttribute("style", "border-bottom:none");
    }
    arr5 = ~arr5;
})
