const saida = document.querySelector(".india"); //variavel de saída que vai aparecer na tag q possuí a class india
    
    function digitacao(texto, contador)
    {
        if(contador < texto.length) //condição de parada, enquanto a frase inteira não for preenchida
        {
            setTimeout(() =>
            {
                saida.textContent += texto.charAt(contador); //imprime a primeira letra da frase
                contador++; //imprementa contador para ir para próxima letra
                digitacao(texto,contador);//chama a função novamente para imprimir as proximas letras
            }, 140)//tempo
        }
    }

digitacao("Travel to the Moon", 0); //chamando a função recursiva com o contador do 0