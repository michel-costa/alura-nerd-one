// script.js

// Função para adicionar um produto
function adicionarProduto(nome, valor, imagem) {
  var card = document.createElement("div");
  card.className = "card-produto";

  var img = document.createElement("img");
  img.src = imagem;
  card.appendChild(img);

  var h3 = document.createElement("h3");
  h3.textContent = nome;
  card.appendChild(h3);

  var div = document.createElement("div");
  div.className = "preco-botao";

  var preco = document.createElement("span");
  preco.className = "preco";
  preco.textContent = "R$ " + valor;
  div.appendChild(preco);

  var botao = document.createElement("button");
  botao.innerHTML =
    '<img src="/src/assets/icones/lixo.png" alt="Excluir" class="icone-lixeira">';
  botao.addEventListener("click", function () {
    card.remove();
  });
  div.appendChild(botao);

  card.appendChild(div);
  document.getElementById("container-produtos").appendChild(card);
}

// Função para validar o nome do produto
function validarNomeProduto(nome) {
  if (!nome) {
    alert("Por favor, insira o nome do produto.");
    return false;
  }
  return true;
}

// Função para validar o valor do produto
function validarValorProduto(valor) {
  if (!valor) {
    alert("Por favor, insira o valor do produto.");
    return false;
  }
  return true;
}

// Função para validar a URL da imagem do produto
function validarImagemProduto(imagem) {
  if (!imagem) {
    alert("Por favor, insira a URL da imagem do produto.");
    return false;
  }
  return true;
}

// Este código é executado quando a página é carregada
window.onload = function () {
  // Lista inicial de produtos
  var produtos = [
    {
      nome: "Tapete Decorativo",
      imagem: "/src/assets/cards/tap1.png",
      valor: "100,00",
    },
    {
      nome: "Almofada Simpsons",
      imagem: "/src/assets/cards/simp.png",
      valor: "120,00",
    },
    {
      nome: "Almofada mr Satan",
      imagem: "/src/assets/cards/mr_satan.png",
      valor: "115,00",
    },
    {
      nome: "Lumi Homem de Ferro",
      imagem: "/src/assets/cards/homem_de_ferro.png",
      valor: "200,00",
    },
    {
      nome: "Kit Porta Chaves",
      imagem: "/src/assets/cards/porta_chaves.png",
      valor: "70,00",
    },
    {
      nome: "Kit Pipoca Homem Aranha",
      imagem: "/src/assets/cards/kit-pipoca.png",
      valor: "150,00",
    },
    {
      nome: "Funko Baby Yoda",
      imagem: "/src/assets/cards/baby_yoda.png",
      valor: "90,00",
    },
    {
      nome: "Funko Donatello",
      imagem: "/src/assets/cards/donatello.png",
      valor: "90,00",
    },
    {
      nome: "Placa Decorativa",
      imagem: "/src/assets/cards/placa_decorativa.png",
      valor: "80,00",
    },
    {
        nome: "Camisa Deadpool",
        imagem: "/src/assets/cards/deadpool.png",
        valor: "80,00",
      },
      {
        nome: "Camisa X-Men",
        imagem: "/src/assets/cards/x-men.png",
        valor: "80,00",
      },
      {
        nome: "HQ Wolverine",
        imagem: "/src/assets/cards/wolverine.png",
        valor: "40,00",
      },
    // Adicione mais produtos aqui
  ];

  // Adicione cada produto ao container de produtos
  produtos.forEach(function (produto) {
    adicionarProduto(produto.nome, produto.valor, produto.imagem);
  });

  // Evento de envio do formulário
  document
    .getElementById("form-produto")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var nome = document.getElementById("nome-produto").value;
      var valor = document.getElementById("valor-produto").value;
      var imagem = document.getElementById("imagem-produto").value;

      if (
        validarNomeProduto(nome) &&
        validarValorProduto(valor) &&
        validarImagemProduto(imagem)
      ) {
        adicionarProduto(nome, valor, imagem);
        document.getElementById("form-produto").reset();
      }
    });
};
