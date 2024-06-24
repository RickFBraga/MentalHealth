let users = [];

window.onload = function () {
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  if (storedUsers) {
    users = storedUsers;
  }

  const user = users[users.length - 1]; 
  if (user) {
    preencherDados(user);
  }
};

function preencherDados(user) {
  document.getElementById("nome-usuario").textContent = user.nome;
  document.getElementById("senha-usuario").textContent = user.senha;
  document.getElementById("email-usuario").textContent = user.email;
}

function cadastrar() {
  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;
  const email = document.getElementById("email").value;

  if (nome && senha && email) {
    const user = {
      nome: nome,
      senha: senha,
      email: email,
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("nome").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("email").value = "";
    alert("Usuário cadastrado com sucesso!");

    window.location.href = "/home/index.html";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function login() {
  const email = document.getElementById("login-email").value;
  const senha = document.getElementById("login-senha").value;

  const storedUsers = JSON.parse(localStorage.getItem("users"));

  if (storedUsers) {
    const user = storedUsers.find(
      (user) => user.email === email && user.senha === senha
    );

    if (user) {
      alert("Login realizado com sucesso!");
      window.location.href = "/home/index.html";
      preencherDados(user);
    } else {
      alert("Email ou senha incorretos.");
    }
  } else {
    alert("Nenhum usuário cadastrado.");
  }
}

function agendarConsulta() {
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const medico = document.getElementById("medico").value;

  if (data === "" || hora === "" || medico === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  } else {
    alert("Consulta Agendada!");
  }

  const novaConsulta = document.createElement("div");
  novaConsulta.classList.add("consultas");

  const consultaInfo = `
    <p>Data: ${formatarData(data)}</p>
    <p>Hora: ${hora}</p>
    <p>Médico: ${obterNomeMedico(medico)}</p>
  `;

  novaConsulta.innerHTML = consultaInfo;

  const consultasMarcadas = document.getElementById("consultas-marcadas");
  consultasMarcadas.appendChild(novaConsulta);

  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";
  document.getElementById("medico").value = "";
}

function formatarData(data) {
  const dataObj = new Date(data);
  const dia = dataObj.getDate().toString().padStart(2, "0");
  const mes = (dataObj.getMonth() + 1).toString().padStart(2, "0");
  const ano = dataObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function obterNomeMedico(medico) {
  switch (medico) {
    case "joao":
      return "Dr. João Silva";
    case "maria":
      return "Dra. Maria Souza";
    default:
      return "Médico não especificado";
  }
}
