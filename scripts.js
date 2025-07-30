//Cotação

const USD_PRICE = 5.5;
const EUR_PRICE = 6.5;
const GBP_PRICE = 7.5;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

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
function convertCurrency(amount, price, symbol) {
  try {
    // Exbindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    //Calcula o total
    let total = amount * price;

    //Exibe o resultado total
    result.textContent = total;

    //Aplica a classe que exibe o footer com o resultado
    footer.classList.add("show-result");
  } catch (error) {
    //Remove a classe do footer ocultando ele da tela
    footer.classList.remove("show-result");
    console.log(error);
    alert("Não foi possivel converter. Tente novamente mais tarde.");
  }
}

// Formata a moeda em Real brasileiro
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
