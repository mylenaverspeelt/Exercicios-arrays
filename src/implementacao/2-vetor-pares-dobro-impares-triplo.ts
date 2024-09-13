function gerarVetorParesDobroImparesTriplo(vetor: Array<number>){
    let vetorMultiplicado: number [] = []

    for(let i = 0; i < vetor.length; i++){
        if( vetor[i] % 2 == 0){
            let numeroDuplicado = vetor[i] * 2
            vetorMultiplicado.push(numeroDuplicado)
        } else {
            let numeroTriplicado = vetor[i] * 3
            vetorMultiplicado.push(numeroTriplicado)
        }
    }
    console.log(vetorMultiplicado)
}
gerarVetorParesDobroImparesTriplo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,7,28,29,30])