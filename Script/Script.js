// 🏷️ Listas de imágenes por categoría
const categorias = {
  nike: [
    "ZPNIKE-001.jpg",
    "ZPNIKE-002.jpg",
    "ZPNIKE-003.jpg",
    "ZPNIKE-004.jpg",
    "ZPNIKE-005.jpg",
    "ZPNIKE-006.jpg",
    "ZPNIKE-007.jpg",
    "ZPNIKE-008.jpg",
    "ZPNIKE-009.jpg",
    "ZPNIKE-010.jpg",
    "ZPNIKE-011.jpg",
    "ZPNIKE-012.jpg",
    "ZPNIKE-013.jpg",
    "ZPNIKE-014.jpg",
    "ZPNIKE-015.jpg",
    "ZPNIKE-016.jpg",
    "ZPNIKE-017.jpg",
    "ZPNIKE-018.jpg",
    "ZPNIKE-019.jpg",
    "ZPNIKE-020.jpg",
    "ZPNIKE-021.jpg",
    "ZPNIKE-022.jpg",
    "ZPNIKE-023.jpg",
    "ZPNIKE-024.jpg",
    "ZPNIKE-025.jpg",
    "ZPNIKE-026.jpg",
    "ZPNIKE-027.jpg",
    "ZPNIKE-028.jpg",
    "ZPNIKE-029.jpg",
    "ZPNIKE-030.jpg",
    "ZPNIKE-031.jpg",
    "ZPNIKE-032.jpg",
    "ZPNIKE-033.jpg",
    "ZPNIKE-034.jpg",
    "ZPNIKE-035.jpg",
    "ZPNIKE-036.jpg",
    "ZPNIKE-037.jpg",
    "ZPNIKE-038.jpg",
    "ZPNIKE-039.jpg",
    "ZPNIKE-040.jpg",
    "ZPNIKE-041.jpg",
    "ZPNIKE-042.jpg",
    "ZPNIKE-043.jpg",
    "ZPNIKE-044.jpg",
    "ZPNIKE-045.jpg",
    "ZPNIKE-046.jpg",
    "ZPNIKE-047.jpg",
    "ZPNIKE-048.jpg",
    "ZPNIKE-049.jpg",
    "ZPNIKE-050.jpg",
    "ZPNIKE-051.jpg",
    "ZPNIKE-052.jpg",
    "ZPNIKE-053.jpg",
    "ZPNIKE-054.jpg",
    "ZPNIKE-055.jpg",
    "ZPNIKE-056.jpg",
    "ZPNIKE-057.jpg",
    "ZPNIKE-058.jpg",
    "ZPNIKE-059.jpg",
    "ZPNIKE-060.jpg",
    "ZPNIKE-061.jpg",
    "ZPNIKE-062.jpg",
    "ZPNIKE-063.jpg",
    "ZPNIKE-064.jpg",
    "ZPNIKE-065.jpg",
    "ZPNIKE-066.jpg",
    "ZPNIKE-067.jpg",
    "ZPNIKE-068.jpg",
    "ZPNIKE-069.jpg",
    "ZPNIKE-070.jpg",
    "ZPNIKE-071.jpg",
    "ZPNIKE-072.jpg",
    "ZPNIKE-073.jpg"
  ],
  adidas: [
    "ZPADIDAS-001.jpg",
    "ZPADIDAS-002.jpg",
    "ZPADIDAS-003.jpg",
    "ZPADIDAS-004.jpg",
    "ZPADIDAS-005.jpg",
    "ZPADIDAS-006.jpg",
    "ZPADIDAS-007.jpg",
    "ZPADIDAS-008.jpg",
    "ZPADIDAS-009.jpg",
    "ZPADIDAS-010.jpg",
    "ZPADIDAS-011.jpg",
    "ZPADIDAS-012.jpg",
    "ZPADIDAS-013.jpg",
    "ZPADIDAS-014.jpg",
    "ZPADIDAS-015.jpg",
    "ZPADIDAS-016.jpg",
    "ZPADIDAS-017.jpg",
    "ZPADIDAS-018.jpg",
    "ZPADIDAS-019.jpg",
    "ZPADIDAS-020.jpg",
    "ZPADIDAS-021.jpg",
    "ZPADIDAS-022.jpg",
    "ZPADIDAS-023.jpg",
    "ZPADIDAS-024.jpg",
    "ZPADIDAS-025.jpg",
    "ZPADIDAS-026.jpg",
    "ZPADIDAS-027.jpg",
    "ZPADIDAS-028.jpg",
    "ZPADIDAS-029.jpg",
    "ZPADIDAS-030.jpg",
    "ZPADIDAS-031.jpg",
    "ZPADIDAS-032.jpg",
    "ZPADIDAS-033.jpg",
    "ZPADIDAS-034.jpg",
    "ZPADIDAS-035.jpg",
    "ZPADIDAS-036.jpg",
    "ZPADIDAS-037.jpg",
    "ZPADIDAS-038.jpg",
    "ZPADIDAS-039.jpg",
    "ZPADIDAS-040.jpg",
    "ZPADIDAS-041.jpg",
    "ZPADIDAS-042.jpg",
    "ZPADIDAS-043.jpg",
    "ZPADIDAS-044.jpg",
    "ZPADIDAS-045.jpg",
    "ZPADIDAS-046.jpg",
    "ZPADIDAS-047.jpg",
    "ZPADIDAS-048.jpg",
    "ZPADIDAS-049.jpg",
    "ZPADIDAS-050.jpg",
    "ZPADIDAS-051.jpg",
    "ZPADIDAS-052.jpg",
    
  ],
  sketchers: [
    "ZPSKET-001.jpg",
    "ZPSKET-002.jpg",
    "ZPSKET-003.jpg",
    "ZPSKET-004.jpg",
    "ZPSKET-005.jpg",
    "ZPSKET-006.jpg",
    "ZPSKET-007.jpg",
    "ZPSKET-008.jpg",
    "ZPSKET-009.jpg",
    "ZPSKET-010.jpg",
    "ZPSKET-011.jpg",
    "ZPSKET-012.jpg",
    "ZPSKET-013.jpg",
    "ZPSKET-014.jpg",
    "ZPSKET-015.jpg",
    "ZPSKET-016.jpg",
    "ZPSKET-017.jpg",
    "ZPSKET-018.jpg",
    "ZPSKET-019.jpg",
    "ZPSKET-020.jpg",
    "ZPSKET-021.jpg",
    "ZPSKET-022.jpg",
    "ZPSKET-023.jpg",

  ],
  otros: [
    "ZPOTRO-001.jpg",
    "ZPOTRO-002.jpg",
    "ZPOTRO-003.jpg",
    "ZPOTRO-004.jpg",
    "ZPOTRO-005.jpg",
    "ZPOTRO-006.jpg",
    "ZPOTRO-007.jpg",
    "ZPOTRO-008.jpg",
    "ZPOTRO-009.jpg",
    "ZPOTRO-010.jpg",
    "ZPOTRO-011.jpg",
    "ZPOTRO-012.jpg",
    "ZPOTRO-013.jpg",
    "ZPOTRO-014.jpg",
    "ZPOTRO-015.jpg",
    "ZPOTRO-016.jpg",
    "ZPOTRO-017.jpg",
    "ZPOTRO-018.jpg",
    "ZPOTRO-019.jpg",
    "ZPOTRO-020.jpg",
    "ZPOTRO-021.jpg",
    "ZPOTRO-022.jpg",
    "ZPOTRO-023.jpg",
    "ZPOTRO-024.jpg",
    "ZPOTRO-025.jpg",
    "ZPOTRO-026.jpg",
    "ZPOTRO-027.jpg",
    "ZPOTRO-028.jpg",
    "ZPOTRO-029.jpg",
    "ZPOTRO-030.jpg",
    "ZPOTRO-031.jpg",
    "ZPOTRO-032.jpg",
    "ZPOTRO-033.jpg",
    "ZPOTRO-034.jpg",
    "ZPOTRO-035.jpg",
    "ZPOTRO-036.jpg",
    "ZPOTRO-037.jpg",
    "ZPOTRO-038.jpg",
    "ZPOTRO-039.jpg",
    "ZPOTRO-040.jpg",
    "ZPOTRO-041.jpg",
    "ZPOTRO-042.jpg",
    "ZPOTRO-043.jpg",
    "ZPOTRO-044.jpg",
    "ZPOTRO-045.jpg",
    "ZPOTRO-046.jpg",
    "ZPOTRO-047.jpg",
    "ZPOTRO-048.jpg",
    "ZPOTRO-049.jpg",
    "ZPOTRO-050.jpg",
    "ZPOTRO-051.jpg",
  ]
};

