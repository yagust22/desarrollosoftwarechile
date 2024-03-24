let valueDisplay = document.querySelectorAll(".num");
let interval = 4000;

function aniamcion() {
  valueDisplay.forEach((valueDisplay) => {
    let inicioValor = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duracion = Math.floor(interval / endValue);

    valueDisplay.style.fontSize = "30px";
    let tiempo = setInterval(function () {
      inicioValor += 1;
      valueDisplay.textContent = inicioValor;
      if (inicioValor == endValue) {
        clearInterval(tiempo);
      }
    }, duracion);
  });
}
const imagen1 = document.getElementById("img1");
const cargar_imagen = (entradas, obersvador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      aniamcion();
    }
  });
};
const obersvador = new IntersectionObserver(cargar_imagen, {
  root: null,
  rootMargin: "0px 0px 0px 0px ",
  threshold: 1.0,
});
obersvador.observe(imagen1);

//script proyectos click imagen//
document.addEventListener("click", function (e) {
  let texto_proyecto1 = document.querySelector(".base-datos");
  let texto_proyecto2 = document.querySelector(".harrypotter");
  let texto_proyecto3 = document.querySelector(".tecnologia");
  let texto_proyecto4 = document.querySelector(".conversion-monedas");
  let texto_proyecto5 = document.querySelector(".startup");

  let texto_proyecto6 = document.querySelector(".Poke-info");

  console.log(texto_proyecto6);

  console.log(texto_proyecto1);
  let texto_modal = document.querySelector(".texto-modal");

  console.log(e);
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    if (src === "img/pizzeria.jpg") {
      texto_modal.innerHTML = texto_proyecto1.textContent;
    } else if (src == "img/proyecto3.png") {
      texto_modal.innerHTML = texto_proyecto2.textContent;
    } else if (src == "img/24x7serviciosgenerales.png") {
      texto_modal.innerHTML = texto_proyecto3.textContent;
    } else if (src == "img/likeme.jpg") {
      texto_modal.innerHTML = texto_proyecto4.textContent;
    } else if (src == "img/poke-info.jpg") {
      texto_modal.innerHTML = texto_proyecto6.textContent;
    } else if (src == "img/proyecto5.png") {
      texto_modal.innerHTML = texto_proyecto5.textContent;
    }
    document.querySelector(".modal-img").src = src;
    document.querySelector(".capa-a");
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-popup")
    );
    myModal.show();
  }
});
