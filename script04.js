//Atividade 04
let quantidadePalmas = 14;
let aplausos = "";

for (let i = 1; i <= quantidadePalmas; i++) {
    aplausos += "👏";
    if (i % 5 === 0){
        aplausos+= "🎉";
    }
}
console.log(aplausos);