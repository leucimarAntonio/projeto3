let classes = [
    { nome: "pig", idade: 22, tipo: "guerreiro", ataque:"espada" },
    { nome: "naruto", idade: 18, tipo: "mago", ataque:"magia" },
    { nome: "lufy", idade: 23, tipo: "monge", ataque:"artes marciais" },
    { nome: "ze", idade: 15, tipo: "nija", ataque:"shhuriken" }
  ];
    function ataque(iten){
        iten.map(element => {
            console.log(`O personagem ${element.nome} da classe ${element.tipo} com a idade ${element.idade} atacou usando ${element.ataque} !`)
        });
    }

    ataque(classes)