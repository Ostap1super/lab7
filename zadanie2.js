function usunWodez(lista, indeks) {
  if (indeks === 1) {
    lista = lista.nastepny;
  } else {
    let aktualny = lista;
    let poprzedni = null;
    let licznik = 1;

    while (aktualny && licznik < indeks) {
      poprzedni = aktualny;
      aktualny = aktualny.nastepny;
      licznik++;
    }

    if (aktualny) {
      poprzedni.nastepny = aktualny.nastepny;
    } else {
      console.log("Błąd: Węzeł o podanym indeksie nie istnieje.");
    }
  }

  return lista;
}


class Wezel {
  constructor(wartosc) {
    this.wartosc = wartosc;
    this.nastepny = null;
  }
}

const lista = new Wezel(1);
lista.nastepny = new Wezel(2);
lista.nastepny.nastepny = new Wezel(3);
lista.nastepny.nastepny.nastepny = new Wezel(4);

console.log("Przed usunięciem:");
console.log(lista);

const indeksDoUsuniecia = 2;
const zaktualizowanaLista = usunWodez(lista, indeksDoUsuniecia);

console.log("Po usunięciu:");
console.log(zaktualizowanaLista);
