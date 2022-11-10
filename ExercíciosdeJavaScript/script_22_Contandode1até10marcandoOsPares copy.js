// A lógica está correta, mas não exibe na página no innerHTML. 
// console.log funciona corretamente.

function contando() {
    let res = document.getElementById('result')
    res.innerHTML += `<h2> Contando de 1 até 10: </h2>` 

    let i = 1
    
    while(i<=10){
        res.innerHTML =+ `Contando: ${i} estou contando`;    
        console.log(`Contando: ${i}`);
        i++;
        if(i%2==0){
            console.log(`${i} é PAR!`);
            res.innerHTML = `${i} é PAR!`
        
     }
     stop;
     

    }
    res.innerHTML += `Contei!`
}