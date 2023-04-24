import Button from "./evento/Button"
function Evento() {
    function meuEvento() {
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento() {
        console.log(`Ativando segundo evento!`)
    }

    function calculo() {
        const n1 = Math.floor(Math.random() * 10)
        const n2 = Math.floor(Math.random() * 10)
        console.log(`${n1} + ${n2} = ${n1 + n2}`)
    }

    return(
        <div>
            <p>Clique para ativar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            <Button event={calculo} text="Calculando"/>
        </div>
    )

}

export default Evento