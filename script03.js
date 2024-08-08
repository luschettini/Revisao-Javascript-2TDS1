//Atividade 03
//Uma escola de música está realizado audições para novos alunos! Para organizar as inscrições, você precisa criar um programa que verifica se a pessoa possui a idade mínima para realizar sua matrícula.

let idadeMinima = 7;
let idadeAluno = 8;
let primeiroAno = 7;
let segundoAno = 8;
let terceiraAno = 9;

if (idadeAluno >= idadeMinima && idadeAluno == primeiroAno){
    console.log ("Matrícula realizada com sucesso, você está no primeiro ano!");
}else if(idadeAluno == segundoAno){
    console.log("Matrícula realizada com sucesso, você está no segundo ano!")
}else if(idadeAluno == terceiraAno){
    console.log("Matrícula realizada com sucesso, você está no terceiro ano!")
}else if(idadeAluno > terceiraAno){
    console.log("Matrícula realizada com sucesso!")
}else{
    console.log("Desculpe, você ainda não pode se matricular nesta escola!")
}