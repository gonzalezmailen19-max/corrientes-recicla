// ========================================
// CORRIENTES RECICLA
// MENÚ DE NAVEGACIÓN
// ========================================

const botonMenu = document.querySelector(".nav-toggle");
const menuNavegacion = document.querySelector(".site-nav");

if (botonMenu && menuNavegacion) {

    // ABRIR Y CERRAR EL MENÚ

    botonMenu.addEventListener("click", () => {

        const menuAbierto = menuNavegacion.classList.toggle("is-open");

        botonMenu.setAttribute("aria-expanded", menuAbierto);

        botonMenu.setAttribute(
            "aria-label",
            menuAbierto ? "Cerrar menú" : "Abrir menú"
        );

        botonMenu.textContent = menuAbierto
            ? "Cerrar ✕"
            : "Menú ☰";

    });


    // CERRAR EL MENÚ AL SELECCIONAR UN ENLACE

    menuNavegacion.querySelectorAll("a").forEach((enlace) => {

        enlace.addEventListener("click", () => {

            menuNavegacion.classList.remove("is-open");

            botonMenu.setAttribute("aria-expanded", "false");

            botonMenu.setAttribute("aria-label", "Abrir menú");

            botonMenu.textContent = "Menú ☰";

        });

    });


    // CERRAR EL MENÚ AL PRESIONAR ESCAPE

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {

            menuNavegacion.classList.remove("is-open");

            botonMenu.setAttribute("aria-expanded", "false");

            botonMenu.setAttribute("aria-label", "Abrir menú");

            botonMenu.textContent = "Menú ☰";

        }

    });


    // CERRAR EL MENÚ AL VOLVER A PANTALLA GRANDE

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            menuNavegacion.classList.remove("is-open");

            botonMenu.setAttribute("aria-expanded", "false");

            botonMenu.setAttribute("aria-label", "Abrir menú");

            botonMenu.textContent = "Menú ☰";

        }

    });

}
