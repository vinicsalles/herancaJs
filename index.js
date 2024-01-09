class mamifero{
    constructor(patas, nadadeira){
        this.patas = patas;
        this.nadadeira = nadadeira;
    }
}


class Lobo extends mamifero{
    constructor(patas, nome){
        super(patas, patas);
        this.nome = nome;
    }
}


class Baleia extends mamifero{
    constructor(nadadeira, nome){
        super(nadadeira,nadadeira);
        this.nome = nome;
    }
}


const loboguara = new Lobo(4, "Lobo Solitário");
const BaleiaAzul = new Baleia(2, "Joggi");



console.log(loboguara);
console.log(BaleiaAzul);




