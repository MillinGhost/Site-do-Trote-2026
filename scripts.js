function calcular(){
    /*recupera valores de itens avulsos*/
    let qtdArroz = Number(document.getElementById("qtdArroz").value) //recupera o valor inforamado no elemnto com o id qtdArroz
    let qtdFeijao = Number(document.getElementById("qtdFeijao").value)
    let qtdOleo = Number(document.getElementById("qtdOleo").value)//Number converte texto em numero
    let qtdMaca = Number(document.getElementById("qtdMaca").value)//Number converte texto em numero
    //calcula o valor total
    let pontos = (qtdArroz * 10) + (qtdFeijao * 8) + (qtdOleo * 4) + (qtdMaca * 2)
    let qtdSangue = Number(document.getElementById("qtdSangue").value)
    let qtdLeites = Number(document.getElementById("qtdLeites").value)
    let qtdLatas = Number(document.getElementById("qtdLatas").value)
    /*recupera valor da cor da equipe*/
    let cor = document.getElementById("cor").value
    let metaProva1 
    if (cor == "Amarelo"){
        metaProva1 = 54
    }
    else if (cor == "Cinza"){
         metaProva1 = 51
    }
    else if (cor == "Laranja"){
        metaProva1 = 21
    }
    else if (cor = "Marrom"){
        metaProva1 = 88
    }
    else if (cor = "preta"){
        metaProva1 = 60
    }
    else if (cor = "Rosa"){
        metaProva1 = 44
    }
    else if (cor = "Verde"){
        metaProva1 = 61
    }
    else if (cor = "Vermelho"){
        metaProva1 = 32
    }
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)  
    if (kitAlimentacao >= metaProva1) {
        pontos = pontos + 5000
    }
    else if (kitAlimentacao > metaProva1){
         pontos = pontos + (kitAlimentacao - metaProva1) * (5000/metaProva1)
    }
    
    else{
        pontos = pontos + kitAlimentacao * (5000/metaProva1)
    }
        
    //vamos exibir o resultado para o usuario
     document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
 }