function contando() {
    let saida = document.getElementById('result')
    saida.innerHTML += `<h2> Contando de 1 até 10 mostrando números pares: </h2>` 
    let i = 10
    
    while(i>0){
            saida.innerHTML = `${i}`    
            console.log(i);
            i--;
        }
}