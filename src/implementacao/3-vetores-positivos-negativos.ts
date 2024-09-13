function separarPositivosNegativos(vetor: Array<number>) {
    
    let arrayPositivo: number [] = [];
    let arrayNegativo: number [] = [];

    for( let i = 0; i < vetor.length ; i++){
        if( vetor[i] > 0 ){
        arrayPositivo.push(vetor[i])
        } else {
            arrayNegativo.push(vetor[i])
        }
    }
    console.log(arrayPositivo)
    console.log(arrayNegativo)
}
separarPositivosNegativos([4,3,6,-3,-2,9,-4,7])