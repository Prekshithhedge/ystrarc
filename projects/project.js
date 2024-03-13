
document.addEventListener("DOMContentLoaded", function () {
  const serviceButtons = document.querySelectorAll(".not");

  serviceButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const serviceName = button.parentElement.querySelector("h3").textContent;
      const url = `content.html?service=${encodeURIComponent(serviceName)}`;
      window.location.href = url;
    });
  });
});