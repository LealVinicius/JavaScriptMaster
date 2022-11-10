function verificaEstacao() {
    let month = prompt('Digite o mês aqui em extenso (Ex: Janeiro) ');
    let estação;
    let res = document.getElementById('result');

    switch (month.toLowerCase()) {
        case 'março' : case 'abril' : case 'maio' : case 'junho':
            estação = 'outono';
            break;
        case 'julho': case 'agosto': case'setembro':
            estacao = 'inverno';
            break;
        case 'outubro': case'novembro':
            estacao = 'Primavera'
            break;
        case 'dezembro': case'janeiro': case 'fevereiro':
            estacao = 'Verão'
            break;
        default:
            estacao = 'INDEFINIDA'
            break;
        }

        res.innerHTML = `<p>No mês de ${month}<strong> estamos na estação ${estacao}</strong>`; // estacao
    
}

