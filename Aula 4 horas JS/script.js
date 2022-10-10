/*
let podeEntrar;

function testeFuncao(){
    let nomeConvidado = document.getElementById('campo-nome').value;
    let convidou = document.getElementById('convidou').value;
    console.log(`Valor de nome: ${nomeConvidado}`);
    console.log(`Valor de convidou: ${convidou}`);

    let Convidados = ['Vinicius', 'Amanda', 'Godofredo', 'Jacinto', 'Bill']

    if(Convidados.includes(nomeConvidado) && convidou=='Junior')
        podeEntrar = 'Pode entrar';
    else
        podeEntrar = 'Não pode entrar.'

    exibeResultado();
}

function exibeResultado(){
    document.getElementById('resultado').innerHTML = podeEntrar;
}


// ESTE CÓDIGO É DA AULA "Curso Javascript Completo 2020 [Iniciantes] + 14 Mini-Projetos" no Youtube;

const nome = "Vinicius Leal "
let objeto = undefined;
let vazio = null;
//const sobrenome = "Leal "
//ABAIXO TEMOS UM OBJETO PESSOA E SUA SINTAXE.

pessoa = {
    nomeCompleto : "Vinicius Leal ",
    idade: 23,
    estadoCivil: "solteiro",
    CPF: 9999
}
 do {
    idade++
    console.log("Fazendo mais um ano. Idade atual = "+idade)
 } 
while (idade <= 30);

//Array
const frutas = ["banana" , "maça ", "laranja", 2];
const tecnologias = ["JavaScript" , "css" , "git"]
const tecnologiasSelecionadas = [];
tecnologiasSelecionadas[0] = "Java";

console.log("Fruta na posição 1: " +frutas[1])
console.log("Tamanho do array = " + frutas.length + " posições");

// OPERADORES

console.log("Divisão " + 10/ 3);

console.log("Módulo " +  10 % 3);

let valor = 5;
valor += valor;
valor -= 2

console.log(valor)

// Comparações do JS
console.log(typeof valor)
console.log( 8 !== "8") 

let primeiraCondicao = 10 < 20 // true
let segundaCondicao = "10" == 10 // true;

let resultado =  (primeiraCondicao && segundaCondicao) || primeiraCondicao && segundaCondicao  // true


console.log(resultado)

let autenticado = false;
resultado = autenticado ? "Seja bem vindo" : "Fazer login"
//console.log(resultado);

let estaAutenticado = false;

function entrar(usuario) {
    estaAutenticado = true;
    let mensagem = usuario === "Vinicius" ? "Seja bem vindo " + usuario : "Desconhecido"; 
    console.log (mensagem)
    if (usuario == "Vinicius")
        console.log ("Bom ver você novamente, Vini.")
    else if (usuario == "Lucas")
        console.log("Bem vindo, Lucas!")
    else
        console.log("Seja bem vindo, outro usuário!")


    switch (usuario) {
        case "Leo":
            console.log("Bem vindo, leo");
        break;
        case "Ademar":
            console.log("Bem vindo, Ademar");
        break;
         }


}

entrar("Vinicius")
entrar("Ademar");
entrar("Kleberson")
entrar("Roberval")

function somarInteiros (primeiroValor, segundoValor) {
    console.log(primeiroValor + segundoValor)
    }

somarInteiros(10,5);


let atividade=1;
while(atividade<=7) {
    console.log(atividade)
    atividade++;
   }


for (let atividade =1; atividade <=10; atividade++) {
    console.log("Atividade :", atividade)
}

// OPERADORES CONDICIONAIS

// OPERADORES LÓGICOS

let salario = 100;

console.log( salario + salario);
console.log(salario - salario); // 0
console.log(salario * salario);



let idade = 18;

console.log(++idade) // 19
console.log(idade++) // 18

console.log(idade--); // 

// OPERADORES DE ATRIBUIÇÃO

let valorTecladoGamer = 100;
console.log("Valor teclado gamer: "+valorTecladoGamer)

valorTecladoGamer += valorTecladoGamer;
valorTecladoGamer -= valorTecladoGamer;
console.log(valorTecladoGamer)


// OPERADORES DE IGUALDADE

//igualdade restrita

console.log(1==="1")
console.log(1=="1")

// tem um cliente, + = premium.


// Operador ternário
let pontos = 200;

let tipo = pontos > 100 ? 'premium' : 'normal';

console.log(tipo);



// Operadores lógicos E && 
let maiorIdade = true;
let cartTrabalho = false;
let podeAplicar = maiorIdade && cartTrabalho

console.log("pode aplicar: "+podeAplicar)

// Opeardor NOT (!)
let candidatoRecusado= !podeAplicar

console.log("Candidato recusado? "+candidatoRecusado)


// COMPARAÇÕES NÃO BOOLEANAS
// Falsy são valores que não são true ou false, e sim os abaixo:
// Falsy
// Undefined
// null
// 0
// false
// ''
// Nan - Not a number

// Truthy.


let corPersonalizada = "";
let corPadrao =  'Azul';
let corPerfil =  corPadrao || corPerso+++nalizada;
console.log(corPerfil);



let a = 'Vermelho'
let b = 'Azul'

let c = a;
a = b;
b = c;


console.log(a)
console.log(b)





// If .. Else

// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até as 18h : Boa tarde
// Caso contrário, boa noite.


let hora = 12;

if (hora >= 6 && hora < 12) 
    console.log("Bom dia! ")
else if (hora >=12 && hora <18)
    console.log("Boa tarde!")
else    
    console.log("Boa noite!")



// SWITCH CASE

let permissao; // Usuário comum, usuário gerente, Diretor.]
permissao = "fa"
switch (permissao) {
    case "comum" :console.log("Usuário comum")
        break;
    case "gerente":console.log("Usuário Gerente")
        break;
    case 'diretor':console.log("Usuário diretor")
        break;
    default: 
        console.log("Usuário não reconhecido. Tentar novamente.")
        break;
}


// LOOPS

// for
// while
// do-while

const pessoa =  {
    nome: "Vinicius",
    idade: "23"
}

let usuario ={
    nome: 'Usuario',
    idade: '23'
}

//key 
for(let chave in pessoa){
    console.log(pessoa.idade);

}


const cores = ['Vermelho', 'Azul', 'Verde', 'Amarelo', 'Marrom']

//for-of

for(let cor of cores){
    console.log(cor)
}
const motos = ['Factor', 'Fazer', 'Twister', 'Start', 'Lander', 'Virago']


for (const iterator of motos) {
    console.log(iterator)
}

//Escreva uma função que usa 2 números e retorna o maior
//entre eles 

function retornaMaior(n1, n2){
    return n1>n2 ?  n1:n2
    if      (n1>n2)
        return ('O maior número é o '+n1);
    else if (n2>n1)
        return ('O maior número é o '+n2);
    else
        return ('Os números são iguais.') 
}

console.log(retornaMaior(5500, 560));

// FizzBuzz
// Divisível por 3 => Fizz
// divisível por 5 => Buzz
// divisível por 3 e por 5 => FizzBuzz
// Não divisível por 3 ou 5 => Entrada
// Não é um número => 'Não é um numero"

function fizzBuzz(n) {
    if (typeof n!=='number')
        return 'Não é um número'
     if (n%3===0 &n%5===0)
        return 'FizzBuzz'
     if (n%3===0)
        return 'Fizz'
     if (n%5===0)
        return 'Buzz'
     if (n%3!=0 || n%5!=0)
        return n
}
console.log(fizzBuzz());

//                      DESAFIO VELOCIDADE
/*
    Velocidade máxima = 70km/h
    A cada 5km/h acima do limite você ganha 1 ponto
    Math.floor para arredondar
    caso pontos > 12 0> "Carteira suspendida"
*/
function verificaVelocidade(velocidade){
    if(velocidade<=70) 
        console.log( `Sua velocidade foi de ${velocidade} km/h e está dentro do limite`);
    
    else {
        const pontos = (Math.floor((velocidade - 70) / 5));   
       // console.log("Caiu aqui! " + pontos)
        if (pontos>=12) {
            console.log(`Carteira suspensa`)
        }
        else
            console.log(`Sua velocidade foi de ${velocidade} km/h e você levou ${pontos} pontos`);
    }
}
verificaVelocidade(80);
/*  DESAFIO PAR OU IMPAR 
Receber uma quantidade de valores para avaliar
função exibe se cada valor é par ou ímpar..         
*/
function exibirTipo(n){
    // Colocar n em um array
    //const numeros = [];
    for(let i=0; i<=n; i++){
        if (i%2===0)
            console.log(`${i} Par`);
        else 
            console.log(`${i} Ímpar`);
    }
}

