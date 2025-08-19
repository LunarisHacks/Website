// Starfield generator
const starContainer = document.querySelector('.stars');
const numStars = 150;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.opacity = Math.random();
  starContainer.appendChild(star);
}

