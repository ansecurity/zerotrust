// https://github.com/jgthms/bulma/issues/238 thanks!
document.getElementById("nav-toggle").addEventListener("click", toggleNav);
function toggleNav() {
    var nav = document.getElementById("nav-menu");
    var className = nav.getAttribute("class");
    if(className == "nav-right nav-menu") {
        nav.className = "nav-right nav-menu is-active";
    } else {
        nav.className = "nav-right nav-menu";
    }
}

// Array interno con frases de ciberseguridad (ejemplo breve)
const quotes = [
    "Zero Trust: no confíes, verifica siempre.",
    "La triada CIA: confidencialidad, integridad y disponibilidad.",
    "Un firewall es tan fuerte como su configuración.",
    "Si torturas los datos lo suficiente, ellos hablarán.",
    "Nunca subestimes el poder del principio de menor privilegio.",
    "Los ataques no descansan, tu defensa tampoco debería."
];

// Mostrar frase aleatoria en el header
function showRandomQuote() {
    var randIndex = Math.floor(Math.random() * quotes.length);
    var randLine = quotes[randIndex];
    document.getElementById('quote').innerHTML = randLine || "Intelligence is the ability to adapt to change.";
}

// Llamamos a la función cuando cargue el script
showRandomQuote();

document.getElementById("search-text").addEventListener("keydown", function(e) {
    // buscar con enter
    if (e.keyCode == 13) { searchHandler(); }
}, false);

function searchHandler() {
    var searchInput = document.getElementById('search-text');
    var text = searchInput.value;
    // agregar búsqueda site:example.com para limitar resultados a tu web
    window.location.href = "https://www.google.com/search?q=site:nagekar.com " + encodeURIComponent(text);
}
