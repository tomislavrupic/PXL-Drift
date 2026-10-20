'use strict';
const button = document.querySelector('#motion-toggle');
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = preference.matches;
function updateMotion() {
  document.body.classList.toggle('motion-paused', paused || document.hidden);
  button.setAttribute('aria-pressed', String(paused));
  button.textContent = paused ? 'Resume page animation' : 'Pause page animation';
  if (preference.matches) {
    button.textContent = 'Reduced motion enabled';
    button.disabled = true;
  } else button.disabled = false;
}
button.addEventListener('click', () => { paused = !paused; updateMotion(); });
preference.addEventListener('change', () => { paused = preference.matches; updateMotion(); });
document.addEventListener('visibilitychange', () => {
  if (document.hidden) document.querySelectorAll('video').forEach(video => video.pause());
  updateMotion();
});
updateMotion();