// 📦 Generar tarjetas
function generarTarjetas(idContenedor, listaImagenes, carpeta) {
  const contenedor = document.getElementById(idContenedor);
  listaImagenes.forEach((img) => {
    const codigo = img.replace(".jpg", "");
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `
      <img src="img/${carpeta.toLowerCase()}/${img}" alt="${codigo}">
      <p>${codigo}</p>
    `;
    contenedor.appendChild(tarjeta);
  });
}

// 🖼️ Renderizar cada sección
generarTarjetas("nike-grid", categorias.nike, "NIKE");
generarTarjetas("adidas-grid", categorias.adidas, "ADIDAS");
generarTarjetas("sketchers-grid", categorias.sketchers, "SKETCHERS");
generarTarjetas("otros-grid", categorias.otros, "OTROS");

// 🔽 Toggle categorías con click y doble click en el título
document.querySelectorAll("h2.categoria").forEach((titulo) => {
  // Un click → desplegar
  titulo.addEventListener("click", () => {
    if (titulo.classList.contains("cerrado")) {
      titulo.classList.remove("cerrado");
      const icono = titulo.querySelector(".toggle-icon");
      if (icono) icono.classList.remove("rotado");
    }
  });

  // Doble click → recoger
  titulo.addEventListener("dblclick", () => {
    if (!titulo.classList.contains("cerrado")) {
      titulo.classList.add("cerrado");
      const icono = titulo.querySelector(".toggle-icon");
      if (icono) icono.classList.add("rotado");
    }
  });
});

