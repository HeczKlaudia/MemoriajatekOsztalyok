$(function () {
  const szuloElem = $("article");
  const sablonElem = $(".kartya");
  const meret = 3;
  const kivalasztottKartyak = [];

  for (let i = 0; i < meret; i++) {
    for (let k = 0; k < 2; k++) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const kartya = new Kartya("kepek/kep" + (i + 1) + ".jpg", ujElem);
    }
  }

  sablonElem.remove();

  // itt tudjuk számolni, hogy hány kártya van felfordítva

  $(window).on("kartyaKattintas", (event) => {
    console.log(event.detail); // az aktuális kártya adata
    kivalasztottKartyak.push(event.detail);

    // akkor van 2 kártya felfordítva, ha a tömb hossza 2

    if (kivalasztottKartyak.length == 2) {
      if (kivalasztottKartyak[0].fajlnev == kivalasztottKartyak[1].fajlnev) {
        console.log("Egyforma, jár a taps!");
        // el kell tüntetni a kártyákat (Kartya.js)
        kivalasztottKartyak[0].eltuntet();
        kivalasztottKartyak[1].eltuntet();
        kivalasztottKartyak.splice(0, 2); // kivágja a tömbből a 2 elemet
      } else {
        console.log("Nem egyforma :(");
        setTimeout(function () {
          kivalasztottKartyak[0].atvalt();
          kivalasztottKartyak[1].atvalt();
          kivalasztottKartyak.splice(0, 2); // kivágja a tömbből a 2 elemet
        }, 1000);
      }
    }
  });
});
