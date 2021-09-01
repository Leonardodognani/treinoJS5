//Estrutura de repetição
//for

for (let i = 0; i <= 10; i++) {      // 1º - define valor inicial; 2 - "enquanto", define a condição de looping; 3 - define a ação.
    if(i === 5){
        continue                    // continue ignora o 5, no caso e pula pro próximo movimento do looping
    }                               //se fosse um break, eleiria parar o looping.
    console.log(i)
}    