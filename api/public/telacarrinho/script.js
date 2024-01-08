var numero = 0

function pegarCarrinho(categoria){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/produtos");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var carrinho = JSON.parse(xhr.responseText).produtos;
        // Recuperar produtos do localStorage e atualizar a quantidade no carrinho
        var produtosLocalStorage = JSON.parse(localStorage.getItem("produtos")) || [];
        carrinho = carrinho.filter(function(produto) {
          var produtoLocalStorage = produtosLocalStorage.find(function(item) {
            return item.id_produto === produto.id_produto;
          });
          if (produtoLocalStorage) {
            produto.quantidade = produtoLocalStorage.quantidade;
            return true;
          }
          return false;
        });

        var tabela = document.getElementById("tabela");
        tabela.innerHTML = "";
        var subtotal = 0;
        carrinho=carrinho.filter(produto=>JSON.parse(localStorage.getItem("produtos")).some(produto2=>produto.id_produto==produto2.id_produto))
        carrinho=carrinho.map(produto=>{
            produto.quantidade=JSON.parse(localStorage.getItem("produtos")).find(produto2=>produto.id_produto==produto2.id_produto).quantidade
            return produto
        })
        console.log(carrinho)
        carrinho.forEach(function(produto, categoria) {
          var linha = document.createElement("tr");
          var descricao = document.createElement("td");
          var imagem = document.createElement("img");
          imagem.src = produto.imagem;
          imagem.alt = produto.descricao;
          imagem.style.maxWidth = "100px";
          descricao.appendChild(imagem);
          var info = document.createElement("div");
          info.className = "info";
          var nome = document.createElement("div");
          nome.className = "name";
          nome.textContent = produto.descricao;
          info.appendChild(nome);
          var categoria = document.createElement("div");
          categoria.className = "categoria";
          categoria.textContent = produto.categoria;
          info.appendChild(categoria);
          descricao.appendChild(info);
          linha.appendChild(descricao);
          var quantidade = document.createElement("td");
          quantidade.innerHTML = '<div class="qty"><button onclick="qntDiminuir('+produto.id_produto+')"><i class="material-symbols-outlined">expand_more</i></button><span class="quantidade" data-id="' + produto.id + '">' + produto.quantidade + '</span><button onclick="qntAumentar('+produto.id_produto+')"><i class="material-symbols-outlined">expand_less</i></button></div>';
          linha.appendChild(quantidade);
          var preco = document.createElement("td");
          preco.textContent = "R$ " + produto.preco.toFixed(2);
          linha.appendChild(preco);
          var subtotal_produto = produto.quantidade * produto.preco;
          subtotal += subtotal_produto;
          var subtotal_td = document.createElement("td");
          subtotal_td.textContent = "R$ " + subtotal_produto.toFixed(2);
          linha.appendChild(subtotal_td);
          var botao_remover = document.createElement("td");
          botao_remover.innerHTML = '<button onclick="removerProduto('+produto.id_produto+')"><i class="material-symbols-outlined" id="delete1">cancel</i></button>';
          linha.appendChild(botao_remover);
          tabela.appendChild(linha);
        });
        var linha_subtotal = document.createElement("tr");
        var td_vazia = document.createElement("td");
        td_vazia.colSpan = "3";
        linha_subtotal.appendChild(td_vazia);
        var subtotal_label = document.createElement("td");
        subtotal_label.textContent = "Subtotal";
        linha_subtotal.appendChild(subtotal_label);
        var subtotal_td_final = document.createElement("td");
        subtotal_td_final.textContent = "R$ " + subtotal.toFixed(2);
        linha_subtotal.appendChild(subtotal_td_final);
        tabela.appendChild(linha_subtotal);
      }
    };
    xhr.send();
  }

  function qntAumentar(produto_id) {
    var produtosLocalStorage = JSON.parse(localStorage.getItem("produtos")) || [];
    var produtoLocalStorage = produtosLocalStorage.find(function(produto) {
      return produto.id_produto === produto_id;
    });
    if (produtoLocalStorage) {
      produtoLocalStorage.quantidade++;
      localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));
    }
    pegarCarrinho();
  }
  
  function qntDiminuir(produto_id) {
    var produtosLocalStorage = JSON.parse(localStorage.getItem("produtos")) || [];
    var produtoLocalStorage = produtosLocalStorage.find(function(produto) {
      return produto.id_produto === produto_id;
    });
    if (produtoLocalStorage && produtoLocalStorage.quantidade > 0) {
      produtoLocalStorage.quantidade--;
      localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));
    }
    pegarCarrinho();
  }

  function removerProduto(produto_id) {
    var produtosLocalStorage = JSON.parse(localStorage.getItem("produtos")) || [];
    var index = produtosLocalStorage.findIndex(function(produto) {
      return produto.id_produto === produto_id;
    });
    if (index !== -1) {
      produtosLocalStorage.splice(index, 1);
      localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));
    }
    pegarCarrinho();
  }
  

