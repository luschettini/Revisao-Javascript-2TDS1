let metaLivros = 4;
let livrosLidos = [ "É assim que acaba", "Todas suas IMperfeições", "O lado feio do amor"];
let livrosFaltando = metaLivros - livrosLidos.length;

console.log("Livros lidos:");

for (let i = 0; i < livrosLidos.length; i++) 
    console.log(livrosLidos[i]);
{
    if ( livrosLidos.length == metaLivros) {
        console.log("Parabéns! Você atingiu sua meta de leitura!");
    }else{
        console.log( "Você está progredindo! Faltam " + livrosFaltando + " livros para atingir sua meta.")
    }
}