exibirTipo(150);



// PROJETO ENCONTRE O STRING 1:59  https://youtu.be/i6Oi-YtXnAU

const filme = {
    nome: 'Sob Pressão',
    ano: 2015,
    diretor: 'Cameron Dias',
    Gênero: 'Drama'
}



function exibirPropriedades(filme){
        for (const key in filme) {
            if (Object.hasOwnProperty.call(filme, key)) {
                const element = filme[key];
                if(typeof element ==='string'){
                    console.log(element)
                }
            }
        }

    //console.log(propriedade)
}

exibirPropriedades(filme);

// PROJETO MULTIPLOS DE 3 E 5


function somar(limite){
    // Esta função vai pegar todos os divisores
    // limite
    //Verifica se o limite é multiplo de 3 e armazena
    let multiploDe3=0;
    let multiploDe5=0;
    for (let i=0; i<=limite; i++) {
        if(limite%3===0) 
            multiploDe3+=i;
        if(limite%5===0)
            multiploDe5+=i;
    }
    console.log(multiploDe3 + multiploDe5)
    //Verifica se o limite é multiplo de 5 e armazena.
} 


somar(9);


///  Exercício nota escolar
// Obter a média a aprtir de um array.

// 0-59 : F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const notas = [70,100,90];
console.log(exibeNotas(notas));