function mostrarNaTela(){
    const div = document.querySelector("#produto1")
    div.innerHTML = numero
}

mostrarNaTela()

function mostrarNaTela1(){
    const div = document.querySelector("#produto2")
    div.innerHTML = numero1
}

mostrarNaTela1()

// Função para redirecionar para a tela de pagamento
function irParaPagamento() {
  window.location.href = 'telapagamento.html';
}

function enviarCarrinhoParaPagamento() {
  var descricao1 = document.querySelector("#conteiner-d table tr:nth-child(2) td:nth-child(1)").textContent.trim();
  var quantidade1 = parseInt(document.querySelector("#conteiner-d table tr:nth-child(2) td:nth-child(2)").textContent.trim());
  var preco1 = document.querySelector("#conteiner-d table tr:nth-child(2) td:nth-child(3)").textContent.trim().split("R$")[1].trim();
  var subtotal1 = document.querySelector("#conteiner-d table tr:nth-child(2) td:nth-child(4)").textContent.trim().split("R$")[1].trim();

  var subtotal = document.querySelector("#conteiner-g h5#valor-total").textContent.trim().split("R$")[1].trim();

  var carrinho = {
    itens: [
      {
        descricao: descricao1,
        quantidade: quantidade1,
        preco: preco1,
        subtotal: subtotal1
      }
    ],
    subtotal: subtotal
  };

  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  window.location.href = 'pagamento/telapagamento.html';
}

function Pagamento(categoria){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/produtos");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var carrinho = JSON.parse(xhr.responseText).produtos;
      // Recuperar produtos do localStorage e atualizar a quantidade no carrinho
      var produtosLocalStorage = JSON.parse(localStorage.getItem("produtos")) || [];
      carrinho = carrinho.filter(function(produto) {
        var produtoLocalStorage = produtosLocalStorage.find(function(item) {
          return item.id_produto === produto.id_produto;
        });
        if (produtoLocalStorage) {
          produto.quantidade = produtoLocalStorage.quantidade;
          return true;
        }
        return false;
      });

      var tabela = document.getElementById("tabela");
      tabela.innerHTML = "";
      var subtotal = 0;
      carrinho=carrinho.filter(produto=>JSON.parse(localStorage.getItem("produtos")).some(produto2=>produto.id_produto==produto2.id_produto))
      carrinho=carrinho.map(produto=>{
          produto.quantidade=JSON.parse(localStorage.getItem("produtos")).find(produto2=>produto.id_produto==produto2.id_produto).quantidade
          return produto
      })
      console.log(carrinho)
      carrinho.forEach(function(produto, categoria) {
        
        var container = document.createElement("div");
        container.className = "conteiner-d";
        
        var tabela = document.createElement("table");

        var thead = document.createElement("thead")
        tabela.appendChild(thead)
        var linha = document.createElement("tr");
        thead.appendChild(linha);

        var th = document.createElement("th");
        th.textContent = "Produto";
        th.classList.add("produto");
        linha.appendChild(th);
    
        var preco = document.createElement("th");
        preco.textContent = "R$ " + produto.preco.toFixed(2);
        linha.appendChild(preco);
        var subtotal_produto = produto.quantidade * produto.preco;
        subtotal += subtotal_produto;
        var subtotal_td = document.createElement("td");
        subtotal_td.textContent = "R$ " + subtotal_produto.toFixed(2);
        linha.appendChild(subtotal_td);
      });
      var linha_subtotal = document.createElement("tr");
      var td_vazia = document.createElement("td");
      td_vazia.colSpan = "3";
      linha_subtotal.appendChild(td_vazia);
      var subtotal_label = document.createElement("td");
      subtotal_label.textContent = "Subtotal";
      subtotal_label.classaddList("preco");
      linha_subtotal.appendChild(subtotal_label);
      var subtotal_td_final = document.createElement("td");
      subtotal_td_final.textContent = "R$ " + subtotal.toFixed(2);
      linha_subtotal.appendChild(subtotal_td_final);
      tabela.appendChild(linha_subtotal);
    }
  };
  xhr.send();
}