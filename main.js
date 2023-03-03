// Lista de Usuários
const login = [
    { user: "dani", pass: "12" },
    { user: "ana", pass: "12" },
    { user: "carlos", pass: "12" }
]

// Variáveis: Botão de Enviar Formulário e Mensagem de Erro
const input = document.querySelector('#submit')
const err = "* Erro: Verifique os dados e tente novamente"

// Validação Do Usuário
input.onclick = () => {
    // Recebe o Valor do Input Usuário/Senha
    const user = document.querySelector('#data_user').value
    const pass = document.querySelector('#data_pass').value

    // Variável: Informa Número de Vezes Que o While Rodou
    var i = 0

    // Loop
    while (i <= login.length) {

        // Validação: Se Estiver Correto
        if (user == login[i].user && pass == login[i].pass) {
            location.href = "Menu/home.html"
        }
        i = i + 1
        // Validação: Se Estiver Incorreto
        setInterval(user_not_auth, 300)

        // Declaração da Função
        function user_not_auth() {
            document.querySelector('#msg_error').innerHTML = err
        }
    }

}













