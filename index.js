// 🔄 Pantalla de carga mejorada
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  // Ocultar loader después de 3 segundos
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.8s ease";
    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.add("loaded");
    }, 800);
  }, 3000); // duración total antes de desaparecer
});

// 📱 Menú responsive
// 📱 Menú responsive mejorado
const toggle = document.getElementById("menu-toggle");
const navList = document.querySelector("nav ul");

// Abrir / cerrar menú al hacer clic en el ícono
toggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  toggle.classList.toggle("active");
});

// Cerrar menú cuando se hace clic en un enlace
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    toggle.classList.remove("active");
  });
});

// Cerrar si se hace clic fuera del menú
document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
    toggle.classList.remove("active");
  }
});


// 💫 Animación al hacer scroll
const sections = document.querySelectorAll(".fade-in");
const mostrarSecciones = () => {
  const scrollY = window.scrollY + window.innerHeight * 0.85;
  sections.forEach((sec) => {
    if (scrollY > sec.offsetTop) {
      sec.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", mostrarSecciones);
mostrarSecciones();

const btnVerMas = document.getElementById("btn-ver-mas");
const docentesOcultos = document.querySelectorAll(".tarjeta.oculto");
let mostrandoTodo = false;

btnVerMas.addEventListener("click", () => {
  if (!mostrandoTodo) {
    docentesOcultos.forEach(d => d.classList.remove("oculto"));
    btnVerMas.textContent = "Mostrar menos";
    mostrandoTodo = true;
  } else {
    docentesOcultos.forEach(d => d.classList.add("oculto"));
    btnVerMas.textContent = "Mostrar más";
    mostrandoTodo = false;
  }
});



  document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("ver-mas-eventos");
    const eventosOcultos = document.querySelectorAll(".tarjeta-evento.oculto");
    let mostrando = false;

    boton.addEventListener("click", () => {
      mostrando = !mostrando;
      eventosOcultos.forEach(e => e.style.display = mostrando ? "block" : "none");
      boton.textContent = mostrando ? "Mostrar menos" : "Mostrar más";
    });
  });

  
document.addEventListener("DOMContentLoaded", () => {

  // ====== Datos (extraídos del PDF - página 21 y tablas relacionadas) ======
  // Si deseas editar un curso, cambia el objeto correspondiente.
  const planData = [
    { semestre: "1er Semestre", cursos: [
        {codigo:"SI101", nombre:"Introducción a la Ingeniería de Sistemas", creditos:3, requisito:"Ninguno"},
        {codigo:"CB101", nombre:"Complemento de Matemáticas", creditos:4, requisito:"Ninguno"},
        {codigo:"ED101", nombre:"Lenguaje y Comunicación", creditos:3, requisito:"Ninguno"},
        {codigo:"ED102", nombre:"Redacción Técnica y Científica", creditos:2, requisito:"Ninguno"},
        {codigo:"DP101", nombre:"Cultura de Paz y Defensa Nacional", creditos:2, requisito:"Ninguno"},
        {codigo:"CB104", nombre:"Ecología General y Recursos Naturales", creditos:3, requisito:"Ninguno"},
        {codigo:"SI102", nombre:"Algoritmos", creditos:3, requisito:"Ninguno"},
        {codigo:"ED103", nombre:"Actividades Culturales y/o Deportivas", creditos:1, requisito:"Ninguno"},
      ]
    },
    { semestre: "2do Semestre", cursos: [
        {codigo:"CB201", nombre:"Álgebra Lineal", creditos:4, requisito:"Complemento de Matematica ✔️"},
        {codigo:"CB103", nombre:"Cálculo I", creditos:4, requisito:"Complemento de Matematica ✔️"},
        {codigo:"CB202", nombre:"Física I", creditos:4, requisito:"Ninguno"},
        {codigo:"CB102", nombre:"Química General", creditos:4, requisito:"Ninguno"},
        {codigo:"SI103", nombre:"Algoritmos y Programación", creditos:3, requisito:"Algoritmos ✔️"},
        {codigo:"ET101", nombre:"Sociología Rural y Amazónica", creditos:2, requisito:"Ninguno"},
        {codigo:"SI104", nombre:"Diseño para Ingeniería", creditos:2, requisito:"+10 Creditos"},
      ]
    },
    { semestre: "3er Semestre", cursos: [
        {codigo:"CB203", nombre:"Cálculo II", creditos:4, requisito:"Calculo I ✔️"},
        {codigo:"CB204", nombre:"Estadística General", creditos:4, requisito:"Ninguno"},
        {codigo:"CB205", nombre:"Física II", creditos:4, requisito:"Fisica I ✔️"},
        {codigo:"CB206", nombre:"Investigación de Operaciones Aplicada a la Ingeniería", creditos:3, requisito:"Algebra Lineal ✔️"},
        {codigo:"CA101", nombre:"Economía General", creditos:3, requisito:"+43 Creditos"},
        {codigo:"SI201", nombre:"Lenguaje de Programación Estructurado", creditos:3, requisito:"Algoritmos y Programación ✔️"},
        {codigo:"ET103", nombre:"Inglés", creditos:2, requisito:"20 Creditos aprobados."},
      ]
    },
    { semestre: "4to Semestre", cursos: [
        {codigo:"SI202", nombre:"Estadística aplicada a la ingenieria", creditos:3, requisito:"Estadistica General ✔️"},
        {codigo:"CB207", nombre:"Cálculo III", creditos:4, requisito:"Calculo II ✔️"},
        {codigo:"SI203", nombre:"Circuitos Electrónicos", creditos:3, requisito:"Fisica II ✔️"},
        {codigo:"SI204", nombre:"Análisis y Diseño de Sistemas I", creditos:3, requisito:"50 Creditos aprobados"},
        {codigo:"SI205", nombre:"Base de Datos I", creditos:3, requisito:"Lenguaje de Programación Estructurado ✔️"},
        {codigo:"SI206", nombre:"Programación Orientada a Objetos", creditos:3, requisito:"Lenguaje de Programación Estructurado ✔️"},
        {codigo:"SI207", nombre:"Teoría General de Sistemas", creditos:2, requisito:"50 Creditos aprobados."},
      ]
    },
    { semestre: "5to Semestre", cursos: [
        {codigo:"SI303", nombre:"Sistemas Digitales", creditos:3, requisito:"Circuitos Electronicos ✔️"},
        {codigo:"SI304", nombre:"Análisis y Diseño de Sistemas II", creditos:3, requisito:"ADS I ✔️"},
        {codigo:"SI305", nombre:"Ingenieria Administrativa", creditos:3, requisito:"Estadistica Aplicada a la Ingenieria ✔️"},
        {codigo:"SI306", nombre:"Teoría General de Autómatas de Programación", creditos:3, requisito:"POO ✔️"},
        {codigo:"SI308", nombre:"Dinámica y Simulación de Sistemas", creditos:3, requisito:"Teoria General de Sistemas ✔️"},
        {codigo:"SI313", nombre:"Métodos Numéricos Aplicados a la Ingenieria", creditos:3, requisito:"Calculo III ✔️"},
        {codigo:"SI402", nombre:"Base de Datos II", creditos:3, requisito:"Base de Datos I ✔️"},
      ]
    },
    { semestre: "6to Semestre", cursos: [
        {codigo:"SI301", nombre:"Gestión Financiera y Procesos de Negocio", creditos:3, requisito:"Ingenieria Administrativa ✔️"},
        {codigo:"SI302", nombre:"Arquitectura del Computador", creditos:3, requisito:"Sistemas Digitales ✔️"},
        {codigo:"SI309", nombre:"Ingeniería de Software", creditos:3, requisito:"ADS II ✔️"},
        {codigo:"SI310", nombre:"Desarrollo de Aplicaciones Web I", creditos:3, requisito:"90 Creditos aprobados."}, // placeholder
        {codigo:"SI311", nombre:"Big Data", creditos:3, requisito:"Base de Datos II ✔️"},
        {codigo:"IS204", nombre:"Fundamento de Redes", creditos:3, requisito:"90 Creditos aprobados."},
      ]
    },
    { semestre: "7mo Semestre", cursos: [
        {codigo:"SI401", nombre:"Gobierno Electrónico y Tecnologías de Información", creditos:3, requisito:"Gestión Financiera ✔️"},
        {codigo:"SI403", nombre:"Autómatas y Control de Procesos", creditos:3, requisito:"Arquitectura del Computador ✔️"},
        {codigo:"SI404", nombre:"Cloud Computing", creditos:3, requisito:"Ingeniería de Software ✔️"},
        {codigo:"SI408", nombre:"Desarrollo de Soluciones de Software Libre", creditos:3, requisito:"D.A. Web I ✔️"},
        {codigo:"SI302", nombre:"Estructura de Sistemas Operativos", creditos:3, requisito:"Arquitectura del Computador ✔️"},
        {codigo:"SI302", nombre:"Administración de Redes y Telecomunicaciones", creditos:3, requisito:"Fundamento de Redes ✔️"},
      ]
    },
    { semestre: "8vo Semestre", cursos: [
        {codigo:"SI405", nombre:"Aplicaciones Móviles I", creditos:3, requisito:"D.A. de Software Libre ✔️"},
        {codigo:"SI406", nombre:"Seguridad en Redes", creditos:3, requisito:"Administración de Redes ✔️"},
        {codigo:"SI407", nombre:"Ingeniería Económica", creditos:3, requisito:"Gobierno Electronico ✔️"},
        {codigo:"SI409", nombre:"Metodología de la Investigación", creditos:3, requisito:"140 Creditos aprobados."},
        {codigo:"SI409", nombre:"Redes Neuronales y Logica Difusa", creditos:3, requisito:"Automatas y Control de Procesos ✔️"},
        {codigo:"SI409", nombre:"Electivo I", creditos:3, requisito:"Ninguno"},

      ]
    },
    { semestre: "9no Semestre", cursos: [
        {codigo:"SI501", nombre:"Contabilidad, Costos y Presupuestos de Proyectos de TI", creditos:4, requisito:"Ingeniería Economica ✔️"},
        {codigo:"SI502", nombre:"Formulación y Evaluación de Proyectos de TI", creditos:3, requisito:"Ingeniería Economica ✔️"},
        {codigo:"SI503", nombre:"Calidad Aplicada a los Sistemas", creditos:3, requisito:"160 Creditos aprobados."},
        {codigo:"SI504", nombre:"Legislación y Delitos Informáticos", creditos:2, requisito:"160 Creditos aprobados."},
        {codigo:"SI506", nombre:"Seminario Taller de Tesis I", creditos:3, requisito:"Metodología de la investigación ✔️"},
        {codigo:"SI506", nombre:"Practicas Pre-profesionales", creditos:0, requisito:"160 Creditos aprobados."},
        {codigo:"SI506", nombre:"Sistemas Distribuidos", creditos:3, requisito:"Seguridad en Redes ✔️"},
        {codigo:"SI506", nombre:"Electivo II", creditos:3, requisito:"Ninguno"},
      ]
    },
    { semestre: "10mo Semestre", cursos: [
        {codigo:"SI507", nombre:"Gerencia de Tecnologías de Información", creditos:3, requisito:"C.C.P a Proyectos de TI✔️"},
        {codigo:"SI508", nombre:"Marketing y Comercio Electrónico", creditos:3, requisito:"F.E. de Proyectos de TI ✔️"},
        {codigo:"SI509", nombre:"Deontología Profesional", creditos:2, requisito:"Calidad Aplicada a los Sistemas ✔️"},
        {codigo:"SI510", nombre:"Auditoría de Sistemas", creditos:3, requisito:"Legislacion y Delitos informaticos ✔️"},
        {codigo:"SI511", nombre:"Seminario Taller de Tesis II", creditos:3, requisito:"Seminario Tesis I ✔️"},
        {codigo:"SI511", nombre:"Electivo III", creditos:3, requisito:"Ninguno"},
      ]
    },
  ];

  // ====== Funciones para generar el HTML del acordeón ======
  const acordeon = document.getElementById("acordeon-semestres");

  function crearSemestreBlock(semObj, index) {
    const sem = document.createElement("div");
    sem.className = "semestre";
    sem.id = `semestre-${index+1}`;

    // Header
    const head = document.createElement("div");
    head.className = "semestre-head";
    head.innerHTML = `<h3>${semObj.semestre}</h3>
                      <div class="info"><span class="credits-summary" data-idx="${index}"></span></div>
                      <div class="chev">▾</div>`;
    sem.appendChild(head);

    // Body
    const body = document.createElement("div");
    body.className = "semestre-body";

    // cursos grid
    const grid = document.createElement("div");
    grid.className = "cursos-grid";

    let totalCred = 0;
    semObj.cursos.forEach(c => {
      const card = document.createElement("div");
      card.className = "curso-card";
      card.innerHTML = `
        <div class="curso-top">
          <div class="codigo">${c.codigo}</div>
          <div class="nombre">${c.nombre}</div>
        </div>
        <div class="curso-meta">
          <div><strong>Créditos:</strong> ${c.creditos ?? "-"}</div>
          <div><strong>Requisito:</strong> ${c.requisito ?? "-"}</div>
        </div>
      `;
      grid.appendChild(card);
      totalCred += Number(c.creditos) || 0;
    });

    body.appendChild(grid);

    // total créditos
    const total = document.createElement("div");
    total.className = "total-credits";
    total.textContent = `Total de créditos del semestre: ${totalCred}`;
    body.appendChild(total);

    sem.appendChild(body);

    // Set summary text in head
    const summarySpan = head.querySelector(".credits-summary");
    summarySpan.textContent = `${semObj.cursos.length} asignaturas • ${totalCred} créditos`;

    // toggle open/close
    head.addEventListener("click", () => {
      const isOpen = sem.classList.toggle("open");
      // rotate chevron (simple visual)
      const chev = head.querySelector(".chev");
      chev.textContent = isOpen ? "▴" : "▾";
    });

    return sem;
  }

  // render all semesters
  planData.forEach((s, idx) => {
    acordeon.appendChild(crearSemestreBlock(s, idx));
  });

  // controls: expandir / colapsar todo
  const btnExpand = document.getElementById("expandir-todo");
  const btnCollapse = document.getElementById("colapsar-todo");
  if (btnExpand) {
    btnExpand.addEventListener("click", () => {
      document.querySelectorAll(".semestre").forEach(s => {
        s.classList.add("open");
        s.querySelector(".semestre-head .chev").textContent = "▴";
      });
      window.scrollTo({top: document.getElementById('plan-estudios').offsetTop - 60, behavior: 'smooth'});
    });
  }
  if (btnCollapse) {
    btnCollapse.addEventListener("click", () => {
      document.querySelectorAll(".semestre").forEach(s => {
        s.classList.remove("open");
        s.querySelector(".semestre-head .chev").textContent = "▾";
      });
    });
  }

});

// Modal de preventa
// ==========================
// 🛍️ MODAL DE PREVENTA (CORREGIDO)
// ==========================
// ==========================
// 🛍️ MODAL DE PREVENTA (FUNCIONAL Y SEGURO)
// ==========================
window.addEventListener("load", () => {
  const modal = document.getElementById("modal-producto");
  const btnVerDetalles = document.getElementById("Ver-detalles");
  const cerrarModal = document.querySelector("#modal-producto .cerrar");

  // Comprobación para evitar errores si algo no existe
  if (!modal || !btnVerDetalles || !cerrarModal) {
    console.warn("⚠️ No se encontró el modal o el botón de detalles.");
    return;
  }

  btnVerDetalles.addEventListener("click", () => {
    modal.style.display = "flex"; // usa flex para centrar mejor el contenido
    document.body.style.overflow = "hidden";
  });

  cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});



// DOMContentLoaded







