document.addEventListener("DOMContentLoaded", function() {
    var entrarBtn = document.getElementById("entrarbtn");
    entrarBtn.addEventListener("click", function() {
      var email = document.getElementById("email").value;
      var senha = document.getElementById("senha").value;
      var credenciais = {
        email: email,
        senha: senha
      };
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/login");
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          // chamada da função redirect
          redirect();
        }
      };
      xhr.send(JSON.stringify(credenciais));
    });
  });
  
  function redirect() {
    window.location.href = "/home";
  }
  
  