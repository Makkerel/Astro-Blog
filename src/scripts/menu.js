document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  header.addEventListener("mouseleave", () => {
    header.style.cssText = "";
  });
});
