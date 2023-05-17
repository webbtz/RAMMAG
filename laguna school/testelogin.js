function Login() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    if (usuario === "professor" && password === "senha1") {
        abriPaginaProf();
    } else if (usuario === "aluno" && password === "senha2") {
        abrirPaginaAluno();
    } else if ( usuario === "representante" && password === "senha3"){
        abriPaginaRepresentante();
    } else{
        alert("Usuario ou senha incorretos")
    }
}
function abriPaginaProf(){
   location.href="professor.html"
}
function abrirPaginaAluno(){
    location.href="Aluno.html"
}
function abriPaginaRepresentante(){
   location.href="abriPAginaRepresentante"  
}

function adi() {
  var materia = document.getElementById("materia").value;
  var data = document.getElementById("data").value;
  var conteudo = document.getElementById("conteudo").value;
  var arquivo = document.getElementById("arquivo").value;
  var postId = "post-" + Date.now();
  var post = document.createElement("div");
  post.id = postId;
  post.classList.add("post");
  post.innerHTML = "<h2>materia</h2>" + materia + "<p><h2>data</h2>" + data + "</p><p><h2>conteudo</h2>" + conteudo + "</p><p><h2>arquivo</h2>" + arquivo + "</p>";
// Cria um objeto com as informações da atividade
var atividade = {
  id: postId,
  materia: materia,
  data: data,
  conteudo: conteudo,
  arquivo: arquivo
};

// Obtém a lista de atividades do localStorage
var atividades = JSON.parse(localStorage.getItem("atividades")) || [];

// Adiciona a nova atividade à lista
atividades.push(atividade);

// Armazena a lista atualizada de atividades no localStorage
localStorage.setItem("atividades", JSON.stringify(atividades));

// Adiciona a div da atividade ao documento
document.body.appendChild(post);
}
function mostrarAtividades() {
  // Obtém a lista de atividades do localStorage
  var atividades = JSON.parse(localStorage.getItem("atividades")) || [];

  // Cria uma div para cada atividade na lista
  atividades.forEach(function(atividade) {
    var post = document.createElement("div");
    post.id = atividade.id;
    post.classList.add("post");
    post.innerHTML = "<h2>materia</h2>" + atividade.materia + "<p><h2>data</h2>" + atividade.data + "</p><p><h2>conteudo</h2>" + atividade.conteudo + "</p><p><h2>arquivo</h2>" + atividade.arquivo + "</p>";
    document.body.appendChild(post);
  });
}
window.onload = function() {
  mostrarAtividades();
};

function mostrarAtividades() {
  // Obtém a lista de atividades do localStorage
  var atividades = JSON.parse(localStorage.getItem("atividades")) || [];

  // Seleciona o elemento que receberá as divs com as atividades do professor
  var listaAtividades = document.querySelector("#atividades-lista");

  // Limpa o conteúdo anterior do elemento
  listaAtividades.innerHTML = "";

  // Cria uma div para cada atividade na lista
  atividades.forEach(function(atividade) {
    var atividadeDiv = document.createElement("div");
    atividadeDiv.id = atividade.id;
    atividadeDiv.innerHTML =
      "<h2>Materia</h2>" +
      atividade.materia +
      "<p><h2>data</h2>" +
      atividade.data +
      "</p><p><h2>conteudo</h2>" +
      atividade.conteudo +
      "</p><p><h2>arquivo</h2>" +
      atividade.arquivo +
      "</p>";
    listaAtividades.appendChild(atividadeDiv);
  });
}