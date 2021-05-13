const resumo = document.querySelector ('#resumo')

const contador = document.querySelector ('#contador')

contador.innerHTML = 255 

resumo.addEventListener('keyup' , function() {
    contador.innerHTML = 255 - resumo.value.length
})

