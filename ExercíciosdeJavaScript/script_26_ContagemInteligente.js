function contando() {
    let saida = document.getElementById('result')
    let n1 = document.getElementById('number1').value;
    let n2 = document.getElementById('number2').value;
    let cont;

    if(n1<n2) {
        while (n1<=n2){
            saida.innerHTML += `${n1}`
           // console.log(n1);
            ++n1
        }
    }else if(n1>n2){
        while (n1>=n2){
            saida.innerHTML += `${n1}`
            console.log(n1);
            --n1
        }
    } else {
        saida.innerHTML += `Não é possível contar, pois os números são iguais`
    }
}