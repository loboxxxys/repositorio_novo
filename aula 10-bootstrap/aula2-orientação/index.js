// var nomepersonagem = "homem aranha punk"
// var vidapersonagem = 3; 

// personagens = [
//      ["homem aranha punk",3]
// ]

class Personagem {
    nome;
    vida;
    tamanho;
    velocidades;
    habilidades;
    atacar() { };
    abaixar() { };
    pular() { };
}

p1 = new Personagem();
p1.nome = " Homem aranha punk";
p1.vida = 4;
p1.tamanho = "Médio";
p1.velocidade = "Normal";
p1.habilidade = ["Atlético", "Spider", "Armas"]

class personagensEspeciais {
    constructor(nome, vida, tamanho, velocidade, habilidade) {
        this.nome = nome;
        this.vida = vida;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.habilidade = habilidade;
        this.atacar = function(){
            alert("AIAI");
        }
    }
}
todospersonagens = [];
todospersonagens.push(new personagensEspeciais("Gewn Stacy", 3, "médio", "normal", ["Armas"]));