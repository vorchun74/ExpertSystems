function clickHandler(event) {
  if (event.target.dataset.navigation) {
    navMenuHandler(event);
  }
}

function navMenuHandler(event) {
  event.preventDefault();
  const targetOffset = document
    .getElementById(event.target.dataset.navigation)
    .getBoundingClientRect().top;
  const offsetPosition = targetOffset - 70;
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
document.addEventListener('click', clickHandler);