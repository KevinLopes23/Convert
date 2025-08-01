# 💱 Convert - Conversor de Moedas

Um conversor de moedas simples e elegante que permite converter valores de moedas estrangeiras para Real Brasileiro (BRL).

![Convert Logo](./img/logo.svg)

## 🌟 Funcionalidades

- **Conversão de Moedas**: Converte USD, EUR e GBP para Real Brasileiro
- **Interface Intuitiva**: Design moderno com tema escuro
- **Validação de Entrada**: Aceita apenas valores numéricos
- **Exibição de Cotação**: Mostra a cotação atual da moeda selecionada
- **Tratamento de Erros**: Sistema robusto de tratamento de erros
- **Responsivo**: Interface adaptável para diferentes tamanhos de tela

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização moderna com design responsivo
- **JavaScript (Vanilla)**: Lógica de conversão e interação

## 💰 Moedas Suportadas

| Moeda           | Símbolo | Cotação Atual |
| --------------- | ------- | ------------- |
| Dólar Americano | USD ($) | R$ 5,50       |
| Euro            | EUR (€) | R$ 6,50       |
| Libra Esterlina | GBP (£) | R$ 7,50       |

## 🎨 Design

O projeto apresenta uma interface moderna com:

- **Paleta de Cores**: Tons de azul e roxo com tema escuro
- **Tipografia**: Fontes Inter e IBM Plex Mono para melhor legibilidade
- **Animações**: Transições suaves nos elementos interativos
- **Ícones SVG**: Elementos visuais otimizados

## 📁 Estrutura do Projeto

```
Convert/
├── img/
│   ├── bg.png          # Imagem de fundo
│   ├── check.svg       # Ícone de verificação
│   ├── chevron-down.svg # Ícone do dropdown
│   └── logo.svg        # Logo da aplicação
├── index.html          # Estrutura HTML
├── scripts.js          # Lógica JavaScript
├── styles.css          # Estilização CSS
└── README.md           # Documentação
```

## 🖥️ Como Usar

1. **Clone o repositório**:

   ```bash
   git clone <https://github.com/KevinLopes23/Convert>
   cd Convert
   ```

2. **Abra o arquivo index.html** no seu navegador preferido

3. **Utilize a aplicação**:
   - Digite o valor que deseja converter
   - Selecione a moeda de origem (USD, EUR ou GBP)
   - Clique em "Converter em reais"
   - Veja o resultado na seção que aparece abaixo

## ⚙️ Funcionalidades do Código

### Validação de Entrada

```javascript
// Remove caracteres não numéricos do input
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});
```

### Conversão de Moedas

```javascript
// Função principal de conversão
function convertCurrency(amount, price, symbol) {
  // Calcula o total e formata o resultado
  let total = amount * price;
  // Exibe cotação e resultado formatado
}
```

### Formatação de Moeda

```javascript
// Formata valores para o padrão brasileiro
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
```

## 🔧 Personalização

Para alterar as cotações das moedas, modifique as constantes no arquivo `scripts.js`:

```javascript
const USD_PRICE = 5.5; // Cotação do Dólar
const EUR_PRICE = 6.5; // Cotação do Euro
const GBP_PRICE = 7.5; // Cotação da Libra
```

## 📱 Responsividade

O projeto foi desenvolvido com design responsivo, adaptando-se a diferentes tamanhos de tela mantendo a usabilidade e estética.

## 🛠️ Melhorias Futuras

- [ ] Integração com API de cotações em tempo real
- [ ] Adicionar mais moedas
- [ ] Histórico de conversões
- [ ] Modo claro/escuro
- [ ] Calculadora de variação cambial
- [ ] Gráficos de cotação

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Fazer commit das suas mudanças
4. Fazer push para a branch
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ usando JavaScript Vanilla**
