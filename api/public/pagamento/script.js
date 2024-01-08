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
          var preco = document.createElement("td");
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
        linha_subtotal.appendChild(subtotal_label);
        var subtotal_td_final = document.createElement("td");
        subtotal_td_final.textContent = "R$ " + subtotal.toFixed(2);
        linha_subtotal.appendChild(subtotal_td_final);
        tabela.appendChild(linha_subtotal);
      }
    };
    xhr.send();
  }

  function exibirItensCarrinho() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/produtos");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var carrinho = JSON.parse(xhr.responseText).produtos;
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

      carrinho.forEach(function(produto) {
        var linha = document.createElement("tr");
        var descricao = document.createElement("td");
    
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

        var preco = document.createElement("td");
        preco.textContent = "R$ " + produto.preco.toFixed(2);
        linha.appendChild(preco);

        var subtotal_produto = produto.quantidade * produto.preco;
        subtotal += subtotal_produto;
        var subtotal_td = document.createElement("td");
        subtotal_td.textContent = "R$ " + subtotal_produto.toFixed(2);
        linha.appendChild(subtotal_td);

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
