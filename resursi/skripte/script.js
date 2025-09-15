document.addEventListener("DOMContentLoaded", () => {
  let trenutni = 0;
  const slajdovi = document.querySelectorAll('.slajd');
  const dugmeNext = document.querySelector('.slajder-sledeci');
  const dugmePrev = document.querySelector('.slajder-prosli');
  const slajder = document.querySelector('.slajder');
  let autoPlay;
  const burgerDugmad = document.querySelectorAll(".burger-dugme");
  const mobilniNavigacija = document.querySelector(".mobilni-navigacija");

  burgerDugmad.forEach(dugme => {
    dugme.addEventListener("click", () => {
      mobilniNavigacija.classList.toggle("otvoren");
      document.body.classList.toggle("noscroll");
    });
  });




  function prikaziSlajd(index) {
    slajdovi.forEach(slajd => slajd.classList.remove('aktivan'));
    slajdovi[index].classList.add('aktivan');
  }

  function sledeciSlajd() {
    trenutni = (trenutni + 1) % slajdovi.length;
    prikaziSlajd(trenutni);
  }

  function prethodniSlajd() {
    trenutni = (trenutni - 1 + slajdovi.length) % slajdovi.length;
    prikaziSlajd(trenutni);
  }

  function pokreniAutoPlay() {
    autoPlay = setInterval(sledeciSlajd, 4000);
  }

  function zaustaviAutoPlay() {
    clearInterval(autoPlay);
  }

  // Dugmići
  dugmeNext.addEventListener('click', sledeciSlajd);
  dugmePrev.addEventListener('click', prethodniSlajd);

  // Pauziraj kad je miš iznad
  slajder.addEventListener('mouseenter', zaustaviAutoPlay);
  slajder.addEventListener('mouseleave', pokreniAutoPlay);

  // Prikaži prvi i pokreni autoplay
  prikaziSlajd(trenutni);
  pokreniAutoPlay();
});

// Selektuj sve dugmadi za tamni režim
const dugmeTamni = document.querySelectorAll(".upali-rezim");

// Proveri localStorage i primeni režim ako je sačuvan
if (localStorage.getItem("mode") === "tamni") {
  document.body.classList.add("tamni-rezim");
} else {
  document.body.classList.remove("tamni-rezim");
}

// Dodaj event listener za sva dugmad
dugmeTamni.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("tamni-rezim");

    // Sačuvaj stanje u localStorage
    if (document.body.classList.contains("tamni-rezim")) {
      localStorage.setItem("mode", "tamni");
    } else {
      localStorage.setItem("mode", "svetli");
    }
  });
});
  const dugmeVece = document.getElementById('dugme-vece-slova');
  const dugmeManje = document.getElementById('dugme-manje-slova');
  const dugmeVeceMobilni = document.getElementById('dugme-vece-slova-mobilni');
  const dugmeManjeMobilni = document.getElementById('dugme-manje-slova-mobilni');
  let savedFont = localStorage.getItem('fontSize');

  const body = document.body;
    if(savedFont){
        body.style.fontSize = savedFont + "px";
    }

    dugmeVece.addEventListener('click', () => {
        const style = window.getComputedStyle(body).fontSize;
        let size = parseFloat(style);
        size += 2;
        body.style.fontSize = size + 'px';
        localStorage.setItem('fontSize', size);
    });

    dugmeManje.addEventListener('click', () => {
        const style = window.getComputedStyle(body).fontSize;
        let size = parseFloat(style);
        size -= 2;
        body.style.fontSize = size + 'px';
        localStorage.setItem('fontSize', size);
    });
    dugmeVeceMobilni.addEventListener('click', () => {
        const style = window.getComputedStyle(body).fontSize;
        let size = parseFloat(style);
        size += 2;
        body.style.fontSize = size + 'px';
        localStorage.setItem('fontSize', size);
    });

    dugmeManjeMobilni.addEventListener('click', () => {
        const style = window.getComputedStyle(body).fontSize;
        let size = parseFloat(style);
        size -= 2;
        body.style.fontSize = size + 'px';
        localStorage.setItem('fontSize', size);
    });


document.addEventListener("DOMContentLoaded", () => {
  const forma = document.querySelector(".kontakt-forma");
  const modal = document.getElementById("modal-poruka");
  const zatvoriBtn = document.getElementById("zatvori-modal");

  // Polja forme (redosledom)
  const ime = forma.querySelector("input[type='text']");
  const email = forma.querySelector("input[type='email']");
  const poruka = forma.querySelector("textarea");

  function validacija() {
    let validno = true;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Obriši stare greške
    forma.querySelectorAll(".greska").forEach((el) => el.remove());

    // Ime
    if (!ime.value.trim()) {
      prikaziGresku(ime, "Ime i prezime je obavezno.");
      validno = false;
    }

    // Email
    if (!email.value.trim()) {
      prikaziGresku(email, "Email je obavezan.");
      validno = false;
    } else if (!emailRegex.test(email.value.trim())) {
      prikaziGresku(email, "Unesite ispravan email.");
      validno = false;
    }

    // Poruka
    if (!poruka.value.trim()) {
      prikaziGresku(poruka, "Poruka ne može biti prazna.");
      validno = false;
    }

    return validno;
  }

  function prikaziGresku(input, poruka) {
    const span = document.createElement("span");
    span.classList.add("greska");
    span.style.color = "red";
    span.style.fontSize = "14px";
    span.textContent = poruka;
    input.insertAdjacentElement("afterend", span);
  }

  forma.addEventListener("submit", (e) => {
    e.preventDefault(); // ne šalje formu na server

    if (validacija()) {
      modal.style.display = "flex"; // prikazujemo modal
      forma.reset(); // resetujemo formu
    }
  });

  // Zatvori modal kada se klikne na dugme
  zatvoriBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Zatvori modal ako se klikne van box-a
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  // Smooth scroll za sve interne linkove sa #
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1); // npr. 'kontakt'
      const targetEl = document.getElementById(targetId);

      if (currentPage === "Pocetna.html" || currentPage === "Kontakt.html") {
        // Ako smo na početnoj i postoji sekcija
        if (targetEl) {
          targetEl.scrollIntoView({
            behavior: "smooth"
          });
        }
      } else {
        // Ako nismo na početnoj, prebaci na početnu + #sekcija
        window.location.href = `/stranice/Pocetna.html#${targetId}`;
      }
    });
  });

  // LOGO posebno
  const logo = document.querySelector(".logo a");
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();

      if (currentPage === "Pocetna.html" || currentPage === "Kontakt.html") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        window.location.href = "/stranice/Pocetna.html";
      }
    });
  }
  
});
