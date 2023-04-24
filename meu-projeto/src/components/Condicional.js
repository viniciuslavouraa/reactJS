import {useState} from 'react'

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }
    
    function limparEmail(e) {
        e.preventDefault()
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre seu email:</h2>
            <form>
                <input type="email" name="email" id="email" placeholder='Digite seu e-mail' autoComplete='off' onChange={(e) => setEmail(e.target.value)}/>
            </form>
            <button type='submit' onClick={enviarEmail}>Enviar e-mail</button>
            {userEmail && (
                <div>
                    <p>o email do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )
            }
        </div>
    )
}

export default Condicional