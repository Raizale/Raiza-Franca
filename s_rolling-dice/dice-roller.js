const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


function rollDice(n) {

    for (let index = 0; index <= n; index++) {

        let dado1 = Math.floor(Math.random() * 6 + 1);
        let dado2 = Math.floor(Math.random() * 6 + 1);
        let sum = dado1 + dado2;
        count[sum] += 1;
    }


    for (index = 2; index < count.length; index++) {

        const newElement = document.createElement("div");
        newElement.getElementById = "d1";
            
        const newText = document.createTextNode(index + ': ' + count[index]);
        newElement.appendChild(newText);
    
        const destination = document.getElementById("d1");
        destination.appendChild(newElement);
    }
   
}
rollDice(1000);



for (index = 2; index < count.length; index++) {

    const newElement = document.createElement("div");
    newElement.className = "bar";
    newElement.style.width = count[index] + "px";

    const newText = document.createTextNode(count[index]);
    newElement.appendChild(newText);

    const destination = document.getElementById("d2");
    destination.appendChild(newElement);
}





