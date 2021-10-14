class Kartya {
  constructor(fajlnev, elem) {
    this.elem = elem; // aktuális div elem
    this.fajlnev = fajlnev;
    //console.log(this.fajlnev);
    // az img elem, akkor elem.attr("src", fajlnev)
    this.kepElem = elem.children("img");
    // az aktuális div elemünk képeleme//
    this.allapot = false; // kezdetben a háttere látszik
    this.hatter = "kepek/hatter.jpg";

    this.setLap();
    this.elem.on("click", () => {
      // functionnal nem működik, csak a nyillal
      //console.log(this);
      this.atvalt();
      this.KattintasTrigger();
    });
  }

  atvalt() {
    this.allapot = !this.allapot;
    this.setLap();
  }

  setLap() {
    if (this.allapot) {
      this.kepElem.attr("src", this.fajlnev);
    } else {
      this.kepElem.attr("src", this.hatter);
    }
  }

  KattintasTrigger() {
    //let esemeny = new Event("kartyaKattintas");
    let esemeny = new CustomEvent("kartyaKattintas", { detail: this });
    // úgy hozzuk létre az eseményt, hogy azt is megmondjuk, melyik objektum váltotta ki
    console.log("esekény kiváltása");
    window.dispatchEvent(esemeny); // a főablakból is elérjük az eseményt
  }

  eltuntet() {
    this.elem.css("visibility", "hidden");
  }
}
