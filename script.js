let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};

console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus

console.log(user1.age);  //  ->  66
user1.age = 67;
console.log(user1.age);  //  ->  67

console.log(user2.phone);  //  ->  undefined
user2.phone = "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557

console.log(user2.surname); // Pinto

let bandas = []
console.log(bandas[0])

bandas[0] = "angra"
bandas[1] = "soad"
bandas[2] = "metallica"

console.log(bandas)

console.log(typeof bandas)

console.log(bandas instanceof Array)

console.log(bandas.length)

bandas[4] = "matanza"
console.log(bandas.length)
console.log(bandas)

let ticket = {
    partida: "Parque Vitória",
    chegada: "Senac",
    preço: 4.20
}

console.log(`Ticket partida: ${ticket.partida}`)
console.log(`Ticket chegada: ${ticket.chegada}`)
console.log(`Ticket preço: ${ticket.preço}`)

let pessoa = {} // criei a variável "pessoa" vazia, para depois receber os dados e serem moostrados em sequencia

pessoa.nome = "Edlan"
pessoa.sobrenome = "Carvalho"
pessoa.sobrenome2 = "Silva"
console.log(`${pessoa.nome} ${pessoa.sobrenome} ${pessoa.sobrenome2}`)

const livros = [{
    titulo: 'Falando JavaScript',
    autor: 'Axel Rauschmayer',
    num_pag: '460'
},
{
    titulo: 'Programação de aplicações JavaScript',
    autor: 'Eric Elliot',
    num_pag: '254'
},
{
    titulo: 'Compreendendo ECMAScript 6',
    autor: 'Nicholas C. Zakas',
    num_pag: '352'
}
]

const novoLivro = { //Criei um novo item para o array "livros"
    titulo: 'Learning JavaScript Design Patterns',
    autor: 'Addy Osmani',
    num_pag: '254'
}
livros.push(novoLivro) //Usei o "push" para trazer o novo item para o array "livros"
console.log(livros.length) //Mostra quantos item possui no array, com mais essa adição
console.log(livros[0,1,2,3].titulo);
console.log(livros[1].titulo);
console.log(livros[2].titulo);
console.log(livros[3].titulo);


