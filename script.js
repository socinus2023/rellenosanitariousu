document.addEventListener("DOMContentLoaded", () => {
  // Animación de entrada
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transition = "opacity 1s";
    setTimeout(() => {
      section.style.opacity = 1;
    }, index * 300);
  });

  // Desplazamiento suave al hacer clic en los enlaces del nav
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      
      // Eliminar la clase 'active' de todos los enlaces
      document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));

      // Agregar la clase 'active' al enlace que fue clickeado
      this.classList.add('active');
    });
  });
});
