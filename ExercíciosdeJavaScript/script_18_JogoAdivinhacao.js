let randomUnder100;

function geraNumero(){
    let res = document.getElementById('result');
    randomUnder100 = Math.floor(Math.random() *100 +1);

    //console.log(`[APENAS PARA DEBUG] Pensei no número: ${randomUnder100}`);
    res.innerHTML += `<p>Acabei de pensar no número: <strong>${randomUnder100}</strong>`;

    compararNumero(randomUnder100);
}

function compararNumero() {
    res = document.getElementById('result');
    let number = Number(prompt('Tente adivinhar em qual número eu pensei!'));

    if(number == randomUnder100) {
          res.innerHTML += `Acertou, o número que eu pensei é o ${randomUnder100}`
          console.log(`Acertou, o numero que eu pensei é o ${randomUnder100}`);
          //geraNumero();

    }else if(randomUnder100 > number){
        res.innerHTML += `Você falou ${number}. O número que eu pensei é MAIOR!`
        console.log(`Você falou ${number}. O número que eu pensei é MAIOR!`);

    }else {
        res.innerHTML += `Você falou ${number}. O número que eu pensei é MENOR`
        console.log(`Você falou ${number}. O número que eu pensei é MENOR!`);
    }
    res.innerHTML = '';
}

