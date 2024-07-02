
function DodajProdukt() {
    var table = document.getElementById("TabelaProduktow");
    var lastRow = table.rows.length;
    var row = table.insertRow(lastRow);
    var i = lastRow;

    row.setAttribute("class", "wiersz" + i);
    var el = document.createElement("td");


    //kolumna 0
    cell = row.insertCell(0);
    var el = document.createElement("img");
    cell.setAttribute("class", "rowItem");
    el.src="https://picsum.photos/100/100"
    cell.appendChild(el);


    //kolumna 1
    cell = row.insertCell(1);
    var el = document.createElement("p");
    var nazwa = document.getElementById("nazwa").value;
    el.innerHTML = nazwa;
    cell.setAttribute("class", "rowItem");
    cell.appendChild(el);
    el.setAttribute("class", "nazwa");
    document.getElementById("nazwa").value = "";

    //kolumna 2
    cell = row.insertCell(2);
    var el = document.createElement("p");
    var producent = document.getElementById("producent").value;
    el.innerHTML = producent;
    cell.setAttribute("class", "rowItem");
    cell.appendChild(el);
    el.setAttribute("class", "producent");
    document.getElementById("producent").value = "";

    //kolumna3
    cell = row.insertCell(3);
    var el = document.createElement("p");
    var cena = document.getElementById("cena").value;
    el.innerHTML = cena;
    cell.setAttribute("class", "rowItem");
    cell.appendChild(el);
    el.setAttribute("class", "cena");
    document.getElementById("cena").value = "";


    //kolumna 4
    cell = row.insertCell(4);
    var el = document.createElement("p");
    var ilosc = document.getElementById("ilosc").value;
    el.innerHTML = ilosc;
    cell.setAttribute("class", "rowItem");
    cell.appendChild(el);
    el.setAttribute("class", "ilosc");
    document.getElementById("ilosc").value = "";


    //kolumna 5
    cell = row.insertCell(5);
    var el = document.createElement("p");
    var opis = document.getElementById("opis").value;
    el.innerHTML = opis;
    cell.setAttribute("class", "rowItem");
    cell.appendChild(el);
    el.setAttribute("class", "opis");
    document.getElementById("opis").value = "";


    //kolumna 6
    cell = row.insertCell(6);
    var el = document.createElement("input");
    el.type = "checkbox";
    el.setAttribute("class", " kup" + i);
    cell.setAttribute("class","rowItem");
    cell.appendChild(el);


    //kolumna 7
    cell = row.insertCell(7);
    var el = document.createElement("input");
    el.type = "button";
    el.value = "Usuń";
    el.setAttribute("class", "przyciskUsun");
    el.onclick = usun;
    cell.appendChild(el);

    //kolumna 8
    cell = row.insertCell(8);
    var el = document.createElement("input");
    el.type = "button";
    el.value = "Edytuj";
    el.setAttribute("class", "przyciskEdytuj");
    el.onclick = edit;
    cell.appendChild(el);

    //kolumna 9
    cell = row.insertCell(9);
    var el = document.createElement("input");
    el.type = "button";
    el.value = "Zapisz";
    el.style.display = "none";
    el.setAttribute("class", "przyciskZapisz");
    el.onclick = zapisz;
    cell.appendChild(el);

  }

  function usun() {
    var rodzic = this.parentNode;
    var dziadek = rodzic.parentNode;
    var pradziadek = dziadek.parentNode;
    pradziadek.removeChild(dziadek);
  }

  function edit() {
    var rodzic = this.parentNode;
    var dziadek = rodzic.parentNode;

    //1
    var miejsce = dziadek.children[1];
    var nazwaEdit = dziadek.querySelector(".nazwa").innerHTML;
    var el = document.createElement("input");
    el.type = "text";
    el.id = "nazwa";
    el.setAttribute("class", "form-control");
    el.value = nazwaEdit;

    miejsce.replaceChild(el, dziadek.querySelector(".nazwa"));

    //2
    var miejsce = dziadek.children[2];
    var producentEdit = dziadek.querySelector(".producent").innerHTML;
    var el = document.createElement("input");
    el.type = "text";
    el.id = "producent";
    el.setAttribute("class", "form-control");
    el.value = producentEdit;

    miejsce.replaceChild(el, dziadek.querySelector(".producent"));

    //3

    var miejsce = dziadek.children[3];
    var cenaEdit = dziadek.querySelector(".cena").innerHTML;
    var el = document.createElement("input");
    el.type = "number";
    el.id = "cena";
    el.setAttribute("class", "form-control");
    el.value = cenaEdit;
    miejsce.replaceChild(el, dziadek.querySelector(".cena"));

    //4

    var miejsce = dziadek.children[4];
    var iloscEdit = dziadek.querySelector(".ilosc").innerHTML;
    var el = document.createElement("input");
    el.type = "number";
    el.id = "ilosc";
    el.setAttribute("class", "form-control");
    el.value = iloscEdit;

    miejsce.replaceChild(el, dziadek.querySelector(".ilosc"));

    //5
    var miejsce = dziadek.children[5];
    var opisEdit = dziadek.querySelector(".opis").innerHTML;
    var el = document.createElement("input");
    el.type = "text";
    el.id = "opis";
    el.setAttribute("class", "form-control");
    el.value = opisEdit;

    miejsce.replaceChild(el, dziadek.querySelector(".opis"));

    var el = dziadek.querySelector(".przyciskZapisz");
    el.style.display = "inline";

  }

  function zapisz() {
    var rodzic = this.parentNode;
    var dziadek = rodzic.parentNode;


    //1
    var miejsce = dziadek.children[1];
    var nazwaEdit = dziadek.querySelector("#nazwa").value;
    var el = document.createElement("p");
    el.innerHTML = nazwaEdit;
    el.setAttribute("class", "nazwa");
    miejsce.replaceChild(el, dziadek.querySelector("#nazwa"));


    //2
    var miejsce = dziadek.children[2];
    var producentEdit = dziadek.querySelector("#producent").value;
    var el = document.createElement("p");
    el.innerHTML = producentEdit;
    el.setAttribute("class", "producent");
    miejsce.replaceChild(el, dziadek.querySelector("#producent"));

    //3
    var miejsce = dziadek.children[3];
    var cenaEdit = dziadek.querySelector("#cena").value;
    var el = document.createElement("p");
    el.innerHTML = cenaEdit;
    el.setAttribute("class", "cena");
    miejsce.replaceChild(el, dziadek.querySelector("#cena"));

    //4
    var miejsce = dziadek.children[4];
    var iloscEdit = dziadek.querySelector("#ilosc").value;
    var el = document.createElement("p");
    el.innerHTML = iloscEdit;
    el.setAttribute("class", "ilosc");
    miejsce.replaceChild(el, dziadek.querySelector("#ilosc"));

    //5
    var miejsce = dziadek.children[5];
    var opisEdit = dziadek.querySelector("#opis").value;
    var el = document.createElement("p");
    el.innerHTML = opisEdit;
    el.setAttribute("class", "opis");
    miejsce.replaceChild(el, dziadek.querySelector("#opis"));

    var el = dziadek.querySelector(".przyciskZapisz");
    el.style.display = "none";

  }

  function sumowanie() {

    var z = document.getElementById("TabelaProduktow");
    var y = z.querySelectorAll("tr");
    var dl = y.length - 1;
    var i;
    var suma = 0;
    var raz = 0;
    for (i = 1; i <= dl; i++) {
      var rodzic = y[i].childNodes[6];
      var czek = rodzic.querySelector("input");
      if (czek.checked) {
        var cenat = y[i].childNodes[3];
        var cenaodp = parseFloat(cenat.querySelector("p").innerHTML);
        var ilosct = y[i].childNodes[4];
        var iloscodp = parseFloat(ilosct.querySelector("p").innerHTML);
        raz = cenaodp * iloscodp;
        suma += raz;
        
      }
    }

    alert("Do zapłaty: " + suma + "zł");
  }