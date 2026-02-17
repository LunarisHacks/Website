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

// Countdown Timer
(function () {
  const opening  = new Date('2026-03-07T09:00:00');  // March 7 9:00 AM, change when date is confirmed 
  const deadline = new Date('2026-03-07T20:00:00');  // March 7 8:00 PM, change when date is confirmed 

  const labelEl   = document.getElementById('countdown-label');
  const dateEl    = document.getElementById('countdown-date');
  const daysEl    = document.getElementById('cd-days');
  const hoursEl   = document.getElementById('cd-hours');
  const minsEl    = document.getElementById('cd-minutes');
  const secsEl    = document.getElementById('cd-seconds');
  const gridEl    = document.querySelector('.countdown-grid');
  const endedEl   = document.getElementById('countdown-ended');

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now = new Date();
    let target, phase;

    if (now < opening) {
      target = opening;
      phase  = 'opening';
    } else if (now < deadline) {
      target = deadline;
      phase  = 'deadline';
    } else {
      phase = 'ended';
    }

    if (phase === 'ended') {
      gridEl.style.display  = 'none';
      dateEl.style.display  = 'none';
      endedEl.style.display = 'block';
      labelEl.textContent   = 'Lunaris Hacks';
      clearInterval(timerInterval);
      return;
    }

    if (phase === 'opening') {
      labelEl.textContent   = 'Opening Ceremony';
      dateEl.innerHTML      = 'March 7, 2026 &mdash; 9:00 AM';
    } else {
      labelEl.textContent   = 'Submission Deadline';
      dateEl.innerHTML      = 'March 7, 2026 &mdash; 8:00 PM';
    }

    const diff   = target - now;
    const days   = Math.floor(diff / 86400000);
    const hours  = Math.floor((diff % 86400000) / 3600000);
    const mins   = Math.floor((diff % 3600000)  / 60000);
    const secs   = Math.floor((diff % 60000)    / 1000);

    daysEl.textContent  = pad(days);
    hoursEl.textContent = pad(hours);
    minsEl.textContent  = pad(mins);
    secsEl.textContent  = pad(secs);
  }

  tick();
  const timerInterval = setInterval(tick, 1000);
})();
