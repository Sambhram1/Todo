let ctr = 1;

function addto() {
    const element = document.querySelector("input");
    const value = element.value;
    
    const node = document.createElement("div");
    node.className = 'csd-' + ctr ;
    node.innerHTML = ctr + '. ' + value + " <input class='fpp' type='checkbox' onclick='deletetodo(" + ctr + ")'>";
    node.id = 'csd'
    element.parentNode.appendChild(node);
    ctr++;
}

function deletetodo(index) {
    const element = document.querySelector(".csd-" + index);
    
    element.parentNode.removeChild(element);
    
}
