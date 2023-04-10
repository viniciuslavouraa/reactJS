function Evento({numero}) {
    function MeuEvento() {
        console.log(`Opa, fui ativado ! ${numero}`)
    }
    return(
        <div>
            <p>Clique para ativar um evento</p>
            <button onClick={MeuEvento}>Ativar</button>
        </div>
    )

}

export default Evento