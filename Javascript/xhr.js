var xhr = new XMLHttpRequest();
var documento = {
  userId: 200,
  id: 12,
  title: "Noticia exclusiva",
  body: "Desenvolvedor larga o Jquery após descobrir o quão fácil é viver sem ele",
};

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    console.log(xhr);
  }
};

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

xhr.send(documento);
