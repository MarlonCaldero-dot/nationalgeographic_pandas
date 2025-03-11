// Función para cambiar el tema de la página
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    // Cambiar el ícono del botón según el tema actual
    let themeIcon = document.getElementById("theme-icon");
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.textContent = "☀️"; // Sol para modo oscuro
    } else {
        themeIcon.textContent = "🌙"; // Luna para modo claro
    }
}

// Función para mostrar/ocultar la información adicional
function toggleInfo() {
    let infoText = document.getElementById("extra-info");

    if (infoText.classList.contains("hidden")) {
        infoText.classList.remove("hidden"); // Mostrar información
    } else {
        infoText.classList.add("hidden"); // Ocultar información
    }
}
