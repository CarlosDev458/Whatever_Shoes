const login = [
    { user: "dani", pass: "12" },
    { user: "ana", pass: "12" },
    { user: "carlos", pass: "12" }
]
const input = document.querySelector('#submit')
const err = "* Erro: Verifique os dados e tente novamente"

input.onclick = () => {
    const user = document.querySelector('#data_user').value
    const pass = document.querySelector('#data_pass').value
    var i = 0

    while (i <= login.length) {

        if (user == login[i].user && pass == login[i].pass) {
            location.href = "Menu/home.html"
        }
        i = i + 1
        setInterval(user_not_auth,300)
    }

    

    function user_not_auth() {
        document.querySelector('#msg_error').innerHTML = err
    }
}












