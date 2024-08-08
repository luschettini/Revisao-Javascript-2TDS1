let armas = [ "Meu nome é Pimposa,", "Ataque 1: Mísseis", "Ataque 2: Laser", "Ataque 3: Canhão de Plasma", "Ataque 4: Granadas", "Ataque 5: Metralhadora"];
let ataques = [];

ataques.push(armas[0]); //[0]
ataques.push(armas[1]); //01
ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[4]);
ataques.push(armas[5]);

for (let i = 0; i < ataques.length; i++) {
    if (i == 0 && ataques[i] == armas[1]) {
        console.log(armas[0], "Meus ataques são esses:");
    }
    console.log(ataques[i]);
}