
const textos = [
    document.getElementById('pag1'),
    document.getElementById('pag2'),
    document.getElementById('pag3')
  ];
  
  // Seleciona os botões correspondentes
  const pudim = document.getElementById("pag1");
  const bolo = document.getElementById("pag2");
  const strog = document.getElementById("pag3");
  
  // Define a função para mostrar o texto correspondente
  function paginar(id) {
    textos.forEach(texto => {
      if (texto.id === id) {
        texto.style.display = "block";
      } else {
        texto.style.display = "none";
      }
    });
  }
  
  // Define os eventos de clique dos botões correspondentes
  pudim.addEventListener("click", function() {
    paginar('pag1');
  });
  
  bolo.addEventListener("click", function() {
    paginar('pag2');
  });
  
  strog.addEventListener('click', function(){
    paginar('pag3');
  })
  // Exibe o texto de voar por padrão
  paginar("pag1");


