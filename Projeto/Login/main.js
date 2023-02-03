
function logar() {

    const user = document.querySelector('#data_user').value
    const pass = document.querySelector('#data_pass').value
    const err = "* Erro: Verifique os dados e tente novamente"


    if (user == 'admin' && pass == 'admin') {
        location.href = "../Menu/home.html"
    }
    document.querySelector('#msg_error').innerHTML = err


}


