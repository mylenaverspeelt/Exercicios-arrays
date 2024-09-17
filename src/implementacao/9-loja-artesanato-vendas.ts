interface ProdutoIndividual {
    codigo: number;
    preco: number;
    quantidade: number;
  }
  
  function gerarRelatorioVendas(produtos: Array<ProdutoIndividual>) {
  
    let vetorPrecos: number[] = [];
    let vetorQuantidade: number[] = [];
    let vetorCodigo: number[] = [];
    let vetorTotalDeVendasPorProduto: number[] = [];
    let totalDasVendas: number = 0;
  
    //Adiciona nos arrays individuais os valores de preço, quantidade e codigo
    for (let i = 0; i < produtos.length; i++) {
      let valorDaVenda: number = produtos[i].quantidade * produtos[i].preco;
        vetorPrecos.push(produtos[i].preco);
        vetorQuantidade.push(produtos[i].quantidade);
        vetorCodigo.push(produtos[i].codigo);
        vetorTotalDeVendasPorProduto.push(valorDaVenda);
  
        totalDasVendas += valorDaVenda;
    }
  
    let maiorNumero: number = 0;
    let indexMaisVendido: number = 0;
  
    // Verifica qual o item mais vendido e salva a posição (index) dele
    for (let i = 0; i < vetorQuantidade.length; i++) {
      if (maiorNumero < vetorQuantidade[i]) {
        maiorNumero = vetorQuantidade[i];
        indexMaisVendido = i;
      }
    }
  
    let precoMaisVendido: number = vetorPrecos[indexMaisVendido];
    let codigoMaisVendido: number = vetorCodigo[indexMaisVendido];
  
    console.log(
      `O código do objeto mais vendido é: ${codigoMaisVendido} e seu valor custa R$${precoMaisVendido}`,
    );
  
    let comissao: number = totalDasVendas * 0.05;
  
    console.log(
      `\nO valor total de vendas foi de R$${totalDasVendas} e será pago R$${comissao} de comissão ao vendedor. `,
    );
  
    // Imprimir no console o relatório de produtos
    console.log("\nRelatório dos produtos:");
    for (let i = 0; i < produtos.length; i++) {
      console.log(
        `Código: ${vetorCodigo[i]} - Quantidade: ${vetorQuantidade[i]} - Valor Unitário: R$${vetorPrecos[i]} - Valor total vendido: R$${vetorTotalDeVendasPorProduto[i]}`,
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
  