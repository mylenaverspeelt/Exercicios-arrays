interface ProdutoIndividual {
    codigo: number;
    preco: number;
    quantidade: number;
  }
  
  function gerarRelatorioVendas(produtos: Array<ProdutoIndividual>) {
  
    let vetorValorDosObjetos: number[] = [];
    let vetorQuantidadeVendida: number[] = [];
    let vetorCodigoDoProduto: number[] = [];
    let vetorTotalDaVendaPorObjeto: number[] = [];
    let valorTotalDasVendas: number = 0;
  
    //   Adiciona nos arrays individuais os valores de preço, quantidade e codigo
    for (let i = 0; i < produtos.length; i++) {
      let valorDaVenda: number = produtos[i].quantidade * produtos[i].preco;
      vetorValorDosObjetos.push(produtos[i].preco);
      vetorQuantidadeVendida.push(produtos[i].quantidade);
      vetorCodigoDoProduto.push(produtos[i].codigo);
      vetorTotalDaVendaPorObjeto.push(valorDaVenda);
  
      valorTotalDasVendas += valorDaVenda;
    }
  
    let maiorNumero: number = 0;
    let indexMaisVendido: number = 0;
  
    // Verifica qual o item mais vendido e salva a posição (index) dele
    for (let i = 2; i < vetorQuantidadeVendida.length; i++) {
      if (maiorNumero < vetorQuantidadeVendida[i]) {
        maiorNumero = vetorQuantidadeVendida[i];
        indexMaisVendido = i;
      }
    }
  
    let precoMaisVendido: number = vetorValorDosObjetos[indexMaisVendido];
    let codigoMaisVendido: number = vetorCodigoDoProduto[indexMaisVendido];
  
    console.log(
      `O código do objeto mais vendido é: ${codigoMaisVendido} e seu valor custa R$${precoMaisVendido}`,
    );
  
    let comissao: number = valorTotalDasVendas * 0.05;
  
    console.log(
      `\nO valor total de vendas foi de R$${valorTotalDasVendas} e será pago R$${comissao} de comissão ao vendedor. `,
    );
  
    // Imprimir no console o relatório de produtos
    console.log("\nRelatório dos produtos:");
    for (let i = 0; i < produtos.length; i++) {
      console.log(
        `Código: ${vetorCodigoDoProduto[i]} - Quantidade: ${vetorQuantidadeVendida[i]} - Valor Unitário: ${vetorValorDosObjetos[i]} - Valor total vendido: ${vetorTotalDaVendaPorObjeto[i]}`,
      );
    }
  }
  gerarRelatorioVendas([
    { codigo: 1, preco: 5, quantidade: 2 },
    { codigo: 2, preco: 65, quantidade: 1 },
    { codigo: 3, preco: 5, quantidade: 4 },
    { codigo: 4, preco: 5, quantidade: 3 },
    { codigo: 5, preco: 1, quantidade: 6 },
    { codigo: 6, preco: 25, quantidade: 5 },
    { codigo: 7, preco: 3, quantidade: 3 },
    { codigo: 8, preco: 95, quantidade: 2 },
    { codigo: 9, preco: 8, quantidade: 1 },
    { codigo: 10, preco: 7, quantidade: 2 },
  ]);
  