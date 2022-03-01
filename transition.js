var parentdiv = document.getElementById("container");

function myTransition(oldID, newID){
    oldDIV = document.getElementById("page-"+oldID);
    newDIV = document.getElementById("page-"+newID);
    thisDIV = document.getElementById("container");
    toolbox = document.getElementsByClassName("tooltip-box");
    oldDIV.style.transition = "opacity 1s";
    oldDIV.style.opacity = "0";
    newDIV.style.opacity = "1";
    newDIV.style.transition = "transform 1s";
    newDIV.style.transform = "scaleX(1)";
}

function myFadein(ID){
    myDIV = document.getElementById("page-"+ID);
    myDIV.style.opacity = "1";
}

function connectNode(pageID, nodeA, nodeB) {
    thisDIV = document.getElementById(pageID);

    if (nodeA === "node-1-c" && nodeB === "node-2-a") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 29.5vw; position: absolute; top: -8vw; left: 28.6vw; transform: rotate(80deg); background-color: green;'></div>";
    }
    if (nodeA === "node-1-c" && nodeB === "node-3-a") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 32vw; position: absolute; top: -5vw; left: 28.8vw; transform: rotate(68deg); background-color: green;'></div>";
    }
    if (nodeA === "node-1-c" && nodeB === "node-2-b") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.8vw; position: absolute; top: 1.8vw; left: 39.1vw; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-1-c" && nodeB === "node-3-b") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 15.5vw; position: absolute; top: 3vw; left: 40vw; transform: rotate(45deg); background-color: green;'></div>";
    }
    if (nodeA === "node-1-c" && nodeB === "node-2-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 3vw; position: absolute; top: 5.2vw; left: 50vw; background-color: green;'></div>";
    }
    if (nodeA === "node-1-c" && nodeB === "node-3-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 11vw; position: absolute; top: 5.2vw; left: 50vw; background-color: green;'></div>";
    }
    if (nodeA === "node-1-c" && nodeB === "node-2-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 9.1vw; position: absolute; top: 2.4vw; left: 60vw; transform: rotate(115deg); background-color: green;'></div>";
    }
    if (nodeA === "node-1-c" && nodeB === "node-3-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 15.5vw; position: absolute; top: 3vw; left: 60vw; transform: rotate(135deg); background-color: green;'></div>";
    }
    if (nodeA === "node-1-c" && nodeB === "node-2-e") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 29.5vw; position: absolute; top: -8vw; left: 70.5vw; transform: rotate(100deg); background-color: green;'></div>";
    }
    if (nodeA === "node-1-c" && nodeB === "node-3-e") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 32vw; position: absolute; top: -5vw; left: 70vw; transform: rotate(112deg); background-color: green;'></div>";
    }
    if (nodeA === "node-1-c" && nodeB === "node-4-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 19vw; position: absolute; top: 5.2vw; left: 50vw; background-color: green;'></div>";
    }
    if (nodeA === "node-1-c" && nodeB === "node-4-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 22vw; position: absolute; top: 4vw; left: 59vw; transform: rotate(150deg); background-color: green;'></div>";
    }

    if (nodeA === "node-2-a" && nodeB === "node-2-b") {
        thisDIV.innerHTML += "<div style = 'width: 8.2vw; height: 0.35vw; position: absolute; top: 10.6vw; left: 14.2vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-b" && nodeB === "node-2-a-1") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.5vw; position: absolute; top: 3vw; left: 18.2vw; transform: rotate(105deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-b" && nodeB === "node-2-a-2") {
        thisDIV.innerHTML += "<div style = 'width: 8.2vw; height: 0.35vw; position: absolute; top: 10.6vw; left: 14.2vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-b" && nodeB === "node-2-a-3") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.5vw; position: absolute; top: 10vw; left: 18.2vw; transform: rotate(75deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-b" && nodeB === "node-5-a") {
        thisDIV.innerHTML += "<div style = 'width: 21vw; height: 0.35vw; position: absolute; top: 22.5vw; left: 7.5vw; transform: rotate(120deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-b" && nodeB === "node-3-b") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 3vw; position: absolute; top: 13.2vw; left: 28.5vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-b" && nodeB === "node-5-b") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 19vw; position: absolute; top: 13.2vw; left: 28.5vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-b" && nodeB === "node-2-c") {
        thisDIV.innerHTML += "<div style = 'width: 8.2vw; height: 0.35vw; position: absolute; top: 10.6vw; left: 35.1vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-c" && nodeB === "node-3-a") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 30vw; position: absolute; top: 90px; left: 375px; transform: rotate(75deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-c" && nodeB === "node-5-a") {
        thisDIV.innerHTML += "<div style = 'width: 385px; height: 0.35vw; position: absolute; top: 330px; left: 180px; transform: rotate(135deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-c" && nodeB === "node-3-b") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.8vw; position: absolute; top: 9.8vw; left: 39.1vw; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-c" && nodeB === "node-5-b") {
        thisDIV.innerHTML += "<div style = 'width: 21vw; height: 0.35vw; position: absolute; top: 22.5vw; left: 28.5vw; transform: rotate(120deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-c" && nodeB === "node-3-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 3vw; position: absolute; top: 13.2vw; left: 50vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-c" && nodeB === "node-5-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 19vw; position: absolute; top: 13.2vw; left: 50vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-c" && nodeB === "node-2-d") {
        thisDIV.innerHTML += "<div style = 'width: 8.2vw; height: 0.35vw; position: absolute; top: 10.6vw; left: 56.2vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-c" && nodeB === "node-3-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 9.1vw; position: absolute; top: 10.3vw; left: 60.1vw; transform: rotate(115deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-c" && nodeB === "node-3-e") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 30vw; position: absolute; top: 90px; left: 71vw; transform: rotate(105deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-c" && nodeB === "node-2-e") {
        thisDIV.innerHTML += "<div style = 'width: 29vw; height: 0.35vw; position: absolute; top: 10.6vw; left: 56.4vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-d" && nodeB === "node-3-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 9.1vw; position: absolute; top: 10.2vw; left: 60.1vw; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-d" && nodeB === "node-5-c") {
        thisDIV.innerHTML += "<div style = 'width: 21vw; height: 0.35vw; position: absolute; top: 22.5vw; left: 50vw; transform: rotate(120deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-d" && nodeB === "node-3-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 3vw; position: absolute; top:13.2vw; left: 71vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-d" && nodeB === "node-4-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 11vw; position: absolute; top:13.2vw; left: 71vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-d" && nodeB === "node-2-e") {
        thisDIV.innerHTML += "<div style = 'width: 8.2vw; height: 0.35vw; position: absolute; top: 10.6vw; left: 77.2vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-b" && nodeB === "node-3-a") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.8vw; position: absolute; top: 9.8vw; left: 18.1vw; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-b" && nodeB === "node-3-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.8vw; position: absolute; top: 9.8vw; left: 39.1vw; transform: rotate(115deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-d" && nodeB === "node-3-e") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 9.1vw; position: absolute; top: 10.6vw; left: 81vw; transform: rotate(115deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-e" && nodeB === "node-3-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.8vw; position: absolute; top: 9.8vw; left: 81vw; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-e" && nodeB === "node-4-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 15.5vw; position: absolute; top: 175px; left: 880px; transform: rotate(35deg); background-color: green;'></div>";
    }
    if (nodeA === "node-2-e" && nodeB === "node-3-e") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 3vw; position: absolute; top: 13.2vw; left: 92vw; background-color: green;'></div>";
    }
    if (nodeA === "node-2-e" && nodeB === "node-5-e") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 19vw; position: absolute; top: 13.2vw; left: 990px; background-color: green;'></div>";
    }

    if (nodeA === "node-3-a" && nodeB === "node-3-b") {
        thisDIV.innerHTML += "<div style = 'width: 8.2vw; height: 0.35vw; position: absolute; top: 18.6vw; left: 14.2vw; background-color: green;'></div>";
    }
    if (nodeA === "node-3-a" && nodeB === "node-3-c") {
        thisDIV.innerHTML += "<div style = 'width: 29vw; height: 0.35vw; position: absolute; top: 18.6vw; left: 255px; background-color: green;'></div>";
    }
    if (nodeA === "node-3-b" && nodeB === "node-5-a") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 15.5vw; position: absolute; top: 19vw; left: 20vw; transform: rotate(45deg); background-color: green;'></div>";
    }
    if (nodeA === "node-3-b" && nodeB === "node-4-b") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 3vw; position: absolute; top: 21.2vw; left: 28.5vw; background-color: green;'></div>";
    }
    if (nodeA === "node-3-b" && nodeB === "node-3-c") {
        thisDIV.innerHTML += "<div style = 'width: 8.2vw; height: 0.35vw; position: absolute; top: 18.6vw; left: 35.1vw; background-color: green;'></div>";
    }
    if (nodeA === "node-3-b" && nodeB === "node-5-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 15.5vw; position: absolute; top: 19vw; left: 40vw; transform: rotate(135deg); background-color: green;'></div>";
    }
    if (nodeA === "node-3-c" && nodeB === "node-4-b") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.8vw; position: absolute; top: 17.8vw; left: 39.1vw; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-3-c" && nodeB === "node-5-b") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 15.5vw; position: absolute; top: 19vw; left: 40vw; transform: rotate(45deg); background-color: green;'></div>";
    }
    if (nodeA === "node-3-c" && nodeB === "node-4-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 3vw; position: absolute; top: 21.2vw; left: 50vw; background-color: green;'></div>";
    }
    if (nodeA === "node-3-c" && nodeB === "node-5-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 11vw; position: absolute; top: 21.2vw; left: 50vw; background-color: green;'></div>";
    }
    if (nodeA === "node-3-c" && nodeB === "node-3-d") {
        thisDIV.innerHTML += "<div style = 'width: 8.2vw; height: 0.35vw; position: absolute; top: 18.6vw; left: 56.2vw; background-color: green;'></div>";
    }
    if (nodeA === "node-3-c" && nodeB === "node-4-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 9.1vw; position: absolute; top: 18.4vw; left: 60vw; transform: rotate(115deg); background-color: green;'></div>";
    }
    if (nodeA === "node-3-c" && nodeB === "node-5-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 15.5vw; position: absolute; top: 19vw; left: 60vw; transform: rotate(135deg); background-color: green;'></div>";
    }
    if (nodeA === "node-3-d" && nodeB === "node-4-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 3vw; position: absolute; top: 21.2vw; left: 71vw; background-color: green;'></div>";
    }
    if (nodeA === "node-3-d" && nodeB === "node-3-e") {
    }
    if (nodeA === "node-3-b" && nodeB === "node-3-a-1") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.5vw; position: absolute; top: 11vw; left: 18.2vw; transform: rotate(105deg); background-color: green;'></div>";
    }
    if (nodeA === "node-3-b" && nodeB === "node-3-a-2") {
        thisDIV.innerHTML += "<div style = 'width: 8.2vw; height: 0.35vw; position: absolute; top: 18.6vw; left: 14.2vw; background-color: green;'></div>";
    }
    if (nodeA === "node-3-b" && nodeB === "node-3-a-3") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.5vw; position: absolute; top: 18vw; left: 18.2vw; transform: rotate(75deg); background-color: green;'></div>";
    }
    if (nodeA === "node-3-b" && nodeB === "node-4-a") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.8vw; position: absolute; top: 17.8vw; left: 18.1vw; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-3-b" && nodeB === "node-5-b") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 11vw; position: absolute; top: 21.2vw; left: 28.5vw; background-color: green;'></div>";
    }
    if (nodeA === "node-3-d" && nodeB === "node-4-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 8.8vw; position: absolute; top: 17.8vw; left: 60vw; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-3-e" && nodeB === "node-4-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 9.1vw; position: absolute; top: 18.6vw; left: 880px; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-3-e" && nodeB === "node-5-e") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 11vw; position: absolute; top: 21.2vw; left: 990px; background-color: green;'></div>";
    }

    if (nodeA === "node-4-a" && nodeB === "node-4-b") {
//        thisDIV.innerHTML += " <svg width='1000' height='600'><line x1='255' y1='395' x2 = '295' y2='395' stroke='green' stroke-width='4'></svg>";
    }
    if (nodeA === "node-4-a" && nodeB === "node-4-c") {
        thisDIV.innerHTML += "<div style = 'width: 29vw; height: 0.35vw; position: absolute; top: 26.6vw; left: 14.2vw; background-color: green;'></div>";
    }
    if (nodeA === "node-4-b" && nodeB === "node-5-a") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 9.1vw; position: absolute; top: 26.4vw; left: 18.2vw; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-4-b" && nodeB === "node-5-b") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 3vw; position: absolute; top: 29.2vw; left: 28.5vw; background-color: green;'></div>";
    }
    if (nodeA === "node-4-b" && nodeB === "node-4-c") {
//        thisDIV.innerHTML += " <svg width='1000' height='600'><line x1='455' y1='395' x2 = '495' y2='395' stroke='green' stroke-width='4'></svg>";
    }
    if (nodeA === "node-4-c" && nodeB === "node-5-b") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 9.1vw; position: absolute; top: 26.3vw; left: 39.1vw; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-4-c" && nodeB === "node-5-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 3vw; position: absolute; top: 29.2vw; left: 50vw; background-color: green;'></div>";
    }
    if (nodeA === "node-4-c" && nodeB === "node-4-d") {
        thisDIV.innerHTML += "<div style = 'width: 8.2vw; height: 0.35vw; position: absolute; top: 26.6vw; left: 56.2vw; background-color: green;'></div>";
    }
    if (nodeA === "node-4-c" && nodeB === "node-5-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 9.1vw; position: absolute; top: 26.3vw; left: 60.1vw; transform: rotate(115deg); background-color: green;'></div>";
    }
    if (nodeA === "node-4-d" && nodeB === "node-5-c") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 9.1vw; position: absolute; top: 26.6vw; left: 55.2vw; transform: rotate(65deg); background-color: green;'></div>";
    }
    if (nodeA === "node-4-d" && nodeB === "node-5-d") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 3vw; position: absolute; top: 29.2vw; left: 71vw; background-color: green;'></div>";
    }
    if (nodeA === "node-4-d" && nodeB === "node-4-e") {
//        thisDIV.innerHTML += " <svg width='1000' height='600'><line x1='855' y1='395' x2 = '895' y2='395' stroke='green' stroke-width='4'></svg>";
        thisDIV.innerHTML += "<div style = 'width: 8.2vw; height: 0.35vw; position: absolute; top: 26.6vw; left: 875px; background-color: green;'></div>";
    }
    if (nodeA === "node-4-d" && nodeB === "node-5-e") {
        thisDIV.innerHTML += "<div style = 'width: 0.35vw; height: 9.1vw; position: absolute; top: 26.6vw; left: 81vw; transform: rotate(115deg); background-color: green;'></div>";
    }

    if (nodeA === "node-5-a" && nodeB === "node-5-b") {
//        thisDIV.innerHTML += " <svg width='1000' height='600'><line x1='255' y1='515' x2 = '295' y2='515' stroke='green' stroke-width='4'></svg>";
    }
    if (nodeA === "node-5-b" && nodeB === "node-5-c") {
//        thisDIV.innerHTML += " <svg width='1000' height='600'><line x1='455' y1='515' x2 = '495' y2='515' stroke='green' stroke-width='4'></svg>";
    }
    if (nodeA === "node-5-c" && nodeB === "node-5-d") {
//        thisDIV.innerHTML += " <svg width='1000' height='600'><line x1='655' y1='515' x2 = '695' y2='515' stroke='green' stroke-width='4'></svg>";
    }
    if (nodeA === "node-5-d" && nodeB === "node-5-e") {
//        thisDIV.innerHTML += " <svg width='1000' height='600'><line x1='855' y1='515' x2 = '895' y2='515' stroke='green' stroke-width='4'></svg>";
    }
    if (nodeA === "node-5-c" && nodeB === "node-5-e") {
        thisDIV.innerHTML += "<div style = 'width: 29vw; height: 0.35vw; position: absolute; top: 515px; left: 55.2vw; background-color: green;'></div>";
    }
}