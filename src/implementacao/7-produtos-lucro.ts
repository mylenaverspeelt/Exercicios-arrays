interface Produto {
    nome: string;
    custo: number;
    valor: number;
  }
  
  function calcularLucros(produtos: Array<Produto>) {
    let quantidadeMenorQue10: number = 0;
    let quantidadeEntre10e30: number = 0;
    let quantidadeMaiorQue30: number = 0;
  
    for (let i = 0; i < produtos.length; i++) {
      let lucro = produtos[i].valor - produtos[i].custo;
  
      if (lucro < 0.1) {
        quantidadeMenorQue10++;
      } else if (lucro >= 0.1 && lucro <= 0.3) {
        quantidadeEntre10e30++;
      } else {
        quantidadeMaiorQue30++;
      }
    }
  
    console.log("Lucro menor que 10%: " + quantidadeMenorQue10);
    console.log("Lucro entre 10% e 30%: " + quantidadeEntre10e30);
    console.log("Lucro maior que 30%: " + quantidadeMaiorQue30);
  }
  
  calcularLucros([
    { nome: "Detergente", custo: 2, valor: 2.5 },
    { nome: "Sabão", custo: 4, valor: 4.1 },
    { nome: "Sabão", custo: 4, valor: 4.25 },
  
  ]);
  