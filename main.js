
function logar() {

    const user = document.querySelector('#data_user').value
    const pass = document.querySelector('#data_pass').value
    const err = "* Erro: Verifique os dados e tente novamente"


    if (user == 'admin' && pass == 'admin') {
        location.href = "Menu/home.html"
    }
    setInterval(user_not_auth, 300);
    function user_not_auth() {
        document.querySelector('#msg_error').innerHTML = err
    }




}


