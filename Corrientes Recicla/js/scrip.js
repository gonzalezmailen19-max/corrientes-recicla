const botonMenu = document.querySelector(".nav-toggle");
const menuNavegacion = document.querySelector(".site-nav");

if (botonMenu && menuNavegacion) {
    botonMenu.addEventListener("click", () => {
        const menuAbierto = menuNavegacion.classList.toggle("is-open");

        botonMenu.setAttribute("aria-expanded", menuAbierto);
        botonMenu.setAttribute(
            "aria-label",
            menuAbierto ? "Cerrar menú" : "Abrir menú"
        );

        botonMenu.textContent = menuAbierto ? "Cerrar ✕" : "Menú ☰";
    });

    menuNavegacion.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            menuNavegacion.classList.remove("is-open");
            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.setAttribute("aria-label", "Abrir menú");
            botonMenu.textContent = "Menú ☰";
        });
    });
}