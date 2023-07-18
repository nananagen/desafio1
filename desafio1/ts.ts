const readMoreButtons: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.read-more-button');

readMoreButtons.forEach((button: HTMLAnchorElement) => {
  button.addEventListener('click', function () {
    const postContent: HTMLElement = button.previousElementSibling as HTMLElement;
    postContent.classList.toggle('expanded');
    if (postContent.classList.contains('expanded')) {
      button.textContent = 'Mostrar menos';
    } else {
      button.textContent = 'Expand...';
    }
  });
});

const postElement: HTMLElement | null = document.getElementById('post');
if (postElement) {
  postElement.style.width = "400px"; // Largura desejada
  postElement.style.height = "200px"; // Altura desejada
}

const rectangle: HTMLElement | null = document.getElementById("rectangle");
if (rectangle) {
  rectangle.style.width = "200px";
  rectangle.style.height = "100px";
  rectangle.style.backgroundColor = "#3A4F9A";
}

setProgressBar(50); // Define o progresso da barra em 50%

window.addEventListener('DOMContentLoaded', function() {
  const postElement: HTMLElement | null = document.getElementById('post-commentslayout');
  if (postElement) {
    const windowHeight: number = window.innerHeight;
    const postHeight: number = postElement.offsetHeight;
    const verticalMargin: number = (windowHeight - postHeight) / 2;
    postElement.style.marginTop = verticalMargin + 'px';
  }
});
