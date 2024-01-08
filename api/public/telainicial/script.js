function redirect(rota) {
    location.href = rota;
  }
  
async function produtoCategoria(categoria) {
    try {
      const response = await fetch("/produtos");
      if (!response.ok) {
        throw new Error("Erro ao obter os produtos.");
      }
      const data = await response.json();
      const produtos = data.produtos.filter(produto => produto.categoria === categoria);
      const containerProdutos = document.getElementById("ps-container-prestadores");
      containerProdutos.innerHTML = ""; // Limpa o conteúdo anterior
  
      produtos.forEach(produto => {

        const container = document.createElement("div");
        container.className = "ps-container-prestadores";

        const link = document.createElement("div");
        link.className = "bloco-prestadores_1";     
              
        const image = document.createElement("img");
        image.className = "onibus";
        image.src = produto.imagem_produto ? produto.imagem_produto : "https://i.imgur.com/o0RXzf4.jpg";
        link.appendChild(image);
  
        const card = document.createElement("div");
        card.className = "prestadores-text";
  
        const texto = document.createElement("p");
        texto.innerText = produto.nome;
        card.appendChild(texto);

        const linkProduto = document.createElement("a");
        linkProduto.classList.add("produto-link")
        linkProduto.addEventListener("click", function(){
          redirect('/contratacao');
        });                                         //Redirecionar o produto para tela de contratação
        linkProduto.appendChild(texto);
        card.appendChild(linkProduto);
        
        const estrelas = document.createElement("p");
        estrelas.innerText = "⭐⭐⭐⭐⭐";
        card.appendChild(estrelas);
  
        const botao = document.createElement("button");
        botao.className = "adicionar-ao-carrinho-btn"
        botao.innerHTML = "Adicionar ao carrinho";
       
        const preco = document.createElement("p");
        preco.innerText = "R$ " + produto.preco;
        card.appendChild(preco);

        botao.addEventListener("click", function() {
          adicionarAoCarrinho(produto.id_produto);
        });
        card.appendChild(botao);
  
        link.appendChild(card);
        containerProdutos.appendChild(link);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  function adicionarAoCarrinho(produto_id) {
    try {
      let produtos = [];
      const produtosStr = localStorage.getItem('produtos');
      if (produtosStr) {
        produtos = JSON.parse(produtosStr);
      }
  
      const produtoExistente = produtos.find(produto => produto.id_produto === produto_id);
      if (produtoExistente) {
        produtoExistente.quantidade += 1;
      } else {
        produtos.push({ id_produto: produto_id, quantidade: 1 });
      }
  
      localStorage.setItem('produtos', JSON.stringify(produtos));
      console.log(JSON.parse(localStorage.getItem('produtos')));
  
      redirect('/carrinho');
      console.log(JSON.parse(localStorage.getItem('produtos')));
    } catch (error) {
      console.error(error);
    }
  }
  