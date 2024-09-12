function apresentarVetorInverso(vetor: number[]) {

    let arrayInvertido: number[] = []

    for (let i = vetor.length; i > 0; i--) {
        arrayInvertido.push(i)
    }
    
    console.log(arrayInvertido)

}
apresentarVetorInverso([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

