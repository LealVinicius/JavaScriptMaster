function contando() {
    let saida = document.getElementById('result')
    let number = document.getElementById('number').value;
    let i=0;
    console.log(number);

    saida.innerHTML = `<h2> Contando do 0 até o ${number}</h2>` 
    
    while (i < number) {
        i++;
        saida.innerHTML += `-> ${i}`
        console.log(`Contando: ${i}`);
    }
}