document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Dugmad
    const dugmeTamni = document.getElementById('upali-rezim');
    const dugmeVece = document.getElementById('dugme-vece-slova');
    const dugmeManje = document.getElementById('dugme-manje-slova');

    const dugmeTamniMobilni = document.getElementById('upali-rezim-mobilni');
    const dugmeVeceMobilni = document.getElementById('dugme-vece-slova-mobilni');
    const dugmeManjeMobilni = document.getElementById('dugme-manje-slova-mobilni');

    // --- DARK MODE ---
    // Load saved mode
    if(localStorage.getItem('mode') === 'tamni'){
        body.classList.add('tamni-rezim');
    }

    dugmeTamni.addEventListener('click', () => {
        body.classList.toggle('tamni-rezim');
        if(body.classList.contains('tamni-rezim')){
            localStorage.setItem('mode', 'tamni');
        } else {
            localStorage.setItem('mode', 'svetli');
        }
    });

    dugmeTamniMobilni.addEventListener('click', () => {
        body.classList.toggle('tamni-rezim');
        if(body.classList.contains('tamni-rezim')){
            localStorage.setItem('mode', 'tamni');
        } else {
            localStorage.setItem('mode', 'svetli');
        }
    });
    // --- FONT SIZE ---
    // Load saved font
    let savedFont = localStorage.getItem('fontSize');
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
    
    const burger = document.getElementById("burger-dugme");
    const meni = document.getElementById("mobilni-meni");
    const zatvori = document.getElementById("zatvori-dugme");

    burger.addEventListener("click", () => {
      meni.classList.toggle("hidden");
    });

    zatvori.addEventListener("click", () => {
      meni.classList.add("hidden");
    });
})

