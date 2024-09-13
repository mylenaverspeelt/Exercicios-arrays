function separarPositivosNegativo(vetor1: Array<number>, vetor2: Array<number>) {
    let arrayIntercalado: number []=[]

    for(let i = 0 ; i < vetor1.length ; i++){
        arrayIntercalado.push(vetor1[i], vetor2[i])
        
    }
    console.log(arrayIntercalado)
}
separarPositivosNegativo([1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20])