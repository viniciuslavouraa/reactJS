
function Form() {
    let nomesCadastrados = {}
    function cadastrarUsuario(e) {
        e.preventDefault()
        let nome = document.querySelector('#nome')
        console.log(`${nome.value} Cadastrado`)
    }
    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" id="nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" ></input>
                </div>
            </form>
        </div>
    )
}

export default Form