// 🔍 Filtro de búsqueda
document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const filtro = e.target.value.toLowerCase();
  document.querySelectorAll(".tarjeta").forEach((tarjeta) => {
    const codigo = tarjeta.querySelector("p").textContent.toLowerCase();
    tarjeta.style.display = codigo.includes(filtro) ? "block" : "none";
  });
});

// 🚀 Función para abrir/cerrar categoría desde el menú
function toggleCategoria(id, action) {
  const titulo = document.querySelector(`h2#${id}.categoria`);
  const icono = titulo.querySelector(".toggle-icon");
  if (!titulo) return;

  if (action === "abrir" && titulo.classList.contains("cerrado")) {
    titulo.classList.remove("cerrado");
    if (icono) icono.classList.remove("rotado");
  } else if (action === "cerrar" && !titulo.classList.contains("cerrado")) {
    titulo.classList.add("cerrado");
    if (icono) icono.classList.add("rotado");
  }
}

// 🎯 Detectar clicks y doble clicks en el menú
document.querySelectorAll(".navbar a").forEach(enlace => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    const id = enlace.getAttribute("href").replace("#", "");
    const titulo = document.querySelector(`h2#${id}.categoria`);
    if (!titulo) return;

    // Abrir/cerrar con un click
    titulo.classList.toggle("cerrado");
    const icono = titulo.querySelector(".toggle-icon");
    if (icono) icono.classList.toggle("rotado");

    // Hacer scroll suave
    titulo.scrollIntoView({ behavior: "smooth" });
  });
});