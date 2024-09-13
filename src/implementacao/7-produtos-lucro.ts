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

      let porcentagem10 = produtos[i].custo * 0.10
      let porcentagem30 =  produtos[i].custo * 0.30
  
      if (lucro < porcentagem10) {
        quantidadeMenorQue10++;
      } else if (lucro >= porcentagem10 && lucro <= porcentagem30) {
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
    { nome: "Água Sanitária", custo: 3, valor: 4 },
    { nome: "Lâmpada", custo: 12, valor: 16 },
    { nome: "Fita Adesiva", custo: 1.5, valor: 2.5 },
    { nome: "Copo Descartável", custo: 1.5, valor: 2.3 },
    { nome: "Guardanapo", custo: 3, valor: 4.2 },
    { nome: "Limpa Chão", custo: 6, valor: 8.2 },
    { nome: "Esfregão", custo: 10, valor: 13.5 },
    { nome: "Álcool 70%", custo: 4.5, valor: 6 },
    { nome: "Cabo USB", custo: 6, valor: 8 },
    { nome: "Lâmina de Barbear", custo: 2, valor: 3 },
    { nome: "Escova de Cabelo", custo: 5, valor: 7 },
    { nome: "Toalha de Mão", custo: 3, valor: 4.5 },
    { nome: "Tira Manchas", custo: 7, valor: 9.5 },
    { nome: "Limpador de Piso", custo: 6, valor: 8 },
    { nome: "Removedor", custo: 4, valor: 5.5 },
    { nome: "Esfregão Giratório", custo: 12, valor: 16.5 },
    { nome: "Caixa Organizadora", custo: 8, valor: 11 },
    { nome: "Bateria", custo: 3, valor: 4.2 },
    { nome: "Creme para Rosto", custo: 10, valor: 13.5 },
    { nome: "Aspirador de Pó", custo: 50, valor: 70 }

  ]);
  