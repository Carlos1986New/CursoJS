function verificar(){
    var data = new Date() // pega a data atual e coloca na variavel data
    var ano = data.getFullYear() // pega o ano completo da data atual e coloca na variavel ano
    var fano = document.getElementById('txtano') // pega o valor colocado na tag com id = "txtano" e coloca na variavel fano
    var res = document.querySelector('div#res') // a variavel res recebendo vinculando com a div com o id = "res"
    if (fano.value.length == 0 || Number(fano.value) > ano) // Uma condição dizendo se nada for digitado ou se for maior que o a variavel.
         {
        window.alert('[ERRO] Verifica os dados e tente novamente!') // resposta da condição acima.
    }
    else {
        var fsex = document.getElementsByName('radsex') // acessa a tag com o name = "radsex"
        var idade = ano - Number(fano.value) // a variavel idade recebendo o valor de ano menos o valor do ano digitado.
        var genero = '' // varialvel genero recebendo valor vazio para se incluido mais tarde
        var img = document.createElement('img') // variavel img recebe a criação da tag img.
        img.setAttribute('id', 'foto') // diz que o atribudo da img tera uma id de nome foto.
        if (fsex[0].checked) // se o valor de fsex com id="mas"  for clicado.
        // [0] diz que é o primeiro valor, no caso foi id="mas"
            {
            genero = 'Homem'  // a variavel genero receberá o uma string chamada Homen
            if (idade >= 0 && idade < 10){ // se a Idade for maior ou igual a zero e menor que 10
                //Criança
                img.setAttribute('src', 'menino.png') // a variavel img receberá a imagem menino.png
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'adolescente-m.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'homen.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'adolescente-f.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center' // centraliza o texto na tag com id="res"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // diz uma mensagem de acordo com o valor recebido.
        res.appendChild(img) // faz aparecer a imagem na tag com id="res"
    }

}