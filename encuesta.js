let votos = {
    diseno: 0,
    js: 0,
    bd: 0
};

let totalVotos = 0;

function votar(opcion) {

    votos[opcion]++;
    totalVotos++;


    alert("¡Gracias por tu voto!");

    document.getElementById(`votos-${opcion}`).textContent = votos[opcion];

    if (totalVotos % 5 === 0) {
        console.log(`Total de votos: ${totalVotos}`);
    }
}
