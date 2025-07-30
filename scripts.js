//Cotação

const USD_PRICE = 5.5;
const EUR_PRICE = 6.5;
const GBP_PRICE = 7.5;

const from = DocumentTimeline.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit (enviar) do formulario
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD_PRICE, "$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR_PRICE, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP_PRICE, "£");
  }
};

//Função para converter a moeda
function convertCurrency(amount, price, symbol) {}