function exibeNotas(notas){
    const mediaNota = calculaMedia(notas)
    console.log("Valor de media : " + mediaNota);
    if(mediaNota>100) return 'Insira uma nota válida';
    if(mediaNota<59) return 'F';
    if(mediaNota<69) return 'D';
    if(mediaNota<79) return 'C';
    if(mediaNota<89) return 'B';
    
    return 'A';
}

function calculaMedia(array){
    let notaFinal=0;
        for(let valor of array){
            notaFinal+=valor
            console.log(`nota :${valor}`)
        }      
        return notaFinal/(array.length);
    }
    
exibeAsteriscos(10)
/*
function exibeAsteriscos(quantidade){
    
        let padrao = " ";
        for (let i = 0; i<quantidade; i++) {
            padrao+='*';
            console.log(padrao);
            //for()
        }
}

    for(let linha=1; linha<=quantidade; linha++){
        let padrao ='';
        for(let i=0; i<linha; i++){
            padrao+='*'
        }
        console.log(padrao)
    }
}


// Strings
// Tippo primitivo
const mensagem = 'Esta é uma String ';
//console.log(typeof mensagem)

// Tipo objeto

const mensagem2 = new String('Bom dia');
//console.log(typeof mensagem2);

console.log(mensagem2);



// TEMPLATE LITERAL

const mensagem = "Oi, isso é a minha primeira mensagem";
const pessoa = {
    nome: 'vinicius',
    idade: '23',
    genero: 'Masculino'
}
const pessoa2 = 'Vinicius'

const frase =  `Primeiro candidato:  ${pessoa2}, tem ${2022-1999} anos`;
console.log(frase)


// DATE 


const data1 = new Date();
const data2 = new Date('Thu Sep 01 2022 23:08:48');
const data3 = new Date()    

console.log(data1);


// Desafio montador de endereço

let endereco = {
    Rua: 'Esperança',
    Cidade: 'Mauá',
    CEP: '09332450',
}

function exibirEndereco(){
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}

exibirEndereco();


function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new Endereco('Esperança','Mauá','09332450');
const endereco3 = new Endereco('Esperança','Mauá','09332450');
const endereco2 = new Endereco('Altino Elias','58','09330838');
//const enredreco 3  =n  nmew dsaik
const endereco4 =  new endereco1


function saoIguais(endereco1, endereco2){   
    return endereco1.rua === endereco2.rua &&
           endereco1.cidade === endereco2.cidade &&
           endereco1.cep === endereco2.cep;
}
function temEnderecoMemoriaIguais(endereco1, endereco2){
    return endereco1 === endereco2;
}

console.log(`São iguais? ${saoIguais(endereco1, endereco2)}`)
console.log(`Endereço de memória iguais? ${temEnderecoMemoriaIguais(endereco1, endereco2)}`);


// PROJETO MONTADOR DE POSTAGEM DE BLOG

let postagem: "Vinicius"
let postagemDeBlog = {
    nome: "Vinicius Leal",
    titulo: 'Leite abaixa o preço',
    mensagem: 'o litro do leite volta a casa dos R$5', 
    autor:  'Vinicius Leal', 
    vizualizacoes: 503,
    comentarios: [
        {autor: 'Machado de Assis'},
        {mensagem: 'Uma bosta'},
    ],
    estaAoVivo: false
}

console.log(postagemDeBlog);

// Aula retoma em 3:23:49

// Constructor function (Exercício)
//Criar um objeto postagem com: titulo, mensagem, autor, vizu, comentarios, estao ao vivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo;
    this.mensagem = mensagem;
    this.autor = autor;
    this.vizualizacoes=0;
    this.comentarios = [];
    this.estaAoVivo = true;
}

let postagem = new Postagem('A volta dos que não foram', 'Nada a declarar', 'Machado');
console.log(postagem); 

// Exercicio faixa de preço -> Crie um array de objetos de faixa de preço para que ela possa
// ser usado em uma função

let faixaDePreco = [
    {tooltip: 'ate R$700', minimo:0, maximo:700},
    {tooltip: 'de R$700 á R$1000', minimo:700, maximo:1000},
    {tooltip: 'Acima de R$1000,', minimo:1000, maximo: 9999999}];


// Segunda opçção com factory function
function criaFaixaDePreco(tooltip, minimo, maximo){
    return tooltip, minimo, maximo;
}


let faixas2 = [
    criaFaixaDePreco('a', 700, 1000),
    criaFaixaDePreco('b', 1500, 1800),
    criaFaixaDePreco('c', 560, 890),
    criaFaixaDePreco('b', 8748, 848)

]

// Função de construtor
function FaixaDePreco(tolltip, minimo, maximo){
    this.tooltip= tolltip;
    this.minimo = minimo;
    this.maximo = maximo;
}

let faixas3 = [
    new FaixaDePreco('be', 700, 750),
    new FaixaDePreco('be', 100, 850),
    new FaixaDePreco('be', 200, 790)
]

console.log(faixas2);
console.log(faixas3);
console.log(faixaDePreco);

// INTRODUÇÃO A ARRAYS
const numeros = [1, 2, 3, 4];
numeros.push(99);
numeros.push(11);
//console.log(numeros);

/*
// Add novos elementos

// No início -> unshift 
numeros.unshift(0, 8, 67);
console.log(numeros)

// No meio -> Splice
numeros.splice(15, 0, 'a');
console.log(numeros)

//numeros.splice
numeros.push(99);
console.log(numeros);

// Encontrar elementos primitivos

let a = frutas.indexOf('banana');
console.log(a);

// LastIndexOf mostra a última ocorrencia 

//Forma de descobrir se existe o valor dentro do array
console.log(frutas.indexOf('Laranja') == 0);

let numero = 4;
let existe = numeros.includes(numero);
console.log(`Existe o número ${numero}? ${existe}`);

// Encontrando elementos do tipo referencia
const marcas = [
    {id:1, nome:'Nike'},
    {id:2, nome:'Nike'},
    {id:3, nome:'Nike'},
]

const found = marcas.find(function(marcas){
    return marcas.nome === 'Nike';
});

console.log(found);



const found = frutas.find(function(frutas){
    return frutas == 'Laranja'
});

console.log(found)


// Arrow Functions


const frutas = [
    {nome: 'Laranja', cor: 'laranja'},
    {nome: 'Maçã', cor: 'vermelha'},
    {nome: 'banana', cor: 'amarela'},
    //'maçã', 
    //'banana'
];
console.log(frutas.find((frutas) => frutas.nome === 'Maçã'));

// Remover elementos
numeros.push();
numeros.unshift();
numeros.splice();

// No final -> numeros.pop();
const ultimo = numeros.pop();
console.log(ultimo)
// Início -> numeros.shift();
const primeiro = numeros.shift();
console.log(primeiro)
// No meio numeros.splice();
const doMeio = numeros.splice(2, 1);
console.log(doMeio);
console.log(numeros);


// Esvaziar elementos do Array
const numeros = [1,2,3,56,5,87,74,87];
//numeros = [];
//console.log(numeros)

// Solução 2 
//numeros.length = 0;
//console.log(numeros)

// Solução 3
//numeros.splice(0, numeros.length);
//console.log(numeros)

// Solução 4
while(numeros.length>0)
    numeros.pop();
    console.log(numeros)

// Combinar e dividir elementos
const inteira = primeiro.concat(segundo);
console.log(inteira);

// Dividir array -> Slice
const dividir = inteira.slice(1, 3);
console.log(dividir);

// Operador Spread -> Para combinar e duplicar arrays
const primeiro = [1,2,3,4];
const segundo = [5,6,7];
primeiro.pop();
segundo.pop();

const inteiro = [...primeiro,'%',...segundo];
const clonado = [...inteiro]
console.log(clonado)


// Dividir arrays

// ForEach
const numeros = [1,2,3,4,4,5,65,6,7,87,8,89]
//for(numero of numeros)
//    console.log(numero)

numeros.forEach((numero, indice) => console.log(numero, `indice ${indice}`))

// Combinar arrays
const numeros = [1, 2, 3, 4, 5];
const combinado = numeros.join(' // ');
console.log(combinado);

const frase = `Como posso criar um array em JavaScript`
const resultado = frase.split(' ');
console.log(resultado);
console.log(resultado.join('-'));
//console.log(resultado);


let idadeUsuario = prompt('Olá, quala  sua idade?')
//console.log(escolha);

if (idadeUsuario <=0 ){
    alert('Insira uma idade válida')
    } else if (idadeUsuario<18) {
        alert('Você é menor de idade');
    } else {
            alert('Você é maior de idade')
    }
*/