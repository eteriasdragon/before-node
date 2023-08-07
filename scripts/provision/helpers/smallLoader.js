export function createSmallLoader() {
  const smallLoader = document.createElement("div");
  smallLoader.classList.add("small-loader-wrapper");
  smallLoader.insertAdjacentHTML('beforeend', `<div class="small-loader"></div>`);
  return smallLoader;
}