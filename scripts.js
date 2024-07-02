let convertButton = document.querySelector(".convert-button");
let currencySelect = document.querySelector(".currency-select");
let currencySelect02 = document.querySelector(".select-converted");

function convertValues() {
  let inputValue = document.querySelector(".input-value").value;
  let currencyValue = document.querySelector(".currency-value");
  let currencyValue02 = document.querySelector(".currency-value-02");

  let dolarToday = 5.2;
  let euroToday = 6.1;
  let libraToday = 7;
  let bitcoinToday = 344.02;

  console.log(currencySelect02.value);

  // *SELECT 01 CONVERTER DE //*

  if (currencySelect.value == "real") {
    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue);
  }
  if (currencySelect.value == "dolar") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue);
  }

  if (currencySelect.value == "euro") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue);
  }

  if (currencySelect.value == "libra") {
    currencyValue.innerHTML = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue);
  }

  // *SELECT 02 CONVERTER PARA //*

  if (currencySelect02.value == "dolar") {
    currencyValue02.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolarToday);
  }

  if (currencySelect02.value == "euro") {
    currencyValue02.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroToday);
  }

  if (currencySelect02.value == "libra") {
    currencyValue02.innerHTML = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / libraToday);
  }

  if (currencySelect02.value == "bitcoin") {
    currencyValue02.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue / bitcoinToday);
  }
}

function currencyChange() {
  let currencyName = document.getElementById("currency-name");
  let currencyName02 = document.getElementById("currency-name02");
  let currencyImage = document.querySelector(".currency-img");
  let currencyImg = document.querySelector(".bandeiras");

  // *SELECT 01 CONVERTER DE //*

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./assets/Brasil.png";
  }

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/Dólar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/Euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/Libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/Bitcoin.png";
  }

  // *SELECT 02 CONVERTER PARA //*

  if (currencySelect02.value == "real") {
    currencyName02.innerHTML = "Real";
    currencyImg.src = "./assets/Brasil.png";
  }

  if (currencySelect02.value == "dolar") {
    currencyName02.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/Dólar.png";
  }

  if (currencySelect02.value == "euro") {
    currencyName02.innerHTML = "Euro";
    currencyImg.src = "./assets/Euro.png";
  }

  if (currencySelect02.value == "libra") {
    currencyName02.innerHTML = "Libra";
    currencyImg.src = "./assets/Libra.png";
  }

  if (currencySelect02.value == "bitcoin") {
    currencyName02.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/Bitcoin.png";
  }

  convertValues();

  console.log(currencySelect02.value);
}
currencySelect02.addEventListener("change", currencyChange);
currencySelect.addEventListener("change", currencyChange);
convertButton.addEventListener("click", convertValues);
