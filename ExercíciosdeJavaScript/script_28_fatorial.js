function contando() {
    let saida = document.getElementById('result')
    let n1 = document.getElementById('number1').value;
    let fatorial, totFatorial
    
    saida.innerHTML = `<p>Fatorial do <strong>${n1}</strong>`
    fatorial = n1;
    console.log(`valor de fatorial: ${fatorial}`);

    while(fatorial>0){
        totFatorial = n1*=fatorial--;
        //fatorial--;
        saida.innerHTML += `${totFatorial}`
    }
}