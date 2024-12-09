let flechas = Array.from(document.getElementsByClassName("flecha"));

flechas.forEach(flecha => {
    flecha.onclick = function () {
        
        let pai = document.getElementById("pai")
        pai.classList.toggle("mudança")
    };
});
