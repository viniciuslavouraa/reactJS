import {useState} from 'react'
import styles from './Forms.module.css'
function Form() {
    let nomesCadastrados = {}
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`O usuario:${name} se cadastrou com a senha:${senha}`)
        console.log('Cadastrou o usuário')
    }

    const [name, setName] = useState()
    const [senha, setSenha] = useState()

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario} className={styles.boxLogin} >
                <div className={styles.boxName}>
                    <label htmlFor="name">Nome: </label>
                    <input 
                        type="text"
                        placeholder="Digite seu nome" 
                        autoComplete='off'
                        id="name"
                        onChange={(e) => setName(e
                        .target.value)}
                     >
                     </input>
                </div>
                <div className={styles.boxSenha}>
                    <label htmlFor="senha">Senha: </label>
                    <input 
                        type="password" 
                        placeholder="Digite sua senha" 
                        id="senha"
                        onChange={(e) => setSenha(e.target.value)}
                    ></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form