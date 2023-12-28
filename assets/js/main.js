function createSnow() {
  const snowFlake = document.createElement('div');
  snowFlake.classList.add('snow');
  snowFlake.innerText = '❄';

  // Posicionamento horizontal aleatório e a duração da animação
  snowFlake.style.left = Math.random() * 100 + '%';
  snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's';

  const card = document.querySelector('.card');
  card.appendChild(snowFlake);

  let animationDuration = parseFloat(snowFlake.style.animationDuration);

  // O tempo de remoção deve ser igual ao 'animationDuration' definido acima
  setTimeout(() => {
    snowFlake.remove();
  }, animationDuration * 1000); // Converte para milissegundos
}

// Criando os flocos de neve a cada intervalo
setInterval(createSnow, 500);

// Animações GSAP para as Imagens
let tl = gsap.timeline({ default: { duration: .65 } })

tl.fromTo('.natal-img', { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
tl.fromTo('.natal-img', { y: 0 }, { y: -10, repeat: 1, yoyo: true });
gsap.fromTo('.top-icon', { y: 0 }, { y: 45, rotation: 15, duration: 2 });