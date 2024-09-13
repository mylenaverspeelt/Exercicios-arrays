function inverterVetor(vetor: Array<number>) {
    
    let vetorInverso: number [] = []
    
    for(let i = vetor.length -1 ; i >= 0 ; i--){
        vetorInverso.push(vetor[i])
    }
    console.log(vetorInverso)
}
inverterVetor([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])