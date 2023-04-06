import styles from './Pessoa.module.css'
function Pessoa({foto, nome, idade, profissao}) {
    return(
        <div className={styles.boxPessoa}>
            <img src={foto}/>
            <div className={styles.status}>
                <h2>Nome: {nome}</h2>
                <p>Idade: {idade}</p>
                <p>Profissão: {profissao}</p>
            </div>

        </div>
    )
}

export default Pessoa