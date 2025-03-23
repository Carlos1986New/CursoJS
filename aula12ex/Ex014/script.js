function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 6

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora < 12){
    msg.innerHTML = 'Bom dia !!!'
    img.src = 'manha.png'
    document.body.style.background = '#E8D7C5'
}
else if (hora >= 12 && hora < 18){
    msg.innerHTML = 'Boa tarde !!!'
    img.src = 'tarde.jpg'
    document.body.style.background = '#B1D0EE'
}

else if (hora > 18 && hora < 24){
    msg.innerHTML = 'Boa noite !!!'
    img.src = 'noite.png'
    document.body.style.background = '#152644'
}

else {
    msg.innerHTML = 'Bora Curtir a madrugada !!!'
    img.src = 'madrugada.png'
    document.body.style.background = '#3D004E'
}
}