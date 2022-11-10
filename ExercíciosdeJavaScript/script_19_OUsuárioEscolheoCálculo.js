let total;

function geraNumero(){
    let res = document.getElementById('result');
    res.innerHTML += `<p><strong> Calculando.. </strong>`;
    res.innerHTML = `<p><strong>${compararNumero()}</strong>`;
}

function compararNumero() {
    let number1 = Number(prompt('Informe o primeiro número: '));
    let number2 = Number(prompt('Informe o segundo número: '));
    let answer = Number(prompt(`Valores informados: ${number1} e ${number2}.
      O que vamos fazer?
        [1] Somar
        [2] Subtrair
        [3] Multiplicar
        [4] Dividir`
));

    if(answer == 1){ 
        total = number1 + number2;
        return `${number1} + ${number2} = `+ total;
        // A soma está contatenando
    } else if(answer == 2){
        total = number1 - number2
        return `${number1} - ${number2} = `+ total;
    } else if(answer == 3)
        return `${number1} * ${number2} = `+ number1 * number2;
     else if(answer == 4){
        total = (number1 / number2).toFixed(2)
        return `${number1} / ${number2} = ${total}`;
    } else (`OPÇÃO INVÁLIDA! Você digitou ${number1} e ${number2}, mas não sei o que fazer com eles.`)
 }

