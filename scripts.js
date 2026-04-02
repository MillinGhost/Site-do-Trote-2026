function calcular(){
    let qtdArroz = Number(document.getElementById("qtdArroz").value) //recupera o valor inforamado no elemnto com o id qtdArroz
    let qtdFeijao = Number(document.getElementById("qtdFeijao").value)
    let qtdOleo = Number(document.getElementById("qtdOleo").value)//Number converte texto em numero
    let qtdmaca = Number(document.getElementById("qtdmaca").value)//Number converte texto em numero
    //calcula o valor total
    let pontos = (qtdArroz * 10) + (qtdFeijao * 8) + (qtdOleo * 4) + (qtdmaca * 2)
    //vamos exibir o resultado para o usuario
     document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
 }