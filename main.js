//let ballElement = document.querySelector("#ball");
let ballElement = document.getElementById("ball");

document.addEventListener(
    "click",
    (event) => {
        //console.log(event.clientX + "-" + event.clientY);
        ballElement.style.transform = `translateY(${event.clientY -25}px)`;
        ballElement.style.transform += `translateX(${event.clientX -25}px)`;

        console.log(ballElement.style.transform);
    },
    false
);