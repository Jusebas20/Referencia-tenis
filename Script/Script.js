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

/* CONFIG */
const SHOW_COUNT = 6; // cuántas tarjetas se ven por defecto (las demás quedan ocultas y se muestran con "Ver más")

/* Genera tarjetas en el contenedor */
function generarTarjetas(idContenedor, listaImagenes, carpeta) {
  const cont = document.getElementById(idContenedor);
  if (!cont) return;
  cont.innerHTML = "";

  listaImagenes.forEach((img, i) => {
    const codigo = img.replace(/\.[^.]+$/, "");
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    if (i >= SHOW_COUNT) tarjeta.classList.add("oculto"); // ocultas por defecto
    tarjeta.innerHTML = `
      <img src="img/${carpeta}/${img}" alt="${codigo}" loading="lazy">
      <p>${codigo}</p>
    `;
    tarjeta.style.animationDelay = `${i * 40}ms`;
    cont.appendChild(tarjeta);
  });

  // Si hay más de SHOW_COUNT, añadimos botón Ver más / Ver menos
  const existingBtn = cont.parentNode.querySelector(".ver-mas");
  if (existingBtn) existingBtn.remove();

  if (listaImagenes.length > SHOW_COUNT) {
    const btn = document.createElement("button");
    btn.className = "ver-mas";
    btn.type = "button";
    btn.textContent = "Ver más";
    btn.dataset.open = "false";

    btn.addEventListener("click", () => {
      const ocultas = cont.querySelectorAll(".tarjeta.oculto");
      const open = btn.dataset.open === "true";
      ocultas.forEach(t => {
        t.classList.toggle("oculto", open); // si open=true -> volver a ocultar
      });
      btn.dataset.open = (!open).toString();
      btn.textContent = open ? "Ver más" : "Ver menos";
    });

    cont.parentNode.insertBefore(btn, cont.nextSibling);
  }
}

/* Render inicial */
generarTarjetas("nike-grid", categorias.nike, "nike");
generarTarjetas("adidas-grid", categorias.adidas, "adidas");
generarTarjetas("sketchers-grid", categorias.sketchers, "sketchers");
generarTarjetas("otros-grid", categorias.otros, "otros");

/* Toggle al hacer click en el título: disparará el botón "Ver más" si existe */
document.querySelectorAll("h2.categoria").forEach(h => {
  h.addEventListener("click", () => {
    const cat = h.dataset.category;
    const grid = document.getElementById(`${cat}-grid`);
    if (!grid) return;
    const btn = grid.parentNode.querySelector(".ver-mas");
    // si existe, simula click del botón (evita uso de doble click; todo con single click)
    if (btn) btn.click();
    // icon rotation (clase css para rotar)
    const icon = h.querySelector(".toggle-icon");
    if (icon) icon.classList.toggle("rotated");
  });
});

/* BÚSQUEDA: usar 'input' para funcionar en móviles */
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () => {
  const q = searchBar.value.trim().toLowerCase();

  Object.keys(categorias).forEach(cat => {
    const grid = document.getElementById(`${cat}-grid`);
    if (!grid) return;
    const tarjetas = Array.from(grid.querySelectorAll(".tarjeta"));
    let anyMatch = false;

    tarjetas.forEach(t => {
      const text = (t.querySelector("p")?.textContent || "").toLowerCase();
      const matches = q === "" ? false : text.includes(q);
      if (q === "") {
        // restauramos estado por defecto: ocultas siguen ocultas, visibles visibles
        if (t.classList.contains("oculto")) t.style.display = "none";
        else t.style.display = "";
      } else {
        // mostrar coincidencias (incluso si estaban ocultas)
        t.style.display = matches ? "" : "none";
        if (matches) anyMatch = true;
      }
    });

    // si hubo resultados, aseguramos que la sección esté "abierta" visualmente
    const heading = document.querySelector(`h2.categoria[data-category="${cat}"]`);
    if (q !== "") {
      if (anyMatch && heading) heading.classList.remove("cerrado");
    } else {
      if (heading) heading.classList.remove("cerrado"); // deja en estado normal (no fuerza expandido)
      // ocultas vuelven a estar ocultas (se lo dejamos al loop anterior)
    }
  });
});
