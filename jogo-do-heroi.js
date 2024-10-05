class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Define o ataque de acordo com o tipo do herói
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi('Aragorn', 30, 'Guerreiro');
heroi1.atacar(); // "O Guerreiro atacou usando espada."

const heroi2 = new Heroi('Gandalf', 100, 'Mago');
heroi2.atacar(); // "O Mago atacou usando magia."

const heroi3 = new Heroi('Liang', 25, 'Monge');
heroi3.atacar(); // "O Monge atacou usando artes marciais."

const heroi4 = new Heroi('Kaito', 28, 'Ninja');
heroi4.atacar(); // "O Ninja atacou usando shuriken."
