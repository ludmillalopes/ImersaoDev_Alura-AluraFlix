function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    if(filmeFavorito.endsWith('.jpg')){
       listarFilmesNaTela(filmeFavorito)
    } else {
      alert("Imagem inválida!")
    }
    campoFilmeFavorito.value = ""
  }
  
  //FUNÇÂO POSTER NA TELA
  function listarFilmesNaTela(filme){
    var listarFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + " >"
    listarFilmes.innerHTML = listarFilmes.innerHTML + elementoFilme
  }