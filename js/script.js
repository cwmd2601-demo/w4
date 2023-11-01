// Author: <my name and student number>
// Program Purposes: display a random number between 1 to 9

    const numberElements = document.querySelectorAll('.number');
    numberElements.forEach((element) => {
        element.style.color = "red";
        element.addEventListener('click', (event) => {
            event.target.style.color = "black";
            event.target.style.backgroundColor = "grey"; 
            event.target.innerText = 1 + Math.floor(Math.random()*9);
        });
    });



