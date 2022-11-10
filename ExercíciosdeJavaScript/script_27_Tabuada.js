function contando() {
    let saida = document.getElementById('result')
    let n1 = document.getElementById('number1').value;
    let multi=1;
    
    saida.innerHTML = `<p>Tabuada do <strong>${n1}</strong>`

    if(n1>0){
        while(multi<=10){
            saida.innerHTML += `<p>${n1} * ${multi} = <strong>${n1*multi}</strong></p>`
            multi++
        }
    } else 
        saida.innerHTML += `Insira um número positivo!`

}