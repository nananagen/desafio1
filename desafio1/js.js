var postElement = document.getElementById(post);
postElement.style.width = "400px"; // Largura desejada
postElement.style.height = "200px"; // Altura desejada

var rectangle = document.getElementById("rectangle");
rectangle.style.width = "200px";
rectangle.style.height = "100px";
rectangle.style.backgroundColor = "#3A4F9A";

function setProgressBar(progress) {
  var progressBar = document.querySelector('.progress');
  progressBar.style.width = progress + '%';
}

setProgressBar(50); 

var meuBotao = document.getElementById('return');



