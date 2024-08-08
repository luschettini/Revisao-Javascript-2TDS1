//Contexto: Uma lanchonete modernizou o seu sistema de pedidos! Agora, os clientes montam seus hambúrgueres diretamente no código, sem precisar de interface gráfica. É a sua vez de programar essa experiência inovadora!

//Utilizar PUSH para adicionar!!

//length define o tamanho do array

let paes = ["Pão Australiano", "Pão Brioche", "Pão de Gergelim"];
let molhos = ["Maionese", "Ketchup", "Mostarda", "Barbecue"];
let saladas = ["Alface", "Tomate", "Cebola", "Picles"];
let carnes = ["Carne Bovina", "Frango Grelhado", "Veggie Burger"];
let queijos = ["Cheddar", "Mussarela", "Prato", "Gorgonzola"];

let hamburguer = [];

hamburguer.push(paes[1]); //[0]
hamburguer. push(molhos[1]); //[1]
hamburguer.push(saladas[1]);
hamburguer.push(carnes[0]);
hamburguer.push(queijos[0]);

for (let i = 0; i < hamburguer.length; i++) {
    console.log(hamburguer[i]);
}